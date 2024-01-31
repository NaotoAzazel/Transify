import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Container({ 
  className, 
  children 
}: { 
  className?: string, 
  children: ReactNode 
}) {
  return (
    <div className={cn("flex min-h-[500px] flex-col rounded-md border animate-in fade-in-50", className)}>
      {children}
    </div>
  )
}