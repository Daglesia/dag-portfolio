import { defineStore } from "pinia";
import { HobbyDataItem } from "@/types/props";

export const useHobbyStore = defineStore("hobby", () => {
    const hobbyData = ref();

    const getHobbyData = async () => {
        if (!hobbyData.value) {
            const { data } = await useFetch<HobbyDataItem[]>("/api/hobbies");
            hobbyData.value = data;
        };
        return hobbyData.value;
    };

    return { getHobbyData };
});