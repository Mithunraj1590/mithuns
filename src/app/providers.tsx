"use client";

import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import TransitionWrapper from "@/components/TransitionWrapper";
import LenisProvider from "@/components/LenisProvider";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LenisProvider>
          <TransitionWrapper>{children}</TransitionWrapper>
        </LenisProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

