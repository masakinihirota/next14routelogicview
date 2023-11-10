import Link from "next/link";
import React from "react";

export const RootAccount: React.FC = () => {
  return (
    <div>
      {/* ルートアカウント */}
      <Link
        className=" text-blue-300 hover:text-white "
        href="/0110_root-account/"
      >
        root-account
      </Link>
      <br />
      <Link
        className=" text-blue-300 hover:text-white "
        href="/0110_root-account/test01"
      >
        test01
      </Link>
      <br />
      <Link
        className="  text-blue-300 hover:text-white "
        href="/0110_root-account/test02"
      >
        test02
      </Link>
      <br />
      <Link
        className=" text-blue-300 hover:text-white "
        href="/0110_root-account/test03"
      >
        test03
      </Link>
    </div>
  );
};
