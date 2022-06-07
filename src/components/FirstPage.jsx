
import React, { useContext, useState } from 'react';
import MyContext from '../context/myContext';
import SegundaPagina from './SecondPage';
import {useHistory} from "react-router-dom"
 // const [element, setElement] = useState(); //para salvar os inputs 


const PrimeiraPagina = ({onSubmit}) => {

let history = useHistory();




  //para acessar os states desejados de maneira global
  const {submit} = useContext(MyContext)

  const [name, setName]= useState("")
const [description, setDescription]= useState("")

  const handlerSubmit = (e) =>{
    e.preventDefault();

    submit({name,description, setName, setDescription})  //nao sei se é necesario chmar os set's
    }



return(


<div className="container">
       <uL className="list-group">
       <li className='list-group-item'> <p>Digite o seu nome</p></li> 
       <input type="text" placehouder  = 'Nome' name = "name" id="name" required></input>
      
      <li className='list-group-item'> <p>Descreva um pouco sobre você</p></li> 
       <textarea maxlength ='300' placeholder='Descrição pessoal' name = 'description' id="description" required  cols='10' rows='10'></textarea>
  

       
       <button type="submit" variant="primary" onClick={()=> {history.push("/SecondPage")}}>Proximo</button>
       
       </uL>
     </div>

    

)



}

export default PrimeiraPagina

