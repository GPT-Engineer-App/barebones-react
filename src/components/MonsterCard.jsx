import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const MonsterCard = ({ monster }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
      <Image src={monster.image} alt={`Picture of ${monster.name}`} boxSize="200px" objectFit="cover" />
      <Text mt="2" fontWeight="bold" fontSize="xl" textAlign="center">
        {monster.name}
      </Text>
    </Box>
  );
};

export default MonsterCard;
