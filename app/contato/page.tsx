import Link from "next/link";

export default function ContatoPage() {
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
            <Link href="/sobre" className="transition hover:text-slate-900">
              Sobre
            </Link>
          </nav>
        </header>

        <div className="grid gap-8 rounded-[2rem] border border-amber-200 bg-white/90 p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Contato</p>
            <h1 className="mb-4 text-3xl font-semibold sm:text-4xl">Fale comigo e compartilhe seu amor por gatos</h1>
            <p className="mb-6 text-base leading-8 text-slate-600">
              Se quiser conversar sobre felinos, compartilhar curiosidades ou sugerir melhorias, envie uma mensagem.
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p>📧 krispin532@gmail.com</p>
              <p>📍 São Paulo, Brasil</p>
            </div>
          </div>

          <form className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">Nome</label>
              <input className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none" placeholder="Seu nome" />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">Mensagem</label>
              <textarea className="min-h-28 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none" placeholder="Escreva sua mensagem" />
            </div>
            <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
