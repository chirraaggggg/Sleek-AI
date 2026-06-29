"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
import { Button } from "./ui/button"
import { DarkModeToggle } from "./dark-mode-toggle"
import { SignedIn, SignedOut, useAuth, UserButton } from "@/components/auth"
import { Spinner } from "./ui/spinner"

const Header = () => {
  const pathname = usePathname()
  const { isLoaded } = useAuth();

  const isProjectPage = pathname.startsWith('/project/')

  return (
    <header className="w-full">
      <div className={cn(`w-full flex py-3.5 px-8
         items-center justify-between
         `,
        isProjectPage && "absolute top-0 z-50 px-2 py-1 right-0 w-auto"
      )}>

        <div>
          {!isProjectPage && <Logo />}
        </div>

        <div className="flex items-center justify-end gap-3">
          <DarkModeToggle />

          {!isLoaded ? <Spinner className="w-8 h-8" /> : (
            <>
              <SignedOut>
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign up</Link>
                </Button>
              </SignedOut>

              <SignedIn>
                <UserButton
                  mode="simple"
                  afterSignOutUrl="/"
                  showProfile
                />
              </SignedIn>

            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
