import { Container } from '@chakra-ui/react';
import Home from './pages/Home';

function App() {
  return (
    <Container maxW="md" py={10}>
      <Home />
    </Container>
  );
}

export default App;