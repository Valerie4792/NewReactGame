import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null
  selectedPlatform: Platform |null;
}


const GameGrid = ({selectedGenre, selectedPlatform}:Props) => {
  //below is being called from hooks that was created, so we are able to use it here in GameGrid
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

  //
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];

  // need the array dependency to prevent infinite loop
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="20px"
        spacing={3}
      >
        {isLoading &&
          skeleton.map((skeleton) => 
          <GameCardContainer key={skeleton} >
            <GameCardSkeleton />
          </GameCardContainer>
          )}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game}/>
          </GameCardContainer> 
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
