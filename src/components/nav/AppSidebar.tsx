"use client"

import * as React from "react"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./nav-team"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { auth } from "@/firebase/firebaseConfig"
import { sidebarData } from "./sidebarData"

interface userData{
  name: string;
  email: string;
  avatar: string;
}

function getUserData(): userData {
  const user = auth.currentUser!
  return {
    name: user.displayName || "undefined",
    email: user.email || "undefined",
    avatar: user.photoURL || "undefined",
  }
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const userData = getUserData()
  
  const data = {
  user: {
    name: userData.name,
    email: userData.email,
    avatar: userData.avatar
  },
  }

  return (
    <Sidebar className="select-none" collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
        <NavProjects projects={sidebarData.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
