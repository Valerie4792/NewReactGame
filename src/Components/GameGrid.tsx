import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  //below is being called from hooks that was created, so we are able to use it here in GameGrid
  const { games, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // need the array dependency to prevent infinite loop
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="20px"
        spacing={10}
      >
        {isLoading &&
          skeleton.map((skeleton) => 
          <GameCardContainer>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>
          )}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game}/>
          </GameCardContainer> 
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
