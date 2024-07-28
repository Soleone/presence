"use client";

import Link from "next/link";
import { config } from "../data/config";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="text-center flex gap-4 justify-center mt-4">
      {config.navigation.map(({ path, label }) => (
        <Link className={pathname == path ? 'font-bold' : ''} key={path} href={path}>{label}</Link>
      ))}
    </nav>
  );
};