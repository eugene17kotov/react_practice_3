import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { AddUserPage } from 'pages/AddUserPage';
import { HomePage } from 'pages/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="add" element={<AddUserPage />} />
      </Route>
    </Routes>
  );
};
