import { IClassVariantButton } from "@/interfaces/classVariantButton";
import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "default" | "secondary" | "outline",
    children: React.ReactNode,
    className?:string

}
export default function Button({
    variant,
    children,
    className,
    ...props
    
}: IButtonProps):React.ReactNode{

    const variantClass: IClassVariantButton = {
        default: "",
        secondary: "",
        outline: "border border-[var(--color-gray)] hover:bg-[var(--color-gray-light)] transition-colors duration-400",
    }
    return (
        <button {...props} className={`p-2 rounded-[var(--border-radius-small)] cursor-pointer ${variantClass[variant]} ${className}`}>{children}</button>
    )
}