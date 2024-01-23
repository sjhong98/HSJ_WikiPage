import { atom } from "recoil";
import { v1 } from "uuid";
import { recoilPersist } from "recoil-persist";

const localStorage = typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
    key: 'post',
    storage: localStorage
})

export interface PostType {
    title: string
    content: string
    id: number
}

export const postStore = atom<PostType[]>({
    key: `postStore/${v1()}`,
    default: [],
    effects_UNSTABLE: [persistAtom]
})