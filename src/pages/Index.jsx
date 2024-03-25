import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <ChakraProvider>
      <Box p={4}>
        <Text>Welcome to the React App!</Text>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
