'use client';
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return (
      <ThemeProvider 
      enableSystem={true} 
      attribute="class"
      >
        <div className="dark:bg-gray-950 dark:text-gray-100 text-gray-600 transition-colors duration-500 min-h-screen select-none">
        {children}
        </div>
      </ThemeProvider>
    )
}