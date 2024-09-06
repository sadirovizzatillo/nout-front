import { useFetch } from "nuxt/app"
export const useAPIFetch = (path, options = {}) => {
    const config = useRuntimeConfig()
    
    options.baseURL = config.public.BASE_URL
    return useFetch(path, options)
}