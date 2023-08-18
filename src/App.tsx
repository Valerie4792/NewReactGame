import "./App.css";
import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Show,
  useAccordion,
} from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import ColorModeSwitch from "./Components/ColorModeSwitch";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre|null>(null);
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px",
      }}
    >
      <GridItem area="nav">
        <NavBar />
        <ColorModeSwitch />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=> setSelectedGenre(genre)}></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector/>
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
