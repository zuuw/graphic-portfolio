import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "../../../data/projects";

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <Image
        src={project.image}
        alt={project.name}
        width={800}
        height={500}
        className="rounded-2xl shadow-lg mb-6"
      />
      <p className="text-lg text-gray-700">{project.description}</p>
    </div>
  );
}
