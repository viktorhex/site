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
import { resume } from "@/lib/resume";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Home() {
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
                <BreadcrumbLink href="/work">Work</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <br />

        <TableCaption className="w-full block">Project List</TableCaption>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Title</TableHead>
              <TableHead>Tools</TableHead>
              <TableHead>Start</TableHead>
              <TableHead className="text-right">End</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resume.projects.map((item) => (
              <TableRow key={item.title}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.tools.join(", ")}</TableCell>
                <TableCell>{new Date(item.startDate).getFullYear()}</TableCell>
                <TableCell className="text-right font-bold">{item.endDate ? new Date(item.endDate).getFullYear() : "---" }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <br />

        <TableCaption className="w-full block">Work Experiences</TableCaption>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Role</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Start</TableHead>
              <TableHead className="text-right">End</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resume.work.map((item) => (
              <TableRow key={item.title}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.company}</TableCell>
                <TableCell>{new Date(item.startDate).getFullYear()}</TableCell>
                <TableCell className="text-right font-bold">{item.endDate ? new Date(item.endDate).getFullYear() : "---" }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </main>

    </div>
  );
}
