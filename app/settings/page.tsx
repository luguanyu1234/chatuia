"use client"
import { useEffect } from "react"
export default function Settings() {
    useEffect(() => {
        console.log("in effect")

        return () => {
            console.log("clean up")
        }
    }, [])

    return (
        <>
            <h1>User</h1>
        </>
    )
}
