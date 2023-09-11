import Image from "next/image";

import ImgAppContacts from "@/assets/projects/contacts.jpg";
import ImgCapsulaDoTempo from "@/assets/projects/capsula-do-tempo.jpg";
import ImgTwitterUi from "@/assets/projects/twitter-ui.jpg";
import ImgLoctrazUi from "@/assets/projects/ui-design-loctraz.jpg";
import ImgHeroSectionDesign from "@/assets/projects/hero-section-design.jpg";
import ImgDesafiosBoraCodar from "@/assets/projects/desafios-bora-codar.jpg";
import ImgHabits from "@/assets/projects/habits.jpg";
import ImgKanbanApp from "@/assets/projects/kanban-app.jpg";

interface ImageProjectProps {
  projectName: string;
}

export function ImageProject({ projectName }: ImageProjectProps) {
  let imagePath = ImgAppContacts;

  if (projectName === "app-contacts-ui-react-native") {
    imagePath = ImgAppContacts;
  }
  if (projectName === "capsula-do-tempo") {
    imagePath = ImgCapsulaDoTempo;
  }

  if (projectName === "twitter-ui-react") {
    imagePath = ImgTwitterUi;
  }

  if (projectName === "loctraz-ui") {
    imagePath = ImgLoctrazUi;
  }

  if (projectName === "hero-section-design") {
    imagePath = ImgHeroSectionDesign;
  }

  if (projectName === "desafios-bora-codar") {
    imagePath = ImgDesafiosBoraCodar;
  }

  if (projectName === "habits") {
    imagePath = ImgHabits;
  }

  if (projectName === "kanban-app") {
    imagePath = ImgKanbanApp;
  }

  return (
    <div className="relative w-full mobile:h-[200px] desktop:h-full">
      <Image
        src={imagePath}
        alt="Project Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
