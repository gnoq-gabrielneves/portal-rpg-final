import { supabase } from "@/lib/supabase";

export async function GetUser() {
  // 1. Pega usuário autenticado
  const { data: authData, error: authError } = await supabase.auth.getUser();

  if (authError) throw new Error(authError.message);

  const user = authData.user;

  if (!user) return null;

  // 2. Busca profile usando o id
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profileError) throw new Error(profileError.message);

  // 3. Retorna tudo junto
  return {
    ...user,
    profile,
  };
}
