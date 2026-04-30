type ScriptureBlockProps = {
  citation: string
  text: string
}

function ScriptureIcon() {
  return (
    <svg
      className="h-5 w-5 text-gold-main"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 4.75C6 4.33579 6.33579 4 6.75 4H17.25C17.6642 4 18 4.33579 18 4.75V19.25C18 19.6642 17.6642 20 17.25 20H6.75C6.33579 20 6 19.6642 6 19.25V4.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ScriptureBlock({ citation, text }: ScriptureBlockProps) {
  return (
    <blockquote className="rounded-r-2xl border-l-4 border-blue-accent bg-bg-surface p-5 sm:p-6">
      <div className="mb-3 flex items-center gap-2">
        <ScriptureIcon />
        <p className="font-ui text-sm font-semibold uppercase tracking-wide text-gold-bright">
          Escritura
        </p>
      </div>
      <p className="text-reading text-text-main">{text}</p>
      <footer className="mt-4 font-ui text-sm font-semibold text-text-muted">
        {citation}
      </footer>
    </blockquote>
  )
}
