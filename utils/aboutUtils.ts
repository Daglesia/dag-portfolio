import { SkillMap } from "@/assets/constants/skills";
import { SkillDataItem, WorkDataItem } from "@/types/props";

export const getSkillsArrayFromIds = (ids: string[]): SkillDataItem[] => {
    const skills = ids.map(id => {
        return {
            skill: SkillMap.get(id),
            name: id,
        };
    });
    return (skills?.filter(skill => skill.skill !== undefined) ?? []) as SkillDataItem[];
};

export const getWorkItemsWithParticularSkill = (skillDataItem: SkillDataItem, workItemsAvailable: WorkDataItem[]): WorkDataItem[] => {
    return workItemsAvailable.filter(workItem => workItem.skills.includes(skillDataItem.name));
};
