import { cn } from "@/lib/utils";

interface TransferShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TransferShell({
  children,
  className,
  ...props
}: TransferShellProps) {
  return (
    <div className={cn("grid items-center gap-8", className)} {...props}>
      {children}
    </div>
  )
}