import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import FetchGenresList from "./components/FetchGenresList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "aside"`,
        md: `"nav" "nav" "aside" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem area="aside">
          <FetchGenresList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
