'use client'

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface GameScoreBadgeProps {
  score?: number
}

export function GameScoreBadge({ score }: GameScoreBadgeProps = {}) {
  const label = score ? `Rating: ${score} of 10` : 'Not rated yet';

  return (
    <Badge
      className={cn(
        "w-12 h-12 rounded-full p-0 text-lg font-bold",
        "flex items-center justify-center cursor-help"
      )}
      variant={score && score > 8 ? 'destructive' : 'secondary'}
      aria-label={label}
      title={label}
    >
      {score ?? '-'
      }
    </Badge >
  )
}