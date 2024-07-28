import Image from "next/image";
import { config } from "@/app/data/config";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="text-4xl font-bold text-center mt-8">{config.site.title}</h1>
      </header>
    </main>
  );
}
