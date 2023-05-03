import { Meal } from "../types/meal";

export const MealCard = ({ meal, index }: { meal: Meal; index: number }) => {
  const activeDay = new Date().getUTCDay();
  console.log(activeDay);
  console.log(activeDay === index - 1);
  return (
    <div
      className={`w-8/12 p-4 rounded flex flex-col gap-2 ${
        activeDay - 1 == index
          ? "bg-blue-dark text-blue-light shadow-xl shadow-blue-default"
          : "bg-blue-light text-blue-dark"
      }`}
    >
      <h2 className="text-xl font-semibold">{meal.day}</h2>
      <p>{meal.meal}</p>
      <p>{meal.veg}</p>
    </div>
  );
};
