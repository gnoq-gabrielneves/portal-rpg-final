import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CharacterCard } from "@/features/characters/components/CharacterCard";

export default function CharactersPage() {
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <CardHeader>
          <CardTitle>Funcionalidades</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>

        <CardContent></CardContent>
      </Card>

      <div>
        <CharacterCard />
      </div>
    </div>
  );
}
