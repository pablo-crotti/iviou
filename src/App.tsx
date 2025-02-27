import { Home } from "./sections/Home";
import { MainLayout } from "./layouts/MainLayout";
import { SectionLayout } from "./layouts/SectionLayout";
import { useState } from "react";
import { LanguageSelector } from "./components/LanguageSelector";

type Language = "en" | "fr" | "de";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <MainLayout>
      <LanguageSelector />
      {/* <Home /> */}
      <SectionLayout>
        <h2>Section 1</h2>
      </SectionLayout>
      <SectionLayout>
        <h2>Section 2</h2>
      </SectionLayout>
    </MainLayout>
  );
}

export default App;
