import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Room } from "../../types/room";
import {
  CONTENTFUL_BASE_URL,
  GITHUB_IFI_ROM,
  getStaticPropsRevalidationTime,
} from "../../constants";
import { ForeningCard } from "../../components/ForeningCard";
import { Header } from "../../components/Header";

export const getStaticProps: GetStaticProps<{
  foreninger: Forening[];
}> = async () => {
  const foreningerResponse = await axios.get(
    `${CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=foreninger`
  );
  const foreninger = foreningerResponse.data.items;
  return {
    props: {
      foreninger,
    },
    revalidate: getStaticPropsRevalidationTime,
  };
};

export default function Home({
  foreninger,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(foreninger);
  return (
    <Header title={"Foreninger - IFI-rom"}>
      <section className="py-20 flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-center">Foreninger på IFI</h1>
        <input type="text" />
        <ul className="flex flex-wrap justify-center gap-8">
          {foreninger
            .sort((a, b) => a.fields.tittel.localeCompare(b.fields.tittel))
            .map((forening) => (
              <ForeningCard forening={forening} key={forening.sys.id} />
            ))}
        </ul>
        <p className="text-center">
          Savner du din forening her, lag et issue i{" "}
          <a
            className="text-red underline underline-offset-2"
            href={GITHUB_IFI_ROM}
          >
            Github
          </a>
        </p>
      </section>
    </Header>
  );
}
