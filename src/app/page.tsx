"use client";

import { motion } from "framer-motion";
import { Camera, Calendar, Share2, Shield } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header */}
      <nav className="w-full max-w-7xl flex justify-between items-center p-6 bg-transparent">
        <div className="text-2xl font-bold text-retro-blue">Retroto</div>
        <div className="flex gap-6 items-center">
          <Link href="#features" className="hover:text-retro-orange transition-colors hidden md:block">{t.common.features}</Link>
          <Link href="/privacy" className="hover:text-retro-orange transition-colors hidden md:block">{t.common.privacy}</Link>
          <Link href="/support" className="hover:text-retro-orange transition-colors hidden md:block">{t.common.support}</Link>
          <LanguageSwitcher />
          {/* <button className="bg-retro-orange text-white px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">
            {t.common.start}
          </button> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6 text-center max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-retro-dark whitespace-pre-line"
        >
          {t.home.heroTitle.includes('，') ? (
            <>
              {t.home.heroTitle.split('，')[0]}，<br />{t.home.heroTitle.split('，')[1]}
            </>
          ) : t.home.heroTitle}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-600 mb-10 max-w-2xl"
        >
          {t.home.heroSubtitle}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full aspect-video bg-retro-yellow rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
        >
          <div className="text-retro-dark font-medium flex flex-col items-center p-6">
             <Camera size={48} className="mb-4 text-retro-orange" />
             <p>{t.home.demoPlaceholder}</p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full bg-white py-24 px-6 flex justify-center">
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<Calendar className="text-retro-orange" />}
            title={t.home.feature1Title}
            description={t.home.feature1Desc}
          />
          <FeatureCard 
            icon={<Share2 className="text-retro-orange" />}
            title={t.home.feature2Title}
            description={t.home.feature2Desc}
          />
          <FeatureCard 
            icon={<Shield className="text-retro-orange" />}
            title={t.home.feature3Title}
            description={t.home.feature3Desc}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 border-t border-zinc-200 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-retro-blue">Retroto</div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="/privacy" className="hover:underline">{t.common.privacy}</Link>
            <Link href="/support" className="hover:underline">{t.common.support}</Link>
            <Link href="/terms" className="hover:underline">{t.common.terms}</Link>
            <span>{t.common.rights}</span>
          </div>
        </div>
      </footer>
      </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-retro-cream/30 border border-retro-cream shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-6 p-4 bg-white rounded-full shadow-inner">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-retro-dark">{title}</h3>
      <p className="text-zinc-600 leading-relaxed">{description}</p>
    </div>
  );
}
