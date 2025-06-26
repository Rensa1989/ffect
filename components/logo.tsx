import Image from "next/image"

interface LogoProps {
  variant?: "light" | "dark"
  className?: string
  iconWidth?: number
  wordmarkWidth?: number
  height?: number
}

export default function Logo({
  variant = "dark",
  className,
  iconWidth = 60,
  wordmarkWidth = 120,
  height = 60,
}: LogoProps) {
  const iconSrc = variant === "light" ? "/images/logo-light.png" : "/images/logo-dark.png"
  const wordmarkSrc = variant === "light" ? "/images/woordlogo-light.png" : "/images/woordlogo-dark.png"

  return (
    <div className={`flex items-center gap-2 ${className}`}>
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
