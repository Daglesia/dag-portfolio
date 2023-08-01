import { Skill } from "@/types/props";

export const SkillMap = new Map<string, Skill>([
    ["vuejs", { icon: "fa6-brands:vuejs", displayName: "Vue.js" }],
    ["aws", { icon: "logos:aws", displayName: "AWS" }],
    ["sass", { icon: "logos:sass", displayName: "Sass" }],
    ["css", { icon: "logos:css-3-official", displayName: "CSS" }],
    ["typescript", { icon: "bxl:typescript", displayName: "TypeScript" }],
]);