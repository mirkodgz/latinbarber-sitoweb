import type { ComponentProps, ElementType } from "react";

type ContainerProps<T extends ElementType> = ComponentProps<T> & {
  as?: T;
  className?: string;
};

export default function Container<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...props
}: ContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={`mx-auto w-full max-w-[1200px] px-4 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

