"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

type ProductFeaturesProps = {
  features: string[]
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <motion.ul className="space-y-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {features.map((feature, index) => (
        <motion.li
          key={index}
          className="flex items-start gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <Check className="h-5 w-5 text-[#8b0000] mt-0.5 flex-shrink-0" />
          <span className="text-muted-foreground">{feature}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}
