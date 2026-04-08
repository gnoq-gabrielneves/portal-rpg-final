import { supabase } from "@/lib/supabase";
import { ICharacter } from "@/types/character.types";

export const GetCharacters = async (): Promise<ICharacter[]> => {
  // 1. Pega usuário logado
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) throw new Error(authError.message);

  if (!user) return []; // 👈 evita erro

  // 2. Busca personagens
  const { data, error } = await supabase
    .from("characters")
    .select("*")
    .eq("created_by", user.id);

  if (error) throw new Error(error.message);

  // 3. Garante retorno consistente
  return data ?? [];
};
