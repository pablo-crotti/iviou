import { SectionLayout } from "../layouts/SectionLayout";
import constants from "../texts/Constants.json";

export const Home = () => {
  return (
    <SectionLayout>
      <h1 className="text-[10rem] font-bold text-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
        {`${constants.siteTitle}`}
      </h1>
    </SectionLayout>
  );
};
