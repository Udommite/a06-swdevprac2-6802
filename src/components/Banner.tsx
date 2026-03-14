export default function Banner() {
  return (
    <section className="rounded-2xl bg-sky-100 px-8 py-12 text-slate-900 shadow-md">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
        Venue Explorer
      </p>
      <h1 className="mt-4 text-4xl font-bold md:text-5xl">
        Find the right venue for your next event
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-700">
        Browse featured spaces and continue to the booking page when you are
        ready to reserve one.
      </p>
    </section>
  );
}
