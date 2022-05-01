import { useRef, useContext, useState } from 'react';
import { AppContext } from 'renderer/Provider';
import cancel from '../cancel';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import singleImg from 'renderer/Assets/single.png';
import singleImgTs from 'renderer/Assets/singleTs.png';
import { Div } from 'renderer/Styles/common';
import FadeIn from 'react-fade-in';

declare const window: any;
const backenduu = window.electron.ipcRenderer;

const SingleComponent = () => {
  const contextData = useContext(AppContext);
  const navigate = useNavigate();
  const codeRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | undefined>(
    'or drag and drop here'
  );

  const runProcess = async (data: any) => {
    const result = await backenduu.convertToTs(data);
    contextData?.setState({ tsCode: result, loading: false });
  };

  const generateFiru = async () => {
    const diir = await backenduu.openDirectory();
    if (diir === 'None') {
      return;
    } else {
      return await backenduu.generateFile(
        contextData?.state.tsCode,
        diir,
        contextData?.state.fileName
      );
    }
  };
  let reader = new FileReader();

  const fileNameInputUpdate = () => {
    if (codeRef.current?.value) {
      setFileName(codeRef.current?.value.split('\\').pop());
    } else {
      setFileName('or drag and drop here');
    }
  };

  const uploadJs = (event: any) => {
    event.preventDefault();
    if (codeRef.current?.files?.length! > 0) {
      let data = codeRef.current?.files;
      if (data) {
        reader.readAsText(data[0]);
        contextData?.setState({ fileName: data[0].name });
      }
      event.target.reset();
    } else {
      console.log('nothing');
    }
  };

  reader.onload = () => {
    const myDataReader = reader.result as string;
    contextData?.setState({
      jsCode: myDataReader,
      fileDone: true,
      loading: true,
    });
  };

  if (
    contextData?.state.fileDone === true &&
    contextData?.state.loading === true
  ) {
    runProcess(contextData?.state.jsCode);
  }

  const myForm = (
    <form onSubmit={uploadJs}>
      <div className='hidari'>
        <span className='fake-btn'>Choose JS file</span>
        <span className='file-msg'>{fileName}</span>
        <input
          type='file'
          className='file-input'
          id='uploadJs'
          name='uploadJs'
          ref={codeRef}
          onInput={fileNameInputUpdate}
        />
      </div>
      <div className='migi'>
        <button type='submit' className='custm' value='Process'>
          Start
        </button>
        <button type='button' onClick={() => cancel(contextData, navigate)}>
          Cancel
        </button>
      </div>
    </form>
  );

  const afterForm = contextData?.state.loading ? (
    <ReactLoading type='bubbles' color='#000000' width='100px' height='100px' />
  ) : (
    <FadeIn transitionDuration={600} className='allin'>
      <div className='codeSynt'>
        <SyntaxHighlighter
          language='typescript'
          style={atomOneDark}
          className='afterForm'
          wrapLines={true}
          wrapLongLines={true}
          showLineNumbers={true}
        >
          {contextData?.state.tsCode}
        </SyntaxHighlighter>
      </div>
      <div className='btnDiv mrgd'>
        <button className='brk-btn mrg' onClick={generateFiru}>
          Generate
        </button>
        <button
          className='brk-btn'
          onClick={() => cancel(contextData, navigate)}
        >
          Done
        </button>
      </div>
    </FadeIn>
  );

  return (
    <Div>
      <div className='head'>
        <h1>Single file</h1>
        <img src={singleImg} alt='jsLogo' />
        <img src={singleImgTs} alt='jsLogo' />
      </div>
      <div className='karada'>
        {contextData?.state.loading ? (
          <ReactLoading
            type='bubbles'
            color='#000000'
            width='100px'
            height='100px'
          />
        ) : contextData?.state.fileDone ? (
          afterForm
        ) : (
          myForm
        )}
      </div>
    </Div>
  );
};

export default SingleComponent;
