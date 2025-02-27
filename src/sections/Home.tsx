import Constants from "../texts/Constants.json";

export const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">{Constants.siteTitle}</h1>
    </div>
  );
};
