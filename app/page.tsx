export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#211f1f] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-[#e3fc02]">
          SUPER GEEK
        </h1>

        <p className="mt-4 text-xl font-semibold">
          App de Técnicos
        </p>

        <p className="mt-6 text-sm text-zinc-300 leading-6">
          Proyecto inicial en construcción.
          <br />
          Próximo paso: conexión segura con Airtable.
        </p>
      </div>
    </main>
  );
}