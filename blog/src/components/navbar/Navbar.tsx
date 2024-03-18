import React from "react";
import Logo from "../logo/Logo";
import Link from "next/link";

const Navbar = () => {
  const Navigation = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Features", href: "/features" },
    { title: "Studio", href: "/studio" },
  ];
  return (
    <div className="bg-white/70 h-20 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="Bloggers" className="text-sky-400 hover:text-black duration-200" />
        <div className="hidden md:inline-flex items-center gap-7 text-blue-400 font-semibold">
          {Navigation.map((item) => (
            <Link key={item?.title} href={item?.href} className=" hover:underline md:underline-offset-4 duration-200 ">
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
