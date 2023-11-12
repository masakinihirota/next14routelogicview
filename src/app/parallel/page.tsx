import Link from 'next/link';

export default function ParallelPage() {
  return (
    <div className="container mx-auto pt-3">
      <h3 className="pb-5 text-xl font-bold">top page</h3>
      <div className="">
        <h4 className="py-5 text-lg font-bold">
          以下のディレクトリのコンポーネントがここに表示されています。
        </h4>
        <div className="mockup-code">
          <pre>
            <code>/app/(demo)/parallel/default.tsx</code>
          </pre>
        </div>

        <div>
          <h4 className="py-3 text-lg font-bold">
            /app(demo)/parallel/nested/page.tsxへのリンク↓
          </h4>
          <Link href="/parallel/nested" className="text-blue-600">
            /app(demo)/parallel/nested/page.tsx
          </Link>
        </div>
      </div>
    </div>
  );
}
