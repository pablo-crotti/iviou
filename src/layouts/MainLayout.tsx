import { Nav } from "../sections/Nav";
export const MainLayout = ({ children }: React.PropsWithChildren<object>) => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <Nav />
      <div className="">{children}</div>
    </div>
  );
};
