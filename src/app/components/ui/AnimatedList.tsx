"use client";

import { cn } from "../../lib/utils";
import React, {
  ComponentPropsWithoutRef,
  useMemo,
  ReactNode,
  ReactElement,
  isValidElement,
} from "react";

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  activeIndex: number; // controlled from parent
}

export const AnimatedList = React.memo(
  ({ children, className, activeIndex, ...props }: AnimatedListProps) => {
    // Only keep valid ReactElements
    const childrenArray = useMemo(
      () =>
        React.Children.toArray(children).filter(isValidElement) as ReactElement[],
      [children]
    );

    // Rotate list based on activeIndex
    const rotatedArray = useMemo(() => {
      return [
        ...childrenArray.slice(activeIndex),
        ...childrenArray.slice(0, activeIndex),
      ];
    }, [childrenArray, activeIndex]);

    return (
      <div
        className={cn("flex flex-col items-center gap-4", className)}
        {...props}
      >
        {rotatedArray.map((item, i) => {
          const isActive = i === 1; // always highlight the 2nd item
          const element = item as ReactElement; // ✅ safe cast

          return (
            <div
              key={i}
              className={cn(
                "w-[200px] h-[47px] rounded-xl flex items-center justify-center transition-all duration-500",
                isActive
                  ? "bg-black border-2 border-blue-500"
                  : "bg-[#2A2A2A] text-white border border-transparent"
              )}
            >
              {element.props.children}
            </div>
          );
        })}
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";
