"use client";

import { motion } from "framer-motion";
import { Camera, Calendar, Share2, Shield, ArrowLeft, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function SupportPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-retro-cream/20 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-retro-orange hover:underline mb-8">
          <ArrowLeft size={16} className="mr-2" />
          {t.common.backHome}
        </Link>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-100">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-retro-dark">{t.support.title}</h1>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              {t.support.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <section>
              <h2 className="text-2xl font-bold text-retro-dark mb-6 flex items-center gap-2">
                <Mail className="text-retro-orange" size={24} />
                {t.support.contactTitle}
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-retro-cream/30 border border-retro-cream">
                  <p className="text-sm text-zinc-500 mb-1">{t.support.email}</p>
                  <a href="mailto:feedback.retroto@gmail.com" className="text-lg font-medium text-retro-dark underline">feedback.retroto@gmail.com</a>
                </div>
                {/* <div className="p-4 rounded-2xl bg-retro-cream/30 border border-retro-cream">
                  <p className="text-sm text-zinc-500 mb-1">Twitter / X</p>
                  <p className="text-lg font-medium text-retro-dark">@RetrotoApp</p>
                </div> */}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-retro-dark mb-6 flex items-center gap-2">
                <MessageCircle className="text-retro-orange" size={24} />
                {t.support.faqTitle}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-retro-dark mb-2">{t.support.faq1Q}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{t.support.faq1A}</p>
                </div>
                <div>
                  <h3 className="font-bold text-retro-dark mb-2">{t.support.faq2Q}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{t.support.faq2A}</p>
                </div>
                <div>
                  <h3 className="font-bold text-retro-dark mb-2">{t.support.faq3Q}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{t.support.faq3A}</p>
                </div>
              </div>
            </section>
          </div>

          <footer className="pt-8 border-t border-zinc-100 text-center">
            <p className="text-zinc-500 text-sm">
              {t.common.rights}
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
