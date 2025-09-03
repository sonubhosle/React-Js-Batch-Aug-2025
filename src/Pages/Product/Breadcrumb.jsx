import { ChevronRight, Home } from "lucide-react"

const Breadcrumb = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Clothing", href: "/clothing" },
    { label: "T-Shirts", href: "/clothing/t-shirts" },
    { label: "Classic Cotton T-Shirt", href: "#", current: true },
  ]

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
          {item.icon && <item.icon className="h-4 w-4 mr-1" />}
          <a
            href={item.href}
            className={`hover:text-foreground transition-colors ${item.current ? "text-foreground font-medium" : ""}`}
          >
            {item.label}
          </a>
        </div>
      ))}
    </nav>
  )
}

export default Breadcrumb
