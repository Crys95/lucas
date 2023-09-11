import { HorizontalDivider } from "@/app/components/divider/horizontal";
import { SectionTitles } from "@/app/components/section-title";
import { ProjectCard } from "./projectCard";
import { Link } from "@/app/components/Link";
import { HiArrowNarrowRight } from "react-icons/hi";

export const Projects = () => {
  return (
    <section className="container py-16">
      <SectionTitles subtitle="destaques" titlte="Projetos" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href={"/projects"} className="inline-flex bg-emerald-400/30 p-2 rounded hover:bg-emerald-400/70 hover:text-gray-100 ">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};
