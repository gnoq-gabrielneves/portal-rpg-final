"use client";
import {
  FileIcon,
  HelpCircleIcon,
  HelpingHand,
  HomeIcon,
  User2Icon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { UserFooter } from "./UserFooter/UserFooter";

export function AppSidebar() {
  const router = useRouter();

  return (
    <Sidebar>
      <SidebarHeader className="h-20 border-b flex items-center gap-0 justify-center">
        <h1 className="text-[18px]">Portal RPG</h1>
        <p className="text-sm text-muted-foreground">v1.0</p>
      </SidebarHeader>

      <SidebarContent>
        {/* Padrao */}
        <SidebarGroup>
          <SidebarGroupLabel>Padrão</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => router.push("/home")}>
                  <HomeIcon />
                  Início
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Mesas */}
        <SidebarGroup>
          <SidebarGroupLabel>Mesas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => router.push("/tables")}>
                  <FileIcon />
                  Mesas
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => router.push("/characters")}>
                  <User2Icon />
                  Personagens
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Outros */}
        <SidebarGroup>
          <SidebarGroupLabel>Outros</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => router.push("/about")}>
                  <HelpCircleIcon />
                  Sobre
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => router.push("/support")}>
                  <HelpingHand />
                  Suporte
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <UserFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
