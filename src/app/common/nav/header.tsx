import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row justify-around ">
      <Link href="/">VNS.BLUE</Link>
      <Link href="/">TOP</Link>
      <Link href="/">advertise</Link>
      {/* 言語は２つ選べるようにする、自分の国と言語を覚えたい国のデータを表示 */}
      <Link href="/">Lang</Link>
      <Link href="/">Auth</Link>
    </div>
  );
}
