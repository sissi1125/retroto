"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-retro-cream/20 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-100">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="inline-flex items-center text-retro-orange hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            {t.common.backHome}
          </Link>
          <LanguageSwitcher />
        </div>
        
        <h1 className="text-4xl font-bold mb-8 text-retro-dark">{t.privacy.title}</h1>
        
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-6">
          <p className="text-sm">{t.privacy.lastUpdated}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">{t.privacy.section1Title}</h2>
            <p>
              {t.privacy.section1Content}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">{t.privacy.section2Title}</h2>
            <p>
              {t.privacy.section2Content}
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              {t.privacy.section2List.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">{t.privacy.section3Title}</h2>
            <p>
              {t.privacy.section3Content}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">{t.privacy.section4Title}</h2>
            <p>
              {t.privacy.section4Content}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">{t.privacy.section5Title}</h2>
            <p>
              {t.privacy.section5Content}<br />
              <a href="mailto:feedback.retroto@gmail.com" className="text-retro-orange underline">feedback.retroto@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
