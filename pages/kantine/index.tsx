import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { SIO_BASE_URL, getStaticPropsRevalidationTime } from "../../constants";
import * as cheerio from "cheerio";
import { Meal } from "../../types/meal";
import { MealCard } from "../../components/MealCard";

export const getStaticProps: GetStaticProps<{ meals: Meal[] }> = async () => {
  const days = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag"];
  const roomsResponse = await axios.get(SIO_BASE_URL);
  const $ = cheerio.load(roomsResponse.data);
  const meals: Meal[] = [];
  const divContainer = ".sc-2a266338-1.feXPjw.sc-ab70ceae-0.fyqHlM";
  let count = 3;
  days.forEach((day, i) => {
    meals.push({
      meal: $(`${divContainer} p:nth-child(${count})`).text(),
      veg: $(`${divContainer} p:nth-child(${count + 2})`).text(),
      day: day,
    });
    count += 6;
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
  console.log(meals);
  return (
    <section className="py-20 flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">Ukesplan</h1>
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
  );
}
