'use client'

import { TechBadge } from '@/app/components/tech-badge'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ParticleComponent } from '@/app/components/particles/Particules'

export const Experiencias = [
  { name: 'Jira' },
  { name: 'Confluence' },
  { name: 'Postman API' },
  { name: 'PL/SQL' },
  { name: ' Vtex' },
  { name: 'Scrum' },
  { name: 'Plataforma de Rastreabilidade' },
  { name: 'Documentação Técnica' },
  { name: 'Documentação do negócios' },
  { name: 'API Rest' },
  

]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-full bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <ParticleComponent />
      <div className="container rounded flex items-start flex-col-reverse lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:max-w-[530px]"
        >
          <p className="font-mono text-amber-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">
            Lucas Pereira de Souza
          </h2>
          <p className="text-gray-200 my-6 text-base sm:text-base">
          Product Owner com mais de 8 anos de experiência em Tecnologia da Informação, especializado no desenvolvimento e gestão de produtos digitais. Desde 2021, lidero iniciativas estratégicas que promovem soluções inovadoras, alinhadas às necessidades dos clientes e aos objetivos de negócios. Tenho sólida expertise em tecnologia, inovação e criação de experiências excepcionais para os usuários, unindo visão de produto a resultados tangíveis para as organizações.

          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[550px]">
            {Experiencias.map((value, i) => (
              <TechBadge
                key={`intro-tech-${value.name}`}
                name={value.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:h-[500px] flex items-center justify-center lg:ml-36"
        >
          <Image
            width={420}
            height={420}
            src="/images/lucassouza2.jpg"
            alt="foto de perfil"
            className="p-1 border-2 border-amber-500 w-[300px] h-full lg:w-[420px] mb-6 lg:mb-0 lg:rounded-lg rounded-full object-cover hover:shadow-button hover:border-amber-200 transition-all"
          />
        </motion.div>
      </div>
    </section>
  )
}
