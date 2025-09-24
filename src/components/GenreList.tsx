import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";
import { useGenre, type Genre } from "./hooks/useGenre";
import getCropImgUrl from "./services/img-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  if (!data) return null;
  return (
    <>
      <Heading>Genres</Heading>
      {data.map((genre) => (
        <List.Root>
          <List.Item paddingY="5px" paddingX="5px" key={genre.id}>
            <HStack gap={3}>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCropImgUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="subtle"
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        </List.Root>
      ))}
    </>
  );
};

export default GenreList;
