import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { SIO_BASE_URL, getStaticPropsRevalidationTime } from "../../constants";
import * as cheerio from "cheerio";
import { MealCard } from "../../components/MealCard";
import { Header } from "../../components/Header";
import { Meal } from "@/utils/types/meal";

export const getStaticProps: GetStaticProps<{ meals: Meal[] }> = async () => {
  const days = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag"];
  const roomsResponse = await axios.get(SIO_BASE_URL);
  const $ = cheerio.load(roomsResponse.data);
  const meals: Meal[] = [];
  const divContainer = ".sc-2a266338-1.feXPjw.sc-ab70ceae-0.fyqHlM";
  let count = 3;
  // days.forEach((day, i) => {
  //   meals.push({
  //     meal: $(`${divContainer} p:nth-child(${count})`).text(),
  //     veg: $(`${divContainer} p:nth-child(${count + 2})`).text(),
  //     day: day,
  //   });
  //   count += 6;
  // });
  $(divContainer)
    .find("ul")
    .each((i, ul) => {
      meals.push({
        meal: $(ul).find("li").first().text(),
        veg: $(ul).find("li").last().text(),
        day: days[i],
      });
    });

  return {
    props: {
      meals,
    },
    revalidate: getStaticPropsRevalidationTime,
  };
};

export default function Kantine({
  meals,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Header
      title="Kantine - IFI-rom"
      description="Her kan du se hva som serveres ved kantina i Ole Johan Dahls hus."
    >
      <section className="py-10 sm:py-20 flex flex-col gap-5">
        <h1 className="text-2xl text-purple font-bold text-center">Ukesplan</h1>
        <ul className="flex flex-col items-center flex-wrap gap-4">
          {meals.map((meal, index) => (
            <MealCard meal={meal} key={meal.day} index={index} />
          ))}
        </ul>
        {!meals.length && (
          <p>
            Kunne ikke laste inn dataen fra SIO, sjekk selv hos{" "}
            <a href={SIO_BASE_URL}>SiO</a>.
          </p>
        )}
      </section>
    </Header>
  );
}
