"use client";

import { motion } from "framer-motion";
import { Camera, Calendar, Share2, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header */}
      <nav className="w-full max-w-7xl flex justify-between items-center p-6 bg-transparent">
        <div className="text-2xl font-bold text-retro-blue">Retroto</div>
        <div className="flex gap-6 items-center">
          <Link href="#features" className="hover:text-retro-orange transition-colors">功能</Link>
          <Link href="/privacy" className="hover:text-retro-orange transition-colors">隐私</Link>
          <button className="bg-retro-orange text-white px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">
            立即开始
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6 text-center max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-retro-dark"
        >
          让记忆重现，<br />让照片说话
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-600 mb-10 max-w-2xl"
        >
          Retroto 是一款专注于照片时间线回顾与整理的应用。
          通过智能整理，带您重温生命中那些被遗忘的美好瞬间。
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full aspect-video bg-retro-yellow rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
        >
          <div className="text-retro-dark font-medium flex flex-col items-center">
             <Camera size={48} className="mb-4 text-retro-orange" />
             <p>这里将展示产品演示视频或交互式时间线</p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full bg-white py-24 px-6 flex justify-center">
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<Calendar className="text-retro-orange" />}
            title="自动时间线"
            description="自动按时间、地点和主题整理您的照片库，生成精美的时间线。"
          />
          <FeatureCard 
            icon={<Share2 className="text-retro-orange" />}
            title="智能回顾"
            description="每日推送“那年今日”或“某次旅行”的精彩回顾，让记忆不再落灰。"
          />
          <FeatureCard 
            icon={<Shield className="text-retro-orange" />}
            title="隐私第一"
            description="所有处理均在本地完成，我们承诺绝不上传您的私人照片到服务器。"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 border-t border-zinc-200 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-retro-blue">Retroto</div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="/privacy" className="hover:underline">隐私政策</Link>
            <Link href="/terms" className="hover:underline">服务条款</Link>
            <span>© 2026 Retroto. All rights reserved.</span>
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
