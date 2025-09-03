import { Link } from "react-router-dom"
import OrderStatusBadge, { cardBgByStatus } from "./OrderStatusBedage"

export default function OrderCard({ order }) {

const bg = cardBgByStatus(order.status)

  return (
    <div className='w-full rounded-[4px] border border-gray-100 bg-white'>
      <Link to={`/orders/${order.id}`} className="block p-4">
        <div className="flex items-start gap-4">
          <div className="h-24 w-24 overflow-hidden rounded-[4px] shrink-0 bg-white">
            <img src={order.image || "/placeholder.svg"} alt={order.title} className="h-full w-full object-cover" crossOrigin="anonymous" />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-base font-semibold text-slate-800">{order.title}</h3>
              <OrderStatusBadge status={order.status} className={`${bg}`} />
            </div>

            <div className="mt-1 text-sm text-slate-600">
              <p>Order ID: {order.id}</p>
              <p className="mt-0.5">Placed: {new Date(order.createdAt).toDateString()}</p>
            </div>

            <div className="mt-2 text-sm font-medium text-slate-900">₹{order.price}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
