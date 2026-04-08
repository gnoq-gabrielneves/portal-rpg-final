"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { useUser } from "@/hooks/useUser";
import {
  ChevronsUpDownIcon,
  LogOutIcon,
  UserIcon,
  VerifiedIcon,
} from "lucide-react";

export function UserFooter() {
  // Hook
  const { data: user, isLoading } = useUser();

  // Caso 1: Carregando
  if (isLoading) {
    return (
      <div className="flex flex-row items-center text-muted-foreground gap-2 text-sm justify-center">
        <Spinner />
        Carregando...
      </div>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size={"lg"}
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-gray-100 cursor-pointer"
            >
              <Avatar>
                <AvatarImage src={user?.profile.avatar_url} />
                <AvatarFallback className="rounded-lg bg-amber-600 text-white">
                  <UserIcon />
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {user?.profile.full_name}
                </span>
                <span className="truncate text-xs text-gray-500">
                  @{user?.profile.username}
                </span>
              </div>
              <ChevronsUpDownIcon
                className="ml-auto size-4"
                strokeWidth={1.5}
              />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-30 rounded-lg"
            side="bottom"
            align="end"
            sideOffset={4}
          >
            {/* Profile */}
            <DropdownMenuItem>
              <VerifiedIcon />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* Excluir */}
            <DropdownMenuItem variant="destructive">
              <LogOutIcon />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
