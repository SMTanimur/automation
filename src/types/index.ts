import { Icons } from "~/components/ui/Icons";

export type IColor =
  | "rose"
  | "green"
  | "blue"
  | "yellow"
  | "red"
  | "gray"
  | "purple"
  | "indigo"
  | "pink"
  | "orange"
  | "teal"
  | "cyan"
  | "violet";


  export enum EdgeStyleTypes {
    DEFAULT = "default",
    STRAIGHT = "straight",
    STEP = "step",
    SMOOTH_STEP = "smoothstep",
    SIMPLE_BEZIER = "simplebezier",
  }


export interface ISocialLink {
  id: number;
  url: string;
  icon: keyof typeof Icons;
}

export interface ITeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  socialLinks: ISocialLink[];
}

