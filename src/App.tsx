import { Routes, Route } from 'react-router';
import { LoginPage } from './pages/LoginPage';
import { UsersPage } from './pages/UsersPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
