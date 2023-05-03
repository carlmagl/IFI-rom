import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Nav />
      <main className={`min-h-[calc(100vh-64px)]`}>{children}</main>
      <Footer />
    </>
  );
};
