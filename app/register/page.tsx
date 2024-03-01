
import React from 'react';
import { Box, VStack, Checkbox, Button, Heading, Text, Link, Divider, useColorModeValue, Avatar, HStack } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';
import { CustomInput } from './input-form';

const Register = () => {
  // const bgColor = useColorModeValue('white', 'gray.700');
  // const textColor = useColorModeValue('gray.700', 'white');

  return (
    <Box p={8} style={{ width: '80%', margin: '0 auto' }} width={'50vw'}>
      <HStack gap={'5rem'}>
      <VStack spacing={4} align="flex-start">
        <Heading as="h1" size="xl">Preline: A vision for 2024</Heading>
        <Text fontSize="lg" color={'gray.700'}>
          Fully customizable rules to match your unique needs
        </Text>
        <Text fontSize="md" color="gray.500">
          We provide you with a test account that can be set up in seconds.
        </Text>
        {/* Testimonial section will be added here later */}
        <Box height={'400px'} />
        {/* Footer area will be added here later */}
      </VStack>

      <VStack spacing={4} align="flex-start" width={'50vw'}>
        <Box height={'200px'} />
        {/* <Heading as="h1" size="xl">Preline: A vision for 2024</Heading>
        <Text fontSize="lg" color={'gray.700'}>
          Fully customizable rules to match your unique needs
        </Text>
        <Text fontSize="md" color="gray.500">
          We provide you with a test account that can be set up in seconds.
        </Text> */}
        {/* Testimonial section will be added here later */}
        <Box as="section" p={8} bg={'white'} boxShadow="md" borderRadius="20px" width={'375px'} margin={'0 auto'} alignItems={'center'}>
          {/* <Heading as="h2" size="lg" mb={4}>Start your free trial</Heading> */}
          {/* <Button leftIcon={<FaGoogle />} colorScheme="red" variant="outline" w="full" mb={2}>
            Sign up with Google
          </Button> */}
          <Divider my={4} />
          <VStack spacing={4} align="stretch">
            <HStack>
              <CustomInput placeholder="First name" style={{ padding: '20px' }} />
              <CustomInput placeholder="Last name" style={{ padding: '20px' }} />
            </HStack>
            <HStack>
              <CustomInput placeholder="Email" style={{ padding: '20px' }} />
              <CustomInput placeholder="Company name" style={{ padding: '20px' }} />
            </HStack>
            <CustomInput placeholder="New password" type="password" style={{ padding: '20px', width: '330px' }} />
            <CustomInput placeholder="Current password" type="password" style={{ padding: '20px', width: '330px' }} />
            <Checkbox defaultChecked>I accept the Terms and Conditions</Checkbox>
            <Button colorScheme="blue" w="full" >Get started</Button>
          </VStack>
        </Box>
        {/* Footer area will be added here later */}
      </VStack>
      </HStack>
    </Box>
  );
};

export default Register;
