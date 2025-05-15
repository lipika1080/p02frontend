import { Heading, Box } from '@chakra-ui/react';
import AppointmentForm from '../components/AppointmentForm';

const Home = () => {
  return (
    <Box>
      <Heading mb={6}>Book an Appointment</Heading>
      <AppointmentForm />
    </Box>
  );
};

export default Home;