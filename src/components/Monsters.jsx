import React, { useState, useEffect } from "react";
import { Box, Heading, Spinner, Alert, AlertIcon, AlertDescription, SimpleGrid } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, Text } from "@chakra-ui/react";

const Monsters = () => {
  const [monsters, setMonsters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const res = await fetch("https://www.dnd5eapi.co/api/monsters");
        if (!res.ok) {
          throw new Error("Failed to fetch monsters");
        }
        const data = await res.json();
        const monsterDetails = await Promise.all(
          data.results.map(async (monster) => {
            const detailRes = await fetch(`https://www.dnd5eapi.co${monster.url}`);
            const detailData = await detailRes.json();
            return detailData;
          }),
        );
        setMonsters(monsterDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMonsters();
  }, []);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <Box>
      <Heading as="h1" mb={4}>
        D&D Monsters
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {monsters.map((monster) => (
          <Card key={monster.index} bg="brand.700">
            <CardHeader>
              <Heading size="md" color="white">
                {monster.name}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text color="brand.500">
                <strong>Type:</strong> {monster.type}
              </Text>
              <Text color="brand.500">
                <strong>Alignment:</strong> {monster.alignment}
              </Text>
              <Text color="brand.500">
                <strong>Challenge Rating:</strong> {monster.challenge_rating}
              </Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Monsters;
