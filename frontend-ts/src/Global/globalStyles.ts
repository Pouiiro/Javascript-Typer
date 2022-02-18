import { createGlobalStyle, withTheme } from 'styled-components'
import { ThemeProps } from '../Styles/Theme/theme'

type GlobalThemeProps = {
  theme: ThemeProps
}

export const globalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: color 0.50s linear;
    transition: background-color 0.50s linear;
    height: 100%;
    margin: 0;
    padding: 2%;
  }
  span {
    background: ${({ theme }: GlobalThemeProps) => theme.text};
  }
  `
export default withTheme(globalStyle)
