import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  likes: number;
}

export default function CourseCard({ id, title, description, likes }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <Card className="hover:shadow-md transition bg-zinc-900 border-zinc-800 text-zinc-100 h-full flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-zinc-400 text-sm">{description}</p>
          <div className="flex items-center justify-between pt-2">
            <Button variant="ghost" size="sm" className="hover:bg-zinc-800">
              ❤️ {likes}
            </Button>
            <span className="text-xs text-blue-400 font-medium">
              Подробнее &rarr;
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}