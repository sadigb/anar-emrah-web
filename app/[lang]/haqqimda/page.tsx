import Navbar from '@/components/Navbar';
import az from '@/locales/az.json';
import en from '@/locales/en.json';
import ru from '@/locales/ru.json';

const dictionaries: Record<string, any> = { az, en, ru };

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang] || az;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar lang={lang} dict={dict} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-950 mb-4">{dict.nav.about}</h1>
        <p className="text-gray-700">Dr. Anar Əmrah haqqında ətraflı məlumat tezliklə əlavə olunacaq.</p>
      </div>
    </div>
  );
}