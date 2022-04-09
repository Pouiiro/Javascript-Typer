import { useRef, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from 'renderer/Provider';
import axios from 'axios';

const UploadComponent = () => {
  const contextData = useContext(AppContext);
  const codeRef = useRef<HTMLInputElement | null>(null);

  let reader = new FileReader();

  const getAST = async () => {
    const uri = encodeURI(contextData?.state.jsCode);
    try {
      const result = await axios.get(`http://[::1]:3000/parse?code=${uri}`);
      let data = result.data;
      contextData?.setState({ tsCode: data, fileDone: false, process: true });
    } catch (err) {
      console.log;
    }
  };

  const uploadJs = (event: any) => {
    event.preventDefault();
    let data = codeRef.current?.files;
    contextData?.setState({ file: data![0] });
    event.target.reset();
  };
  if (contextData?.state.file) {
    reader.readAsText(contextData?.state.file);
  }
  reader.onload = () => {
    contextData?.setState({ file: null });
    const myDataReader = reader.result as string;
    contextData?.setState({ jsCode: myDataReader, fileDone: true });
  };
  if (contextData?.state.fileDone) {
    getAST();
  }

  return (
    <Div>
      <h1>Welcome to jsTyper</h1>
      <h3>Please add your JavaScript file</h3>
      <form onSubmit={uploadJs}>
        <input type='file' ref={codeRef} />
        <input type='submit' value='Process' />
      </form>
    </Div>
  );
};

export default UploadComponent;

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
