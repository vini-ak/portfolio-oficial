import { Stacks } from "../../core/enums/stacks";
import { Project } from "../../core/project";

export const ProjectList: Project[] = [
    {
        costumer: "Fábrica de espelhos",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi laborum ea repellendus voluptates hic quasi esse numquam iusto dicta. Nihil rerum ex placeat cupiditate non dolor aspernatur ipsam ad earum explicabo doloremque, odit fugiat dolores sit nam. Aliquam, quaerat!",
        external_link: "texte.com",
        stack: [Stacks.Flutter, Stacks.Django],
        image: undefined,
    },
    {
        costumer: "Imunus",
        description: "descrtição do imunus",
        external_link: undefined,
        image: undefined,
        stack: [Stacks.Flutter, Stacks.Firebase],
    },
    {
        costumer: "Empresa de telecomunicações",
        description: "descrtição do imunus",
        external_link: undefined,
        image: undefined,
        stack: [Stacks.Angular],
    }

];