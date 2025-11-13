"use client";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 text-center">
          Welcome to Groove Scope
        </h1>
        <button
          className="flex h-12 w-40 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          onClick={() => alert('Login clicked!')}
        >
          Login
        </button>
      </main>
    </div>
  );
}
