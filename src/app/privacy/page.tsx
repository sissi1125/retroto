import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-retro-cream/20 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-100">
        <Link href="/" className="inline-flex items-center text-retro-orange hover:underline mb-8">
          <ArrowLeft size={16} className="mr-2" />
          返回首页
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-retro-dark">隐私政策</h1>
        
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-6">
          <p className="text-sm">最后更新日期：2026年1月20日</p>
          
          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">1. 我们收集的信息</h2>
            <p>
              Retroto 致力于保护您的隐私。我们仅在您授权的情况下访问您的系统照片库。
              所有照片的分析和整理工作均在您的设备本地完成。我们<b>不会</b>将您的原始照片、视频或个人元数据上传到我们的服务器。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">2. 信息的使用</h2>
            <p>
              我们收集的信息仅用于：
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>为您生成个性化的照片时间线回顾。</li>
              <li>提供搜索和分类功能。</li>
              <li>改进应用的用户体验和功能。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">3. 第三方服务</h2>
            <p>
              Retroto 可能使用基本的匿名分析工具（如 Apple 的崩溃报告）来帮助我们修复 Bug 并改进稳定性。
              这些工具不会收集任何可以识别您个人身份的信息。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">4. 您的权利</h2>
            <p>
              您可以随时在系统设置中撤销对 Retroto 的照片库访问权限。
              如果您删除应用，应用在本地生成的任何缓存数据也将随之删除。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">5. 联系我们</h2>
            <p>
              如果您对本隐私政策有任何疑问，请通过以下方式联系我们：<br />
              Email: support@retroto.app
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
