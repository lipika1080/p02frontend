import { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  SimpleGrid
} from '@chakra-ui/react';
import api from '../services/api';

const AdminDashboard = () => {
  const [date, setDate] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [summary, setSummary] = useState({ total: 0, dateTotal: 0 });

  const fetchAppointments = async () => {
    if (!date) return;
    const res = await api.get(`/appointments?date=${date}`);
    setAppointments(res.data);
  };

  const fetchSummary = async () => {
    if (!date) return;
    const res = await api.get(`/appointments/summary?date=${date}`);
    setSummary(res.data);
  };

  useEffect(() => {
    fetchAppointments();
    fetchSummary();
  }, [date]);

  return (
    <Box>
      <Heading mb={4}>Workshop Admin Dashboard</Heading>
      <VStack spacing={4} align="stretch">
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Select date"
        />

        <SimpleGrid columns={2} spacing={4}>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Text>Total Appointments (All Time)</Text>
            <Heading>{summary.total}</Heading>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Text>Appointments on {date || 'Selected Date'}</Text>
            <Heading>{summary.dateTotal}</Heading>
          </Box>
        </SimpleGrid>

        <Heading size="md">Appointments</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Car Model</Th>
              <Th>Service</Th>
              <Th>DateTime</Th>
            </Tr>
          </Thead>
          <Tbody>
            {appointments.map((appt: any) => (
              <Tr key={appt._id}>
                <Td>{appt.customer_name}</Td>
                <Td>{appt.email}</Td>
                <Td>{appt.car_model}</Td>
                <Td>{appt.service}</Td>
                <Td>{appt.datetime}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
};

export default AdminDashboard;
