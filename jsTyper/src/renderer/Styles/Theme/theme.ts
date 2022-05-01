export interface ThemeProps {
  body: string;
  text: string;
  toggleBorder: string;
  background?: string;
  activeLink: string;
  backgroundImage?: string;
}

export const lightTheme: ThemeProps = {
  body: 'white',
  text: '#363537',
  toggleBorder: '#FFF',
  // backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',

  activeLink: 'green',
};
export const darkTheme: ThemeProps = {
  body: 'black',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  activeLink: '#fddb3a',
};
