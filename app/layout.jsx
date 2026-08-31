import "./globals.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Tierra de Vinos",
  description: "Descubrí vinos para cada ocasión.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
