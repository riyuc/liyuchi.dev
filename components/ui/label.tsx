import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LabelProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  as?: React.ElementType;
  title?: string;
  href?: string;
  children?: React.ReactNode;
}

export const Label = ({
  className,
  as: Component = "div",
  title,
  href,
  children,
  ...props
}: LabelProps) => {
  const Wrapper = href ? Link : Component;
  
  return (
    <Wrapper
      className={cn(
        "flex flex-row items-center justify-center gap-x-2",
        href && "hover:opacity-75 transition-all",
        className
      )}
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      {title && <p className="text-black dark:text-custom-offwhite">{title}</p>}
    </Wrapper>
  );
};

export default Label;