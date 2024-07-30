import { config } from "../config";

export default function Header() {
  return (
    <header>
      <h1 className="text-4xl font-bold text-center mt-8">{config.site.title}</h1>
    </header>
  );
};