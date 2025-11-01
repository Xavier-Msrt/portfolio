import {TagInterface} from "@/types/TagInterface";

export interface ProjectInterface {
    name: string;
    wip: boolean;
    description: string;
    link?: string;
    picture: string;
    github: string | { frontend: string, backend: string};
    tags?: TagInterface[];
}