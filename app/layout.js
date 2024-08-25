import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import  ThemeWrapper  from "./context/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
