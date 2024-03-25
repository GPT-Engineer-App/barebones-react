import React, { useState } from "react";
import { Input, SimpleGrid } from "@chakra-ui/react";
import MonsterCard from "./MonsterCard";

const Monsters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [monsters, setMonsters] = useState([]);

  const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <Input placeholder="Search monsters..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mb={4} />
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={10}>
        {filteredMonsters.map((monster) => (
          <MonsterCard key={monster.id} monster={monster} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Monsters;
