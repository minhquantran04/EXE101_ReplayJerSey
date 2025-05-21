"use client"

import { motion } from "framer-motion"
import { ShirtIcon as TShirt } from "lucide-react"

type ProductSpotlightProps = {
  team: string
  year: number
  manufacturer: string
  sponsor: string
  colors: string[]
}

export function ProductSpotlight({ team, year, manufacturer, sponsor, colors }: ProductSpotlightProps) {
  return (
    <motion.div
      className="rounded-lg border p-4 bg-gradient-to-br from-[#f9f5e9] to-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold mb-3 flex items-center">
        <TShirt className="mr-2 h-5 w-5 text-[#8b0000]" />
        Kit Spotlight
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div>
            <span className="text-sm text-muted-foreground">Team</span>
            <p className="font-medium">{team}</p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Year</span>
            <p className="font-medium">{year}</p>
          </div>
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div>
            <span className="text-sm text-muted-foreground">Manufacturer</span>
            <p className="font-medium">{manufacturer}</p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Sponsor</span>
            <p className="font-medium">{sponsor}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span className="text-sm text-muted-foreground">Colors</span>
        <div className="flex gap-2 mt-1">
          {colors.map((color, index) => (
            <motion.span
              key={color}
              className="px-2 py-1 text-xs font-medium bg-[#e2d9c2] rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
            >
              {color}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
