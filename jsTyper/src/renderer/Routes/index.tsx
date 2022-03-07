import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/index';
import TestPage from '../Pages/TestPage/index';

export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Test" element={<TestPage />} />
      </Routes>
    </Router>
  );
};
