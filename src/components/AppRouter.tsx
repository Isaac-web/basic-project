import { Navigate, Route, Routes } from 'react-router';
import { AddUserPage } from '../pages/AddUserPage';
import { EditUserPage } from '../pages/EditUserPage';
import { UsersPage } from '../pages/UsersPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/users/create" element={<AddUserPage />} />
      <Route path="/users/edit/:id" element={<EditUserPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route index element={<Navigate to={'/users'} />} />
    </Routes>
  );
};
