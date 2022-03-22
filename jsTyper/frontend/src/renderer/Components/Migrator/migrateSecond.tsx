import { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

interface Provider {
  type: string;
  declarations: Array<any>;
  kind: string;
  loc: any;
  async: boolean;
  body: any;
  expression: any;
  generator: boolean;
  id: any;
  params: Array<any>;
}

const MigratorNd = () => {
  const [updated, setUpdate] = useState<boolean>(false);
  const [file, setFile] = useState();
  const [astCode, setAstCode] = useState<Array<Provider>>([]);
  const [resulties, setResulties] = useState<Array<any>>([]);
  const [kizi, setKizi] = useState<boolean>(false);

  const codeRef = useRef<HTMLParagraphElement | null>(null);

  const reader = new FileReader();

  const runMyScript = (event: any) => {
    setFile(event.target.files[0]);
  };

  const myAPIdata = (myCode: any) => {
    axios.get(`http://127.0.0.1:3000/parse?code=${myCode}`).then((results) => {
      setAstCode(results.data);
    });
    testAst();
  };

  reader.addEventListener('loadend', function () {
    const myDataReader = reader.result as string;
    document.getElementById('newText')!.innerHTML = myDataReader;
    setUpdate(true);
  });

  if (file) {
    reader.readAsText(file);
  }

  useEffect(() => {
    if (updated) {
      let data = codeRef.current?.innerText;
      let bodyTextArray = data?.split(/(\n)/);
      myAPIdata(bodyTextArray?.join('\n'));
    }
  }, [updated]);

  const testAst = () => {
    const data = astCode.map((element) => {
      if (element.type === 'VariableDeclaration') {
        return {
          type: element.type,
          kind: element.kind,
          name: element.declarations[0]['id']['name'],
          value: element.declarations[0]['init']['value'],
        };
      } else if (element.type === 'ExpressionStatement') {
        if (element.expression.callee.type === 'MemberExpression') {
          return {
            type: element.type,
            kind: element.expression.type,
            calleeKind: element.expression.callee.type,
            object: element.expression.callee.object.name,
            property: element.expression.callee.property.name,
            value: element.expression.arguments[0]['value'],
          };
        } else if (element.expression.callee.type === 'Identifier') {
          return {
            type: element.type,
            kind: element.expression.type,
            calleeKind: element.expression.callee.type,
            calleeName: element.expression.callee.name,
            arguments: element.expression.arguments[0]['value'],
          };
        }
        return 'nein';
      } else if (element.type === 'FunctionDeclaration') {
        return {
          type: element.type,
          async: element.async,
          name: element.id.name,
          params: element.params[0]['name'],
          body: element.body,
        };
      } else {
        return '';
      }
    });
    setResulties([data]);
  };

  return (
    <Div id='myDiv'>
      <h1>Second Iteration</h1>
      <h3>Upload your Js File</h3>
      <input type='file' onChange={runMyScript} />
      <div className='bigDiv'>
        <div className='jsT'>
          <h3>Your JS data</h3>
          <p id='newText' ref={codeRef}></p>
        </div>
        <div className='tsT'>
          <h3>Your Ts data</h3>
          <p id='tsText'></p>
        </div>
      </div>
    </Div>
  );
};
export default MigratorNd;

const Div = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Source+Code+Pro&display=swap');
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
