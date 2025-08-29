"use client";

export function SectionLoading({ label }: { label: string }) {
  return (
    <div className="mx-auto max-w-6xl px-4" role="status" aria-live="polite" aria-label={`${label} en cours de chargement`}>
      <div className="mb-2 text-xs uppercase tracking-wider text-zinc-500">{label}</div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-200">
        <div className="h-full w-1/2 animate-[loader_0.9s_ease-in-out_infinite] bg-emerald-500"></div>
      </div>
      <style jsx>{`
        @keyframes loader {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
