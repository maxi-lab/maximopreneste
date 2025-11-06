import { createContext, useState } from "react";
import English from '../lang/en-US.json'
import Spanish from '../lang/es-AR.json'
import { IntlProvider } from "react-intl";

const languageContext=createContext()
function LanguageContextProvider({children}){
    const [lang,setLang]=useState(English)
    const [locale,setLocale]=useState("en-US")
    const cambiarLenguaje=(l)=>{
        if(l=="en-US"){
            setLang(English)
            setLocale(l)
            return
        }
        setLang(Spanish)
        setLocale("es-AR")
    }

    return <languageContext.Provider value={{cambiarLenguaje, locale}}>
        <IntlProvider locale={locale} messages={lang}>
        {children}
        </IntlProvider>
    </languageContext.Provider>
}
export {languageContext,LanguageContextProvider}