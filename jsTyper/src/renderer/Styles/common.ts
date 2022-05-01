import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  .allin {
    width: 100%;
    height: 100%;
    margin: auto;
  }
  .grp {
    text-align: center;
    margin-top: 20vh;
  }
  .btnDiv {
    padding-top: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .brk-btn {
      appearance: none;
      background-color: #282c34;
      border: 2px solid #1a1a1a;
      border-radius: 15px;
      box-sizing: border-box;
      color: #ffffff;
      cursor: pointer;
      display: inline-block;
      font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
      font-size: 16px;
      font-weight: 600;
      line-height: normal;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      margin-bottom: 0;
      min-height: 30px;
      min-width: 0;
      outline: none;
      padding: 10px 18px;
      text-align: center;
      text-decoration: none;
      transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: 15%;
      will-change: transform;
      :disabled {
        pointer-events: none;
      }
      :hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
        transform: translateY(-2px);
      }
      :active {
        box-shadow: none;
        transform: translateY(0);
      }
    }
    .mrg {
      margin-right: 30px;
    }
  }
  .mrgd {
    justify-content: flex-start;
  }
  .codeSynt {
    margin: auto;
    background: rgb(40, 44, 52);
    height: 75vh;
    width: 90vw;
    overflow: auto;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border: 0.5px solid rgb(52, 53, 54);
    border-radius: 10px;
    /* width */
    ::-webkit-scrollbar {
      width: 12px;
      background: #282c34;
      border-radius: 0px 10px 10px 0px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #282c34;
      border-radius: 0px 10px 10px 0px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #a5a0a0;
    }
    pre {
      margin: 0px !important;
    }
    span {
      background: none;
      font-family: 'Roboto Mono', monospace;
      font-size: 1em;
    }
  }

  .karada {
    height: 50vh;
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    .grpDiv {
      width: 50%;
      .ni {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 50%;
        cursor: pointer;
        opacity: 0;
        :hover {
          outline: none;
        }
      }
    }
    .btnUno {
      margin: 35px !important;
    }

    .snd {
      opacity: 1 !important;
    }
    fieldset {
      border: none;
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      width: 50%;
      label {
        display: flex;
        cursor: pointer;
        font-weight: 500;
        position: relative;
        overflow: hidden;
        margin-bottom: 0.375em;
        color: white;
        text-transform: uppercase;
        input {
          position: absolute;
          left: -9999px;
        }
        input:checked + span {
          background-color: rgb(255 255 255 / 21%);
        }
        input:checked + span:before {
          box-shadow: inset 0 0 0 0.4375em #23a6d5;
        }
        span {
          display: flex;
          align-items: center;
          padding: 0.375em 0.75em 0.375em 0.375em;
          border-radius: 99em;
          transition: 0.25s ease;
          font-size: 13px;
        }
        span:hover {
          background-color: rgb(255 255 255 / 21%);
        }
        span:before {
          display: flex;
          flex-shrink: 0;
          content: '';
          background-color: #fff;
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          margin-right: 0.375em;
          transition: 0.25s ease;
          box-shadow: inset 0 0 0 0.125em #23a6d5;
        }
      }
      input[type='radio'] {
        vertical-align: middle;
        margin-top: 0px;
        margin-right: 3px;
      }
    }
    form {
      display: flex;
      flex-direction: row;
      padding: 2%;
      box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
        rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      border-radius: 10px;
    }
    .hidari {
      color: white;
      display: flex;
      position: relative;
      align-items: center;
      width: 450px;
      max-width: 100%;
      padding: 25px;
      /* border: 1px dashed rgba(255, 255, 255, 0.4); */
      border-radius: 3px;
      transition: 0.2s;
      :hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
      .fake-btn {
        flex-shrink: 0;
        background-color: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        padding: 8px 15px;
        margin-right: 10px;
        font-size: 12px;
        text-transform: uppercase;
      }
      .file-msg {
        font-size: small;
        font-weight: 300;
        line-height: 1.4;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .file-input {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        cursor: pointer;
        opacity: 0;
        :hover {
          outline: none;
        }
      }
    }
    .migi {
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      :hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
      .custm {
        cursor: pointer;
        opacity: 1;
        background-image: linear-gradient(
          to right,
          #4ca1af 0%,
          #c4e0e5 51%,
          #4ca1af 100%
        );
        margin: 20px;
        padding: 15px 45px;
        text-align: center;
        text-transform: uppercase;
        transition: 0.5s;
        font-family: 'Kodchasan', sans-serif;
        background-size: 200% auto;
        color: black;
        font-weight: bold;
        border: none;
        border-radius: 10px;
        display: block;
        :hover {
          background-position: right center; /* change the direction of the change here */
          color: #4ca1af;
          text-decoration: none;
        }
      }

      button {
        background-image: linear-gradient(
          to right,
          #8e9eab 0%,
          #eef2f3 51%,
          #8e9eab 100%
        );
        opacity: 0.5;
        cursor: pointer;
        margin: 20px;
        padding: 15px 45px;
        color: #565656;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        transition: 0.5s;
        font-family: 'Kodchasan', sans-serif;
        background-size: 200% auto;
        border: none;
        border-radius: 10px;
        display: block;
        :hover {
          background-position: right center; /* change the direction of the change here */
          color: black;
          opacity: 1;
          text-decoration: none;
        }
      }
    }
  }
  .head {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 90vw;
    cursor: default;
    h1 {
      margin-top: 0;
      text-transform: uppercase;
      font-family: 'Kodchasan', sans-serif;
      color: #d5d5d5;
    }
    img {
      width: 36px;
      padding-left: 20px;
    }
  }
`;

export const LandDiv = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Source+Code+Pro&display=swap');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-family: 'Kodchasan', sans-serif;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.89);
  transition: 500ms ease-in-out;
  cursor: default;
  h1 {
    width: 100%;
    text-align: center;
    padding-top: 10vh;
    font-size: 34px;
    height: 10px;
  }
  .disabled {
    pointer-events: none;
    opacity: 0.4;
  }

  .menu {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: space-between;
    width: 80vw;
    margin: auto;
    .specific {
      display: flex;
      flex-direction: column;
      width: 200px;
      height: 200px;
      margin-left: auto;
      margin-right: auto;
      div {
        transition: 500ms ease-in-out;

        :hover {
          transform: scale(1.1);
        }
      }
      img {
        width: 100%;
        height: 200px;
        border-radius: 50%;
        cursor: pointer;

        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }
      h2 {
        font-size: 26px;
        text-align: center;
        text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
          0px -5px 35px rgba(255, 255, 255, 0.3);
      }
    }
  }
  .blinking {
    animation: blinkingText 1.2s infinite;
  }
  @keyframes blinkingText {
    0% {
      color: rgba(0, 0, 0, 0.6);
    }
    49% {
      color: rgba(0, 0, 0, 0.6);
    }
    60% {
      color: transparent;
    }
    99% {
      color: transparent;
    }
    100% {
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;
