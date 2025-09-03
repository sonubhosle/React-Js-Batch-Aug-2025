export const STATUSES = ["pending", "confirmed", "on_the_way", "shipped", "delivered", "canceled"]

export const orders = [
  {
    id: "1001",
    title: "Wireless Headphones",
    price: 129.99,
    status: "delivered",
    createdAt: "2025-08-04T10:00:00Z",
    image: "/wireless-headphones.png",
    items: [{ name: "Wireless Headphones", qty: 1, color: "Black", image: "/wireless-headphones.png" }],
    shipping: {
      name: "Alex Johnson",
      address: "221B Baker Street, London",
      phone: "+44 20 7946 0958",
    },
    tracking: {
      currentIndex: 3,
      currentLocation: "Local Facility, London",
      estimatedDelivery: "2025-08-04T16:46:00Z",
      steps: [
        {
          title: "Order Confirmed",
          date: "Tue, 29th Jul ’25",
          lines: [
            "Your order has been placed.",
            "Seller has processed your order.",
            "Your item has been picked up by delivery partner.",
          ],
          timestamps: ["3:19pm", "6:10am", "11:44am"],
        },
        {
          title: "Shipped",
          date: "Thu, 31st Jul ’25",
          lines: [
            "Ekart Logistics – FMPC5045691707",
            "Your item has been shipped.",
            "Your item has been received in the hub nearest to you.",
          ],
          timestamps: ["—", "11:50am", "—"],
        },
        {
          title: "Out For Delivery",
          date: "Mon, 4th Aug ’25",
          lines: ["Your item is out for delivery."],
          timestamps: ["7:31am"],
        },
        {
          title: "Delivered",
          date: "Mon, 4th Aug ’25",
          lines: ["Your item has been delivered."],
          timestamps: ["4:46pm"],
        },
      ],
    },
  },
  {
    id: "1002",
    title: "4K Monitor",
    price: 399.0,
    status: "shipped",
    createdAt: "2025-07-31T09:00:00Z",
    image: "/4k-monitor.png",
    items: [{ name: '27" 4K Monitor', qty: 1, color: "Black", image: "/4k-monitor.png" }],
    shipping: { name: "Alex Johnson", address: "221B Baker Street, London", phone: "+44 20 7946 0958" },
    tracking: {
      currentIndex: 1,
      currentLocation: "Main Hub, Manchester",
      estimatedDelivery: "2025-08-06T18:00:00Z",
      steps: [
        {
          title: "Order Confirmed",
          date: "Tue, 29th Jul ’25",
          lines: ["Your order has been placed."],
          timestamps: ["3:19pm"],
        },
        {
          title: "Shipped",
          date: "Thu, 31st Jul ’25",
          lines: ["Your item has been shipped."],
          timestamps: ["11:50am"],
        },
        { title: "Out For Delivery", date: "—", lines: [], timestamps: [] },
        { title: "Delivered", date: "—", lines: [], timestamps: [] },
      ],
    },
  },
  {
    id: "1003",
    title: "USB-C Cable",
    price: 9.99,
    status: "pending",
    createdAt: "2025-08-02T12:00:00Z",
    image: "/usb-c-cable.png",
    items: [{ name: "USB-C Cable 1m", qty: 2, color: "White", image: "/usb-c-cable.png" }],
    shipping: { name: "Alex Johnson", address: "221B Baker Street, London", phone: "+44 20 7946 0958" },
    tracking: {
      currentIndex: 0,
      currentLocation: "Seller Warehouse",
      estimatedDelivery: "2025-08-08T18:00:00Z",
      steps: [
        {
          title: "Order Confirmed",
          date: "Sat, 2nd Aug ’25",
          lines: ["Your order has been placed."],
          timestamps: ["12:00pm"],
        },
        { title: "Shipped", date: "—", lines: [], timestamps: [] },
        { title: "Out For Delivery", date: "—", lines: [], timestamps: [] },
        { title: "Delivered", date: "—", lines: [], timestamps: [] },
      ],
    },
  },
  {
    id: "1004",
    title: "Gaming Keycaps",
    price: 39.0,
    status: "canceled",
    createdAt: "2025-04-25T08:00:00Z",
    image: "/gaming-keycaps.png",
    items: [{ name: "PBT Keycaps Set", qty: 1, color: "Grey", image: "/gaming-keycaps.png" }],
    shipping: { name: "Alex Johnson", address: "221B Baker Street, London", phone: "+44 20 7946 0958" },
    tracking: {
      currentIndex: 0,
      currentLocation: "—",
      estimatedDelivery: null,
      steps: [
        { title: "Order Confirmed", date: "—", lines: ["Order canceled by user."], timestamps: ["—"] },
        { title: "Shipped", date: "—", lines: [], timestamps: [] },
        { title: "Out For Delivery", date: "—", lines: [], timestamps: [] },
        { title: "Delivered", date: "—", lines: [], timestamps: [] },
      ],
    },
  },
    {
    id: "1001",
    title: "Wireless Headphones",
    price: 129.99,
    status: "delivered",
    createdAt: "2025-08-04T10:00:00Z",
    image: "/wireless-headphones.png",
    items: [{ name: "Wireless Headphones", qty: 1, color: "Black", image: "/wireless-headphones.png" }],
    shipping: {
      name: "Alex Johnson",
      address: "221B Baker Street, London",
      phone: "+44 20 7946 0958",
    },
    tracking: {
      currentIndex: 3,
      currentLocation: "Local Facility, London",
      estimatedDelivery: "2025-08-04T16:46:00Z",
      steps: [
        {
          title: "Order Confirmed",
          date: "Tue, 29th Jul ’25",
          lines: [
            "Your order has been placed.",
            "Seller has processed your order.",
            "Your item has been picked up by delivery partner.",
          ],
          timestamps: ["3:19pm", "6:10am", "11:44am"],
        },
        {
          title: "Shipped",
          date: "Thu, 31st Jul ’25",
          lines: [
            "Ekart Logistics – FMPC5045691707",
            "Your item has been shipped.",
            "Your item has been received in the hub nearest to you.",
          ],
          timestamps: ["—", "11:50am", "—"],
        },
        {
          title: "Out For Delivery",
          date: "Mon, 4th Aug ’25",
          lines: ["Your item is out for delivery."],
          timestamps: ["7:31am"],
        },
        {
          title: "Delivered",
          date: "Mon, 4th Aug ’25",
          lines: ["Your item has been delivered."],
          timestamps: ["4:46pm"],
        },
      ],
    },
  },
  {
    id: "1002",
    title: "4K Monitor",
    price: 399.0,
    status: "shipped",
    createdAt: "2025-07-31T09:00:00Z",
    image: "/4k-monitor.png",
    items: [{ name: '27" 4K Monitor', qty: 1, color: "Black", image: "/4k-monitor.png" }],
    shipping: { name: "Alex Johnson", address: "221B Baker Street, London", phone: "+44 20 7946 0958" },
    tracking: {
      currentIndex: 1,
      currentLocation: "Main Hub, Manchester",
      estimatedDelivery: "2025-08-06T18:00:00Z",
      steps: [
        {
          title: "Order Confirmed",
          date: "Tue, 29th Jul ’25",
          lines: ["Your order has been placed."],
          timestamps: ["3:19pm"],
        },
        {
          title: "Shipped",
          date: "Thu, 31st Jul ’25",
          lines: ["Your item has been shipped."],
          timestamps: ["11:50am"],
        },
        { title: "Out For Delivery", date: "—", lines: [], timestamps: [] },
        { title: "Delivered", date: "—", lines: [], timestamps: [] },
      ],
    },
  },
  {
    id: "1003",
    title: "USB-C Cable",
    price: 9.99,
    status: "pending",
    createdAt: "2025-08-02T12:00:00Z",
    image: "/usb-c-cable.png",
    items: [{ name: "USB-C Cable 1m", qty: 2, color: "White", image: "/usb-c-cable.png" }],
    shipping: { name: "Alex Johnson", address: "221B Baker Street, London", phone: "+44 20 7946 0958" },
    tracking: {
      currentIndex: 0,
      currentLocation: "Seller Warehouse",
      estimatedDelivery: "2025-08-08T18:00:00Z",
      steps: [
        {
          title: "Order Confirmed",
          date: "Sat, 2nd Aug ’25",
          lines: ["Your order has been placed."],
          timestamps: ["12:00pm"],
        },
        { title: "Shipped", date: "—", lines: [], timestamps: [] },
        { title: "Out For Delivery", date: "—", lines: [], timestamps: [] },
        { title: "Delivered", date: "—", lines: [], timestamps: [] },
      ],
    },
  },
  {
    id: "1004",
    title: "Gaming Keycaps",
    price: 39.0,
    status: "canceled",
    createdAt: "2025-04-25T08:00:00Z",
    image: "/gaming-keycaps.png",
    items: [{ name: "PBT Keycaps Set", qty: 1, color: "Grey", image: "/gaming-keycaps.png" }],
    shipping: { name: "Alex Johnson", address: "221B Baker Street, London", phone: "+44 20 7946 0958" },
    tracking: {
      currentIndex: 0,
      currentLocation: "—",
      estimatedDelivery: null,
      steps: [
        { title: "Order Confirmed", date: "—", lines: ["Order canceled by user."], timestamps: ["—"] },
        { title: "Shipped", date: "—", lines: [], timestamps: [] },
        { title: "Out For Delivery", date: "—", lines: [], timestamps: [] },
        { title: "Delivered", date: "—", lines: [], timestamps: [] },
      ],
    },
  },
]

// time helpers
export const withinLast30Days = (iso) => {
  const d = new Date(iso)
  const now = new Date()
  const diff = (now - d) / (1000 * 60 * 60 * 24)
  return diff <= 30
}

export const yearOf = (iso) => new Date(iso).getFullYear()
