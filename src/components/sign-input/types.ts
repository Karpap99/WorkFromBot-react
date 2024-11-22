

export interface SignInputProps{
    placeholder: string;
    password?: boolean;
    passwordDiffCheck?: boolean;
    setValue?: ( value: string) => void;
}