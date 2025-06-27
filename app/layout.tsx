import Link from "next/link"

const btnstyle: React.CSSProperties = {
    backgroundColor: "#0070f3",
    color: "white",
    padding: "10px 20px",
    borderRadius: "4px",
    textDecoration: "none",
    cursor: "pointer",
    marginRight: "5px",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html>
            <body>
                <Link href="/" style={btnstyle}>
                    Home
                </Link>
                <Link href="/settings" style={btnstyle}>
                    Settings
                </Link>

                {children}
            </body>
        </html>
    )
}
