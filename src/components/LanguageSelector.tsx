import { useEffect, useState } from "react";

type Language = {
  code: string;
};
import constants from "../texts/Constants.json";

export const LanguageSelector = () => {
  const availableLanguages = constants.languages.map((lang) => ({
    code: lang.code,
  })) as Language[];

  const [lng, setLng] = useState<Language["code"]>("en");

  useEffect(() => {
    const actualPath = window.location.pathname;

    if (actualPath === "/") {
      const userLanguage = navigator.language;

      if (availableLanguages.some((lang) => lang.code === userLanguage)) {
        window.location.pathname = `/${userLanguage}`;
        setLng(userLanguage);
      } else {
        window.location.pathname = "/en";
        setLng("en");
      }
    } else {
      const pathLanguage = actualPath.split("/")[1];

      if (availableLanguages.some((lang) => lang.code === pathLanguage)) {
        setLng(pathLanguage);
      } else {
        window.location.pathname = "/en";
        setLng("en");
      }
    }
  });

  return (
    <div className="w-screen fixed top-0 right-0 p-4 bg-light-100 dark:bg-dark-100">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        className="font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-light-200 text-dark-100 dark:bg-dark-200 dark:text-light-100"
        type="button"
      >
        {constants.languages.find((lang) => lang.code === lng)?.name}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className="z-10 hidden divide-y divide-light-100 rounded-lg shadow-sm dark:bg-dark-200"
      >
        <ul
          className="py-2 text-sm text-dark-100 dark:text-light-100"
          aria-labelledby="dropdownDefaultButton"
        >
          {constants.languages.map((language) => (
            <li key={language.code}>
              <a
                type="button"
                href={`/${language.code}`}
                className={`block px-10 py-2 hover:bg-light-200 dark:hover:bg-dark-300${
                  language.code === lng
                    ? "bg-light-200 dark:bg-dark-300 opacity-50 pointer-events-none"
                    : ""
                }`}
              >
                {language.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
