"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors text-sm font-medium text-zinc-600"
      aria-label="Toggle Language"
    >
      <Languages size={16} />
      <span>{language === 'zh' ? 'English' : '中文'}</span>
    </button>
  );
}
