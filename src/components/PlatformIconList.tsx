import { Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  return (
    <>
      {platforms.map((platform) => (
        <Text>{platform.name}</Text>
      ))}
    </>
  );
}

export default PlatformIconList;
