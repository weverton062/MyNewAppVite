import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/nav/AppSidebar"

import { ProtectedRoute } from "@/components/nav/auth/ProtectedRoute";

export function SideBarDashBoard({ children }: { children: React.ReactNode }){
    return(
        <>
            <ProtectedRoute>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <main>
                            <SidebarTrigger />
                            {children}
                        </main>
                    </SidebarInset>
                </SidebarProvider>
            </ProtectedRoute>
        </>
    )
}

export function DashBoard(){
    
    return(
        <>
           <h2>
            TSTES
           </h2>
        </>
    )
}
