import { Nav } from "../sections/Nav";
export const MainLayout = ({ children }: React.PropsWithChildren<object>) => {
  return (
    <div className="h-screen">
      <Nav />
      <div className="">{children}</div>
    </div>
  );
};
