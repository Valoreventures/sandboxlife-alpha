import React from 'react';
import {
  Box,
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  Heading,
  Image,
  useColorModeValue,
  Container,
  Flex,
  Spacer,
} from '@chakra-ui/react';
// import { EmailIcon, LockIcon } from '@chakra-ui/icons';

const AccountCreationForm = () => {
  // You can customize these color values to match the exact colors from the screenshot.
  const formBackgroundColor = useColorModeValue('white', 'gray.700');
  // const textColor = useColorModeValue('gray.800', 'white');
  // const inputIconColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <Container maxW="container.xl" p={8}>
      <Flex>
        {/* Form section */}
        <Box
          bg={formBackgroundColor}
          borderRadius="lg"
          p={8}
          shadow="base"
          w="full"
          maxW="md"
        >
          <Heading mb={6} color={'White'}>Create an account</Heading>
          <VStack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" isRequired />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" type="email" isRequired />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" type="password" isRequired />
            </FormControl>
            <Button colorScheme="blue" w="full">
              Create Account
            </Button>
          </VStack>
        </Box>

        <Spacer />

        {/* Testimonial section */}
        <VStack align="start" w="full" maxW="md">
          <Text fontSize="xl" color={'white'}>"What can I say - I fell in love with Chakra UI Pro."</Text>
          <Flex align="center">
            <Image
              borderRadius="full"
              boxSize="50px"
              src="/path-to-image.jpg" // Replace with the path to the image
              alt="Simon Holzmayer"
            />
            <Box ml={4}>
              <Text fontWeight="bold" color={'white'}>Simon Holzmayer</Text>
              <Text color={'white'}>simon@chakra-ui.com</Text>
            </Box>
          </Flex>
        </VStack>
      </Flex>
    </Container>
  );
};

export default AccountCreationForm;
