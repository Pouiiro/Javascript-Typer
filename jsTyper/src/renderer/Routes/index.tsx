import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Pages/landing';
import MigratorSingle from 'renderer/Pages/migrate';
import MigratorGroup from 'renderer/Pages/projectMigr';
import Intro from 'renderer/Components/Migrator/intro';

export default () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState('fadeIn');
  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut');
  }, [location, displayLocation]);
  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn');
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<Home />} />
        <Route path='/migSingle' element={<MigratorSingle />} />
        <Route path='/migGroup' element={<MigratorGroup />} />
      </Routes>
    </div>
  );
};
