const map = {
  pending: { label: "Pending", cls: "bg-amber-100 text-amber-800", icon: (p) => PendingIcon(p) },
  confirmed: { label: "Confirmed", cls: "bg-blue-100 text-blue-800", icon: (p) => ConfirmedIcon(p) },
  on_the_way: { label: "On the way", cls: "bg-blue-100 text-blue-800", icon: (p) => TruckIcon(p) },
  shipped: { label: "Shipped", cls: "bg-blue-100 text-blue-800", icon: (p) => TruckIcon(p) },
  delivered: { label: "Delivered", cls: "bg-emerald-100 text-emerald-800", icon: (p) => CheckIcon(p) },
  canceled: { label: "Canceled", cls: "bg-red-100 text-red-800", icon: (p) => XIcon(p) },
}

export default function OrderStatusBadge({ status }) {
  const key = normalize(status)
  const cfg = map[key] ?? { label: status, cls: "bg-slate-100 text-slate-700", icon: () => null }
  const Icon = cfg.icon
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-[4px] px-2.5 py-1 text-xs font-medium ${cfg.cls}`}>
      <Icon className="h-3.5 w-3.5" />
      {cfg.label}
    </span>
  )
}

export function cardBgByStatus(status) {
  const key = normalize(status)
  if (key === "delivered") return "bg-emerald-50"
  if (key === "canceled") return "bg-red-50"
  if (key === "pending") return "bg-amber-50"
  if (key === "confirmed" || key === "on_the_way" || key === "shipped") return "bg-blue-50"
  return "bg-white"
}

function normalize(s = "") {
  const v = String(s).toLowerCase().trim()
  if (v === "on the way") return "on_the_way"
  if (v === "cancelled") return "canceled"
  return v
}

// Icons (inline, no extra deps)
function CheckIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.457 9.5l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}
function XIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 8.586l4.95-4.95a1 1 0 111.415 1.415L11.415 10l4.95 4.95a1 1 0 01-1.415 1.415L10 11.415l-4.95 4.95a1 1 0 01-1.415-1.415L8.586 10l-4.95-4.95A1 1 0 115.05 3.636L10 8.586z"
        clipRule="evenodd"
      />
    </svg>
  )
}
function TruckIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 6a1 1 0 011-1h8a1 1 0 011 1v7h2.34a2 2 0 011.789 1.106l.57 1.14H21a1 1 0 010 2h-1a3 3 0 11-6 0H9a3 3 0 11-6 0H2a1 1 0 110-2h1V6zm4 10a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
  )
}
function PendingIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 10a1 1 0 01-1 1H7a1 1 0 010-2h4V7a1 1 0 012 0z" />
    </svg>
  )
}
function ConfirmedIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4zm-1 12l-3-3 1.5-1.5L11 10.586l3.5-3.5L16 8.5 11 14z" />
    </svg>
  )
}
