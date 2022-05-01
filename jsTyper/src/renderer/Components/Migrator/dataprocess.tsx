import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from 'renderer/Provider';
import ReactLoading from 'react-loading';

// import { getFieldNames } from 'ast-types';
// import escodegen from 'escodegen';
// import kindOf from 'kind-of';
// import axios from 'axios';

declare const window: any;
const backenduu = window.electron.ipcRenderer;

// backenduu.on('migrator', (arg: any) => {
//   console.log(arg);
// });

const DataProcess = () => {
  const contextData = useContext(AppContext);
  const friccme = async () => {
    const assas = await backenduu.progressView();
    console.log(assas);
    contextData?.setState({ loading: true });
    const result = await backenduu.migratorRun(contextData?.state.jsCode);
    contextData?.setState({ tsCode: result, loading: false });
  };

  // console.log(contextData?.state.tsCode);

  // let treeCleaning = contextData?.state.tsCode.map((e: any) => {
  //   let data: any = {};
  //   let innerData: any = getFieldNames({ type: e.type });
  //   innerData.map((content: any) => (data[content] = e[content]));
  //   return data;
  // });

  // const GlobalVariableDeclarations = treeCleaning.filter(
  //   (e: any) => e.type == 'VariableDeclaration'
  // );
  // // console.log(GlobalVariableDeclarations);

  // const VariablesTypesDefining = GlobalVariableDeclarations.map((e: any) => {
  //   let data: any = {};

  //   data['declare'] = e.kind;
  //   data['name'] = e.declarations.map((e: any) => e.id.name)[0];
  //   data['innerType'] = e.declarations.map((e: any) => e.init.type)[0];

  //   if (e.declarations.map((e: any) => e.init.value)[0]) {
  //     data['typeOfValue'] = kindOf(
  //       e.declarations.map((e: any) => e.init.value)[0]
  //     );
  //     data['value'] = e.declarations.map((e: any) =>
  //       data['typeOfValue'] === 'string' ? `"${e.init.value}"` : e.init.value
  //     )[0];
  //   } else if (
  //     e.declarations.map((e: any) => e.init.type) == 'TemplateLiteral'
  //   ) {
  //     data['typeOfValue'] = 'string';
  //   } else if (
  //     e.declarations.map((e: any) => e.init.type)[0] == 'ObjectExpression'
  //   ) {
  //     data['typeOfValue'] = 'Record<string, unknown>';
  //   } else if (
  //     e.declarations.map((e: any) => e.init.type)[0] == 'ArrayExpression'
  //   ) {
  //     data['typeOfValue'] = 'array<any>';
  //   }
  //   //   // } else if (
  //   //   //   e.declarations.map((e) => e.init.type)[0] === 'ArrowFunctionExpression'
  //   //   // ) {
  //   //   //   data['funcParams'] = e.declarations.map((e) => {})[0];
  //   //   // } else if (
  //   //   //   e.declarations.map((e) => e.init.type)[0] === 'ObjectExpression'
  //   //   // ) {
  //   //   //   data['innerType'] = e.declarations.map((e) => e.init.type)[0];
  //   //   // } else if (
  //   //   //   e.declarations.map((e) => e.init.type)[0] === 'ArrayExpression'
  //   //   // ) {
  //   //   //   data['innerType'] = e.declarations.map((e) => e.init.type)[0];
  //   //   // }

  //   //   // data = escodegen.generate(e);
  //   return data;
  // });
  // // console.log(VariablesTypesDefining);

  // const genFile = async () => {
  //   let fricc = contextData?.state.tsCode.map((e: any) =>
  //     escodegen.generate(e)
  //   );
  //   const newFricc = VariablesTypesDefining;

  //   const kizidata = JSON.stringify(newFricc);
  //   // console.log(newFricc);

  //   try {
  //     const result = await axios.get(
  //       `http://127.0.0.1:3000/generate?data=${kizidata}`
  //     );
  //     let data = result.data;
  //     console.log(data);
  //   } catch (err) {
  //     console.log;
  //   }
  // };

  // // console.log(treeCleaningN);

  return contextData?.state.loading === true ? (
    <ReactLoading type='bubbles' color='#000000' width='100px' height='100px' />
  ) : (
    <Div>
      <h3>Process page</h3>
      <button onClick={() => friccme()}>Click me</button>
      <button>Generate ts file</button>
    </Div>
  );
};

export default DataProcess;

const Div = styled.div`
  @import url('https:fonts.googleapis.com/css2?family=Roboto+Condensed&family=Source+Code+Pro&display=swap');
  display: flex;
  flex-direction: column;

  textarea {
    width: 88%;
    height: 200px;
    padding: 5%;
    font-family: 'Roboto Condensed', sans-serif;
  }
  button {
    width: 50%;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
  }
  #newText {
    white-space: pre-wrap;
    padding: 1%;
    line-height: 200%;
  }
  .bigDiv {
    display: flex;
    flex-direction: row;
    width: 100%;
    h3 {
      text-align: center;
    }
  }
  .jsT {
    width: 50%;
    border-right: 1px solid;
  }
  .tsT {
    width: 50%;
  }
`;
