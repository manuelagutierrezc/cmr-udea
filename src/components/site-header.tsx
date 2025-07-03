"use client"

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

interface HeaderItem {
  title: string;
  href: string
}

interface SiteHeaderProps {
  title: string;
  items?: HeaderItem[];
}

export function SiteHeader({ title, items }: SiteHeaderProps) {
  const router = useRouter()
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{title}</h1>
        {items && items.length > 0 && (
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
        )}
        {items?.map((item) => (
          <Button key={item.title} variant="ghost" onClick={() => router.push(item.href)}>
            {item.title}
          </Button>
        ))}
      </div>
    </header>
  )
}
