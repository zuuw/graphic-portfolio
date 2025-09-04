import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block group"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
