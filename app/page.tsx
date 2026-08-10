import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.18),_transparent_24%),linear-gradient(135deg,#fff7ed_0%,#fef3c7_100%)] text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-6 lg:px-8">
        <header className="mb-16 flex items-center justify-between rounded-full border border-amber-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur">
          <div className="text-lg font-semibold tracking-tight">🐱 Felinos & Krispin</div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <Link href="/sobre" className="transition hover:text-slate-900">
              Sobre
            </Link>
            <Link href="/curiosidades" className="transition hover:text-slate-900">
              Curiosidades
            </Link>
            <Link href="/contato" className="transition hover:text-slate-900">
              Contato
            </Link>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
              Mundo encantador dos felinos
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Gatos são elegantes, misteriosos e cheios de personalidade.
            </h1>
            <p className="mb-8 text-lg leading-8 text-slate-600">
              Descubra a beleza, os hábitos e a magia desses pequenos grandes companheiros.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/curiosidades"
                className="rounded-full bg-slate-900 px-6 py-3 text-center font-medium text-white transition hover:bg-slate-700"
              >
                Ver curiosidades
              </Link>
              <Link
                href="/sobre"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 transition hover:border-slate-400"
              >
                Conhecer mais
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-amber-200 bg-white/90 p-6 shadow-xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400"></span>
              <span className="h-3 w-3 rounded-full bg-amber-400"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="text-sm font-medium text-amber-700">Fato do dia</p>
                <h2 className="mt-1 text-xl font-semibold">Os gatos conseguem cair com grande equilíbrio.</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-2xl font-semibold">9</p>
                  <p className="text-sm text-slate-500">Vidas na imaginação popular</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-2xl font-semibold">100+</p>
                  <p className="text-sm text-slate-500">Raças diferentes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-amber-200 bg-white/80 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Felinos & Krispin. Todos os direitos reservados.</p>
          <a href="mailto:krispin532@gmail.com" className="font-medium text-slate-900 hover:underline">
            krispin532@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
