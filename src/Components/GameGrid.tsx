import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';



const GameGrid = () => {
    //below is being called from hooks that was created, so we are able to use it here in GameGrid
   const {games, error} = useGames();
// need the array dependency to prevent infinite loop
  return (
    <>
     {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5} } padding='20px' spacing={10}>
        
        {games.map(game => <GameCard key={game.id} game={game}></GameCard>)}

      
    </SimpleGrid>
    </>
   
  )
}

export default GameGrid