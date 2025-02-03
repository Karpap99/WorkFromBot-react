export type User = {
    uuid: string;
    name: string;
    image: string;
}

export type TInitialState = {
    user: User | null;
    isAuthed: boolean;
    lang: number;
}