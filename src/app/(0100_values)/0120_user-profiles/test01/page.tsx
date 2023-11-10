import Link from "next/link";
import React from "react";

export default async function Index() {
  return (
    <div>
      左にユーザープロフィールを表示、自分の名前、自分の作品、自分の選んだカテゴリ、
      公式リスト、自分で作ったユーザーリスト
      <br />
      右にデータ比較orマッチングやデータ登録を表示
      <br />
      src\app\(0100_values)\0120_usr-profiles\test01\page.tsx
      <br />
      Next.jsのパラレルルートを使う
      左に自分のデータを表示、右にデータ比較orマッチングやデータ登録を表示
    </div>
  );
}
