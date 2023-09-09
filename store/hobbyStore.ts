import { defineStore } from "pinia";
import { HobbyDataItem } from "@/types/props";

export const useHobbyStore = defineStore("hobby", () => {
    const hobbyData = ref<HobbyDataItem[]>([]);

    const fetchHobbyData = async (): Promise<void> => {
        const { data } = await useFetch<HobbyDataItem[]>("/api/hobbies");
        hobbyData.value = data.value ?? [] as HobbyDataItem[];
    };

    return { hobbyData, fetchHobbyData };
});