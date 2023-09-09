import { defineStore } from "pinia";
import { WorkDataItem } from "@/types/props";

export const useWorkStore = defineStore("work", () => {
    const workData = ref<WorkDataItem[]>([]);

    const fetchWorkData = async (): Promise<void> => {
        const { data } = await useFetch<WorkDataItem[]>("/api/work");
        workData.value = data.value ?? [] as WorkDataItem[];
    };

    return { workData, fetchWorkData };
});