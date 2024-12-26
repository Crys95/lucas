'use client'
import { SectionTitles } from '@/app/components/section-title'
import { KnownTech } from './known-tech'
import { motion } from 'framer-motion'
import { SiJira, SiMiro, SiPostman, SiVtex } from "react-icons/si"
import { FaConfluence, FaPinterest } from "react-icons/fa"
import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandLaravel,
  TbBrandDocker,
  TbBrandMysql,
  TbBrandPhp,
} from 'react-icons/tb'
import { BsFiletypeSql } from 'react-icons/bs'
import { IoIosDocument } from 'react-icons/io'

const stack = [
  {
    icon: <BsFiletypeSql size={30} />,
    name: 'SQL',
    startDate: '2018-05-30',
  },
  {
    icon: <SiJira size={30} />,
    name: 'JIRA',
    startDate: '2021-01-30',
  },
  {
    icon: <SiPostman size={30} />,
    name: 'POSTMAN',
    startDate: '2021-01-30',
  },
  {
    icon: <FaConfluence size={30} />,
    name: 'CONFLUENCE',
    startDate: '2021-01-30',
  },
  {
    icon: <FaPinterest size={30} />,
    name: 'API REST',
    startDate: '2021-01-30',
  },
  {
    icon: <IoIosDocument size={30} />,
    name: 'DOC. TÉCNICA',
    startDate: '2021-01-30',
  },
  {
    icon: <IoIosDocument size={30} />,
    name: 'DOC. NEGÓCIO',
    startDate: '2021-01-30',
  },
  {
    icon: <SiMiro size={30} />,
    name: 'MIRO',
    startDate: '2023-03-30',
  },
  {
    icon: <SiVtex size={30} />,
    name: 'VTEX',
    startDate: '2022-03-30',
  },
]

export const KnownTeachs = () => {
  return (
    <section className="bg-slate-900">
      <div className="container py-16">
        <SectionTitles subtitle="competências" titlte="Conhecimentos" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
          {stack.map((stak, i) => (
            <motion.div
              key={stak.name}
              initial={{ opacity: 0, x: -100 }}
              exit={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <KnownTech
                tech={{
                  icon: stak.icon,
                  name: stak.name,
                  startDate: stak.startDate,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
