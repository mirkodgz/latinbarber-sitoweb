"use client";

import Image from "next/image";
import Link from "next/link";

const FullLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/Logo-Actual2025-DEF.webp"
        alt="Latin Barber Logo"
        width={135}
        height={40}
        className="block w-auto h-[40px] max-h-[40px] object-contain"
      />
    </Link>
  );
};

export default FullLogo;
