export default function OrderProgress({ tracking }) {
  const { steps = [], currentIndex = 0, currentLocation, estimatedDelivery } = tracking ?? {}

  return (
    <section aria-label="Order progress" className="rounded-[4px] border border-gray-100 bg-white">
      <div className="mb-4 flex border-b border-gray-100 items-center justify-between p-4">
        <div>
          <p className="text-sm font-medium text-slate-700">Current location</p>
          <p className="text-sm text-slate-600">{currentLocation || "—"}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-slate-700">Estimated delivery</p>
          <p className="text-sm text-slate-600">
            {estimatedDelivery ? new Date(estimatedDelivery).toLocaleString() : "—"}
          </p>
        </div>
      </div>

      <div className="relative p-4">
        <ol className="relative space-y-10">
          {/* gray base line */}
          <div className="absolute left-[8px] top-[0.20rem] bottom-[0rem] w-[3px] bg-slate-200" />

          {/* green progress line */}
          <div
            className="absolute left-[8px] top-[0.5rem] bottom-[0.0rem] w-[3px] bg-emerald-500"
            style={{
              height: `calc(${(currentIndex / (steps.length - 1)) * 100}% - 0.5rem)`,
            }}
          />

          {steps.map((s, i) => {
            const isCurrent = i === currentIndex
            const isComplete = i < currentIndex

            return (
              <li key={i} className="relative pl-8">
                {/* Circle */}
                <span
                  className="absolute left-[10px] top-1 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center"
                  aria-hidden="true"
                >
                  {isCurrent && (
                    <span className="absolute h-6 w-6 rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  )}
                  <span
                    className={[
                      "relative inline-flex h-4 w-4 rounded-full ring-4 ring-white",
                      isComplete || isCurrent ? "bg-emerald-500" : "bg-slate-300",
                    ].join(" ")}
                  />
                </span>

                {/* Content */}
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h4 className="text-sm font-semibold text-slate-800">{s.title}</h4>
                  <span className="text-xs text-slate-500">{s.date}</span>
                </div>

                <div className="mt-1 space-y-1">
                  {s.lines?.map((line, idx) => (
                    <p key={idx} className="text-sm text-slate-700">
                      {line}
                      {s.timestamps?.[idx] ? ` — ${s.timestamps[idx]}` : ""}
                    </p>
                  ))}
                </div>
              </li>
            )
          })}
        </ol>
      </div>


    </section>
  )
}
