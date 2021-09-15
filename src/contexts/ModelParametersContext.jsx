import React, {createContext, useState} from "react";

export const ModelParametersContext = createContext();

export const ModelParametersProvider = props => {
    const [modelParameters, setModelParameters] = useState({
        "text": "Enter a word / phrase",
    })

    return (
        <ModelParametersContext.Provider value={[modelParameters, setModelParameters]}>
            {props.children}
        </ModelParametersContext.Provider>
    )
}