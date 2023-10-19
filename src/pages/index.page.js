import { Footer } from "@/components/common/Footer";
import { SectionRowTwo } from "@/components/SectionRowTwo";
import { SectionHome } from "@/components/SectionHome";
import { Navbar } from "@/components/common/Navbar";
import { Category } from "@/components/Category";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionHome
        title="Simplificando seu estilo de vida"
        paragraph="Conhença a nova plataforma dos Cursos Esportivos de São Bernardo
                do Campo, esqueça as grandes filas e escolha o seu curso no
                conforto da sua casa."
        button="Começar gratuitamente"
      />
      <div className="container mx-auto my-5">
        <Category />
      </div>
      <div className="bg-white">
        <div className="container mx-auto">
          <SectionRowTwo
            title="Você em movimento"
            paragraph="As inscrições pelo site ficarão disponíveis durante todo o ano,
          e o munícipe interessado, poderá acompanhar e se inscrever
          gratuitamente para as vagas disponíveis."
            img="/img/undraw_mobile_ux_re_59hr.svg"
            alt="Homem com camisa laranja, olhando para um celular."
          />
        </div>
      </div>
      <div className="container mx-auto">
        <SectionRowTwo
          title="Esporte que trânsforma"
          paragraph="A participação em todas as atividades é totalmente gratuita,
          porém, as vagas são limitadas e destinadas a moradores do
          munícipio escolha o local, modalidade e itensidade."
          img="/img/banner-2.png"
          alt="Homem com camisa laranja, olhando para um celular."
        />
      </div>
      <Footer />
    </>
  );
}
