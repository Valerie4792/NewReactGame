import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres'
import useData from '../hooks/useData'
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'

interface Props{
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
     const{data, isLoading, error}= useGenres();
  return (
    <List>
        {isLoading && <Spinner/>}
        {error && <Text>Error 404 not found</Text>}
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
                <Button color={genre.id === selectedGenre?.id ? 'blue.500' : 'normal'} onClick ={()=> onSelectGenre(genre)}fontSize='lg' variant='link'>{genre.name}</Button>
           
            </HStack>
            </ListItem>)}
      
    </List>
  )
}

export default GenreList
