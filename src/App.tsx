import { Routes, Route, Navigate } from 'react-router';
import { LoginPage } from './pages/AddUserPage';
import { UsersPage } from './pages/UsersPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/users/create" element={<LoginPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route index element={<Navigate to={'/users'} />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
