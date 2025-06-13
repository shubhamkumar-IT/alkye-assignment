import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-center py-6 bg-white">
      {/* Logo */}
      <div className="w-24 h-24">
        <Link href="/">
          <Image
            src="/Logo/Logo.png" // Replace with your logo path
            alt="Logo"
            height={50}
            width={50}
            className="w-full h-full object-contain animate-slide-up"
          />
        </Link>
      </div>

      {/* Text below the logo */}
      <h1 className="text-[54px] md:text-[90px] font-bold font-soehne animate-slide-up">
        alkye
      </h1>
      <p className="mt-2 text-center text-lg font-medium text-gray-700 animate-slide-up">
        The easiest test you will ever do
      </p>
    </header>
  );
}
