import useCountStore from "../hooks/use-count-store";

export default function BearCounterPage() {
  const { count, increaseCount, decreaseCount } = useCountStore();

  return (
    <div className="flex justify-center gap-10 mt-10">
      <button
        onClick={increaseCount}
        className="text-3xl bg-blue-700 size-10 rounded-full text-white cursor-pointer"
      >
        +
      </button>
      <p className="text-4xl w-10 text-center">{count}</p>

      <button
        onClick={decreaseCount}
        className="text-3xl bg-blue-700 size-10 rounded-full text-white cursor-pointer"
      >
        -
      </button>
    </div>
  );
}
