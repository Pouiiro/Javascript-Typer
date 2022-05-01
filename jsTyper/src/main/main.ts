/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */

import path from 'path'
import { app, BrowserWindow, shell, ipcMain, dialog } from 'electron'
import { autoUpdater } from 'electron-updater'
import log from 'electron-log'
import MenuBuilder from './menu'
import { resolveHtmlPath } from './util'
import { morphProject } from './migr'
import { generateTs } from './generate'
import ProgressBar from 'electron-progressbar'
import { projectMigr } from './projectMigr'

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info'
    autoUpdater.logger = log
    autoUpdater.checkForUpdatesAndNotify()
  }
}

let mainWindow: BrowserWindow | null = null

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`
  console.log(msgTemplate(arg))
  event.reply('ipc-example', msgTemplate('pong'))
})

// Messages to display based on the migration state
const msgs = [
  'Creating project',
  'Generating AST for the code',
  'Starting the traversal',
  'Traversal case: Variables',
  'Determining the types',
  'Injecting types into variables',
  'Traversal case: Functions',
  'Injecting types to parameters and body',
  'Traversal case: If expressions',
  'Injecting types to body',
  'Finished all successfully',
]

let fileNum = {
  num: NaN,
  total: NaN,
}

const promiseDelay = (arg, progressBar, project, arg2?, arg3?) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project(arg, progressBar, fileNum, arg2, arg3))
    }, 1000)
  })
}

ipcMain.handle('openDirectory', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow!, {
    properties: ['openDirectory'],
  })
  if (canceled) {
    return 'None'
  } else {
    return filePaths[0]
  }
})

ipcMain.handle('migrator', (arg) => {
  let result: any = 'None'
  result = morphProject(arg)
  return result
})

ipcMain.handle('proMigrator', async (event, arg, arg2, arg3) => {
  let progressBar = new ProgressBar({
    abortOnError: false,
    indeterminate: false,
    closeOnComplete: true,
    title: 'JS-TYPER',
    text: 'Generating TS code',
    style: {
      text: {},
      detail: { transition: 'all 1s' },
      bar: {
        transition: 'all 1s',
        width: '100%',
        'background-color': '#282c34',
        color: 'red',
      },
      value: {},
    },
    browserWindow: {
      parent: undefined,
      modal: true,
      resizable: false,
      closable: true,
      minimizable: false,
      maximizable: false,
      width: 500,
      height: 170,
      // Important - If not passed, Progress Bar will not be displayed.
      webPreferences: {
        nodeIntegration: true,
        devTools: false,
      },
    },
  })

  progressBar
    .on('completed', function () {
      progressBar.text = 'Successfully injected types and printed TS code'
      progressBar.detail = 'Current progress: 100%'
    })
    .on('aborted', function () {
      console.info(`aborted...`)
    })
    .on('progress', function () {
      progressBar.detail = `File ${fileNum.num}/${fileNum.total} - Current progress: ${progressBar.value}%`
      progressBar.text = `${msgs[progressBar.value / 10]}`
    })
    .on('ready', function () {
      progressBar.detail = 'Hold on!'
      progressBar.text = 'Getting things ready...'
    })
  await promiseDelay(arg, progressBar, projectMigr, arg2, arg3)
  return
})

ipcMain.handle('convertToTs', async (event, arg) => {
  let progressBar = new ProgressBar({
    abortOnError: false,
    // Determinate Progress Bar
    indeterminate: false,
    // On Completion, Progress Bar window will not close.
    closeOnComplete: true,
    title: 'JS-TYPER',
    text: 'Generating TS code',
    // detail: 'Generating AST from js code and injecting the types ',
    style: {
      text: {},
      detail: { transition: 'all 1s' },
      bar: {
        transition: 'all 1s',
        width: '100%',
        'background-color': '#282c34',
        color: 'red',
      },
      value: {},
    },
    browserWindow: {
      parent: undefined,
      modal: true,
      resizable: false,
      closable: true,
      minimizable: false,
      maximizable: false,
      width: 500,
      height: 170,
      // Important - If not passed, Progress Bar will not be displayed.
      webPreferences: {
        nodeIntegration: true,
        devTools: false,
      },
    },
  })
  progressBar
    .on('completed', function () {
      progressBar.text = 'Successfully injected types and printed TS code'
      progressBar.detail = 'Current progress: 100%'
    })
    .on('aborted', function () {
      console.info(`aborted...`)
    })
    .on('progress', function () {
      progressBar.detail = `Current progress: ${progressBar.value}%`
      progressBar.text = `${msgs[progressBar.value / 10]}`
    })
    .on('ready', function () {
      progressBar.detail = 'Hold on!'
      progressBar.text = 'Getting things ready...'
    })

  const data = await promiseDelay(arg, progressBar, morphProject)
  return data
})

ipcMain.handle('generateFile', (event, arg, arg2, arg3) => {
  const process = generateTs(arg, arg2, arg3)
  return process
})

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support')
  sourceMapSupport.install()
}

const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true'

if (isDevelopment) {
  require('electron-debug')()
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer')
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS
  const extensions = ['REACT_DEVELOPER_TOOLS']

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log)
}

const createWindow = async () => {
  if (isDevelopment) {
    await installExtensions()
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets')

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths)
  }

  mainWindow = new BrowserWindow({
    show: false,
    width: 1350,
    height: 920,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true,
      plugins: true,
      backgroundThrottling: false,
      devTools: false,
    },
  })

  mainWindow.loadURL(resolveHtmlPath('index.html'))

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined')
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize()
    } else {
      mainWindow.show()
    }
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  const menuBuilder = new MenuBuilder(mainWindow)
  menuBuilder.buildMenu()

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url)
    return { action: 'deny' }
  })

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater()
}

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app
  .whenReady()
  .then(() => {
    createWindow()
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow()
    })
  })
  .catch(console.log)
