"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { ExternalLinkIcon, XIcon } from "lucide-react";
import { useGetCharacters } from "../hooks/useCharacters";

export function CharacterCard() {
  // Hook
  const { data, isLoading, error } = useGetCharacters();

  // Caso 1: Carregando
  if (isLoading) {
    return (
      <div className="flex flex-row items-center gap-2 text-muted-foreground justify-center p-5">
        <Spinner />
        <span>Carregando personagens...</span>
      </div>
    );
  }

  // Caso 2: Erro
  if (error) {
    return (
      <div>
        <p>Erro ao carregar.</p>
      </div>
    );
  }

  // Caso 3: Nenhum personagem criado ainda
  if (data!.length <= 0) {
    return (
      <div>
        <p>Nenhum personagem no banco de dados. Crie um primeiro!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {data?.map((item) => (
        <div key={item.id} className="border rounded-2xl p-5">
          <div className="flex justify-between">
            <div className="flex flex-row items-center gap-2">
              <img src={item.image} alt={item.name} className="w-20" />
              <div>
                <h2>{item.name}</h2>
                <h3 className="text-sm text-muted-foreground">
                  {item.location} | {item.age} anos
                </h3>
              </div>
            </div>
            <div className="flex gap-1">
              <Badge>{item.type}</Badge>
              <Badge variant={"secondary"}>
                {item.dead ? "Morto" : "Vivo"}
              </Badge>
            </div>
          </div>
          <div className="border-t mt-3 pt-5 grid grid-cols-2 gap-3">
            <Button variant={"destructive"}>
              <XIcon />
              Deletar
            </Button>
            <Button>
              <ExternalLinkIcon />
              Abrir
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
