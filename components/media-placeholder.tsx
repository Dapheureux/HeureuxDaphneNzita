import { ImageOff } from "lucide-react"

interface MediaPlaceholderProps {
  label: string
  description: string
  className?: string
}

export function MediaPlaceholder({ label, description, className = "" }: MediaPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${label} — ${description}`}
      className={`flex flex-col items-center justify-center gap-2 bg-muted px-4 text-center text-muted-foreground ${className}`}
    >
      <ImageOff aria-hidden="true" className="h-8 w-8 opacity-70" />
      <span className="font-medium">{label}</span>
      <span className="text-xs">{description}</span>
    </div>
  )
}
