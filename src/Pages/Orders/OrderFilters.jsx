
import React from "react"

export default function OrdersFilters({
  selectedStatuses = [],
  onStatusesChange,
  selectedTime = null, // 'last30' | year number | 'older' | null
  onTimeChange,
}) {
  const statuses = [
    { key: "pending", label: "Pending" },
    { key: "confirmed", label: "Confirmed" },
    { key: "on_the_way", label: "On the way" },
    { key: "shipped", label: "Shipped" },
    { key: "delivered", label: "Delivered" },
    { key: "canceled", label: "Canceled" },
  ]

  const years = React.useMemo(() => {
    const now = new Date().getFullYear()
    return [now, now - 1, now - 2, now - 3]
  }, [])

  const toggleStatus = (key) => {
    if (!onStatusesChange) return
    if (selectedStatuses.includes(key)) {
      onStatusesChange(selectedStatuses.filter((s) => s !== key))
    } else {
      onStatusesChange([...selectedStatuses, key])
    }
  }

  const timeChecked = (val) => selectedTime === val

  return (
    <aside className="w-full md:w-72 shrink-0">
      <div className="rounded-[4px] border border-gray-100 bg-white">
        <div className="border-b border-gray-200 px-4 py-3">
          <h3 className="text-sm font-semibold text-slate-700">Filters</h3>
        </div>

        <div className="px-4 py-3">
          <p className="mb-2 text-xs font-semibold tracking-wide text-slate-500">ORDER STATUS</p>
          <div className="space-y-2">
            {statuses.map((s) => (
              <label key={s.key} className="flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedStatuses.includes(s.key)}
                  onChange={() => toggleStatus(s.key)}
                />
                <span>{s.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-3">
          <p className="mb-2 text-xs font-semibold tracking-wide text-slate-500">ORDER TIME</p>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="radio"
                name="order-time"
                className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                checked={timeChecked("last30")}
                onChange={() => onTimeChange?.("last30")}
              />
              <span>Last 30 days</span>
            </label>

            {years.map((y) => (
              <label key={y} className="flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="radio"
                  name="order-time"
                  className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                  checked={timeChecked(y)}
                  onChange={() => onTimeChange?.(y)}
                />
                <span>{y}</span>
              </label>
            ))}

            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="radio"
                name="order-time"
                className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                checked={timeChecked("older")}
                onChange={() => onTimeChange?.("older")}
              />
              <span>Older</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  )
}
