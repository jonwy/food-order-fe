"use client";

import { ThemeProvider } from '@emotion/react';
import '../styles/global.css';
import { mulishRegular } from './config/fontConfig';
import theme from './theme';
import { CssBaseline } from '@mui/material';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <body className={mulishRegular.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
