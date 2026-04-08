import { SidebarTrigger } from "../ui/sidebar";

interface Props {
  title: string;
  description: string;
}

export function AppHeader({ title, description }: Props) {
  return (
    <header className="h-20 border-b flex items-center gap-3 px-5">
      <SidebarTrigger className="md:hidden" />
      <div>
        <h1 className="text-[18px]">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </header>
  );
}
