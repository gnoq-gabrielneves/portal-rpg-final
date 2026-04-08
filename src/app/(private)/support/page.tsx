import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NewBug } from "@/features/NewBug";
import {
  BugIcon,
  CoffeeIcon,
  ContactIcon,
  ExternalLinkIcon,
  HelpingHandIcon,
  PaperclipIcon,
} from "lucide-react";

export default function SupportPage() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        <Card size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PaperclipIcon size={16} />
              Tipos de Licença
            </CardTitle>
            <CardDescription>
              Verifique e entenda os tiers de todas as licenças que possuímos!
            </CardDescription>
          </CardHeader>
          <CardFooter className="border-t">
            <Button className="w-full">
              <ExternalLinkIcon />
              Abrir
            </Button>
          </CardFooter>
        </Card>

        <Card size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BugIcon size={16} />
              Relatar Bug
            </CardTitle>
            <CardDescription>
              Encontrou algum problema ou algo fora do lugar? Fale conosco!
            </CardDescription>
          </CardHeader>
          <CardFooter className="border-t">
            <NewBug />
          </CardFooter>
        </Card>

        <Card size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpingHandIcon size={16} />
              Doar ao Projeto
            </CardTitle>
            <CardDescription>
              Gostou do nosso sistema e quer ajudar de alguma forma? Doe
              qualquer valor!
            </CardDescription>
          </CardHeader>
          <CardFooter className="border-t">
            <Button className="w-full bg-orange-400" asChild>
              <a href="https://buymeacoffee.com/gabrielnevesoq" target="_blank">
                <CoffeeIcon />
                Buy Me A Coffee
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ContactIcon size={16} />
              Entre em Contato!
            </CardTitle>
            <CardDescription>
              Deseja comentar sobre algo ou dar alguma ideia? Estamos a
              disposição!
            </CardDescription>
          </CardHeader>
          <CardFooter className="border-t">
            <Button className="w-full">
              <ExternalLinkIcon />
              Abrir
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
