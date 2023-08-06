import { SkillMap } from "@/assets/constants/skills";
import { SkillDataItem } from "@/types/props";

export const getSkillsArrayFromIds = (ids: string[]): SkillDataItem[] => {
    const skills = ids.map(id => {
        return {
            skill: SkillMap.get(id),
            name: id,
        };
    });
    return (skills?.filter(skill => skill.skill !== undefined) ?? []) as SkillDataItem[];
};