import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from '../Styles/Theme/theme';

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const globalStyle = createGlobalStyle`
  body {
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: color 0.50s linear;
    transition: background-color 0.50s linear;
    animation: gradient 15s ease infinite;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 2%;
    background: linear-gradient(-45deg,#c34822,#5c4495,#23a6d5,#23d5ab);
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 400% 400%;
    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

  }

  .fadeIn {
    animation: 800ms fadeIn forwards;
}

.fadeOut {
    animation: 800ms fadeOut forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-20px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(-20px, 0);
    opacity: 0;
  }
}

.cr {
  position:absolute; bottom:0; text-align:center; 
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-family: 'Kodchasan', sans-serif;
cursor: default;
.kokoro {
font-size: 12px;
  }
}


.pulsate {
    -webkit-animation: pulsate 1.2s ease-out;
    -webkit-animation-iteration-count: infinite; 
    opacity: 0.5;
}
@-webkit-keyframes pulsate {
    0% { 
        opacity: 0.5;
    }
    50% { 
        opacity: 1.0;
    }
    100% { 
        opacity: 0.5;
    }
}
  `;
export default withTheme(globalStyle);
