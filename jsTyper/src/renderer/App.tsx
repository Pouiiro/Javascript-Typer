import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Styles/Theme/theme';
import { useDarkMode } from './Styles/Theme/useDarkMode';
import GlobalStyles from './Global/globalStyles';
import AppProvider from './Provider';
// import Toggle from './Styles/Theme/toggler';
import { HashRouter } from 'react-router-dom';
import MyRoutes from './Routes';

const App = () => {
  const { theme, themeToggler } = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppProvider>
        <HashRouter>
          {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
          <MyRoutes />
        </HashRouter>
        <span className='cr'>
          Made by Ouail & Artur
          <br />
          <span className='kokoro'>Axis Communications &#169;</span>
        </span>
      </AppProvider>
    </ThemeProvider>
  );
};
export default App;
