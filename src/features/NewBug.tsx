"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLinkIcon, MailIcon, XIcon } from "lucide-react";
import { useState } from "react";

export function NewBug() {
  // Variaveis
  const [titulo, setTitulo] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-red-500 cursor-pointer">
          <ExternalLinkIcon />
          Abrir
        </Button>
      </DialogTrigger>

      <DialogContent showCloseButton={false} className="p-0 overflow-hidden">
        <DialogHeader className="p-5 bg-red-500">
          <DialogTitle className="text-white text-center text-[16px]">
            Relatar Bug
          </DialogTitle>
        </DialogHeader>

        <div className="px-5 pb-5 flex flex-col gap-3">
          <Input placeholder="Titulo" />
          <Input placeholder="Seu nome" />
          <Textarea placeholder="Descreva o problema" />
          <div className="grid grid-cols-2 items-center gap-2">
            <Button className="w-full" variant={"destructive"}>
              <XIcon />
              Cancelar
            </Button>

            <Button className="bg-blue-400 w-full">
              <MailIcon />
              Enviar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
