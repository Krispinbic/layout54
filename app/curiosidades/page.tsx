import Link from "next/link";

export default function CuriosidadesPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.18),_transparent_24%),linear-gradient(135deg,#fff7ed_0%,#fef3c7_100%)] text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-6 lg:px-8">
        <header className="mb-10 flex items-center justify-between rounded-full border border-amber-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur">
          <div className="text-lg font-semibold tracking-tight">🐱 Felinos & Krispin</div>
          <nav className="flex gap-4 text-sm text-slate-600">
            <Link href="/" className="transition hover:text-slate-900">
              Início
            </Link>
            <Link href="/sobre" className="transition hover:text-slate-900">
              Sobre
            </Link>
            <Link href="/contato" className="transition hover:text-slate-900">
              Contato
            </Link>
          </nav>
        </header>

        <div className="rounded-[2rem] border border-amber-200 bg-white/90 p-8 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Curiosidades</p>
          <h1 className="mb-6 text-3xl font-semibold sm:text-4xl">Pequenos detalhes que fazem os gatos serem únicos</h1>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
              <h2 className="mb-2 text-lg font-semibold">Olhos brilhantes</h2>
              <p className="text-sm leading-7 text-slate-600">
                Seus olhos refletem a luz de maneira especial, tornando-os ainda mais encantadores à noite.
              </p>
            </article>
            <article className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
              <h2 className="mb-2 text-lg font-semibold">Muitos sons</h2>
              <p className="text-sm leading-7 text-slate-600">
                Eles se comunicam com miados, ronronados e movimentos de cauda muito expressivos.
              </p>
            </article>
            <article className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
              <h2 className="mb-2 text-lg font-semibold">Independentes</h2>
              <p className="text-sm leading-7 text-slate-600">
                Apesar de carinhosos, gatinhos também gostam de ter seu espaço e liberdade.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
