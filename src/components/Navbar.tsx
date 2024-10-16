import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* MOBILE SCREEN */}
      <div className="md:hidden h-full flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl tracking-wide uppercase">Home</div>
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREENS */}
      <div className="hidden md:flex h-full items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-8 w-1/3 xl:1/2">
          <Link href="/" className="flex items-center gap-3">
            <Image src={"/logo.png"} alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-wide uppercase">Home</div>
          </Link>

          {/* Links */}
          <div className="hidden xl:flex gap-8">
            <Link href="/">Home</Link>
            <Link href="/list">Shop</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
