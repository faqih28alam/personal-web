import { GraduationCap, Award, Users, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import content from "@/data/content.json";

const education = [
    {
        degree: "Bachelor's Degree in Electrical Engineering",
        institution: "Telkom University",
        period: "2018 – 2022",
        gpa: "3.45",
        highlights: [
            "Embedded systems, IoT applications, and automation engineering",
            "Undergraduate Thesis: Home Security System with Face Recognition (KNN ML model)",
            "Integrated Raspberry Pi with Telegram for IoT-based door lock monitoring",
        ],
    },
    {
        degree: "Bangkit Academy Graduate",
        institution: "Google, Tokopedia, Gojek & Traveloka",
        period: "2021",
        gpa: null,
        highlights: [
            "Machine Learning Path Student",
            "Learned clustering, predicting, and classifying data via Coursera & Qwiklabs",
            "Built ID card OCR app using ML, mobile development, and cloud computing",
        ],
    },
    {
        degree: "Science Major",
        institution: "SMAN 90 Jakarta Barat",
        period: "2015 – 2018",
        gpa: null,
        highlights: [],
    },
];

const certifications = [
    {
        name: "Basic Internet of Things",
        issuer: "Indobot",
        icon: "🤖",
    },
    {
        name: "Programming Foundations: Fundamentals",
        issuer: "LinkedIn",
        icon: "💻",
    },
    {
        name: "Crash Course on Python",
        issuer: "Coursera / Google",
        icon: "🐍",
    },
    {
        name: "Google IT Support",
        issuer: "Coursera / Google",
        icon: "🛠️",
    },
    {
        name: "Google IT Automation with Python",
        issuer: "Coursera / Google",
        icon: "⚙️",
    },
    {
        name: "Mathematics for Machine Learning",
        issuer: "Coursera",
        icon: "📐",
    },
];

const organizations = [
    {
        role: "Chief",
        organization: "UKM Tae Kwon Do Telkom University",
        period: "2020",
        description:
            "Led the Tae Kwon Do student activity unit, overseeing operations, events, and member development.",
        icon: "🥋",
    },
    {
        role: "Logistic Chief",
        organization: "ELITIA Research Laboratory",
        period: "2021 – 2022",
        description:
            "Managed logistics for the research lab, supporting IoT and automation research activities.",
        icon: "🔬",
    },
    {
        role: "IoT Assistant Practicum Division",
        organization: "ELITIA Research Laboratory",
        period: "2021 – 2022",
        description:
            "Assisted in teaching IoT practicum sessions to college students using Arduino, Raspberry Pi, and NodeMCU.",
        icon: "📡",
    },
    {
        role: "Logistic Division Member",
        organization: "UKM Tae Kwon Do Telkom University",
        period: "2019",
        description:
            "Handled logistical coordination for student club events and competitions.",
        icon: "🥋",
    },
    {
        role: "Member",
        organization: "Keluarga Mahasiswa Teknik Elektro",
        period: "2018 – 2022",
        description:
            "Active member of the Electrical Engineering student family organization at Telkom University.",
        icon: "⚡",
    },
];

const skills = [
    {
        category: "Web Development",                 // ← ADD THIS
        items: ["Next.js", "React", "Node.js", "Express.js", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS", "REST API", "Supabase"],
    },
    {
        category: "Dev Tools",                       // ← ADD THIS
        items: ["Git", "GitHub", "VS Code", "Postman", "Linux", "Docker (Basic)"],
    },
    {
        category: "Embedded Systems",
        items: ["PCB/Circuit Design", "Arduino", "ESP32", "Raspberry Pi", "Sensors & Actuators", "C/C++/Python", "Real-time Programming", "IoT Protocols"],
    },
    {
        category: "Automation & Control",
        items: ["PLC Programming", "Ladder Diagram", "Omron CX-Programmer", "HMI (CX-Designer)"],
    },
    {
        category: "Machine Learning & AI",
        items: ["OpenCV", "Image Classification", "Supervised Learning", "Unsupervised Learning", "Scikit-learn", "Overfitting Handling"],
    },
    {
        category: "Data Analysis",
        items: ["Python (Pandas, NumPy, Matplotlib)", "Excel", "SQL (Basic)", "Exploratory Data Analysis"],
    },
    {
        category: "Power Systems",
        items: ["UPS Installation", "UPS Maintenance", "Battery Systems", "Load Testing"],
    },
    {
        category: "Soft Skills",
        items: ["Technical Reporting", "Teaching & Mentoring", "Stakeholder Presentations", "Fluent in Bahasa & English"],
    },
];

export default function AboutPage() {
    return (
        <>
            <Navbar personal={content.personal} />
            <main className="container mx-auto px-4 max-w-6xl">

                {/* Hero */}
                <div className="pt-28 pb-10 relative">
                    <div className="absolute top-20 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-semibold mb-4">
                        About Me
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                        Beyond the <span className="text-blue-500">Code</span>
                    </h1>
                    <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
                        My academic background, certifications, organizations, and the full
                        picture of who I am as an engineer.
                    </p>
                </div>

                {/* Education */}
                <section className="py-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                            <GraduationCap size={18} className="text-blue-500" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Education</h2>
                            <p className="text-muted-foreground text-xs">Academic background</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {education.map((edu, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-border/50 bg-card p-6 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                    <div>
                                        <h3 className="font-bold text-base">{edu.degree}</h3>
                                        <p className="text-blue-500 text-sm font-medium mt-0.5">{edu.institution}</p>
                                    </div>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        {edu.gpa && (
                                            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-semibold">
                                                GPA {edu.gpa}
                                            </span>
                                        )}
                                        <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                                            {edu.period}
                                        </span>
                                    </div>
                                </div>
                                {edu.highlights.length > 0 && (
                                    <ul className="space-y-1.5 mt-3">
                                        {edu.highlights.map((h, j) => (
                                            <li key={j} className="flex gap-2.5 text-sm text-muted-foreground">
                                                <span className="text-blue-500 mt-0.5 flex-shrink-0">›</span>
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications */}
                <section className="py-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                            <Award size={18} className="text-blue-500" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Certifications</h2>
                            <p className="text-muted-foreground text-xs">Licenses & credentials</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {certifications.map((cert, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-border/50 bg-card p-5 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
                            >
                                <div className="text-2xl mb-3">{cert.icon}</div>
                                <h3 className="font-semibold text-sm leading-snug mb-1.5">
                                    {cert.name}
                                </h3>
                                <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Organizations */}
                <section className="py-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                            <Users size={18} className="text-blue-500" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Organization Experience</h2>
                            <p className="text-muted-foreground text-xs">Communities & leadership</p>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-[27px] top-0 bottom-0 w-px bg-border/50 hidden md:block" />

                        <div className="flex flex-col gap-6">
                            {organizations.map((org, i) => (
                                <div key={i} className="flex gap-6 group">
                                    {/* Icon dot */}
                                    <div className="hidden md:flex items-start flex-shrink-0">
                                        <div className="w-14 h-14 rounded-xl border border-border/60 bg-card flex items-center justify-center text-xl group-hover:border-blue-500/30 transition-colors duration-300 z-10">
                                            {org.icon}
                                        </div>
                                    </div>

                                    <div className="flex-1 rounded-2xl border border-border/50 bg-card p-5 group-hover:border-blue-500/20 group-hover:shadow-lg group-hover:shadow-blue-500/5 transition-all duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                                            <div>
                                                <h3 className="font-bold text-sm">{org.role}</h3>
                                                <p className="text-blue-500 text-sm font-medium">{org.organization}</p>
                                            </div>
                                            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium whitespace-nowrap h-fit">
                                                {org.period}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {org.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="py-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Skills & Expertise</h2>
                            <p className="text-muted-foreground text-xs">What I bring to the table</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {skills.map((skillGroup, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-border/50 bg-card p-5 hover:border-blue-500/20 transition-all duration-300"
                            >
                                <h3 className="font-bold text-sm mb-3 text-blue-500">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {skillGroup.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-2.5 py-0.5 rounded-full text-xs border border-border/50 text-muted-foreground"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA back to home */}
                <section className="py-10 pb-20">
                    <div className="rounded-2xl border border-border/50 bg-card p-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
                        <p className="text-muted-foreground text-sm mb-4 relative">Want to see what I&apos;ve built?</p>
                        <a
                            href="/#projects"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-200"
                        >
                            View My Projects
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </section>

            </main>
            <Footer personal={content.personal} />
        </>
    );
}