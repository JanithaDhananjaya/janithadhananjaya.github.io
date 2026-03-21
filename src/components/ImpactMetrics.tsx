"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Zap } from "lucide-react";

const metrics = [
  {
    id: 1,
    value: "30%",
    label: "Latency Reduction",
    description: "Optimized database queries and API responses",
    icon: Zap,
  },
  {
    id: 2,
    value: "50%",
    label: "Security Hardening",
    description: "Implemented robust authentication and RBAC",
    icon: ShieldCheck,
  },
  {
    id: 3,
    value: "99.9%",
    label: "Uptime Guaranteed",
    description: "Ensured high availability via load balancing",
    icon: Activity,
  },
];

export function ImpactMetrics() {
  return (
    <section className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Measurable Impact</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Delivering engineering excellence through data-driven improvements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-accent/30 dark:hover:border-accent/30 transition-colors group"
          >
            <div className="w-12 h-12 bg-white dark:bg-slate-950 rounded-xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <metric.icon className="w-6 h-6" />
            </div>
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              {metric.value}
            </div>
            <div className="font-semibold text-lg text-slate-800 dark:text-slate-200 mb-2">
              {metric.label}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
