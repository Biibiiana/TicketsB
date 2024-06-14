import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Heading,
    SimpleGrid,
    useBreakpointValue
  } from '@chakra-ui/react';
import { genres, cities } from '../mocks/options';

export default function ConcertForm() {
  const columns = useBreakpointValue({ base: 1, sm: 2 });

  return (
    <Box maxW="2xl" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="md" boxShadow="lg">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>Nuevo Concierto</Heading>
      <SimpleGrid columns={columns} spacing={6}>
        <FormControl id="tourName" isRequired>
          <FormLabel>Nombre del Tour</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="artist" isRequired>
          <FormLabel>Nombre del Artista</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="genre" isRequired>
          <FormLabel>Género Musical</FormLabel>
          <Select placeholder="Selecciona un género">
            {genres.sort().map((genre, index) => (
              <option key={index} value={genre.toLowerCase().replace(/ /g, '-')}>{genre}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl id="seatCount" isRequired>
          <FormLabel>Número de Asientos</FormLabel>
          <Input type="number" />
        </FormControl>

        <FormControl id="seatPrice" isRequired>
          <FormLabel>Precio por Asiento</FormLabel>
          <Input type="number" />
        </FormControl>

        <FormControl id="generalAdmissionCount" isRequired>
          <FormLabel>Cantidad de Entradas de Pista</FormLabel>
          <Input type="number" />
        </FormControl>

        <FormControl id="generalAdmissionPrice" isRequired>
          <FormLabel>Precio por Entrada de Pista</FormLabel>
          <Input type="number" />
        </FormControl>

        <FormControl id="city" isRequired>
          <FormLabel>Ciudad</FormLabel>
          <Select placeholder="Selecciona una ciudad">
            {cities.sort().map((city, index) => (
              <option key={index} value={city.toLowerCase().replace(/ /g, '-')}>{city}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl id="address" isRequired>
          <FormLabel>Dirección</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="date" isRequired>
          <FormLabel>Fecha</FormLabel>
          <Input type="date" />
        </FormControl>

        <FormControl id="poster" isRequired>
          <FormLabel>Póster (URL)</FormLabel>
          <Input type="url" pattern="https?://.*" />
        </FormControl>

        <Box gridColumn={{ base: "span 1", sm: "span 2" }}>
          <Button colorScheme="teal" type="submit" width="full">Crear Concierto</Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
