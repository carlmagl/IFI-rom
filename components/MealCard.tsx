import { Meal } from "../types/meal";

export const MealCard = ({ meal, index }: { meal: Meal; index: number }) => {
  const activeDay = new Date().getUTCDay();
  return (
    <div
      className={`w-11/12 sm:w-8/12 p-4 rounded flex flex-col gap-2 ${
        activeDay - 1 == index
          ? "bg-blue text-white shadow-xl shadow-blue-default"
          : "bg-gray-200 text-blue"
      }`}
    >
      <h2 className="text-xl font-semibold">{meal.day}</h2>
      <p>{meal.meal.replace("Allergener: Se merking i buffeten.", "")}</p>
      <p>{meal.veg.replace("Allergener: Se merking i buffeten.", "")}</p>
    </div>
  );
};
