
import React from "react"
import OrdersFilters from "./OrderFilters.jsx"
import Pagination from "./OrderPagination.jsx"
import OrderCard from "./OrderCard.jsx"
import { orders as allOrders, withinLast30Days, yearOf } from "../../Data/orderData.js"

export default function Orders() {
  const [query, setQuery] = React.useState("")
  const [statuses, setStatuses] = React.useState([])
  const [time, setTime] = React.useState(null)
  const [page, setPage] = React.useState(1)
  const pageSize = 3

  const handleStatuses = (vals) => {
    setStatuses(vals)
    setPage(1)
  }
  const handleTime = (val) => {
    setTime(val)
    setPage(1)
  }

  const filtered = React.useMemo(() => {
    return allOrders
      .filter((o) => {
        if (!query) return true
        const q = query.toLowerCase()
        return o.title.toLowerCase().includes(q) || o.id.toLowerCase().includes(q)
      })
      .filter((o) => {
        if (!statuses.length) return true
        const s = normalize(o.status)
        return statuses.includes(s)
      })
      .filter((o) => {
        if (!time) return true
        const y = yearOf(o.createdAt)
        if (time === "last30") return withinLast30Days(o.createdAt)
        if (time === "older") {
          const thisYear = new Date().getFullYear()
          return y < thisYear - 3
        }
        // numeric year
        return y === time
      })
  }, [query, statuses, time])

  const total = filtered.length
  const start = (page - 1) * pageSize
  const current = filtered.slice(start, start + pageSize)

  return (
    <main className="w-full px-4 py-6">
      <div className="mb-6 rounded-[4px] border border-gray-100 bg-white p-4">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-slate-800">Orders</h2>
          <div className="text-sm text-slate-600">
            {total} result{total !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Search */}
        <div className="mt-4">
          <input id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your orders here"
            className="w-full h-[45px] rounded-[4px] border border-gray-100 bg-white px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400  outline-0 "
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        {/* Sidebar filters */}
        <OrdersFilters
          selectedStatuses={statuses}
          onStatusesChange={handleStatuses}
          selectedTime={time}
          onTimeChange={handleTime}
        />

        {/* Orders list */}
        <section className="min-w-0 flex-1">
          <div className="flex flex-col gap-4">
            {current.map((o) => (
              <OrderCard key={o.id} order={o} />
            ))}
          </div>

          <Pagination page={page} total={total} pageSize={pageSize} onPageChange={setPage} />
        </section>
      </div>
    </main>
  )
}

function normalize(s = "") {
  const v = String(s).toLowerCase()
  if (v === "on the way") return "on_the_way"
  if (v === "cancelled") return "canceled"
  return v
}
