import { HobbyDataItem, SkillDataItem, SkillDataResponse, WorkDataItem } from "@/types/props";
import { SkillMap } from "@/assets/constants/skills";

export default defineNuxtPlugin((nuxtApp) => {
    let workData: Ref<WorkDataItem[] | null>;
    let hobbyData: Ref<HobbyDataItem[] | null>;
    let skillsData: Ref<SkillDataResponse[] | null>;
    
    const skillsDataFormatted = computed<SkillDataItem[]>(()=> skillsData.value?.map(item => {
        return {
            startDate: item.startDate,
            skill: SkillMap.get(item.name),
            name: item.name,
        } as SkillDataItem;
    }) ?? [] as SkillDataItem[]);

    let loading: boolean = true;

    nuxtApp.hook("app:created", async () => {
        const { data: workResponse, pending: workDataPending } = useFetch<WorkDataItem[]>("/api/work");
        workData = workResponse.value ? workResponse : ref<WorkDataItem[]>([]);

        const { data: hobbiesResponse, pending: hobbyDataPending } = useFetch<HobbyDataItem[]>("/api/hobbies");
        hobbyData = hobbiesResponse.value ? hobbiesResponse : ref<HobbyDataItem[]>([]);

        const { data: skillsResponse, pending: skillsDataPending } = useFetch<SkillDataResponse[]>("/api/skills");
        skillsData = skillsResponse.value ? skillsResponse : ref<SkillDataResponse[]>([]);

        loading = false;
    });
    return {
        provide: {
            workData: () => workData,
            hobbyData: () => hobbyData,
            skillsData: () => skillsDataFormatted,
            loading: () => loading,
        }
    };
});