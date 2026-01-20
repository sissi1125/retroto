import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-retro-cream/20 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-100">
        <Link href="/" className="inline-flex items-center text-retro-orange hover:underline mb-8">
          <ArrowLeft size={16} className="mr-2" />
          返回首页
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-retro-dark">服务条款</h1>
        
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-6">
          <p className="text-sm">最后更新日期：2026年1月20日</p>
          
          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">1. 条款接受</h2>
            <p>
              通过下载、安装或使用 Retroto 应用，您同意受这些服务条款的约束。如果您不同意这些条款，请勿使用本应用。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">2. 许可使用</h2>
            <p>
              我们授予您个人、不可转让且非排他性的许可，允许您在您的个人设备上使用 Retroto 仅用于个人、非商业目的。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">3. 用户责任</h2>
            <p>
              您应对通过 Retroto 处理的内容以及您使用本应用的行为负责。您必须确保您有权访问并让 Retroto 处理您照片库中的内容。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">4. 免责声明</h2>
            <p>
              Retroto 按“原样”提供，不提供任何形式的保证。我们不保证应用将始终无错误或不间断地运行，也不对因数据损坏或丢失造成的任何损失负责。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-retro-dark mb-4">5. 条款变更</h2>
            <p>
              我们保留随时修改这些条款的权利。修订后的条款将在应用内或我们的官网上发布。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
