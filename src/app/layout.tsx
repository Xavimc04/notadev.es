import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Not a Dev | Inicio",
    description: "Gestión y desarrolo integral de proyectos web & móviles",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={ inter.className }>
                { children }
            </body>
        </html>
    );
}
