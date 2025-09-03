"use client"

export default function Pagination({ page, total, pageSize = 8, onPageChange }) {
  const pages = Math.max(1, Math.ceil(total / pageSize))
  if (pages <= 1) return null

  const go = (p) => onPageChange?.(Math.min(Math.max(1, p), pages))

  const start = (page - 1) * pageSize + 1
  const end = Math.min(page * pageSize, total)

  return (
    <div className="mt-4 flex items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-2 shadow-sm">
      {/* Results count */}
      <p className="text-sm text-slate-600">
        Showing <span className="font-medium">{start}</span> to{" "}
        <span className="font-medium">{end}</span> of{" "}
        <span className="font-medium">{total}</span> results
      </p>

      {/* Pagination controls */}
      <nav className="flex items-center space-x-1" aria-label="Pagination">
        {/* Previous */}
        <button
          onClick={() => go(page - 1)}
          disabled={page <= 1}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ‹
        </button>

        {/* Page numbers */}
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => go(i + 1)}
            className={`flex h-8 w-8 items-center justify-center rounded-md border text-sm font-medium ${
              page === i + 1
                ? "border-blue-500 bg-blue-50 text-blue-600"
                : "border-slate-300 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => go(page + 1)}
          disabled={page >= pages}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ›
        </button>
      </nav>
    </div>
  )
}
