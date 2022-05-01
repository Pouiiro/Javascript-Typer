import { Toggly } from './toggleTheme';
// import Moon from '../../../../assets/moon.svg';
// import Sun from '../../../../assets/sun.svg';

let checked;

interface ThemeTogglerProps {
  toggleTheme: () => void;
  theme: string;
}

const Toggle = ({ theme, toggleTheme }: ThemeTogglerProps) => {
  if (theme === 'light') {
    checked = false;
  } else {
    checked = true;
  }
  return (
    <Toggly onClick={toggleTheme} className='c-toggle' id='theme'>
      <div className='c-toggle__body'>
        {checked ? (
          // <Sun fill={checked ? 'white' : 'black'} className='c-toggle__icon' />
          <button>Light</button>
        ) : (
          <button>Dark</button>
          // <Moon fill={checked ? 'white' : 'black'} className='c-toggle__icon' />
        )}
      </div>
    </Toggly>
  );
};

export default Toggle;
