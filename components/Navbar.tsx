import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="w-full flex-between fixed z-50 bg-dark-1 px-6 py-2 lg:px-10">
      <Link href="/" className="flex items-center gap-1 -ml-7">
        <Image
          className="max-sm:w-[100px]"
          src="/icons/logo.png"
          alt="logo"
          width={80}
          height={80}
        />
        <h1 className="uppercase text-[#2cbfae] font-black md:text-2xl text-xl -ml-3">LiveLoom</h1>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
