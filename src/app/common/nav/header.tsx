import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row justify-around ">
      <Link href="/">VNS.BLUE</Link>
      <Link href="/">TOP</Link>
      <Link href="/">advertise</Link>
      <Link href="/">Lang</Link>
    </div>
  );
}
