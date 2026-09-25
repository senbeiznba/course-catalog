import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
      <h2 className="text-4xl font-extrabold text-zinc-100">404 — Курс не найден</h2>
      <p className="text-zinc-400 max-w-md">
        Запрошенный курс не существует или был удален из каталога.
      </p>
      <Link href="/courses">
        <Button variant="default">Вернуться в каталог</Button>
      </Link>
    </div>
  );
}