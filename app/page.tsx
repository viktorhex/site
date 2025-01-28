// import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"

import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="w-full flex items-center justify-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/profilepic.jpg" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
        </div>

        <NavigationMenu>
          <NavigationMenuList>

            <NavigationMenuItem>
              <Link href="/work" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Explore my work
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/hire" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Hire me
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/shop" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Shop
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center justify-center">

        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        This website was made with maximum effort.
        <a style={{ fontWeight: 900 }} href="https://www.paypal.com/donate/?business=PZ2E9EF3KZ72C&no_recurring=0&item_name=Pay+for+my+coffee&currency_code=USD" target="_blank" rel="noopener noreferrer">&gt;Buy me a coffee&lt;</a>
      </footer>
    </div>
  );
}
