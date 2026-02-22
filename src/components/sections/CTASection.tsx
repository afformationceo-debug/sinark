"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import Card from "@/components/ui/Card";
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

const miniStats = [
  { label: "진행 중", value: "12건" },
  { label: "평균 응답", value: "4시간" },
  { label: "만족도", value: "97%" },
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
    <section
      id="contact"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* ── Left column: headline + trust ──────────────────── */}
          <ScrollReveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-display text-3xl md:text-4xl lg:text-[40px] font-bold text-text-primary leading-tight">
                인도네시아 시장,
                <br />
                <span className="gradient-text">지금 시작하지 않으면 늦습니다.</span>
              </h2>

              <p className="mt-6 text-[15px] text-text-secondary leading-relaxed">
                엄선된 K브랜드만 선정합니다. 무료 컨설팅으로 귀사의 인도네시아 진출 가능성을 확인하세요.
              </p>

              {/* Trust items */}
              <ul className="mt-8 space-y-3">
                {trustItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[15px] text-text-secondary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Mini stats row */}
              <div className="mt-8 flex items-center gap-6">
                {miniStats.map((stat, idx) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    <div>
                      <p className="text-lg font-semibold text-text-primary">{stat.value}</p>
                      <p className="text-xs tracking-wide text-text-tertiary">{stat.label}</p>
                    </div>
                    {idx < miniStats.length - 1 && (
                      <div className="h-8 w-px bg-white/8" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right column: contact form ─────────────────────── */}
          <ScrollReveal delay={0.2} className="lg:col-span-7">
            <Card variant="elevated" color="indigo">
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
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
