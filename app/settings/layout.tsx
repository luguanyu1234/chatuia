export default function SettingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    console.log("on settings layout")
    return (
        <>
            <h1>Settings</h1>
            {children}
        </>
    )
}
