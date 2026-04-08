"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/useLogin";
import { LogInIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  // Hook
  const { mutate, isPending } = useLogin();

  // Variaveis
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Fazendo login
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    mutate({
      email: email,
      password: senha,
    });
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-row gap-3 border p-5 max-w-3xl w-full rounded-2xl bg-white">
        {/* Esquerda */}
        <div className="flex flex-col items-center justify-center w-1/2 gap-3">
          <div className="flex flex-col items-center gap-2 mb-5">
            <h1 className="text-2xl">Bem-vindo!</h1>
            <p className="text-muted-foreground text-sm">
              Coloque suas credenciais para acessar o sistema!
            </p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-3 w-full">
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              <LogInIcon />
              {isPending ? "Entrando..." : "Login"}
            </Button>
          </form>
        </div>

        {/* Direita */}
        <div className="flex flex-col w-1/2">
          <img src="login.png" alt="" className="rounded-2xl w-auto" />
        </div>
      </div>
    </div>
  );
}
