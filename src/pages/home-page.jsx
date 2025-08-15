import useCountStore from "../hooks/use-count-store";

export default function HomePage() {
  const { count } = useCountStore();
  return <div>The current value of count is : {count}</div>;
}
