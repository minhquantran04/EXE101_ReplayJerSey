"use client"

import { motion } from "framer-motion"

type ProductSpecsProps = {
  specs: {
    material: string
    fit: string
    care: string
    origin: string
    packaging: string
  }
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  const specItems = [
    { label: "Material", value: specs.material },
    { label: "Fit", value: specs.fit },
    { label: "Care", value: specs.care },
    { label: "Origin", value: specs.origin },
    { label: "Packaging", value: specs.packaging },
  ]

  return (
    <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specItems.map((item, index) => (
          <motion.div
            key={item.label}
            className="p-3 border rounded-lg bg-[#f9f5e9]/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <span className="text-sm text-muted-foreground">{item.label}</span>
            <p className="font-medium">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
