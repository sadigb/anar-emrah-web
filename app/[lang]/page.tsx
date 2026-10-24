import Navbar from '@/components/Navbar';
import Link from 'next/link';
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

      {/* Hero Banner Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <span className="inline-block px-4 py-1 bg-blue-700/50 backdrop-blur border border-blue-400/30 rounded-full text-sm font-semibold tracking-wide text-blue-200">
              Ürək-Damar Cərrahı
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Dr. Anar Əmrah
            </h1>
            <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={`/${lang}/elaqe`}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition duration-200 text-center"
              >
                {dict.hero.appointment}
              </Link>
              <Link
                href={`/${lang}/haqqimda`}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 transition duration-200 text-center"
              >
                {dict.nav.about}
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-blue-950 flex items-center justify-center">
              <span className="text-blue-300 text-center px-6">
                [ Dr. Anar Əmrah Fotoqrafiyası ]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-extrabold text-blue-900">15+</p>
            <p className="text-sm text-gray-500 font-medium">İllik Təcrübə</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-blue-900">3000+</p>
            <p className="text-sm text-gray-500 font-medium">Uğurlu Əməliyyat</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-blue-900">100%</p>
            <p className="text-sm text-gray-500 font-medium">Peşəkar Yaşatmalı Yanaşma</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-blue-900">3 Dildə</p>
            <p className="text-sm text-gray-500 font-medium">Xidmət və Məsləhət</p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">{dict.nav.services}</h2>
          <p className="text-gray-600 mt-2">Müasir avadanlıqlar və mininvaziv cərrahi üsullarla xidmətlər</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Açıq Ürək Cərrahiyyəsi</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Aorto-koronar şuntlama, qapaq əvəzetmə və bərpası əməliyyatları.
            </p>
            <Link href={`/${lang}/xidmetler`} className="text-blue-600 font-medium text-sm hover:underline">
              Ətraflı &rarr;
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-red-100 text-red-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Damar Cərrahiyyəsi</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Arterial və venoz sistem xəstəliklərinin müasir cərrahi və invaziv müalicəsi.
            </p>
            <Link href={`/${lang}/xidmetler`} className="text-blue-600 font-medium text-sm hover:underline">
              Ətraflı &rarr;
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Varikoz Müalicəsi</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Lazer və skleroterapiya üsulları ilə ağrısız, kəsiksiz varikoz müalicəsi.
            </p>
            <Link href={`/${lang}/xidmetler`} className="text-blue-600 font-medium text-sm hover:underline">
              Ətraflı &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Dr. Anar Əmrah. Bütün hüquqlar qorunur.</p>
        </div>
      </footer>
    </div>
  );
}