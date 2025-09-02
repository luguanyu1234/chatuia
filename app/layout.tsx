export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html>
            <body>
                {children}
                <footer>this is footer text</footer>
            </body>
        </html>
    )
}
