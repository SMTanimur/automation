import Image from "next/image";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Welcome to my website</h1>
     <Button>
        <span>Click me</span>
     </Button>
    </main>
  );
}
