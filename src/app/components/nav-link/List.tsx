import Link from "next/link";
import React from "react";

export const List: React.FC = () => {
  return (
    <div>
      {/* リスト */}
      <Link className=" text-blue-300 hover:text-white " href="/0140_list/">
        list
      </Link>
      <br />
      <Link
        className=" text-blue-300 hover:text-white "
        href="/0140_list/test01"
      >
        test01
      </Link>
      <br />
      <Link
        className="  text-blue-300 hover:text-white "
        href="/0140_list/test02"
      >
        test02
      </Link>
      <br />
      <Link
        className=" text-blue-300 hover:text-white "
        href="/0140_list/test03"
      >
        test03
      </Link>
    </div>
  );
};
