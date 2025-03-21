
export interface ButtonProps{
    text: string;
    image?: string;
    id?: string;
    action?: string;
    short?: boolean;
    onClick?: () => void;
}