import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.18),_transparent_24%),linear-gradient(135deg,#fff7ed_0%,#fef3c7_100%)] text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-6 lg:px-8">
        <header className="mb-10 flex items-center justify-between rounded-full border border-amber-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur">
          <div className="text-lg font-semibold tracking-tight">🐱 Felinos & Krispin</div>
          <nav className="flex gap-4 text-sm text-slate-600">
            <Link href="/" className="transition hover:text-slate-900">
              Início
            </Link>
            <Link href="/curiosidades" className="transition hover:text-slate-900">
              Curiosidades
            </Link>
            <Link href="/contato" className="transition hover:text-slate-900">
              Contato
            </Link>
          </nav>
        </header>

        <div className="grid gap-8 rounded-[2rem] border border-amber-200 bg-white/90 p-8 shadow-sm lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Sobre</p>
            <h1 className="mb-4 text-3xl font-semibold sm:text-4xl">Uma página dedicada ao encanto felino</h1>
            <p className="text-base leading-8 text-slate-600">
              Este projeto nasceu para reunir informações simples e agradáveis sobre gatos, destacando sua elegância,
              personalidade e o carinho que eles transmitem aos lares.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="mb-4 text-lg font-semibold">Por que gostamos tanto deles?</h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• São inteligentes e cheios de personalidade.</li>
              <li>• Têm hábitos fascinantes e muito charmosos.</li>
              <li>• Transformam qualquer ambiente com sua presença.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
