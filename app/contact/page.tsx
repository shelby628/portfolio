"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Send,
  Mail,
  Phone,
  Linkedin,
  Github,
  BookOpen,
  CheckCircle,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shelbyadede@gmail.com",
    href: "mailto:shelbyadede@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 707 887162",
    href: "tel:+254707887162",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shelbyadede",
    href: "https://www.linkedin.com/in/shelbyadede",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/shelby628",
    href: "https://github.com/shelby628",
  },
  {
    icon: BookOpen,
    label: "Medium",
    value: "medium.com/@shelbyadede",
    href: "https://medium.com/@shelbyadede",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mounted, setMounted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong");
        setStatus("error");
        return;
      }

      // If the API returned a fallback mailto link (Web3Forms unavailable)
      if (data.fallback && data.mailtoLink) {
        window.location.href = data.mailtoLink;
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      // Direct fallback: open mailto link
      const mailtoSubject = encodeURIComponent(
        formData.subject || `Portfolio Contact from ${formData.name}`
      );
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:shelbyadede@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#070d0a" }}>
      {/* Decorative elements */}
      <div
        className="pointer-events-none fixed inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, #34d39920, transparent)",
        }}
      />

      {/* Navigation bar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-medium text-[#7a9484] transition-all duration-300 hover:text-[#34d399] hover:gap-3"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
        <span className="font-serif text-lg font-bold text-[#e8ede9]">
          Shelby<span className="text-[#34d399]">.</span>
        </span>
      </nav>

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-8 md:px-12">
        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Left side - Info */}
          <div
            className={`flex-1 transition-all duration-1000 ${
              mounted ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#34d399]">
              Get in Touch
            </span>
            <h1 className="mt-3 font-serif text-4xl font-bold text-[#e8ede9] md:text-6xl">
              {"Let's Explore Your "}
              <span className="text-[#c9a84c]">Data</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#7a9484]">
              Have a data challenge, a machine learning idea, or a project that
              needs analytical expertise? Send me a message and it will be
              delivered directly to my inbox.
            </p>

            {/* Contact links */}
            <div className="mt-12 flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className={`group flex items-center gap-4 rounded-xl border border-[#1e2e27] p-4 transition-all duration-500 hover:scale-[1.02] hover:border-[#34d399]/30 hover:bg-[#34d399]/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#34d399]/10 ${
                    mounted
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                  style={{
                    background: "rgba(17, 25, 22, 0.5)",
                    transitionDelay: `${200 + i * 100}ms`,
                  }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#34d399]/10 text-[#34d399] transition-all duration-300 group-hover:bg-[#34d399] group-hover:text-[#0a0f0d] group-hover:shadow-lg group-hover:shadow-[#34d399]/30 group-hover:scale-110">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-medium tracking-wide uppercase text-[#7a9484]">
                      {label}
                    </div>
                    <div className="truncate text-sm font-medium text-[#e8ede9] transition-colors duration-300 group-hover:text-[#34d399]">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div
            className={`w-full lg:max-w-lg transition-all duration-1000 delay-300 ${
              mounted ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <div
              className="overflow-hidden rounded-2xl border border-[#1e2e27] transition-all duration-300 hover:border-[#34d399]/20"
              style={{
                background:
                  "linear-gradient(145deg, rgba(17, 25, 22, 0.8), rgba(26, 37, 32, 0.5))",
              }}
            >
              <div className="p-8 md:p-10">
                {status === "success" ? (
                  <div className="flex flex-col items-center gap-4 py-12 text-center animate-in fade-in zoom-in duration-500">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#34d399]/10 animate-bounce">
                      <CheckCircle className="h-8 w-8 text-[#34d399]" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#e8ede9]">
                      Message Sent
                    </h3>
                    <p className="text-[#7a9484]">
                      Your message has been delivered to my inbox. I will get
                      back to you shortly!
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 rounded-full border border-[#34d399]/30 bg-[#34d399]/10 px-6 py-2.5 text-sm font-medium text-[#34d399] transition-all duration-300 hover:scale-105 hover:bg-[#34d399] hover:text-[#0a0f0d] active:scale-95"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <h3 className="font-serif text-xl font-bold text-[#e8ede9]">
                      Send a Message
                    </h3>

                    {errorMessage && (
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400 animate-in slide-in-from-top duration-300">
                        {errorMessage}
                      </div>
                    )}

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-xs font-medium tracking-wide uppercase text-[#7a9484]"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="rounded-lg border border-[#1e2e27] bg-[#0a0f0d] px-4 py-3 text-sm text-[#e8ede9] placeholder-[#7a9484]/50 outline-none transition-all duration-300 focus:border-[#34d399]/50 focus:ring-2 focus:ring-[#34d399]/20 focus:shadow-lg focus:shadow-[#34d399]/5"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-medium tracking-wide uppercase text-[#7a9484]"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="rounded-lg border border-[#1e2e27] bg-[#0a0f0d] px-4 py-3 text-sm text-[#e8ede9] placeholder-[#7a9484]/50 outline-none transition-all duration-300 focus:border-[#34d399]/50 focus:ring-2 focus:ring-[#34d399]/20 focus:shadow-lg focus:shadow-[#34d399]/5"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="subject"
                        className="text-xs font-medium tracking-wide uppercase text-[#7a9484]"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="rounded-lg border border-[#1e2e27] bg-[#0a0f0d] px-4 py-3 text-sm text-[#e8ede9] placeholder-[#7a9484]/50 outline-none transition-all duration-300 focus:border-[#34d399]/50 focus:ring-2 focus:ring-[#34d399]/20 focus:shadow-lg focus:shadow-[#34d399]/5"
                        placeholder="Data analysis, ML project, opportunity..."
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="message"
                        className="text-xs font-medium tracking-wide uppercase text-[#7a9484]"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="resize-none rounded-lg border border-[#1e2e27] bg-[#0a0f0d] px-4 py-3 text-sm text-[#e8ede9] placeholder-[#7a9484]/50 outline-none transition-all duration-300 focus:border-[#34d399]/50 focus:ring-2 focus:ring-[#34d399]/20 focus:shadow-lg focus:shadow-[#34d399]/5"
                        placeholder="Tell me about your data challenge or project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#34d399] py-3.5 text-sm font-semibold text-[#0a0f0d] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#34d399]/25 active:scale-95 disabled:opacity-60 disabled:hover:scale-100"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending to inbox...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-10">Send Message</span>
                          <Send className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          <span className="absolute inset-0 -translate-x-full bg-[#c9a84c] transition-transform duration-500 group-hover:translate-x-0" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-[#7a9484]/60">
                      Messages are delivered directly to shelbyadede@gmail.com
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-[#1e2e27] px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-sm text-[#7a9484]">
            &copy; {new Date().getFullYear()} Shelby Adede
          </span>
          <Link
            href="/"
            className="text-sm text-[#7a9484] transition-colors duration-300 hover:text-[#34d399]"
          >
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
