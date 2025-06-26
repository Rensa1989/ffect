import Image from "next/image"

interface LogoProps {
  variant?: "light" | "dark"
  className?: string
  iconWidth?: number // Width of the icon part
  wordmarkWidth?: number // Width of the wordmark part
  height?: number // Overall height for both parts
  gap?: number // Gap between icon and wordmark
}

export default function Logo({
  variant = "dark",
  className,
  iconWidth = 60, // Default icon width
  wordmarkWidth = 120, // Default wordmark width
  height = 60, // Default height for both
  gap = 4, // Default gap
}: LogoProps) {
  const iconSrc = variant === "light" ? "/images/logo-light.png" : "/images/logo-dark.png"
  const wordmarkSrc = variant === "light" ? "/images/woordlogo-light.png" : "/images/woordlogo-dark.png"

  return (
    <div className={`flex items-center gap-${gap} ${className}`}>
      <Image
        src={iconSrc || "/placeholder.svg"}
        alt="ffect. icon"
        width={iconWidth}
        height={height}
        className="h-auto"
      />
      <Image
        src={wordmarkSrc || "/placeholder.svg"}
        alt="ffect. wordmark"
        width={wordmarkWidth}
        height={height}
        className="h-auto"
      />
    </div>
  )
}
