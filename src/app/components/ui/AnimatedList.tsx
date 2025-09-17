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
    // ✅ Keep only valid ReactElements with correct typing
    const childrenArray = useMemo(() => {
      return React.Children.toArray(children).filter((child): child is ReactElement =>
        isValidElement(child)
      );
    }, [children]);

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
          const isActive = i === 1; // highlight the 2nd item

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
              {/* ✅ Safe access to children since we filtered for ReactElement */}
              {React.isValidElement(item) && item.props.children}
            </div>
          );
        })}
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";