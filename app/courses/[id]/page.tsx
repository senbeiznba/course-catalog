import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Находим только один курс по id
  const course = courses.find((c) => c.id === id);

  // Если курс не найден, вызываем 404
  if (!course) {
    notFound();
  }

  return (
    <div className="py-8 space-y-6 max-w-3xl mx-auto text-zinc-100">
      <Link href="/courses">
        <Button variant="outline" size="sm" className="mb-4">
          &larr; Назад к каталогу
        </Button>
      </Link>

      <Card className="bg-zinc-900 border-zinc-800 text-zinc-100 shadow-xl">
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
            {course.isElective && (
              <span className="bg-blue-600/20 text-blue-400 text-xs px-2.5 py-1 rounded-full border border-blue-500/30">
                Электив
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-zinc-300 text-base leading-relaxed">
            {course.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-zinc-800 text-sm text-zinc-400">
            <div>Кредиты: <strong className="text-zinc-100">{course.credits} ECTS</strong></div>
            <div>Лайки: <strong className="text-zinc-100">❤️ {course.likes}</strong></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}