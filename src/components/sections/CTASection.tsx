"use client";

import { useState, FormEvent } from "react";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { BRAND_CATEGORIES, EXPERIENCE_OPTIONS, SERVICE_OPTIONS } from "@/lib/constants";

interface FormState {
  company: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  experience: string;
  services: string[];
  message: string;
}

const inputClasses =
  "w-full bg-[#0a0f1e] border border-[rgba(99,102,241,0.25)] rounded-lg px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:border-brand-indigo focus:outline-none focus:ring-1 focus:ring-brand-indigo/50 transition";

const labelClasses = "block text-sm font-medium text-text-secondary mb-1.5";

const trustItems = [
  "24시간 내 담당자 연락",
  "100% 무료 초기 상담",
  "NDA 보장",
];

export default function CTASection() {
  const [form, setForm] = useState<FormState>({
    company: "",
    name: "",
    email: "",
    phone: "",
    category: "",
    experience: "",
    services: [],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form data:", form);
    alert("신청이 완료되었습니다!");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* ── Background radial glow ────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial-indigo opacity-20"
      />

      {/* Floating geometric shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[18%] left-[5%] w-28 h-28 rounded-full border border-brand-indigo/8 animate-float-slow" />
        <div className="absolute bottom-[12%] right-[6%] w-20 h-20 rotate-45 border border-brand-cyan/8 animate-float-reverse" />
        <div className="absolute top-[40%] right-[4%] w-3 h-3 rounded-full bg-brand-indigo/20 animate-pulse-glow" />
        <div className="absolute bottom-[30%] left-[8%] w-2 h-2 rounded-full bg-brand-cyan/20 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[65%] left-[92%] w-16 h-16 rounded-full border border-brand-indigo/5 animate-float-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* ── Top headline ────────────────────────────────────── */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight max-w-3xl mx-auto">
              인도네시아 시장,
              <br />
              <span className="gradient-text">지금 시작하지 않으면 늦습니다.</span>
            </h2>
            <p className="mt-6 text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              엄선된 K브랜드만 선정합니다. 무료 컨설팅으로 귀사의 인도네시아 진출 가능성을 확인하세요.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Contact form ────────────────────────────────────── */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <GlowCard variant="indigo" animated>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row: company + name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className={labelClasses}>
                      회사명 <span className="text-brand-indigo">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="회사명을 입력하세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      담당자명 <span className="text-brand-indigo">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="담당자명을 입력하세요"
                    />
                  </div>
                </div>

                {/* Row: email + phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      이메일 <span className="text-brand-indigo">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      전화번호 <span className="text-brand-indigo">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                {/* Row: category + experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="category" className={labelClasses}>
                      브랜드 카테고리
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">선택해주세요</option>
                      {BRAND_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experience" className={labelClasses}>
                      현재 해외 진출 경험
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">선택해주세요</option>
                      {EXPERIENCE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Services checkboxes */}
                <div>
                  <p className={labelClasses}>관심 서비스 (복수 선택 가능)</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1">
                    {SERVICE_OPTIONS.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 cursor-pointer group min-w-0"
                      >
                        <input
                          type="checkbox"
                          checked={form.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-4 h-4 rounded border-dark-border bg-[#0a0f1e] text-brand-indigo focus:ring-brand-indigo/50 focus:ring-offset-0 flex-shrink-0"
                        />
                        <span className="text-sm text-text-secondary group-hover:text-text-primary transition break-words min-w-0">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClasses}>
                    문의 내용
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                    placeholder="궁금하신 내용을 자유롭게 작성해주세요"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg font-bold text-base text-white bg-gradient-to-r from-brand-indigo to-brand-cyan shadow-lg shadow-brand-indigo/25 hover:shadow-brand-indigo/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer truncate"
                >
                  무료 컨설팅 신청하기
                </button>
              </form>
            </GlowCard>
          </div>
        </ScrollReveal>

        {/* ── Trust elements ───────────────────────────────────── */}
        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {trustItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-sm text-text-secondary"
              >
                <span className="text-brand-emerald font-bold">&#10003;</span>
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
