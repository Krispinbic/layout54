export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.18),_transparent_24%),linear-gradient(135deg,#fff7ed_0%,#fef3c7_100%)] text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-6 lg:px-8">
        <header className="mb-16 flex items-center justify-between rounded-full border border-amber-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur">
          <div className="text-lg font-semibold tracking-tight">🐱 Felinos & Co.</div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#sobre" className="transition hover:text-slate-900">
              Sobre
            </a>
            <a href="#curiosidades" className="transition hover:text-slate-900">
              Curiosidades
            </a>
            <a href="#contato" className="transition hover:text-slate-900">
              Contato
            </a>
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
              <a
                href="#curiosidades"
                className="rounded-full bg-slate-900 px-6 py-3 text-center font-medium text-white transition hover:bg-slate-700"
              >
                Ver curiosidades
              </a>
              <a
                href="#sobre"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 transition hover:border-slate-400"
              >
                Conhecer mais
              </a>
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

      <section id="curiosidades" className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Olhos brilhantes</h3>
            <p className="text-sm leading-7 text-slate-600">
              Seus olhos refletem a luz de forma única, deixando-os ainda mais especiais à noite.
            </p>
          </article>
          <article className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Muitos sons</h3>
            <p className="text-sm leading-7 text-slate-600">
              Eles comunicam-se com miados, ronronados e até pequenos movimentos da cauda.
            </p>
          </article>
          <article className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Independentes</h3>
            <p className="text-sm leading-7 text-slate-600">
              Apesar de carinhosos, gatos também gostam de ter seu espaço e liberdade.
            </p>
          </article>
        </div>
      </section>

      <footer id="contato" className="border-t border-amber-200 bg-white/80 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Felinos & Co. Todos os direitos reservados.</p>
          <a href="mailto:contato@felinosco.com" className="font-medium text-slate-900 hover:underline">
            contato@felinosco.com
          </a>
        </div>
      </footer>
    </main>
  );
}
