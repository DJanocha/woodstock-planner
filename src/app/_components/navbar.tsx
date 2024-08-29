"use client";

// import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "~/components/ui/button";

const links = {
  search: "/",
  calendar: "/calendar",
};
export const Navbar = () => {
  //   const {} = useRouter();
  const pathname = usePathname();
  return (
    <nav className="flex h-[10dvh] flex-row items-center gap-2">
      <Link
        href="/"
        className={buttonVariants({
          variant: pathname === links.search ? "link" : "ghost",
          className: "w-full",
        })}
      >
        Search
      </Link>
      <Link
        href="/calendar"
        className={buttonVariants({
          variant: pathname === links.calendar ? "link" : "ghost",
          className: "w-full",
        })}
      >
        Calendar
      </Link>
    </nav>
  );
};
