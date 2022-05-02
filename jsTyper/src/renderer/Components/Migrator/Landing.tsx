import { useContext, useEffect } from 'react';
import { AppContext } from 'renderer/Provider';
import structure from '../../Assets/structure.png';
import single from '../../Assets/single.png';
import { useNavigate } from 'react-router-dom';
import { LandDiv } from 'renderer/Styles/common';

const Landing = () => {
  const contextData = useContext(AppContext);
  const navigte = useNavigate();

  const choosenType = (kind: string) => {
    contextData?.setState({
      side: kind,
      showFade: false,
    });
    if (kind === 'project') {
      navigte('/migGroup');
    } else if (kind === 'singleComp') {
      navigte('/migSingle');
    } else {
      navigte('/');
    }
    return;
  };

  useEffect(() => {
    contextData?.setState({ showFade: true });
  }, []);

  return (
    <LandDiv>
      <h1>JS TYPER</h1>
      <div className='menu'>
        <div className='specific'>
          <div>
            <h2 id='typeMe'>Project</h2>
            <img
              onClick={() => choosenType('project')}
              src={structure}
              alt=''
            />
          </div>
        </div>
        <div className='specific'>
          <div>
            <h2>Single</h2>
            <img
              onClick={() => choosenType('singleComp')}
              src={single}
              alt=''
            />
          </div>
        </div>
      </div>
    </LandDiv>
  );
};

export default Landing;
