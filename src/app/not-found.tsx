"use client";

import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col gap-2 items-center bg-white p-5 rounded-2xl border">
        <img src="error.png" alt="" className="w-[20%] mb-5" />
        <p>
          Esta página não existe ou está em manutenção, para mais informações
          verifique nosso{" "}
          <a
            href="https://discord.gg/zmndfr4m24"
            className="underline text-blue-400"
          >
            Discord
          </a>
          .
        </p>
        <Button onClick={() => router.push("/home")}>
          <HomeIcon />
          Início
        </Button>
      </div>
    </div>
  );
}
