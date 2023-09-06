"use client";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { SectionTitles } from "../section-title";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const ContactForm = () => {
  const contactiFormScgema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
  });

  type ContactFormData = z.infer<typeof contactiFormScgema>;

  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactiFormScgema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };
  return (
    <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitles
          subtitle="Contato"
          titlte="Vamos Trabalhar justos? Entre em contato"
          className="items-center text-center"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 w-full flex flex-col gap-4"
        >
          <input
            {...register("name")}
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="E-mail"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <textarea
            {...register("message")}
            placeholder="Mensagem"
            maxLength={500}
            className="resize-none w-full h-[130px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <Button type="submit" className="mt-6">
            Enviar mensagen <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
};