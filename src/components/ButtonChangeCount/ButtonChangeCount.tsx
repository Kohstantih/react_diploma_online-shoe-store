import { TButtonChangeCountProps } from '../../types/TButtonChangeCountProps';

export default function ButtonChangeCount({
  title,
  setCount,
}: TButtonChangeCountProps) {
  return (
    <button onClick={setCount} className="btn btn-secondary">
      {title}
    </button>
  );
}
