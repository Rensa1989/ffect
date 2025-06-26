import { Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialButtons() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 space-y-2">
      <Button
        size="sm"
        variant="outline"
        className="bg-card/80 backdrop-blur-sm hover:bg-muted border border-border shadow-lg"
        asChild
      >
        <a href="https://www.facebook.com/profile.php?id=61577468472614" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-4 w-4 text-foreground" />
        </a>
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="bg-card/80 backdrop-blur-sm hover:bg-muted border border-border shadow-lg"
        asChild
      >
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-4 w-4 text-foreground" />
        </a>
      </Button>
    </div>
  )
}
