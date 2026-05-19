"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Shield,
  Smile,
  Cpu,
  Coffee,
  Sun,
  Moon,
  BookOpen,
  HelpCircle,
  Linkedin,
  Youtube,
  Instagram,
  LifeBuoy,
  ChevronDown
} from "lucide-react";

// Inline X / Twitter logo SVG
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.021 0 12 0 12s0 3.979.502 5.837a3.001 3.001 0 0 0 2.11 2.107C4.472 20.455 12 20.455 12 20.455s7.528 0 9.388-.511a3.002 3.002 0 0 0 2.11-2.107C24 15.979 24 12 24 12s0-3.979-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import FloatingActionMenu from "@/components/ui/floating-action-menu";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import RadialOrbitalTimeline, { type TimelineItem } from "@/components/ui/radial-orbital-timeline";
import { Dock, DockIcon } from "@/components/ui/dock";
import { ModernPricingPage, type PricingCardProps } from "@/components/ui/animated-glassy-pricing";
import { Timeline, type TimelineItem as ScrollTimelineItem } from "@/components/ui/modern-timeline";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";

// FAQ List (From WebsiteInfo.txt 19 collapsible items represented elegantly)
const faqs = [
  { q: "What is NEO?", a: "NEO is a friendly humanoid home robot designed by 1X Technologies to automate household chores, manage schedules, and assist with tasks so you can focus on what matters to you." },
  { q: "Is NEO safe to be around people and pets?", a: "Yes. NEO is designed with safety first. It has a lightweight build, tendon-driven actuators for gentle motion, and is wrapped in a soft, cushioned 3D lattice suit that is entirely pinch-proof." },
  { q: "What chores can NEO perform?", a: "Out of the box, NEO is equipped with foundational autonomy to walk, clean surfaces, tidy up rooms, and charge itself. Through continuous learning (Redwood AI) and Expert Mode training, NEO learns and unlocks new capabilities over time." },
  { q: "What is Expert Mode?", a: "For complex or unfamiliar tasks, a 1X Expert can remotely connect via VR or mobile application to guide NEO, teaching it new abilities that it can later perform autonomously." },
  { q: "How long does the battery last?", a: "NEO features an 842 Wh battery that provides up to 4 hours of runtime. When the battery runs low, NEO will autonomously walk to its charging station and plug itself in, achieving a quick charge in just 6 minutes." }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("utility");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Toggle body class for dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Floating menu options
  const floatingMenuOptions = [
    {
      label: darkMode ? "Light Mode" : "Dark Mode",
      Icon: darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />,
      onClick: () => setDarkMode(!darkMode),
    },
    {
      label: "Support Desk",
      Icon: <LifeBuoy className="w-4 h-4" />,
      onClick: () => {
        const element = document.getElementById("faq");
        element?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Product Specs",
      Icon: <Cpu className="w-4 h-4" />,
      onClick: () => {
        const element = document.getElementById("specs");
        element?.scrollIntoView({ behavior: "smooth" });
      },
    }
  ];

  // 1X Pillars data mapped into the RadialOrbitalTimeline
  const radialTimelineData: TimelineItem[] = [
    {
      id: 1,
      title: "Utility",
      date: "Chore Automation",
      content: "Give NEO a list of chores, schedule a time, and come back to a cleaner home. Features voice command interface, scheduled expert training, and mobile scheduling app.",
      category: "Pillar 1",
      icon: Sparkles,
      relatedIds: [2, 4],
      status: "completed",
      energy: 100,
    },
    {
      id: 2,
      title: "Design",
      date: "Soft and Safe",
      content: "Lightweight and quiet (22 dB - quieter than a refrigerator). Features tendon-driven actuators, pinch-proof joints, a soft body lattice, and a machine-washable nylon suit.",
      category: "Pillar 2",
      icon: Shield,
      relatedIds: [1, 3],
      status: "completed",
      energy: 90,
    },
    {
      id: 3,
      title: "Companion",
      date: "Laugh and Learn",
      content: "Ask NEO anything from recipe advice to jokes. Spatial awareness and memory help personalize interactions, creating warm, natural conversations.",
      category: "Pillar 3",
      icon: Smile,
      relatedIds: [2, 4],
      status: "completed",
      energy: 80,
    },
    {
      id: 4,
      title: "Intelligence",
      date: "Grows With You",
      content: "Powered by Redwood AI (1X's vision-language model) and built-in LLMs. Features audio, visual, and spatial intelligence that expands with continued home exposure.",
      category: "Pillar 4",
      icon: Cpu,
      relatedIds: [3, 1],
      status: "completed",
      energy: 95,
    }
  ];

  // Daily Routine data mapped into vertical ScrollingTimeline
  const verticalTimelineItems: ScrollTimelineItem[] = [
    {
      title: "Morning Routine: Tidy Up",
      description: "NEO activates at 07:30 AM, walks to the dining room, clears dishes from the table, and places them into the dishwasher with soft, quiet precision (22 dB).",
      date: "07:30 AM",
      category: "Utility",
      status: "completed",
      icon: Coffee
    },
    {
      title: "Mid-Day Delivery Handled",
      description: "Answers the door safely for a grocery shipment, takes the delivery box using tendon-driven hands, places it on the kitchen counter, and alerts you via the mobile app.",
      date: "12:15 PM",
      category: "Autonomy",
      status: "completed",
      icon: Shield
    },
    {
      title: "Learning Session: Expert Mode",
      description: "A 1X expert remotely connects via VR to guide NEO through a custom delicate task. NEO records spatial movements, integrating them into its neural network for future self-execution.",
      date: "03:30 PM",
      category: "Redwood AI",
      status: "current",
      icon: Cpu
    },
    {
      title: "Evening Companion Mode",
      description: "Shares recipes verbally, plays games, answers trivia, and assists in prep work. Responds to spatial cues and human expressions in real time.",
      date: "06:30 PM",
      category: "Companion",
      status: "upcoming",
      icon: Smile
    },
    {
      title: "Autonomous Charging Cycle",
      description: "Recognizing low power, NEO returns to the charging station. Auto-plugs into the quick-charge terminal, replenishing the 842 Wh cell in 6 minutes.",
      date: "10:30 PM",
      category: "Self-Charge",
      status: "upcoming",
      icon: Sparkles
    }
  ];

  // Pricing Plans (Deposit Pre-order Waitlist Model)
  const pricingPlans: PricingCardProps[] = [
    {
      planName: "Pre-Order Deposit",
      description: "Reserve your spot in the early access pipeline. Refundable $200 deposit.",
      price: "200",
      features: [
        "Refundable deposit token",
        "Priority queue shipping",
        "Mobile companion app access",
        "1-year basic software updates"
      ],
      buttonText: "Reserve Now",
      buttonVariant: "primary"
    },
    {
      planName: "Early Access Kit",
      description: "The complete hardware shipment + subscription access for early builders.",
      price: "200",
      features: [
        "1X NEO Home Robot (5'6\", 66 lbs)",
        "Charging Station + 6-min Supercharger",
        "Lint Roller + Custom protective case",
        "Jetson Thor Cortex processor onboard",
        "Standard software suite license"
      ],
      buttonText: "Order Now",
      isPopular: true,
      buttonVariant: "primary"
    },
    {
      planName: "Developer Fleet",
      description: "For labs and researchers requiring custom API and simulator bindings.",
      price: "1200",
      features: [
        "2x NEO humanoids with open SDK",
        "Direct Redwood AI developer hooks",
        "Dedicated 1X engineering support",
        "Supervised remote telemetry package",
        "Advanced custom payload modules"
      ],
      buttonText: "Contact 1X Sales",
      buttonVariant: "secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-black text-[#111111] dark:text-white transition-colors duration-300 relative">

      {/* 1. Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#f7f7f7]/85 dark:bg-black/85 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href="#" className="font-bold text-xl tracking-widest flex items-center gap-2">
              <span className="bg-black text-white dark:bg-white dark:text-black w-7 h-7 rounded-sm flex items-center justify-center font-mono font-extrabold text-sm">1X</span>
              <span className="font-light tracking-wide text-zinc-850 dark:text-zinc-150">TECHNOLOGIES</span>
            </a>

            {/* Nav Menu Links */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-light text-zinc-650 dark:text-zinc-350 pl-6 border-l border-zinc-300 dark:border-zinc-700">
              <a href="#neo">Neo</a>
              <a href="#pillars">AI</a>
              <a href="#experience">Routine</a>
              <a href="#specs">Specs</a>
              <a href="#pricing">Order</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-850 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="#pricing"
              className="bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black px-4 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-sm transition"
            >
              Order Now
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section id="neo" className="relative min-h-[calc(100vh-64px)] w-full flex items-center justify-center py-12 px-6 overflow-hidden bg-black">
        {/* Background Spotlight */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill={darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.03)"} />

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 px-3 py-1 rounded-full w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-zinc-650 dark:text-zinc-350">Now in Early Access</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-light tracking-tighter text-black dark:text-white leading-tight font-display">
              NEO
            </h1>
            <p className="text-xl md:text-2xl font-light text-zinc-500 dark:text-zinc-400 mt-2 tracking-wide">
              Home Robot
            </p>

            <h2 className="text-2xl md:text-3xl font-light text-zinc-800 dark:text-zinc-200 mt-8 max-w-xl leading-relaxed">
              Transform your Home.
            </h2>
            <p className="mt-4 text-base text-zinc-650 dark:text-zinc-400 max-w-lg leading-relaxed font-sans">
              NEO takes care of tasks around the house so you can focus on what matters to you. Quiet, soft, and built to grow with your family.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="px-8 py-3 bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black rounded-full font-medium transition shadow-lg text-sm"
              >
                Reserve Now
              </a>
              <div className="text-left">
                <p className="text-xs text-zinc-550 dark:text-zinc-400 font-medium font-sans">$200 Deposit</p>
                <p className="text-[10px] text-zinc-450 dark:text-zinc-500 font-sans">Fully refundable waitlist slot</p>
              </div>
            </div>
          </div>

          {/* Right Hero Spline / 3D Content */}
          <div className="lg:col-span-6 h-[500px] lg:h-[700px] w-full relative rounded-3xl overflow-hidden bg-zinc-150/40 dark:bg-zinc-950/40flex items-center justify-center shadow-inner">
            {/* Spline Canvas component loaded lazily */}
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

{/* Smooth fade into next section */}
<div className="absolute bottom-0 left-0 w-full h-40 z-20 pointer-events-none">
  
  {/* Main black fade */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black" />

  {/* Glow bridge */}
  <div
    className="absolute left-1/2 top-1/2 
    -translate-x-1/2 -translate-y-1/2
    w-[1200px] h-[250px]
    bg-gradient-to-r
    from-orange-500/20
    via-cyan-400/20
    to-blue-500/20
    blur-3xl opacity-70"
  />

  {/* Radial softness */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" />
</div>

</section>

      {/* 3. WebGL Intro Band */}
      <section className="relative w-full h-[500px] flex items-center justify-center px-6 overflow-hidden bg-black text-white">
        <WebGLShader />
        <div className="relative max-w-3xl mx-auto text-center z-10 px-4">
          <div className="inline-flex items-center justify-center gap-1.5 mb-6 text-emerald-400">
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            </span>
            <p className="text-xs tracking-wider uppercase font-semibold">1X MISSION STATEMENT</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight leading-relaxed font-display text-white">
            "Building a world where we do more of what we love, while our humanoid companions handle the rest."
          </h2>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <LiquidButton className="text-white border border-white/20 rounded-full w-full sm:w-auto font-sans" size="lg">
              Explore Our AI Model
            </LiquidButton>
            <MetalButton variant="gold" className="w-full sm:w-auto text-black font-sans">
              Watch Keynote Video
            </MetalButton>
          </div>
        </div>
      </section>

      {/* 4. Features Section (Pillars) */}
      <section id="pillars" className="py-24 px-6 max-w-6xl mx-auto text-center relative">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-light tracking-tight text-black dark:text-white">Autonomy & Intelligence</h2>
          <p className="text-zinc-650 dark:text-zinc-400 mt-3 text-sm">
            Discover the design foundations that make NEO comfortable to be around, quiet to operate, and smart enough to automate chores.
          </p>
        </div>

        {/* Orbital Timeline Component */}
        <RadialOrbitalTimeline timelineData={radialTimelineData} />
      </section>

      {/* 5. Scrolling timeline (Routine) */}
      <section id="experience" className="py-24 px-6 bg-zinc-150/40 dark:bg-zinc-950/20 border-y border-zinc-200 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-light tracking-tight text-black dark:text-white">A Day In The Life</h2>
            <p className="text-zinc-650 dark:text-zinc-400 mt-3 text-sm">
              Follow NEO through a typical scheduled day around the house, detailing chore execution, human interaction, and quick charging.
            </p>
          </div>

          <Timeline items={verticalTimelineItems} />
        </div>
      </section>

      {/* 6. Product Specs Sheet */}
      <section id="specs" className="py-24 px-6 max-w-4xl mx-auto text-left">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-light tracking-tight text-black dark:text-white">Hardware Specifications</h2>
          <p className="text-zinc-650 dark:text-zinc-400 mt-2 text-sm">
            Precision engineering wrapped in a soft knit suit.
          </p>
        </div>

        {/* Specs Tabs */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 gap-6 text-sm mb-8 overflow-x-auto whitespace-nowrap pl-2">
          {["utility", "design", "intelligence", "hardware"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 font-medium capitalize border-b-2 transition ${activeTab === tab
                  ? "border-black dark:border-white text-black dark:text-white"
                  : "border-transparent text-zinc-500 hover:text-black dark:hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-850 shadow-sm min-h-[220px]">
          {activeTab === "utility" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-black dark:text-white">Autonomous Chores</h4>
                <p className="text-zinc-650 dark:text-zinc-400 mt-1">Schedule cleanup, dish sorting, laundry folding, and surface polishing via mobile application.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Expert Mode Supervision</h4>
                <p className="text-zinc-650 dark:text-zinc-400 mt-1">1X Specialists can remotely connect to help NEO learn complex custom tasks for your specific home.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Voice Command Interface</h4>
                <p className="text-zinc-650 dark:text-zinc-400 mt-1">Speak naturally. Say commands like "Clean the kitchen" directly to NEO without using your phone.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Autonomous Self-Charging</h4>
                <p className="text-zinc-650 dark:text-zinc-400 mt-1">Auto-plugs in when battery falls below 15%. Achieves complete top-up in only 6 minutes.</p>
              </div>
            </div>
          )}

          {activeTab === "design" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-black dark:text-white">Soft Bodies & Cushioning</h4>
                <p className="text-zinc-650 dark:text-zinc-400 mt-1">Wrap-around deformable 3D lattice wraps all internal motors, cushioning collisions and touch.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Tendon-Driven Actuation</h4>
                <p className="text-zinc-650 dark:text-zinc-400 mt-1">Low-energy precise cables create natural organic movements, eliminating traditional gear noise.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Pinch Proof Joints</h4>
                <p className="text-zinc-650 dark:text-zinc-400 mt-1">All moving knuckles and joints are covered by high-grade knit suits to protect fingers.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Machine Washable Knit Suit</h4>
                <p className="text-zinc-650 dark:text-zinc-400 mt-1">Soft knit outer fabric and custom shoes can be unzipped and cleaned in any standard washing machine.</p>
              </div>
            </div>
          )}

          {activeTab === "intelligence" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-black dark:text-white">Redwood AI Model</h4>
                <p className="text-zinc-650 dark:text-zinc-400 mt-1">1X's proprietary spatial vision language model built to translate visual input into manual motor control.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Onboard Large Language Model</h4>
                <p className="text-zinc-650 dark:text-zinc-400 mt-1">Provides natural conversation, speech translation, joke sharing, and semantic context reasoning.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Visual & Audio Memory</h4>
                <p className="text-zinc-650 dark:text-zinc-400 mt-1">Stores locations of keys, chargers, and countertops. Contextualizing layout memory for daily actions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Secure Local Compute</h4>
                <p className="text-zinc-650 dark:text-zinc-400 mt-1">Processes conversations locally on-chip, prioritizing user privacy and limiting outbound data flows.</p>
              </div>
            </div>
          )}

          {activeTab === "hardware" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-zinc-500 text-xs block uppercase">Height</span>
                <span className="font-semibold text-lg text-black dark:text-white">5'6" (1.68m)</span>
              </div>
              <div>
                <span className="text-zinc-500 text-xs block uppercase">Weight</span>
                <span className="font-semibold text-lg text-black dark:text-white">66 lbs (30kg)</span>
              </div>
              <div>
                <span className="text-zinc-500 text-xs block uppercase">Lift Capacity</span>
                <span className="font-semibold text-lg text-black dark:text-white">154 lbs (70kg)</span>
              </div>
              <div>
                <span className="text-zinc-500 text-xs block uppercase">Payload</span>
                <span className="font-semibold text-lg text-black dark:text-white">18 lbs (8.2kg)</span>
              </div>
              <div className="pt-2">
                <span className="text-zinc-500 text-xs block uppercase">Battery Capacity</span>
                <span className="font-semibold text-lg text-black dark:text-white">842 Wh</span>
              </div>
              <div className="pt-2">
                <span className="text-zinc-500 text-xs block uppercase">Quick Charge</span>
                <span className="font-semibold text-lg text-black dark:text-white">6 Minutes</span>
              </div>
              <div className="pt-2 col-span-2">
                <span className="text-zinc-500 text-xs block uppercase">Cortex Chipset</span>
                <span className="font-semibold text-base text-black dark:text-white">Nvidia Jetson Thor (2070 TFLOPS)</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. Pricing Section */}
      <section id="pricing" className="py-12 px-6 max-w-6xl mx-auto">
        <ModernPricingPage
          title="Reserve Your NEO"
          subtitle="Pre-order today and join our waitlist pipeline. Standard deposits are fully refundable."
          plans={pricingPlans}
          showAnimatedBackground={true}
        />
      </section>

      {/* 8. FAQ Accordion (Based on WebsiteInfo.txt) */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto text-left">
        <h2 className="text-4xl font-light text-center mb-12 text-black dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isExpanded = expandedFaq === index;
            return (
              <div
                key={index}
                className="border-b border-zinc-200 dark:border-zinc-800 pb-4"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : index)}
                  className="w-full flex items-center justify-between text-left font-medium py-3 text-black dark:text-white hover:opacity-85 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`grid transition-all duration-350 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                    }`}
                  style={{ display: "grid", overflow: "hidden" }}
                >
                  <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed overflow-hidden">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. Footer & Navigation Dock */}
      <footer className="py-16 px-6 bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 text-center relative z-25">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">

          {/* Magnifying Navigation Dock from FooterInfo.txt */}
          <div className="mb-10 w-full max-w-md">
            <p className="text-xs uppercase tracking-wider font-semibold text-zinc-550 dark:text-zinc-400 mb-4">Connect with 1X</p>
            <Dock iconSize={50} maxAdditionalSize={6}>
              <DockIcon href="https://linkedin.com/company/1x-technologies" name="LinkedIn">
                <LinkedinIcon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </DockIcon>
              <DockIcon href="https://youtube.com/@1X-tech" name="YouTube">
                <YoutubeIcon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </DockIcon>
              <DockIcon href="https://instagram.com/1x.technologies/" name="Instagram">
                <InstagramIcon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </DockIcon>
              <DockIcon href="https://x.com/1x_tech" name="X / Twitter">
                <XIcon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </DockIcon>
              <DockIcon href="#faq" name="FAQs">
                <HelpCircle className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </DockIcon>
              <DockIcon href="#neo" name="Product Info">
                <BookOpen className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </DockIcon>
            </Dock>
          </div>

          {/* Logo & Info links */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-900 gap-6">
            <div className="flex items-center gap-2">
              <span className="font-extrabold font-mono text-sm bg-black text-white dark:bg-white dark:text-black w-6 h-6 rounded-sm flex items-center justify-center">1X</span>
              <span className="text-xs text-zinc-550 dark:text-zinc-400">1X © 2026. All rights reserved.</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Privacy & Cookies</a>
              <a href="#" className="hover:underline">Press Kit</a>
              <a href="#" className="hover:underline">Investor Relations</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Menu Overlay */}
      <FloatingActionMenu options={floatingMenuOptions} />
    </div>
  );
}
