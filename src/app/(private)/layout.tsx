"use client";
import { AppHeader } from "@/components/AppHeader/AppHeader";
import { AppSidebar } from "@/components/AppSidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Configurando os titulos das paginas
  const pathname = usePathname();
  const pageConfig: Record<string, { title: string; description: string }> = {
    // Home
    "/home": {
      title: "Início",
      description:
        "Bem-vindo ao nosso portal! Pronto pra começar ou continuar suas aventuras?",
    },
    "/about": {
      title: "Sobre",
      description:
        "Informações sobre o sistema, e o que você pode encontrar por aqui!",
    },
    "/support": {
      title: "Suporte",
      description: "Entre com contato com a gente!",
    },
  };
  const page = pageConfig[pathname];

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <AppHeader title={page.title} description={page.description} />
        <section className="w-full p-5">{children}</section>
      </main>
    </SidebarProvider>
  );
}
