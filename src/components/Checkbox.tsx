import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { ReactNode } from "react";

export type CheckboxProps = CheckboxPrimitive.CheckboxProps & {};

export const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 p-[2px] bg-gray-800 rounded"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
