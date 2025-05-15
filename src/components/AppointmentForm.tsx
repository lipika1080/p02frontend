import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  VStack
} from '@chakra-ui/react';
import axios from 'axios';
import api from '../services/api';

const AppointmentForm = () => {
  const [form, setForm] = useState({
    customer_name: '',
    email: '',
    car_model: '',
    service: '',
    datetime: ''
  });

  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await api.post('/appointments', form);
      toast({ title: 'Appointment booked', status: 'success', duration: 3000, isClosable: true });
      setForm({ customer_name: '', email: '', car_model: '', service: '', datetime: '' });
    } catch (error: any) {
      const msg = error?.response?.data?.error || 'Error booking appointment';
      toast({ title: msg, status: 'error', duration: 3000, isClosable: true });
    }
  };

  return (
    <Box>
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="customer_name" value={form.customer_name} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" value={form.email} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Car Model</FormLabel>
          <Input name="car_model" value={form.car_model} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Service</FormLabel>
          <Input name="service" value={form.service} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Date & Time</FormLabel>
          <Input type="datetime-local" name="datetime" value={form.datetime} onChange={handleChange} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Box>
  );
};

export default AppointmentForm;