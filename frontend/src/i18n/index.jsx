import { createContext, useContext, useEffect, useState } from "react";
import en from "./en";
import hi from "./hi";
import gu from "./gu";

const I18N = { en, hi, gu };

export const LANGS = [
  { code: "en", label: "English", short: "EN" },
  { code: "hi", label: "हिन्दी", short: "हिं" },
  { code: "gu", label: "ગુજરાતી", short: "ગુ" },
];

const LangContext = createContext({ lang: "en", setLang: () => {} });

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(
    () => localStorage.getItem("pavitra-lang") || "en"
  );
  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem("pavitra-lang", l);
  };
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

export const useT = () => {
  const { lang } = useLang();
  return (key) => {
    const pick = (obj) =>
      key.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
    const v = pick(I18N[lang]);
    if (v !== undefined) return v;
    const e = pick(en);
    return e !== undefined ? e : key;
  };
};
