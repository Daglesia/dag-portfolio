import { defineStore } from "pinia";
import { WorkDataItem } from "@/types/props";

export const useWorkStore = defineStore("work", () => {
    const workData = ref();

    const getWorkData = async () => {
        if (!workData.value) {
            const { data } = await useFetch<WorkDataItem[]>("/api/work");
            workData.value = data;
        };
        return workData.value;
    };

    return { getWorkData };
});