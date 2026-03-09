import { Routes, Route, Navigate } from 'react-router';
import { AddUserPage } from './pages/AddUserPage';
import { UsersPage } from './pages/UsersPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { EditUserPage } from './pages/EditUserPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/users/create" element={<AddUserPage />} />
        <Route path="/users/edit/:id" element={<EditUserPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route index element={<Navigate to={'/users'} />} />
      </Routes>
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}

export default App;
