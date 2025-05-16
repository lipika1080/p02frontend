import { Link } from 'react-router-dom';
import { Button, Heading, Box } from '@chakra-ui/react';
import AppointmentForm from '../components/AppointmentForm';

const Home = () => {
  return (
    <Box>
      <Heading mb={6}>Book an Appointment</Heading>
      <AppointmentForm />
      <Box mt={8}>
        <Link to="/admin">
          <Button colorScheme="teal" variant="outline">
            Go to Admin Dashboard
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
