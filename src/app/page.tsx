'use client';

import React from "react";
import { Sidebar, SidebarInset, SidebarHeader, SidebarTrigger, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider } from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LayoutDashboard, Settings, BarChart3, Image as ImageIcon, Video } from "lucide-react";
import Image from "next/image";
import { getMetaAnalytics } from "@/services/meta-ads";

export default function Home() {
  const handleConnectGoogle = () => {
    console.log("Connect Google Ads clicked");
    // Add OAuth flow initiation here
  };

  const handleConnectMeta = async () => {
    console.log("Connect Meta Ads clicked");
    const result = await getMetaAnalytics();
    console.log(result);
  };

  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
              <h1 className="text-lg font-bold">Statio</h1>
            </div>
            <Separator className="my-2" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton href="#">
                    <LayoutDashboard className="mr-2" />
                    Dashboard
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton href="#">
                    <ImageIcon className="mr-2" />
                    Creatives
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton href="#">
                    <Video className="mr-2" />
                    Videos
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton href="#">
                    <BarChart3 className="mr-2" />
                    Analytics
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            <Separator className="my-2" />
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton href="#">
                    <Settings className="mr-2" />
                    Settings
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarInset />
        </Sidebar>
        <div className="flex flex-col gap-4 p-4">
          <Button onClick={handleConnectGoogle}>Connect to Google Ads</Button>
          <Button onClick={handleConnectMeta}>Connect to Meta Ads</Button>
        </div>
      </div>
    </SidebarProvider>
  );
}
