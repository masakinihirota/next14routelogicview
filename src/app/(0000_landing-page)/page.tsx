import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      VNS.BLUE TOP PAGE landing page
      <br />
      ランディングページ
      <Link href="/0110_root-account">valuesへ</Link>
    </main>
  );
}
