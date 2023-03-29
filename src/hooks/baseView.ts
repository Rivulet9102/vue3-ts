import { useRouter } from "vue-router";
export const baseView = () => {
    const router = useRouter();
    const toView = (path: string) => {
        router.push({ path: path })
    }
    const logout = () => {
        localStorage.setItem('token', '')
        router.push('/')
    }
    return {
        toView,
        logout
    }
}