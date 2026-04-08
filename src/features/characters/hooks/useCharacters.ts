import { useQuery } from "@tanstack/react-query";
import { GetCharacters } from "../services/characters";

export function useGetCharacters() {
  return useQuery({
    queryKey: ["get-characters"],
    queryFn: GetCharacters,
  });
}
