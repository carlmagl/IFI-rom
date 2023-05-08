import Head from "next/head";

export const Header = ({
  title,
  description = "Trenger du å finne et klasserom, grupperom eller lesesal på Instituttet for Informatikk ved UiO? IFI-rom er en nettside som viser deg hvor du kan finne ulike rom på Ole Johan Dahls hus.",
  children,
}: {
  title: string;
  description?: string;
  children: JSX.Element;
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content="Rom på Ole Johan Dahls hus" />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="IFI, ifi, IFI-rom, Ole Johan Dahls hus, institutt for informatikk"
        />
        <meta property="og:title" content="Rom på Ole Johan Dahls hus" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ifirom.no" />
      </Head>
      {children}
    </>
  );
};
