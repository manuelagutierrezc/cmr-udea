"use client"

import * as React from "react"

import type { Icon } from "@tabler/icons-react"

import { NavSection } from "@/components/nav-section"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

type NavItem = {
  title: string
  url: string
  icon: Icon
}

export type SidebarData = {
  user: {
    name: string
    email: string
    avatar: string
  }
  navMain: NavItem[]
  navSecondary: NavItem[]
}

export function AppSidebar({
   data,
  ...props 
  }: {data: SidebarData} & React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <img
                src="/images/logo.png"
                alt="Imagen de logo"
                className="max-w-[164px]"
                />
            <span className="text-base font-semibold">CRM Cooprudea</span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavSection items={data.navMain} />
        <NavSection items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

