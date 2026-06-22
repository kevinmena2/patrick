"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

function AirbnbLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#FF385C">
      <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z" />
    </svg>
  )
}

function GoogleLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

const brands = [
  {
    id: "airbnb",
    name: "Airbnb",
    role: "Senior Software Engineer",
    period: "Mar 2019 - Present",
    highlight: "Agentic AI Platform",
    stats: [
      { value: "6+", label: "Years" },
      { value: "M+", label: "Users" },
      { value: "RAG", label: "AI Stack" },
    ],
    tags: ["LangGraph", "RAG", "MLflow", "pgvector", "Python"],
    color: "#FF385C",
    shadow: "rgba(255,56,92,0.35)",
    logo: (size: string) => <AirbnbLogo className={size} />,
  },
  {
    id: "google",
    name: "Google",
    role: "Software Engineer",
    period: "Jun 2017 - Feb 2019",
    highlight: "Responsive Search Ads",
    stats: [
      { value: "2", label: "Years" },
      { value: "40K+", label: "Perms/auction" },
      { value: "RSA", label: "Product" },
    ],
    tags: ["Java", "Distributed", "Real-time", "ML", "GCP"],
    color: "#4285F4",
    shadow: "rgba(66,133,244,0.30)",
    logo: (size: string) => <GoogleLogo className={size} />,
  },
]

const INTERVAL = 4000

export function CreativeHero() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(0)
    const start = Date.now()
    const tick = setInterval(() => {
      const elapsed = Date.now() - start
      setProgress(Math.min(elapsed / INTERVAL, 1))
    }, 30)
    const swap = setTimeout(() => {
      setActive((a) => (a + 1) % brands.length)
    }, INTERVAL)
    return () => {
      clearInterval(tick)
      clearTimeout(swap)
    }
  }, [active])

  const brand = brands[active]

  return (
    <motion.div
      className="relative w-full h-[480px] md:h-[540px] flex flex-col select-none overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated brand background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ backgroundColor: `${brand.color}08` }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        animate={{ backgroundColor: brand.shadow }}
        transition={{ duration: 0.8 }}
      />

      {/* Border that pulses in brand color */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ boxShadow: `0 0 0 1px ${brand.color}30, inset 0 0 60px ${brand.color}08` }}
        transition={{ duration: 0.8 }}
      />

      {/* Main spotlight content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-8 pb-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={brand.id}
            className="flex flex-col items-center text-center w-full"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.95 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {/* Logo */}
            <motion.div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 p-3"
              style={{ backgroundColor: `${brand.color}15`, border: `2px solid ${brand.color}30` }}
              animate={{ boxShadow: [`0 0 20px ${brand.shadow}`, `0 0 45px ${brand.shadow}`, `0 0 20px ${brand.shadow}`] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {brand.logo("w-full h-full")}
            </motion.div>

            {/* Company name */}
            <h2 className="text-4xl font-black mb-1" style={{ color: brand.color }}>
              {brand.name}
            </h2>

            {/* Role */}
            <p className="text-sm font-medium text-zinc-300 mb-1">{brand.role}</p>
            <p className="text-xs text-zinc-500 mb-4">{brand.period}</p>

            {/* Highlight pill */}
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-5"
              style={{ backgroundColor: `${brand.color}18`, color: brand.color, border: `1px solid ${brand.color}30` }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: brand.color }} />
              {brand.highlight}
            </div>

            {/* Stats row */}
            <div className="flex gap-3 mb-5">
              {brand.stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center px-4 py-2 rounded-xl"
                  style={{ backgroundColor: `${brand.color}10`, border: `1px solid ${brand.color}20` }}
                >
                  <span className="text-lg font-black" style={{ color: brand.color }}>{s.value}</span>
                  <span className="text-[10px] text-zinc-500">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap justify-center gap-1.5">
              {brand.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots + bar */}
      <div className="flex flex-col items-center gap-2 pb-4">
        <div className="flex gap-2">
          {brands.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setActive(i)}
              className="relative h-1.5 rounded-full overflow-hidden transition-all"
              style={{ width: i === active ? 32 : 8, backgroundColor: `${b.color}30` }}
            >
              {i === active && (
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ backgroundColor: b.color, width: `${progress * 100}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

    </motion.div>
  )
}
