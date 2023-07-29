export default defineNuxtRouteMiddleware((to, _from) => {
    const router = useRouter();
    if (to.path === "/about/") {
        router.push("/about/work");
    }
});