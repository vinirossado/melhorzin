"use client"

import * as React from "react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetOverlay,
  SheetPortal,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

import { cn } from "@/lib/utils"

function Drawer(props: React.ComponentProps<typeof Sheet>) {
  return <Sheet {...props} />
}

function DrawerTrigger(props: React.ComponentProps<typeof SheetTrigger>) {
  return <SheetTrigger {...props} />
}

function DrawerPortal(props: React.ComponentProps<typeof SheetPortal>) {
  return <SheetPortal {...props} />
}

function DrawerClose(props: React.ComponentProps<typeof SheetClose>) {
  return <SheetClose {...props} />
}

function DrawerOverlay({ className, ...props }: React.ComponentProps<typeof SheetOverlay>) {
  return <SheetOverlay className={cn("fixed inset-0 z-50 bg-black/50", className)} {...props} />
}

function DrawerContent({ className, children, side = "right", ...props }: React.ComponentProps<typeof SheetContent> & { side?: "top" | "right" | "bottom" | "left" }) {
  return (
    <SheetContent side={side} className={cn("bg-background fixed z-50 flex flex-col gap-4 shadow-lg", className)} {...props}>
      {children}
      <SheetClose className="absolute top-4 right-4" />
    </SheetContent>
  )
}

function DrawerHeader(props: React.ComponentProps<typeof SheetHeader>) {
  return <SheetHeader {...props} />
}

function DrawerFooter(props: React.ComponentProps<typeof SheetFooter>) {
  return <SheetFooter {...props} />
}

function DrawerTitle(props: React.ComponentProps<typeof SheetTitle>) {
  return <SheetTitle {...props} />
}

function DrawerDescription(props: React.ComponentProps<typeof SheetDescription>) {
  return <SheetDescription {...props} />
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
