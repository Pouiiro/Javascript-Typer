export interface ThemeProps {
  body: string
  text: string
  toggleBorder: string
  background: string
  activeLink: string
}

export const lightTheme: ThemeProps = {
  body: 'white',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  activeLink: 'green',
}
export const darkTheme: ThemeProps = {
  body: 'black',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  activeLink: '#fddb3a',
}
