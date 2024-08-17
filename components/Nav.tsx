"use client";

import Link from "next/link";
import { config } from "../config";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CiLight, CiDark } from 'react-icons/ci';
import { useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="text-center flex gap-4 justify-center mt-4">
      {config.navigation.map(({ path, label }) => (
        <Link className={cn(pathname == path ? 'border-b' : '', cn('hover:border-b', theme === 'light' ? 'border-slate-700' : 'border-slate-300'))} key={path} href={path}>{label}</Link>
      ))}

      <button onClick={toggleTheme} className="flex items-center gap-2">
        {theme === 'light' ? <CiDark className="w-5 h-5" /> : <CiLight className="w-5 h-5" />}
      </button>
    </nav>
  );
};