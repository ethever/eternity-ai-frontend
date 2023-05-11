export type PropsOfComponent<T> = T extends React.ComponentType<infer P>
  ? P
  : never;
