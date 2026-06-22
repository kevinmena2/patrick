import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

function AirbnbBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF385C]/10 text-[#FF385C] border border-[#FF385C]/20">
      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="#FF385C">
        <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z" />
      </svg>
      Airbnb
    </span>
  )
}

function GoogleBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#4285F4]/10 text-[#4285F4] border border-[#4285F4]/20">
      <svg viewBox="0 0 24 24" className="w-3 h-3">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
      ex-Google
    </span>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#FF385C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mt-4">
              <AirbnbBadge />
              <GoogleBadge />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Patrick Bellis
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              Senior Software Engineer at Airbnb. 9 years building large-scale AI systems, agentic platforms, and
              cloud-native infrastructure used by millions worldwide.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <MapPin className="h-4 w-4" />
              <span>Boston, MA</span>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0" asChild>
                <a href="#projects">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
              <Button variant="outline" className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                  <Github className="h-5 w-5" /><span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/patrick-bellis-60a8171" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                  <Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:patrick.bellis.x@outlook.com">
                <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                  <Mail className="h-5 w-5" /><span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative h-full rounded-3xl overflow-hidden border-4 border-purple-500/40 flex items-center justify-center">
                <img
                  src="/avatar.png"
                  alt="Patrick Bellis"
                  className="w-[70%] object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Open to opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  Senior Software Engineer with 9 years building and operating reliable, large-scale systems at Airbnb and Google. Took review intelligence from classical ML and Airflow pipelines through to a production-grade, multi-agent AI platform with LangGraph agent orchestration, tool-calling, guardrails, model registries, drift monitoring, and closed-loop retraining.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Works across a polyglot stack (Java + Python) and cloud-native infrastructure (Kubernetes, Terraform, GitOps), with a focus on reproducibility, observability, and cost-efficient AI operations.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FF385C]/10 border border-[#FF385C]/20">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="#FF385C">
                      <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z" />
                    </svg>
                    <div>
                      <div className="text-xs font-semibold text-[#FF385C]">Airbnb</div>
                      <div className="text-xs text-zinc-500">Mar 2019 - Present</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#4285F4]/10 border border-[#4285F4]/20">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <div>
                      <div className="text-xs font-semibold text-[#4285F4]">Google</div>
                      <div className="text-xs text-zinc-500">Jun 2017 - Feb 2019</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium text-sm">patrick.bellis.x@outlook.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Phone</div>
                    <div className="font-medium">(617) 848-6133</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Boston, MA</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Education</div>
                    <div className="font-medium">Boston University</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">Download Resume</Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Java" level={95} />
            <SkillBadge name="Python" level={92} />
            <SkillBadge name="LangGraph / Multi-agent" level={89} />
            <SkillBadge name="RAG & pgvector" level={87} />
            <SkillBadge name="LLMOps & Evaluation" level={86} />
            <SkillBadge name="MLflow & MLOps" level={87} />
            <SkillBadge name="Apache Airflow" level={84} />
            <SkillBadge name="AWS EKS / Kubernetes" level={85} />
            <SkillBadge name="Terraform & ArgoCD" level={81} />
            <SkillBadge name="PostgreSQL" level={82} />
            <SkillBadge name="Embeddings & Semantic Search" level={88} />
            <SkillBadge name="Prometheus / Grafana" level={80} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Agentic AI Platform"
              description="Production multi-agent AI platform using LangGraph orchestration that autonomously analyses guest reviews, generates insights, and drafts host responses with RAG retrieval and guardrails."
              tags={["LangGraph", "RAG", "pgvector", "Python", "FastAPI"]}
              image="https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?auto=format&fit=crop&w=600&q=80"
              demoUrl="https://airbnb.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="RAG Retrieval Engine"
              description="Semantic search layer over millions of guest reviews using transformer embeddings and pgvector, enabling natural-language querying and grounding agent responses in real feedback."
              tags={["BERT", "pgvector", "FastAPI", "Python", "PostgreSQL"]}
              image="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=600&q=80"
              demoUrl="https://airbnb.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Review Quality Scoring"
              description="NLP models (XGBoost, BERT) that score review quality and flag spam across millions of reviews per day, feeding signals into host-facing dashboards and Trust & Safety."
              tags={["XGBoost", "BERT", "NLP", "Apache Airflow", "Python"]}
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
              demoUrl="https://airbnb.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="MLOps & Drift Monitoring"
              description="Closed-loop retraining platform with experiment tracking in MLflow, model registry, and Prometheus/Grafana dashboards monitoring drift, confidence, token usage, and cost on AWS EKS."
              tags={["MLflow", "Prometheus", "Grafana", "Terraform", "ArgoCD"]}
              image="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80"
              demoUrl="https://airbnb.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Responsive Search Ads"
              description="Engineered and launched Google RSA, dynamically assembling personalised ads from 40,000+ permutations per auction in real time. Scaled to global availability with 10-15% lift in clicks."
              tags={["Java", "Spring Boot", "ML", "Distributed Systems", "GCP"]}
              image="https://images.unsplash.com/photo-1529612700005-e35377bf1415?auto=format&fit=crop&w=600&q=80"
              demoUrl="https://ads.google.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Ad Serving Infrastructure"
              description="Scalable Java backend infrastructure evaluating RSA candidates within the live ad-serving pipeline without breaching real-time latency budgets across billions of daily auctions."
              tags={["Java", "Python", "GCP", "Real-time", "Large-scale"]}
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
              demoUrl="https://ads.google.com"
              repoUrl="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Experience & Education" subtitle="My professional journey" />
          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">patrick.bellis.x@outlook.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Phone</div>
                    <div className="font-medium">(617) 848-6133</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/patrick-bellis-60a8171</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Boston, MA</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Open to new opportunities and collaborations</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Patrick</span>
              <span className="text-white"> Bellis</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Patrick Bellis. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                <Github className="h-5 w-5" /><span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/patrick-bellis-60a8171" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                <Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:patrick.bellis.x@outlook.com">
              <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                <Mail className="h-5 w-5" /><span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
