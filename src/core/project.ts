import ServiceType from "./service_type";

export interface Project {
    costumer: string;
    description: string;
    service_type: string[];
    stack: string[];
    image?: string;
    external_link?: string;
}