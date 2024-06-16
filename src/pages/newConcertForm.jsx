import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { genres, cities } from '../mocks/options';
import service from '../services/config';

export default function ConcertForm() {
  const [formData, setFormData] = useState({
    tourName: '',
    artist: '',
    genre: '',
    seatCount: '',
    seatPrice: '',
    generalAdmissionCount: '',
    generalAdmissionPrice: '',
    city: '',
    address: '',
    date: '',
    poster: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const toast = useToast();
  const navigate = useNavigate();
  const columns = useBreakpointValue({ base: 1, sm: 2 });

  useEffect(() => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'Este campo es obligatorio';
      }
    });
    setErrors(newErrors);
  }, [formData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (touched[id]) {
      const newErrors = { ...errors };
      if (!value) {
        newErrors[id] = 'Este campo es obligatorio';
      } else {
        delete newErrors[id];
      }
      setErrors(newErrors);
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    setTouched({ ...touched, [id]: true });

    const newErrors = { ...errors };
    if (!value) {
      newErrors[id] = 'Este campo es obligatorio';
    } else {
      delete newErrors[id];
    }
    setErrors(newErrors);
  };

  const handleNewEvent = async (e) => {
    e.preventDefault();
    try {
      await service.post('/events/newevent', formData);
      toast({
        title: 'Concierto creado.',
        description: 'El concierto ha sido creado con éxito.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setFormData({
        tourName: '',
        artist: '',
        genre: '',
        seatCount: '',
        seatPrice: '',
        generalAdmissionCount: '',
        generalAdmissionPrice: '',
        city: '',
        address: '',
        date: '',
        poster: ''
      });
      navigate('/');
    } catch (error) {
      toast({
        title: 'Error.',
        description: 'Hubo un error al crear el concierto.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <Box maxW="2xl" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="md" boxShadow="lg">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>Nuevo Concierto</Heading>
      <form onSubmit={handleNewEvent}>
        <SimpleGrid columns={columns} spacing={6}>
          <FormControl id="tourName" isRequired isInvalid={touched.tourName && errors.tourName}>
            <FormLabel>Nombre del Tour</FormLabel>
            <Input type="text" value={formData.tourName} onChange={handleChange} onBlur={handleBlur} />
            {touched.tourName && errors.tourName && <Text color="red.500">{errors.tourName}</Text>}
          </FormControl>

          <FormControl id="artist" isRequired isInvalid={touched.artist && errors.artist}>
            <FormLabel>Nombre del Artista</FormLabel>
            <Input type="text" value={formData.artist} onChange={handleChange} onBlur={handleBlur} />
            {touched.artist && errors.artist && <Text color="red.500">{errors.artist}</Text>}
          </FormControl>

          <FormControl id="genre" isRequired isInvalid={touched.genre && errors.genre}>
            <FormLabel>Género Musical</FormLabel>
            <Select placeholder="Selecciona un género" value={formData.genre} onChange={handleChange} onBlur={handleBlur}>
              {genres.sort().map((genre, index) => (
                <option key={index} value={genre.toLowerCase().replace(/ /g, '-')}>{genre}</option>
              ))}
            </Select>
            {touched.genre && errors.genre && <Text color="red.500">{errors.genre}</Text>}
          </FormControl>

          <FormControl id="seatCount" isRequired isInvalid={touched.seatCount && errors.seatCount}>
            <FormLabel>Número de Asientos</FormLabel>
            <Input type="number" value={formData.seatCount} onChange={handleChange} onBlur={handleBlur} />
            {touched.seatCount && errors.seatCount && <Text color="red.500">{errors.seatCount}</Text>}
          </FormControl>

          <FormControl id="seatPrice" isRequired isInvalid={touched.seatPrice && errors.seatPrice}>
            <FormLabel>Precio por Asiento</FormLabel>
            <Input type="number" value={formData.seatPrice} onChange={handleChange} onBlur={handleBlur} />
            {touched.seatPrice && errors.seatPrice && <Text color="red.500">{errors.seatPrice}</Text>}
          </FormControl>

          <FormControl id="generalAdmissionCount" isRequired isInvalid={touched.generalAdmissionCount && errors.generalAdmissionCount}>
            <FormLabel>Cantidad de Entradas de Pista</FormLabel>
            <Input type="number" value={formData.generalAdmissionCount} onChange={handleChange} onBlur={handleBlur} />
            {touched.generalAdmissionCount && errors.generalAdmissionCount && <Text color="red.500">{errors.generalAdmissionCount}</Text>}
          </FormControl>

          <FormControl id="generalAdmissionPrice" isRequired isInvalid={touched.generalAdmissionPrice && errors.generalAdmissionPrice}>
            <FormLabel>Precio por Entrada de Pista</FormLabel>
            <Input type="number" value={formData.generalAdmissionPrice} onChange={handleChange} onBlur={handleBlur} />
            {touched.generalAdmissionPrice && errors.generalAdmissionPrice && <Text color="red.500">{errors.generalAdmissionPrice}</Text>}
          </FormControl>

          <FormControl id="city" isRequired isInvalid={touched.city && errors.city}>
            <FormLabel>Ciudad</FormLabel>
            <Select placeholder="Selecciona una ciudad" value={formData.city} onChange={handleChange} onBlur={handleBlur}>
              {cities.sort().map((city, index) => (
                <option key={index} value={city.toLowerCase().replace(/ /g, '-')}>{city}</option>
              ))}
            </Select>
            {touched.city && errors.city && <Text color="red.500">{errors.city}</Text>}
          </FormControl>

          <FormControl id="address" isRequired isInvalid={touched.address && errors.address}>
            <FormLabel>Dirección</FormLabel>
            <Input type="text" value={formData.address} onChange={handleChange} onBlur={handleBlur} />
            {touched.address && errors.address && <Text color="red.500">{errors.address}</Text>}
          </FormControl>

          <FormControl id="date" isRequired isInvalid={touched.date && errors.date}>
            <FormLabel>Fecha</FormLabel>
            <Input type="date" value={formData.date} onChange={handleChange} onBlur={handleBlur} />
            {touched.date && errors.date && <Text color="red.500">{errors.date}</Text>}
          </FormControl>

          <FormControl id="poster" isRequired isInvalid={touched.poster && errors.poster}>
            <FormLabel>Póster (URL)</FormLabel>
            <Input type="url" pattern="https?://.*" value={formData.poster} onChange={handleChange} onBlur={handleBlur} />
            {touched.poster && errors.poster && <Text color="red.500">{errors.poster}</Text>}
          </FormControl>

          <Box gridColumn={{ base: "span 1", sm: "span 2" }}>
            <Button colorScheme="teal" type="submit" width="full" isDisabled={!isFormValid}>Crear Concierto</Button>
          </Box>
        </SimpleGrid>
      </form>
    </Box>
  );
}
