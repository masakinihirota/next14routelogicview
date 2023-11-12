import "@/styles/globals.css";

export default function Layout(props: {
  children: React.ReactNode;
  test1: React.ReactNode;
  test2: React.ReactNode;
  test3: React.ReactNode;
  test4: React.ReactNode;
}) {
  return (
    <div className="pt-5 text-center">
      <h2 className="text-2xl font-bold">Parallel Routes</h2>
      <div>{props.children}</div>
      <div>{props.test1}</div>
      <div>{props.test2}</div>
      <div>{props.test3}</div>
      <div>{props.test4}</div>
    </div>
  );
}
