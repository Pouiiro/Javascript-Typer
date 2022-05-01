import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LandDiv } from 'renderer/Styles/common';
import ReactLoading from 'react-loading';

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  }, []);

  return (
    <LandDiv>
      <h1 style={{ paddingBottom: '7rem' }}>Welcome to JS TYPER</h1>
      <ReactLoading type='cubes' color='#cfcfcf' width='70px' height='70px' />
      <span className='pulsate'>Hang on...</span>
    </LandDiv>
  );
};
export default Intro;
