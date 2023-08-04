type Props = {
  children: JSX.Element;
};

export function Container({ children }: Props) {
  return (
    <div className="flex flex-col items-start h-[100vh] w-[100%]">
      {children}
    </div>
  );
}
