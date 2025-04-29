'use client'; // Add this directive to make the component a Client Component

import { SidebarProvider, Sidebar, SidebarInset, SidebarHeader, SidebarTrigger, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LayoutDashboard, Settings, BarChart3, Image as ImageIcon, Video } from "lucide-react";
import Image from 'next/image';

export default function Home() {
  // TODO: Implement OAuth connection logic
  const handleConnectGoogle = () => {
    console.log("Connect Google Ads clicked");
    // Add OAuth flow initiation here
  };

  const handleConnectMeta = () => {
    console.log("Connect Meta Ads clicked");
    // Add OAuth flow initiation here
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
             {/* Placeholder for logo - replace with actual logo */}
             <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
              AI
            </div>
            <h1 className="text-lg font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
              AdCreative Insights
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Dashboard" isActive>
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                {/* Updated icon to one available in lucide-react */}
                <SidebarMenuButton tooltip="Analytics">
                  <BarChart3 />
                  <span>Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                 <SidebarMenuButton tooltip="Image Creatives">
                  <ImageIcon />
                  <span>Image Creatives</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
               <SidebarMenuItem>
                 <SidebarMenuButton tooltip="Video Creatives">
                  <Video />
                  <span>Video Creatives</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarHeader className="mt-auto">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings">
                <Settings />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
             <SidebarTrigger className="md:hidden" />
             <h2 className="text-xl font-semibold">Dashboard</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handleConnectGoogle}>
              Connect Google Ads
            </Button>
            <Button variant="outline" onClick={handleConnectMeta}>
              Connect Meta Ads
            </Button>
          </div>
        </header>
        <main className="flex-1 p-6 bg-secondary">
           {/* Placeholder Content - Replace with actual dashboard components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="bg-card rounded-lg shadow-sm p-4 border">
               <h3 className="text-lg font-semibold mb-2">Welcome!</h3>
               <p className="text-muted-foreground">Connect your ad accounts to get started.</p>
             </div>
             <div className="bg-card rounded-lg shadow-sm p-4 border">
               <h3 className="text-lg font-semibold mb-2">Top Performing Creative</h3>
               <p className="text-muted-foreground">Connect accounts to see data.</p>
                <Image src="https://picsum.photos/300/200" alt="Placeholder Ad Creative" width={300} height={200} className="mt-4 rounded-md" />
             </div>
             <div className="bg-card rounded-lg shadow-sm p-4 border">
               <h3 className="text-lg font-semibold mb-2">Creative Fatigue Alert</h3>
               <p className="text-muted-foreground">No data available yet.</p>
             </div>
          </div>
           <Separator className="my-6" />
            <div className="bg-card rounded-lg shadow-sm p-4 border">
               <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
               <p className="text-muted-foreground">Connect your ad accounts to view performance charts and tables.</p>
               {/* Placeholder for table/chart */}
               <div className="h-64 bg-muted rounded-md mt-4 flex items-center justify-center text-muted-foreground">
                 Chart/Table Area
               </div>
            </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
