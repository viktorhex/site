"use client";
// import Image from "next/image";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Link from "next/link";
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/buybutton.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="flex items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">

        <div className="w-full flex justify-center">
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
        </div>

        <div className="w-full flex justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <br />

        <div id='product-component-1738031123201'></div>

      </main>

      <footer style={{
        display: "flex",
        "justifyContent": "center",
        position: "fixed",
        height: "50px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        marginBottom: "0px"
      }}>
        <a href="https://www.paypal.com/donate/?business=PZ2E9EF3KZ72C&no_recurring=0&item_name=Pay+for+my+coffee&currency_code=USD" target="_blank" rel="noopener noreferrer">Buy me a coffee</a>
      </footer>
    </div>
  );
}
