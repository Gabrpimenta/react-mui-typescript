import { Routes, Route, Navigate } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<p>Home</p>} />
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  );
};

export default AppRoutes;
