import { Footer } from "@/components/common/Footer";
import { ProfileMenu } from "@/components/common/ProfileMenu";
import ButtomUserArea from "@/components/ui/ButtomUserArea";
import {
  BsPersonSquare,
  BsLightningChargeFill,
  BsFillCalendarEventFill,
  BsFillJournalBookmarkFill,
} from "react-icons/bs";

import { FaLocationDot } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md";
export default function studentareaPage() {
  let links = [
    {
      id: 1,
      title: "Cursos",
      icon: <BsLightningChargeFill />,
      link: "#",
      filter: 1,
    },
    {
      id: 2,
      title: "Hitórico de inscrições",
      icon: <BsFillJournalBookmarkFill />,
      link: "#",
      filter: 1,
    },
    { id: 3, title: "Locais", icon: <FaLocationDot />, link: "#", filter: 1 },
    {
      id: 4,
      title: "Seja voluntário(a)",
      icon: <MdVolunteerActivism />,
      link: "#",
      filter: 1,
    },
    {
      id: 5,
      title: "Agendamento natação",
      icon: <BsFillCalendarEventFill />,
      link: "#",
      filter: 1,
    },
  ];

  return (
    <>
      <ProfileMenu />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <h1 className="my-3 text-2xl font-medium flex items-center space-x-4 text-gray-500">
          <BsPersonSquare className="mr-3" /> Minha área
        </h1>
        <div className="bg-white p-3 rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((link) => (
              <ButtomUserArea
                key={link.id}
                href={link.link}
                icon={link.icon}
                text={link.title}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
