"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { CiLight, CiDark } from 'react-icons/ci';

import { cn } from "@/lib/utils"

const DarkModeSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-input data-[state=checked]:bg-slate-700",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 bg-foreground data-[state=unchecked]:bg-background"
      )}
    >
      {props.checked ? <CiDark className="w-5 h-5 text-background" /> : <CiLight className="w-5 h-5" />}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
))
DarkModeSwitch.displayName = SwitchPrimitives.Root.displayName

export { DarkModeSwitch }
