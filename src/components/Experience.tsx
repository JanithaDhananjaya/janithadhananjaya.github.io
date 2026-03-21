"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Embla Software Innovations",
    role: "Senior Software Engineer",
    period: "May 2023 - Present",
    achievements: [
      "Leading technical direction for Zuellig Pharma’s web portals using Next.js App Router.",
      "Mentoring a team of 4+ developers on React best practices and SOLID principles.",
      "Orchestrated a rapid UI overhaul and rebranding, meeting critical enterprise deadlines.",
    ],
  },
  {
    id: 2,
    company: "Axiata Digital Labs",
    role: "Senior Software Engineer",
    period: "Jan 2021 - May 2023",
    achievements: [
      "Developed administrative dashboards for telecom solutions using React and Java Spring Boot microservices.",
      "Hardened platform security by remediating penetration test vulnerabilities, resulting in a 50% risk reduction.",
      "Partnered with UX teams to build reusable component libraries for internal telecom platforms.",
    ],
  },
  {
    id: 3,
    company: "Dialog Axiata PLC",
    role: "Software Engineer",
    period: "Aug 2019 - Jan 2021",
    achievements: [
      "Contributed to mission-critical CRM and billing systems, resolving 100+ defects to improve quality by 15%.",
      "Optimized Java debugging workflows within an agile team to reduce project delays.",
    ],
  },
  {
    id: 4,
    company: "Encyte (PVT) LTD",
    role: "Associate Software Engineer",
    period: "Aug 2018 - Aug 2019",
    achievements: [
      "Led the frontend migration of a proprietary e-commerce platform using React.js.",
      "Improved client-side development efficiency by 25% through accessible web components.",
    ],
  },
];

export function Experience() {
  return (
    <section className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="mb-20 flex flex-col md:flex-row md:items-center gap-6">
        <div className="p-3 bg-slate-100 dark:bg-slate-900 w-fit rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
          <Briefcase className="w-6 h-6 text-slate-800 dark:text-slate-200" />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
            A track record of engineering leadership and scaling enterprise platforms.
          </p>
        </div>
      </div>

      <div className="relative ml-4 md:ml-8 space-y-20 pb-8">
        {/* Animated Timeline Line */}
        <motion.div
           initial={{ height: 0 }}
           whileInView={{ height: "100%" }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 2, ease: "easeInOut" }}
           className="absolute left-0 top-3 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 origin-top"
        />
        
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="relative pl-8 md:pl-16"
          >
            {/* Timeline Dot with Glow */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent ring-4 ring-white dark:ring-[#020617] shadow-[0_0_10px_rgba(59,130,246,0.6)]" />

            <div className="flex flex-col gap-6">
              {/* Header Box */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {exp.company}
                  </h3>
                  <h4 className="text-xl font-semibold text-accent mt-1">
                    {exp.role}
                  </h4>
                </div>
                <div className="inline-flex w-fit px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">
                  {exp.period}
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-4 mt-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-2.5 flex-shrink-0" />
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                      {achievement}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
