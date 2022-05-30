/*! For license information please see renderer.js.LICENSE.txt */
  body {
    color: ${({theme:e})=>e.text};
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
  `,t.default=(0,r.withTheme)(t.globalStyle)},85074:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(85893),o=r(n(8545));t.default=()=>(0,a.jsx)(o.default,{})},95262:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(85893),o=r(n(95297));t.default=()=>(0,a.jsx)(o.default,{})},81034:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(85893),o=r(n(84360));t.default=()=>(0,a.jsx)(o.default,{})},11810:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppContext=void 0;const r=n(85893),a=n(67294);t.AppContext=(0,a.createContext)(null);t.default=({children:e})=>{const[n,o]=(0,a.useReducer)(((e,t)=>({...e,...t})),{loading:!1,file:null,fileName:"tsMigrated",fileDone:!1,conversionDone:!1,jsCode:null,astCode:null,tsCode:null,side:"",groupDone:!1}),i={state:n,setState:o};return(0,r.jsx)(t.AppContext.Provider,{value:i,children:e})}},56652:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(85893),o=n(67294),i=n(26068),s=r(n(85074)),l=r(n(95262)),c=r(n(81034)),d=r(n(17658));t.default=()=>{const e=(0,i.useLocation)(),[t,n]=(0,o.useState)(e),[r,u]=(0,o.useState)("fadeIn");return(0,o.useEffect)((()=>{e!==t&&u("fadeOut")}),[e,t]),(0,a.jsx)("div",{className:`${r}`,onAnimationEnd:()=>{"fadeOut"===r&&(u("fadeIn"),n(e))},children:(0,a.jsxs)(i.Routes,{location:t,children:[(0,a.jsx)(i.Route,{path:"/",element:(0,a.jsx)(d.default,{})}),(0,a.jsx)(i.Route,{path:"/home",element:(0,a.jsx)(s.default,{})}),(0,a.jsx)(i.Route,{path:"/migSingle",element:(0,a.jsx)(l.default,{})}),(0,a.jsx)(i.Route,{path:"/migGroup",element:(0,a.jsx)(c.default,{})})]})})}},18350:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.darkTheme=t.lightTheme=void 0,t.lightTheme={body:"white",text:"#363537",toggleBorder:"#FFF",activeLink:"green"},t.darkTheme={body:"black",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999",activeLink:"#fddb3a"}},14152:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDarkMode=void 0;const r=n(67294);t.useDarkMode=()=>{const[e,t]=(0,r.useState)("light"),n=e=>{window.localStorage.setItem("theme",e),t(e)};return(0,r.useEffect)((()=>{const e=window.localStorage.getItem("theme");e&&t(e)}),[]),{theme:e,themeToggler:()=>{n("light"===e?"dark":"light")}}},t.default=t.useDarkMode},1903:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LandDiv=t.Div=void 0;const a=r(n(58804));t.Div=a.default.div`
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
`,t.LandDiv=a.default.div`
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
`},31822:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(85893),o=n(73935),i=r(n(23260));(0,o.render)((0,a.jsx)(i.default,{}),document.getElementById("root"))},47529:e=>{e.exports=function(){for(var e={},n=0;n<arguments.length;n++){var r=arguments[n];for(var a in r)t.call(r,a)&&(e[a]=r[a])}return e};var t=Object.prototype.hasOwnProperty},19085:(e,t,n)=>{"use strict";e.exports=n.p+"c517d64113d75ea100ca.png"},39496:(e,t,n)=>{"use strict";e.exports=n.p+"de8f1c165698aa6649a1.png"},57909:(e,t,n)=>{"use strict";e.exports=n.p+"1697b4f9245ce0ca0fcc.png"},87462:(e,t,n)=>{"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},37452:e=>{"use strict";e.exports=JSON.parse('{"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}')},93580:e=>{"use strict";e.exports=JSON.parse('{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}')}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e].call(o.exports,o,o.exports,a),o.exports}return a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);a.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,a.d(o,i),o},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="./",a(31822)})()));