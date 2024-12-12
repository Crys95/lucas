'use client'

import { TechBadge } from '@/app/components/tech-badge'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ParticleComponent } from '@/app/components/particles/Particules'

const Experiencias = [
  { name: 'JavaScript' },
  { name: 'Typescript' },
  { name: 'ReactJs' },
  { name: 'NextJs' },
  { name: 'React Native' },
  { name: 'Tailwind' },
  { name: 'Styled Components' },
  { name: 'Material Ui' },
  { name: 'PHP' },
  { name: 'Laravel' },
  { name: 'NodeJs' },
  { name: 'Redux' },
  { name: 'ContextApi' },
  { name: 'Microsserviços' },
  { name: 'MySQL' },
  { name: 'Docker' },
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
          <p className="font-mono text-indigo-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">
            Crystyan Gomes de Moura Ferreira
          </h2>
          <p className="text-gray-200 my-6 text-base sm:text-base">
            A constante vontade de melhorar é meu combustível. Vejo cada desafio
            como uma maneira de me desafiar, de expandir meu conhecimento e de
            crescer profissional e pessoalmente. A jornada da programação é uma
            estrada interminável, e estou ansioso para percorrê-la, sempre
            buscando me tornar o melhor desenvolvedor que posso ser.
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
            src="/images/crystyan7.jpg"
            alt="foto de perfil"
            className="p-1 border-2 border-indigo-500 w-[300px] h-full lg:w-[420px] mb-6 lg:mb-0 lg:rounded-lg rounded-full object-cover hover:shadow-button hover:border-indigo-200 transition-all"
          />
        </motion.div>
      </div>
    </section>
  )
}
