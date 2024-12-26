import { SectionTitles } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'

export const WorkExperience = () => {
  return (
    <section className="bg-slate-900">
      <div className="container py-16 flex gap-10 md:gap-4 flex-col md:flex-row lg:gap-16">
        <div className="max-w-[428px]">
          <SectionTitles
            subtitle="experiêcias"
            titlte="Experiência Profissional"
          />
          <p className="text-gray-400 mt-6">
            Product Owner com mais de 8 anos de experiência em Tecnologia da
            Informação, especializado no desenvolvimento e gestão de produtos
            digitais. Desde 2021, lidero iniciativas estratégicas que promovem
            soluções inovadoras, alinhadas às necessidades dos clientes e aos
            objetivos de negócios. Tenho sólida expertise em tecnologia,
            inovação e criação de experiências excepcionais para os usuários,
            unindo visão de produto a resultados tangíveis para as organizações.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <ExperienceItem />
        </div>
      </div>
    </section>
  )
}
