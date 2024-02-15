import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatBot AI App",
  description: " ",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en">
        <body className={inter.className}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          {children}
        </ThemeProvider>
        </body>
      </html>
  );
}
