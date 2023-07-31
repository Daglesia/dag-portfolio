import { PATHS } from "@/assets/constants/paths";

export default defineNuxtRouteMiddleware((to, _from) => {
    const router = useRouter();
    if (to.path === PATHS.about.default) {
        router.push(PATHS.about.work);
    }
});