import { Stacks } from "./enums/stacks";

export interface Project {
    costumer: string;
    description: string;
    stack: Stacks[];
    image?: string;
    external_link?: string;
}