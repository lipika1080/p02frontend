import { Container } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Container maxW="container.md" py={10}>
      <Routes>
        <Route path="/" element={<Navigate to="/customer" />} />
        <Route path="/customer" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Container>
  );
}

export default App;
