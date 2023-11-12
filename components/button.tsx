"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva("p-4 px-8 font-semibold text-white hover:bg-zinc-200 transition rounded-lg", {
  variants: {
    variant: {
      light: "bg-white text-zinc-700 border-zinc-700",
      dark: "bg-zinc-500 hover:text-zinc-600",
      red: "bg-red-500 hover:bg-red-700",
    },
    type: {
      button: "button",
      submit: "submit",
    },
  },
  defaultVariants: {
    variant: "light",
    type: "button",
  },
});

type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps {
  label: string;
  href: string;
  customisedStyle?: string;
}

export const Button = ({ label, href, variant, type }: ButtonProps & ButtonVariantsProps) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push(href)} className={cn(buttonVariants({ variant, type }))}>
      {label}
    </button>
  );
};
