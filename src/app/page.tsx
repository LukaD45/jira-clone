import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="">
      <Input />
      <Button variant="primary">Primary</Button>
      <Button variant="secondary" size="default">
        Secondary
      </Button>
      <Button variant="destructive" size="default">
        Destructive
      </Button>
      <Button variant="ghost" size="default">
        Ghost
      </Button>
      <Button variant="muted" size="default">
        Muted
      </Button>
      <Button variant="outline" size="default">
        Outline
      </Button>
      <Button variant="teritary" size="default">
        Teritary
      </Button>
    </div>
  );
}
