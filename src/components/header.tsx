interface TransferHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function TransferHeader({
  heading,
  text,
  children,
}: TransferHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="font-heading font-bold text-3xl md:text-4xl">{heading}</h1>
        {text && <p className="text-lg text-muted-foreground">{text}</p>}
      </div>
      {children}
    </div>
  )
}