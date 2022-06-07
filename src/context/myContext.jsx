    import { createContext, useState } from "react";


// será responsável por armazenar os states que serão compartilhados e 
//acompanhar eventuais mudanças em seus valores para realizar novas renderizações.

export const MyContext = createContext();

export const MyContextProvider = ({children}) => {
const [name, setName] =useState()  //pag1
const [description, setDescription] =useState() //pag1

const [reposta1, setResposta1]= useState(); //pag2
const [resposta2, setResposta2]=useState() //pag2

const handleSubmit =({name, description}) => {

console.log("Dados provider", {name, description})

setName(name)
setDescription(description)

}

return (

<MyContext.Provider value={{name, description,reposta1, resposta2, submit:handleSubmit}}>
    {children}
</MyContext.Provider>

)

}















