import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuary, setGameQuery] = useState({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuary, genre })}
            selectedGenre={gameQuary.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} marginBottom={3} paddingLeft={2}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuary, platform })
            }
            selectedPlatform={gameQuary.platform}
          />
          <SortSelector
            sortOrder={gameQuary.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuary, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuary} />
      </GridItem>
    </Grid>
  );
}

export default App;
