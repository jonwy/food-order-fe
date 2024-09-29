import { ThemeProvider } from '@emotion/react';
import '../styles/global.css';
import { mulishRegular } from './config/fontConfig';
import theme from './theme';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={mulishRegular.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
