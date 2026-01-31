"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Calendar, Share2, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useRef } from "react";

export default function Home() {
  const { t, language } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const images = language === 'zh' 
    ? [
        '/images/zh/Cover-zh.png',
        '/images/zh/LifeTimeline-zh.png',
        '/images/zh/YealyReview-zh.png',
        '/images/zh/ShareAsPoster-zh.png',
        '/images/zh/OnTapImport-zh.png',
        '/images/zh/CleanPhotos-zh.png',
      ]
    : [
        '/images/en/Cover-en.png',
        '/images/en/Life Timeline-en.png',
        '/images/en/YearlyReview-en.png',
        '/images/en/ShareAsPoster-en.png',
        '/images/en/OnTapImport-en.png',
        '/images/en/CleanPhotos-en.png',
      ];

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
      <section className="flex flex-col items-center justify-center py-10 px-6 text-center max-w-7xl">
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative w-full mt-12"
        >
          <div 
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4 md:px-0 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex-shrink-0 w-[200px] md:w-[320px] aspect-[9/19.5] relative rounded-3xl overflow-hidden shadow-xl snap-center border-4 border-white"
              >
                <Image
                  src={src}
                  alt={`Retroto Preview ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index < 3}
                />
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex justify-center gap-4 mt-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white shadow-lg text-retro-blue hover:text-retro-orange transition-colors border border-zinc-100"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white shadow-lg text-retro-blue hover:text-retro-orange transition-colors border border-zinc-100"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-retro-yellow/20 blur-3xl rounded-full" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full bg-white py-20 px-6 flex justify-center">
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
