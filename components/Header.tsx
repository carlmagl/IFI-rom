import Head from "next/head";

export const Header = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};
