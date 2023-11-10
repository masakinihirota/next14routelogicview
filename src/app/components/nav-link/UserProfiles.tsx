import Link from "next/link";
import React from "react";

export const UserProfiles: React.FC = () => {
  return (
    <div>
      {/* ユーザープロフィール */}
      <Link
        className=" text-blue-300 hover:text-white "
        href="/0120_user-profiles/"
      >
        user-profiles
      </Link>
      <br />
      <Link
        className=" text-blue-300 hover:text-white "
        href="/0120_user-profiles/test01"
      >
        test01
      </Link>
      <br />
      <Link
        className="  text-blue-300 hover:text-white "
        href="/0120_user-profiles/test02"
      >
        test02
      </Link>
      <br />
      <Link
        className=" text-blue-300 hover:text-white "
        href="/0120_user-profiles/test03"
      >
        test03
      </Link>
    </div>
  );
};
