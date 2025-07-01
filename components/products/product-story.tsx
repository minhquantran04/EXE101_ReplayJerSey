"use client"

import { motion } from "framer-motion"
import { History } from "lucide-react"

type ProductStoryProps = {
  story: string
  team: string
  year: number
}

export function ProductStory({ story, team, year }: ProductStoryProps) {
  return (
    <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.div
        className="flex items-center gap-2 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <History className="h-5 w-5 text-[#8b0000]" />
        <h3 className="font-semibold">
          {team} {year} - A Legendary Season
        </h3>
      </motion.div>

      <motion.div
        className="relative pl-4 border-l-2 border-[#e2d9c2]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-[#8b0000]" />
        <p className="text-muted-foreground">{story}</p>
      </motion.div>
    </motion.div>
  )
}
