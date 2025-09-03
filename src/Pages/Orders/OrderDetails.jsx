import React, { useMemo } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { orders } from "../../Data/orderData.js"
import OrderStatusBadge from "./OrderStatusBedage.jsx"
import OrderProgress from "./OrderProgress.jsx"

export default function OrderDetails() {
  const { id } = useParams()
  const nav = useNavigate()
  const order = useMemo(() => orders.find((o) => o.id === id), [id])

  if (!order) {
    return (
      <main className="w-full px-4 py-10">
        <p className="text-slate-700">Order not found.</p>
        <button
          className="mt-3 rounded border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
          onClick={() => nav(-1)}
        >
          Go back
        </button>
      </main>
    )
  }

  return (
    <main className="w-full px-4 py-6">


      <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded border border-gray-100 bg-white p-2 relative">
            {order.items.map((it, idx) => (
              <div key={idx} className="flex  gap-3 border-b border-slate-100 py-1 last:border-0">
                <div className="h-20 w-20 overflow-hidden rounded bg-slate-100">
                  <img
                    src={it.image || "/placeholder.svg"}
                    alt={it.name}
                    className="h-full w-full object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="min-w-0 flex-1">
                       <div className="absolute right-0 top-0 mt-2 mr-2">
                         <OrderStatusBadge status={order.status} />
                       </div>
                  <p className="truncate text-sm font-medium text-slate-800">{it.name}</p>
                  <p className="text-sm text-slate-600">Qty: {it.qty}</p>
                  {it.color && (
                    <p
                      className="text-sm text-slate-600"
                    >
                      Color: {it.color}
                    </p>
                  )}

                </div>
              </div>
            ))}
          </div>
          <OrderProgress tracking={order.tracking} />

        </div>

        {/* Right: Shipping */}
        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h2 className="text-sm font-semibold text-slate-800">Shipping</h2>
            <div className="mt-2 space-y-1 text-sm text-slate-700">
              <p>{order.shipping.name}</p>
              <p className="text-pretty">{order.shipping.address}</p>
              <p>{order.shipping.phone}</p>
            </div>
          </div>

          <Link to="/orders" className="text-gray-200 w-full h-[40px] rounded-[4px] flex items-center justify-center bg-gray-900 text-sm  ">
            Back to orders
          </Link>
        </div>
      </section>
    </main>
  )
}
