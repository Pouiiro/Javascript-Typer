const { contextBridge, ipcRenderer, shell } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping')
    },
    migratorRun: async (code) => {
      return await ipcRenderer.invoke('migrator', code)
    },
    convertToTs: async (code) => {
      return await ipcRenderer.invoke('convertToTs', code)
    },
    generateFile: async (code, dir, fileName) => {
      return await ipcRenderer.invoke('generateFile', code, dir, fileName)
    },
    openDirectory: async () => {
      return ipcRenderer.invoke('openDirectory')
    },
    migratorProjectRun: async (directory, option, saveDir) => {
      return await ipcRenderer.invoke('proMigrator', directory, option, saveDir)
    },
    on(channel, func) {
      const validChannels = [
        'migrator',
        'progressView',
        'progressBtn',
        'openDirectory',
        'proMigrator',
      ]
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args))
      }
    },
    once(channel, func) {
      const validChannels = ['ipc-example']
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args))
      }
    },
  },
})
