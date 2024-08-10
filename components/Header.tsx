import { config } from "../config";
import Image from '@/components/lib/Image';

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-4">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={32} height={32} isHoverable />
        <h1 className="text-4xl font-bold ml-2">{config.site.title}</h1>
      </div>
    </header>
  );
};