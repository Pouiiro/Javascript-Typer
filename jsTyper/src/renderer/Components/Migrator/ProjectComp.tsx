import { useContext, useState } from 'react';
import { AppContext } from 'renderer/Provider';
import { useNavigate } from 'react-router-dom';
import { Div } from 'renderer/Styles/common';
import singleImg from 'renderer/Assets/single.png';
import singleImgTs from 'renderer/Assets/singleTs.png';
import ReactLoading from 'react-loading';
import cancel from '../cancel';
import { RadioGroup, Radio } from 'react-radio-input';
import FadeIn from 'react-fade-in';

declare const window: any;
const backenduu = window.electron.ipcRenderer;
let dir = 'None';

const ProjectComp = () => {
  const contextData = useContext(AppContext);
  const navigate = useNavigate();
  const initialValue = 'sameDir';
  const [selectedOption, setSelectedOption] = useState<string>(initialValue);
  const [spanDir, setSpanDir] = useState<string | undefined>('...');

  const chooseDir = async () => {
    const diir = await backenduu.openDirectory();
    dir = diir;
    if (dir !== 'None') {
      setSpanDir(dir.split('\\').pop());
    } else {
      setSpanDir('...');
    }
    console.log(diir);

    return;
  };

  const uploadProject = async (event: any) => {
    event.preventDefault();
    if (dir !== 'None') {
      if (selectedOption === 'newDir') {
        const saveDir = await backenduu.openDirectory();
        if (saveDir !== 'None') {
          contextData?.setState({ loading: true });
          const migrUn = await backenduu.migratorProjectRun(
            dir,
            selectedOption,
            saveDir
          );
          console.info(migrUn);
          contextData?.setState({ groupDone: true, loading: false });
        }
      } else {
        contextData?.setState({ loading: true });

        const migrUn = await backenduu.migratorProjectRun(dir, selectedOption);
        contextData?.setState({ groupDone: true, loading: false });
        console.log(migrUn);
      }
    }
    return;
  };
  const myForm = (
    <form onSubmit={uploadProject}>
      <div className='hidari'>
        <RadioGroup
          name='option'
          onChange={setSelectedOption}
          selectedValue={selectedOption}
        >
          <div>
            <label htmlFor='sameDir'>
              <Radio id='sameDir' value='sameDir' />
              <span>Same Directory</span>
            </label>
          </div>
          <div>
            <label htmlFor='newDir'>
              <Radio id='newDir' value='newDir' />
              <span>New Directory</span>
            </label>
          </div>
        </RadioGroup>
        <div className='grpDiv'>
          <span className='fake-btn'>Choose Dir</span>
          <span className='file-msg'>{spanDir}</span>
          <button type='button' onClick={() => chooseDir()} className='ni' />
        </div>
      </div>
      <div className='migi '>
        <button type='submit' className='btnUno snd'>
          Start
        </button>
        <button
          type='button'
          className='btnUno'
          onClick={() => cancel(contextData, navigate)}
        >
          Cancel
        </button>
      </div>
    </form>
  );

  const afterForm = (
    <FadeIn transitionDuration={600} className='allin grp'>
      <h1>All Done</h1>
      <div className='btnDiv'>
        <button
          className='brk-btn'
          onClick={() => cancel(contextData, navigate)}
        >
          Home
        </button>
      </div>
    </FadeIn>
  );

  return (
    <Div>
      <div className='head'>
        <h1>Project</h1>
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
        ) : contextData?.state.loading ? (
          <ReactLoading
            type='bubbles'
            color='#000000'
            width='100px'
            height='100px'
          />
        ) : contextData?.state.groupDone ? (
          afterForm
        ) : (
          myForm
        )}
      </div>
    </Div>
  );
};

export default ProjectComp;
