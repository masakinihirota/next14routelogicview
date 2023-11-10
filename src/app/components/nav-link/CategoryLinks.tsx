import Link from "next/link";
import React from "react";

export const CategoryLinks: React.FC = () => {
  return (
    <div>
      {/* カテゴリ */}
      <Link className=" text-blue-300 hover:text-white " href="/0130_category">
        category
      </Link>
      <br />
      <Link
        className=" text-blue-300 hover:text-white "
        href="/0130_category/test01"
      >
        test01
      </Link>
      <br />
      <Link
        className="  text-blue-300 hover:text-white "
        href="/0130_category/test02"
      >
        test02
      </Link>
      <br />
      <Link
        className=" text-blue-300 hover:text-white "
        href="/0130_category/test03"
      >
        test03
      </Link>
    </div>
  );
};
