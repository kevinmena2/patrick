"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

function AirbnbMark() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FF385C" aria-label="Airbnb">
      <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z" />
    </svg>
  )
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

const items = [
  {
    type: "work",
    title: "Senior Software Engineer — Agentic AI Platform",
    company: "Airbnb",
    period: "Mar 2022 - Present",
    duration: "3+ years",
    description:
      "Owned end-to-end design and delivery of a production-grade multi-agent AI platform using LangGraph orchestration, RAG retrieval over pgvector, guardrails, and full MLOps instrumentation (MLflow, Prometheus/Grafana on AWS EKS). Autonomously analyzes guest reviews, generates insights, and drafts host responses for millions of hosts worldwide.",
    brandColor: "#FF385C",
    logo: <AirbnbMark />,
  },
  {
    type: "work",
    title: "Senior Software Engineer — Review Quality & ML Platform",
    company: "Airbnb",
    period: "Feb 2019 - Mar 2022",
    duration: "3 years",
    description:
      "Built and productionised NLP models (XGBoost, BERT embeddings) to score review quality and flag spam across millions of reviews. Pioneered transformer embeddings for semantic search, orchestrated end-to-end ML pipelines in Apache Airflow, and shipped low-latency scoring services feeding host-facing dashboards.",
    brandColor: "#FF385C",
    logo: <AirbnbMark />,
  },
  {
    type: "work",
    title: "Software Engineer — Responsive Search Ads",
    company: "Google",
    period: "Jun 2017 - Feb 2019",
    duration: "1 yr 9 mos",
    description:
      "Engineered and helped launch Responsive Search Ads (RSA), dynamically assembling personalised ads from 40,000+ permutations per auction under strict real-time latency. Scaled RSA from closed beta to global availability, delivering 10–15% incremental lift in impressions and clicks for advertisers.",
    brandColor: "#4285F4",
    logo: <GoogleMark />,
  },
  {
    type: "education",
    title: "Bachelor of Science · Computer Science",
    company: "Boston University",
    period: "Aug 2014 - May 2017",
    duration: "3 years",
    description:
      "Strong foundations in algorithms, distributed systems, and software engineering principles. Active in the university hackathon community and open-source clubs.",
    brandColor: "#CC0000",
    logo: <GraduationCap className="w-4 h-4 text-[#CC0000]" />,
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div
              className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-zinc-600/70"
              style={{ borderLeft: `3px solid ${item.brandColor}` }}
            >
              <div
                className="absolute -inset-1 rounded-xl blur opacity-10 hover:opacity-20 transition duration-700"
                style={{ background: `linear-gradient(to right, ${item.brandColor}40, transparent)` }}
              />

              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: `${item.brandColor}20`, color: item.brandColor }}
                  >
                    {item.logo}
                    {item.company}
                  </span>
                  <span className="text-xs text-zinc-500">{item.type === "education" ? "Education" : item.duration}</span>
                </div>

                <h3 className="text-lg font-bold mb-1 leading-snug">{item.title}</h3>
                <div className="text-sm text-zinc-500 mb-4">{item.period}</div>
                <p className="text-zinc-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full z-10 flex items-center justify-center border-2 border-zinc-700"
                style={{ backgroundColor: item.brandColor }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
