import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/courses"; // Импортируем массив с правильными ID

export default function CoursesPage() {
  return (
    <div className="space-y-6 py-6">
      <h1 className="text-3xl font-bold text-zinc-50">Каталог курсов</h1>
      
      {/* Адаптивная сетка Lab 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id} // Передаст "modern-frontend", "backend-fastapi" и т.д.
            title={course.title}
            description={course.description}
            likes={course.likes}
          />
        ))}
      </div>
    </div>
  );
}