interface Forening {
  fields: {
    tittel: string;
    subtext: string;
    url: string;
    logo: { fields: { file: { url: string } } };
  };
  sys: { id: string };
}
