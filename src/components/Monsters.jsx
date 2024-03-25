import React, { useState, useEffect } from 'react';
import { Box, Text, Heading, Spinner, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';

const Monsters = () => {
  const [monsters, setMonsters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const res = await fetch('https://www.dnd5eapi.co/api/monsters');
        if (!res.ok) {
          throw new Error('Failed to fetch monsters');
        }
        const data = await res.json();
        setMonsters(data.results);
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
      {monsters.map((monster) => (
        <Text key={monster.index}>{monster.name}</Text>
      ))}
    </Box>
  );
};

export default Monsters;