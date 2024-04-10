import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import type { LinksFunction, MetaFunction } from '@remix-run/node'
import stylesheet from '~/styles/globals.css?url'

export const meta: MetaFunction = () => [{ title: 'Remix' }]

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
