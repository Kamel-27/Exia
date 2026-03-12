"use client";

import { useState } from "react";

// ─── Content ────────────────────────────────────────────────────────────────
const content = {
  en: {
    dir: "ltr",
    nav: {
      links: ["How It Works", "For Teachers", "About"],
      cta: "Start Free Screening →",
    },
    hero: {
      badge: "Free • No Equipment Needed • 5 Minutes",
      headline: "Does Your Child Struggle With Reading?",
      sub: "Lexora detects early signs of dyslexia in minutes — using just your camera, no special equipment needed.",
      cta: "Start Free Screening →",
      note: "No account needed to try • Takes 5 minutes",
    },
    stats: [
      { value: "1 in 5", label: "children have dyslexia" },
      { value: "89%", label: "detection accuracy" },
      { value: "5 min", label: "to complete" },
      { value: "100%", label: "free to try" },
    ],
    problem: {
      big: '"Most children with dyslexia are never diagnosed."',
      p1: "Dyslexia affects up to 20% of children worldwide, yet the vast majority go undetected — not because it's rare, but because traditional screening is expensive, slow, and hard to access.",
      p2: "In Egypt, there are almost no tools built for Arabic-speaking children. Most families only discover the problem after years of struggle in school.",
      bold: "Early detection changes everything. The earlier you know, the sooner your child gets the right support.",
    },
    how: {
      title: "How Lexora Works",
      steps: [
        {
          num: "01",
          title: "Create a Profile",
          desc: "Set up a free profile for your child in under a minute. No medical background required.",
        },
        {
          num: "02",
          title: "Take the Reading Test",
          desc: "Your child reads a short passage on screen while Lexora quietly tracks their eye movements using your webcam.",
        },
        {
          num: "03",
          title: "Get Your Results",
          desc: "Receive a clear, simple risk report instantly. Know whether your child needs further evaluation — no jargon, no confusion.",
        },
      ],
    },
    why: {
      title: "Why Parents Trust Lexora",
      cards: [
        {
          icon: "🌍",
          title: "Works in Any Language",
          desc: "Focuses on how the eyes move, not what language is being read. Fully supports Arabic and English.",
        },
        {
          icon: "📷",
          title: "Just a Webcam",
          desc: "No expensive hardware. No clinic visit. Works on any laptop or desktop with a camera.",
        },
        {
          icon: "⚡",
          title: "Results in Minutes",
          desc: "No waiting weeks for an appointment. Get a clear risk assessment the same day.",
        },
        {
          icon: "🔒",
          title: "Private & Secure",
          desc: "Your child's data is never shared. All personal information is encrypted and protected.",
        },
        {
          icon: "🎯",
          title: "Clinically Informed",
          desc: "Built on peer-reviewed research and validated against clinical datasets with 89% accuracy.",
        },
        {
          icon: "👨‍👩‍👧",
          title: "Built for Families",
          desc: "Designed for parents, not doctors. Everything is explained in plain, simple language.",
        },
      ],
    },
    quote: {
      text: '"1 in 5 people have dyslexia — but only 1 in 20 are ever diagnosed."',
      source: "International Dyslexia Association",
    },
    finalCta: {
      headline: "Your child deserves to be understood, not misunderstood.",
      sub: "Take the free 5-minute screening today. No equipment. No appointments. No cost.",
      cta: "Start Free Screening →",
      note: "Join thousands of parents already using Lexora",
    },
    footer: {
      tagline: "Early Dyslexia Screening for Every Child",
      links: ["How It Works", "For Teachers", "Privacy Policy", "Contact"],
      built:
        "Built by students at Alexandria University, Faculty of Computers and Data Science",
      copy: "© 2026 Lexora. All rights reserved.",
    },
  },
  ar: {
    dir: "rtl",
    nav: {
      links: ["كيف يعمل", "للمعلمين", "عن المنصة"],
      cta: "← ابدأ الفحص المجاني",
    },
    hero: {
      badge: "مجاني • لا أجهزة مطلوبة • 5 دقائق",
      headline: "هل يعاني طفلك من صعوبة في القراءة؟",
      sub: "ليكسورا تكتشف العلامات المبكرة لعسر القراءة في دقائق — باستخدام الكاميرا فقط، دون أي أجهزة خاصة.",
      cta: "← ابدأ الفحص المجاني",
      note: "لا حاجة لإنشاء حساب • يستغرق 5 دقائق فقط",
    },
    stats: [
      { value: "1 من 5", label: "أطفال يعانون من عسر القراءة" },
      { value: "89%", label: "دقة في الكشف" },
      { value: "5 دقائق", label: "لإتمام الفحص" },
      { value: "مجاني", label: "لا أجهزة مطلوبة" },
    ],
    problem: {
      big: '"معظم الأطفال المصابين بعسر القراءة لا يُشخَّصون أبدًا."',
      p1: "يؤثر عسر القراءة على ما يصل إلى 20% من الأطفال حول العالم، ومع ذلك تمر الغالبية دون اكتشاف — ليس لأنها نادرة، بل لأن الفحص التقليدي مكلف وبطيء ويصعب الوصول إليه.",
      p2: "في مصر، لا تتوفر تقريبًا أي أدوات مصممة للأطفال الناطقين بالعربية. تكتشف معظم الأسر المشكلة فقط بعد سنوات من المعاناة في المدرسة.",
      bold: "الاكتشاف المبكر يغير كل شيء. كلما عرفت مبكرًا، حصل طفلك على الدعم المناسب أسرع.",
    },
    how: {
      title: "كيف تعمل ليكسورا؟",
      steps: [
        {
          num: "٠١",
          title: "أنشئ ملفًا شخصيًا",
          desc: "أنشئ ملفًا مجانيًا لطفلك في أقل من دقيقة. لا تحتاج إلى أي خلفية طبية.",
        },
        {
          num: "٠٢",
          title: "أجرِ اختبار القراءة",
          desc: "يقرأ طفلك فقرة قصيرة على الشاشة بينما تتتبع ليكسورا حركات عينيه بهدوء عبر كاميرا الويب.",
        },
        {
          num: "٠٣",
          title: "احصل على النتائج",
          desc: "استقبل تقرير مخاطر واضحًا وبسيطًا على الفور. اعرف إذا كان طفلك بحاجة إلى تقييم إضافي — بلا مصطلحات معقدة.",
        },
      ],
    },
    why: {
      title: "لماذا يثق الآباء بليكسورا؟",
      cards: [
        {
          icon: "🌍",
          title: "يعمل بأي لغة",
          desc: "يركز على طريقة تحرك العينين، لا على اللغة المقروءة. يدعم العربية والإنجليزية بالكامل.",
        },
        {
          icon: "📷",
          title: "كاميرا الويب فقط",
          desc: "لا أجهزة مكلفة. لا زيارة للعيادة. يعمل على أي لابتوب أو كمبيوتر مكتبي بكاميرا.",
        },
        {
          icon: "⚡",
          title: "نتائج في دقائق",
          desc: "لا انتظار لأسابيع للحصول على موعد. احصل على تقييم واضح للمخاطر في نفس اليوم.",
        },
        {
          icon: "🔒",
          title: "خاص وآمن",
          desc: "بيانات طفلك لن تُشارك أبدًا. جميع المعلومات الشخصية مشفرة ومحمية.",
        },
        {
          icon: "🎯",
          title: "مبني على أبحاث علمية",
          desc: "مبني على أبحاث محكّمة ومُتحقق منه بمقارنته مع بيانات سريرية بدقة 89%.",
        },
        {
          icon: "👨‍👩‍👧",
          title: "مصمم للعائلات",
          desc: "مصمم للآباء، ليس للأطباء. كل شيء موضح بلغة بسيطة وواضحة.",
        },
      ],
    },
    quote: {
      text: '"1 من كل 5 أشخاص يعانون من عسر القراءة — لكن 1 فقط من كل 20 يُشخَّص."',
      source: "الجمعية الدولية لعسر القراءة",
    },
    finalCta: {
      headline: "طفلك يستحق أن يُفهم، لا أن يُساء فهمه.",
      sub: "أجرِ الفحص المجاني المدته 5 دقائق اليوم. لا أجهزة. لا مواعيد. لا تكلفة.",
      cta: "← ابدأ الفحص المجاني",
      note: "انضم إلى آلاف الآباء الذين يستخدمون ليكسورا بالفعل",
    },
    footer: {
      tagline: "الكشف المبكر عن عسر القراءة لكل طفل",
      links: ["كيف يعمل", "للمعلمين", "سياسة الخصوصية", "تواصل معنا"],
      built:
        "تم تطويره بواسطة طلاب جامعة الإسكندرية، كلية الحاسبات وعلوم البيانات",
      copy: "© 2026 ليكسورا. جميع الحقوق محفوظة.",
    },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [lang, setLang] = useState<"en" | "ar">("ar");
  const t = content[lang];
  const isRtl = lang === "ar";

  return (
    <div
      dir={t.dir}
      style={{
        fontFamily: isRtl
          ? "'Cairo', 'Tajawal', sans-serif"
          : "'Plus Jakarta Sans', sans-serif",
        background: "#F8FAFC",
        color: "#0F172A",
        overflowX: "hidden",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Tajawal:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .fade-in {
          animation: fadeUp 0.7s ease forwards;
          opacity: 0;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }

        .btn-primary {
          background: linear-gradient(135deg, #4F46E5, #06B6D4);
          color: white;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          font-weight: 700;
          font-family: inherit;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(79,70,229,0.35);
          display: inline-block;
          text-decoration: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(79,70,229,0.45);
        }

        .card {
          background: white;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        }

        section { padding: 80px 24px; max-width: 1100px; margin: 0 auto; }

        .section-title {
          font-size: clamp(26px, 4vw, 36px);
          font-weight: 800;
          text-align: center;
          margin-bottom: 48px;
          color: #0F172A;
        }

        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-grid   { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .nav-links  { display: none !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(248,250,252,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #E2E8F0",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 800,
              fontSize: 16,
            }}
          >
            L
          </div>
          <span style={{ fontWeight: 800, fontSize: 20, color: "#0F172A" }}>
            {lang === "ar" ? "ليكسورا" : "Lexora"}
          </span>
        </div>

        {/* Links */}
        <div className="nav-links" style={{ display: "flex", gap: 32 }}>
          {t.nav.links.map((l) => (
            <a
              key={l}
              href="#"
              style={{
                color: "#475569",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: 15,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4F46E5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Lang Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            style={{
              background: "#F1F5F9",
              border: "none",
              borderRadius: 8,
              padding: "6px 14px",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 13,
              color: "#475569",
              fontFamily: "inherit",
              transition: "background 0.2s",
            }}
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <a
            href="#"
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: 14 }}
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div
        style={{
          background:
            "linear-gradient(160deg, #EEF2FF 0%, #E0F7FA 50%, #F8FAFC 100%)",
          padding: "80px 24px 100px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: isRtl ? "auto" : -80,
            right: isRtl ? -80 : "auto",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(79,70,229,0.12), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: isRtl ? "auto" : -60,
            left: isRtl ? -60 : "auto",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
          <div
            className="fade-in"
            style={{
              display: "inline-block",
              background:
                "linear-gradient(135deg, rgba(79,70,229,0.12), rgba(6,182,212,0.12))",
              border: "1px solid rgba(79,70,229,0.2)",
              borderRadius: 50,
              padding: "6px 18px",
              fontSize: 13,
              fontWeight: 600,
              color: "#4F46E5",
              marginBottom: 24,
            }}
          >
            {t.hero.badge}
          </div>

          <h1
            className="fade-in delay-1"
            style={{
              fontSize: "clamp(32px, 6vw, 58px)",
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#0F172A",
              marginBottom: 20,
            }}
          >
            {t.hero.headline}
          </h1>

          <p
            className="fade-in delay-2"
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "#475569",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 580,
              margin: "0 auto 36px",
            }}
          >
            {t.hero.sub}
          </p>

          <div className="fade-in delay-3">
            <a
              href="#"
              className="btn-primary"
              style={{ fontSize: 17, padding: "16px 40px" }}
            >
              {t.hero.cta}
            </a>
            <p style={{ marginTop: 14, color: "#94A3B8", fontSize: 13 }}>
              {t.hero.note}
            </p>
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div style={{ background: "white", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
            }}
          >
            {t.stats.map((s, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "20px 16px",
                  borderRight:
                    i < t.stats.length - 1 ? "1px solid #E2E8F0" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(28px, 4vw, 40px)",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: 4,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{ color: "#64748B", fontSize: 14, fontWeight: 500 }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <section>
        <div
          style={{
            background: "linear-gradient(135deg, #0F172A, #1E293B)",
            borderRadius: 24,
            padding: "56px 48px",
            color: "white",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: "#A5B4FC",
              marginBottom: 28,
              lineHeight: 1.4,
            }}
          >
            {t.problem.big}
          </p>
          <p
            style={{
              color: "#CBD5E1",
              fontSize: 17,
              lineHeight: 1.8,
              marginBottom: 16,
              maxWidth: 700,
              margin: "0 auto 16px",
            }}
          >
            {t.problem.p1}
          </p>
          <p
            style={{
              color: "#CBD5E1",
              fontSize: 17,
              lineHeight: 1.8,
              marginBottom: 24,
              maxWidth: 700,
              margin: "0 auto 24px",
            }}
          >
            {t.problem.p2}
          </p>
          <p
            style={{
              color: "#67E8F9",
              fontWeight: 700,
              fontSize: 18,
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: 24,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            {t.problem.bold}
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section>
        <h2 className="section-title">{t.how.title}</h2>
        <div
          className="steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {t.how.steps.map((step, i) => (
            <div
              key={i}
              className="card"
              style={{ textAlign: "center", padding: 36 }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: "linear-gradient(135deg, #EEF2FF, #E0F7FA)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#4F46E5",
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 10,
                  color: "#0F172A",
                }}
              >
                {step.title}
              </h3>
              <p style={{ color: "#64748B", lineHeight: 1.7, fontSize: 15 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY LEXORA ── */}
      <section style={{ background: "#F8FAFC" }}>
        <h2 className="section-title">{t.why.title}</h2>
        <div
          className="why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {t.why.cards.map((card, i) => (
            <div key={i} className="card">
              <div style={{ fontSize: 32, marginBottom: 12 }}>{card.icon}</div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: 17,
                  marginBottom: 8,
                  color: "#0F172A",
                }}
              >
                {card.title}
              </h3>
              <p style={{ color: "#64748B", lineHeight: 1.7, fontSize: 14 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section style={{ textAlign: "center", padding: "60px 24px" }}>
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            borderLeft: isRtl ? "none" : "4px solid #4F46E5",
            borderRight: isRtl ? "4px solid #4F46E5" : "none",
            paddingLeft: isRtl ? 0 : 32,
            paddingRight: isRtl ? 32 : 0,
            textAlign: isRtl ? "right" : "left",
          }}
        >
          <p
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 700,
              color: "#1E293B",
              lineHeight: 1.5,
              marginBottom: 12,
            }}
          >
            {t.quote.text}
          </p>
          <p style={{ color: "#94A3B8", fontSize: 14 }}>— {t.quote.source}</p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "40px 24px 80px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
            borderRadius: 24,
            padding: "64px 40px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: 800,
              marginBottom: 16,
              lineHeight: 1.3,
            }}
          >
            {t.finalCta.headline}
          </h2>
          <p
            style={{
              fontSize: 18,
              opacity: 0.85,
              marginBottom: 32,
              lineHeight: 1.7,
            }}
          >
            {t.finalCta.sub}
          </p>
          <a
            href="#"
            style={{
              background: "white",
              color: "#4F46E5",
              padding: "16px 40px",
              borderRadius: 50,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 17,
              display: "inline-block",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              transition: "transform 0.2s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {t.finalCta.cta}
          </a>
          <p style={{ marginTop: 16, opacity: 0.7, fontSize: 13 }}>
            {t.finalCta.note}
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#0F172A",
          color: "#94A3B8",
          padding: "48px 32px 32px",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 800, fontSize: 20, color: "white" }}>
            {lang === "ar" ? "ليكسورا" : "Lexora"}
          </span>
          <span style={{ marginRight: 8, marginLeft: 8 }}>—</span>
          <span style={{ fontSize: 14 }}>{t.footer.tagline}</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "20px 0",
          }}
        >
          {t.footer.links.map((l) => (
            <a
              key={l}
              href="#"
              style={{
                color: "#64748B",
                textDecoration: "none",
                fontSize: 14,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#94A3B8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
            >
              {l}
            </a>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#475569", marginBottom: 8 }}>
          {t.footer.built}
        </p>
        <p style={{ fontSize: 12, color: "#334155" }}>{t.footer.copy}</p>
      </footer>
    </div>
  );
}
