import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
export const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : "yellow";
  return (
    <Badge fontSize={14} padding={2} borderRadius={2} colorScheme={color}>
      {score}
    </Badge>
  );
};
