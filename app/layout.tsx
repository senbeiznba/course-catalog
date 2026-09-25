import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* Добавляем класс dark на html, чтобы Tailwind активировал темную тему по умолчанию */
    <html lang="ru" className={cn("dark font-sans", geist.variable)}>
      {/* 
        Исправлен className: убран дубликат. 
        bg-black сделает фон абсолютно черным на всех страницах!
      */}
      <body className="bg-black text-zinc-50 min-h-screen antialiased">
        <nav className="flex gap-6 p-4 border-b border-zinc-800 max-w-5xl mx-auto">
          <Link href="/" className="hover:text-blue-500 font-medium transition-colors">
            Главная
          </Link>
          <Link href="/courses" className="hover:text-blue-500 font-medium transition-colors">
            Курсы
          </Link>
          <Link href="/about" className="hover:text-blue-500 font-medium transition-colors">
            О нас
          </Link>
        </nav>
        
        <main className="max-w-5xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}