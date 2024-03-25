import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import Monsters from "../components/Monsters";

function MonstersPage() {
  return (
    <Container py={8}>
      <Box>
        <Text fontSize="2xl" mb={4}>
          Monsters Overview
        </Text>
        <Monsters />
      </Box>
    </Container>
  );
}

export default MonstersPage;
