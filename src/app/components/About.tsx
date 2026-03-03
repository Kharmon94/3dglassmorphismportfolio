import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Target, Users, Trophy, Heart } from "lucide-react";
import { GlassCard } from "./GlassCard";

const values = [
  {
    icon: Target,
    title: "Precision-Driven",
    desc: "Every pixel, every line of code crafted with intent. We don't do average.",
    color: "#D4AF37",
  },
  {
    icon: Users,
    title: "Client-First",
    desc: "Your vision is the north star. We listen, then we build — transparently.",
    color: "#C0C0C0",
  },
  {
    icon: Trophy,
    title: "Excellence Always",
    desc: "We hold ourselves to the highest standard — on deadline, on budget, outstanding.",
    color: "#D4AF37",
  },
  {
    icon: Heart,
    title: "Long-Term Partners",
    desc: "We don't just launch and leave. We grow with your business over time.",
    color: "#C0C0C0",
  },
];

const milestones = [
  { year: "2016", event: "Throne Technology founded", detail: "San Francisco, CA" },
  { year: "2018", event: "Expanded to Mobile & Cloud", detail: "Grew to 8 engineers" },
  { year: "2020", event: "First Fortune 500 client", detail: "Enterprise division launched" },
  { year: "2022", event: "AI/ML practice opened", detail: "15+ team members" },
  { year: "2024", event: "120+ projects delivered", detail: "International expansion" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span style={{ color: "#D4AF37", fontFamily: "'Fira Code', monospace", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            // our story
          </span>
          <h2
            className="mt-2"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              background: "linear-gradient(135deg, #fff 0%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
            }}
          >
            About Throne Tech
          </h2>
        </motion.div>

        {/* Top row */}
        <div className="grid lg:grid-cols-5 gap-8 mb-8">
          {/* Mission text — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <GlassCard tilt glow="rgba(212,175,55,0.1)" className="p-8 h-full">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.2)" }}
              >
                <Trophy size={22} style={{ color: "#D4AF37" }} />
              </div>
              <h3
                className="mb-4 text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.3rem", letterSpacing: "-0.02em" }}
              >
                Built for Those Who Demand the Best
              </h3>
              <p
                className="leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem" }}
              >
                Throne Technology was founded on a single belief: that great software is not just
                functional — it's an experience. We combine elite engineering talent with
                thoughtful design to build digital products that{" "}
                <span style={{ color: "#D4AF37" }}>perform, convert, and inspire.</span>
              </p>
              <p
                className="leading-relaxed"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.92rem" }}
              >
                From seed-stage startups to global enterprises, we've helped over 80 clients
                across fintech, real estate, health, and e-commerce reign in their markets.
                When you partner with Throne, you're not getting a vendor — you're getting a
                dedicated team invested in your growth.
              </p>
            </GlassCard>
          </motion.div>

          {/* Timeline — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-6 h-full">
              <h4
                className="mb-6 text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
              >
                Our Journey
              </h4>
              <div className="relative">
                <div
                  className="absolute left-4 top-0 bottom-0 w-px"
                  style={{ background: "linear-gradient(to bottom, #D4AF37, rgba(212,175,55,0.1))" }}
                />
                <div className="space-y-6">
                  {milestones.map(({ year, event, detail }, i) => (
                    <motion.div
                      key={year}
                      initial={{ opacity: 0, x: 15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                      className="flex gap-4 relative"
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                        style={{
                          background: "rgba(212,175,55,0.15)",
                          border: "1.5px solid rgba(212,175,55,0.4)",
                          boxShadow: "0 0 12px rgba(212,175,55,0.2)",
                        }}
                      >
                        <div className="w-2 h-2 rounded-full" style={{ background: "#D4AF37" }} />
                      </div>
                      <div>
                        <div style={{ color: "#D4AF37", fontSize: "0.7rem", fontFamily: "'Fira Code', monospace" }}>{year}</div>
                        <div className="text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}>{event}</div>
                        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", fontFamily: "'Space Grotesk', sans-serif" }}>{detail}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <GlassCard
                tilt
                glow={`${color}18`}
                className="p-5 h-full"
                style={{ border: `1px solid ${color}15` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <h4 className="text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>
                  {title}
                </h4>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.6 }}>
                  {desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
