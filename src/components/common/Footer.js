import { FaWhatsapp, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
export function Footer() {
  const links = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      link: "https://api.whatsapp.com/send/?phone=551126307421&text=Ol%C3%A1%2C+Cursos+Esportivos+SBC%21&type=phone_number&app_absent=0",
    },
    {
      id: 2,
      icon: <FaFacebook />,
      link: "https://www.facebook.com/cursosesportivossbc",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      link: "https://www.instagram.com/cursosesportivossbc/",
    },
    {
      id: 4,
      icon: <FaYoutube />,
      link: "https://www.youtube.com/cursosesportivossbc",
    },
  ];
  return (
    <>
      <footer className="bg-white py-3 text-gray-600">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-2">
            <div className="">
              <p>
                Secretaria de Esportes e Lazer - Prefeitura de São Bernardo do
                Campo
                <br />
                Secretário: Alex Mognon | Prefeito: Orlando Morando
                <br />
                Av. Kennedy, 1155 - Bairro Anchieta - 09726-263 - Tel.: 11
                2630-7466
              </p>
            </div>
            <div className="flex items-center justify-center">
              {links.map((links) => (
                <a
                  key={links.id}
                  href={links.link}
                  className="transition ease-in-out delay-150  
                  bg-blue-900 text-white text-center h-14 w-14
                  rounded-full drop-shadow-md flex flex-col
                  items-center justify-center m-2
                  hover:-translate-y-1 hover:scale-40
                  hover:bg-gray-500 duration-300 hover:text-white"
                >
                  <span className="text-3xl block">{links.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <hr className="my-2" />
          <div className="">
            <p className="text-muted">
              Cursos Esportivos © 2023 Todos os direitos reservados
              <a
                className="text-blue-700 hover:text-blue-300"
                href="/transparencia"
              >
                {" | "}
                Transparência
              </a>
              {" | "}
              <a className="text-blue-700 hover:text-blue-300" href="#">
                Política de privacidade
              </a>
              {" | "}
              Beta v1.0
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
