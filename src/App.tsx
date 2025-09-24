import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./components/hooks/useGenre";


const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: '"nav nav" "aside main"' }}
    >
      <GridItem area="nav" bg={"#"}>
        <Navbar />
      </GridItem>
      <Show when={"lg"}>
        <GridItem area="aside" bg={"#"} display={{ base: "none", lg: "block" }}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={setSelectedGenre} />
        </GridItem>
      </Show>
      <GridItem area="main" bg={"#"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
