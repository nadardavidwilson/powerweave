import { createContext,useState } from "react";

const ContentContext = createContext();

export function ContentProvider({ children }){

const [menuname,Setmenuname] = useState("Combos")

    const getmenu=(menu)=>{
        Setmenuname(menu)
    }

    return(
        <ContentContext.Provider value={{menuname, getmenu}}>
            {children}
        </ContentContext.Provider>
    );
}

export default ContentContext;