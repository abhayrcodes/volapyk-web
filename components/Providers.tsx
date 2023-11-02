'use client'
import { SessionProvider } from "next-auth/react"

const Providers = (props: any) => {
    return <SessionProvider>{props.children}</SessionProvider>
}

export default Providers;