"use client";

import Link from "next/link";
import { config } from "../config";
import { usePathname } from "next/navigation";
import cl from "clsx";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="text-center flex gap-4 justify-center mt-4">
      {config.navigation.map(({ path, label }) => (
        <Link className={cl(pathname == path ? 'border-b' : '', 'hover:border-b')} key={path} href={path}>{label}</Link>
      ))}
    </nav>
  );
};