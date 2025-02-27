export const SectionLayout = ({
  children,
}: React.PropsWithChildren<object>) => {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
};
