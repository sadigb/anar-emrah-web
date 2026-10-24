import Navbar from '@/components/Navbar';
import az from '@/locales/az.json';
import en from '@/locales/en.json';
import ru from '@/locales/ru.json';

const dictionaries: Record<string, any> = { az, en, ru };

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang] || az;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar lang={lang} dict={dict} />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-blue-950 mb-4">
          {dict.hero.title}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          {dict.hero.subtitle}
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          {dict.hero.appointment}
        </button>
      </main>
    </div>
  );
}