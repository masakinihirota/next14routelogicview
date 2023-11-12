import "@/styles/globals.css";

// 並行ルート
// ユーザープロフィールとその他データを並列に表示する
export default function Layout(props: {
  children: React.ReactNode;
  userProfile: React.ReactNode;
  otherData: React.ReactNode;
}) {
  return (
    <>
      <div>{props.children}</div>
      <div>{props.userProfile}</div>
      <div>{props.otherData}</div>
    </>
  );
}
