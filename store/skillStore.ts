import { defineStore } from "pinia";
import { SkillDataItem, SkillDataResponse } from "@/types/props";
import { SkillMap } from "@/assets/constants/skills";

export const useSkillStore = defineStore("skill", () => {
    const skillData = ref<SkillDataItem[]>([]);

    const fetchSkillData = async (): Promise<void> => {
        const { data } = await useFetch<SkillDataResponse[]>("/api/skills");
        skillData.value = data.value?.map(item => {
            return {
                startDate: item.startDate,
                skill: SkillMap.get(item.name),
                name: item.name,
            } as SkillDataItem;
        }) ?? [];
    };

    return { skillData, fetchSkillData };
});