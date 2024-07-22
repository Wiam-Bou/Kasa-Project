import React from "react";
import "./Main.scss";

// destructuration pour utiliser directement le children prop 
function Main({ children }) { 
    
    
  return <div className="main">{children} </div>;
}


export default Main;