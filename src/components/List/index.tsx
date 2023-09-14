import { FunctionComponent } from "react";

const List = <T,>({
  component,
  data,
}: {
  component: FunctionComponent<T>;
  data: T[];
}) => (
  <ul className="flex flex-col gap-3">
    {data.map((it, i) => (
      <li key={i}>{component(it)}</li>
    ))}
  </ul>
);

export default List;
