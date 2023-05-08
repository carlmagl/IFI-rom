export const ForeningCard = ({ forening }: { forening: Forening }) => {
  return (
    <li className="w-10/12 sm:w-3/12 h-[200px] rounded bg-blue p-5 text-white hover:bg-blue-dark hover:text-blue-light">
      <a
        href={`${forening.fields.url}`}
        target="_blank"
        className="flex flex-col justify-center items-center h-full"
      >
        <h2 className="text-xl font-bold text-yellow">
          {forening.fields.tittel}
        </h2>
        <p className="text-center">{forening.fields.subtext}</p>
      </a>
    </li>
  );
};
