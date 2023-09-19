import { FunctionComponent } from "react";

const List = <T,>({
  component,
  data,
  styles,
}: {
  styles?: { gap?: number };
  component: FunctionComponent<T>;
  data: T[];
}) => {
  return (
    <ul className={`flex flex-col gap-${styles?.gap || 0}`}>
      {data.map((it, i) => (
        <li key={i}>{component(it)}</li>
      ))}
    </ul>
  );
};

export default List;
