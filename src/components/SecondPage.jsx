
import { useContext, useState } from 'react';
import MyContext from '../context/myContext';
import PrimeiraPagina from './FirstPage';


const SegundaPagina = () => {

    const {reposta1, setResposta1, resposta2, setResposta2}= useContext(MyContext)

const[show, setshow] = useState(false)
const onClick =() => setshow(true)

const Results1 = () => {
    <div  className="container" id='resposta1' value ="1">
        
        <li className='list-group-item'> <p>Me diga sobre o seu hobby</p></li>   
         <textarea maxLength="300" className="mb-3" required></textarea>
        
    </div>
}

const Results2 = () => {
    <div className="container" id='resposta2' value="2">
        
        <li className='list-group-item'> <p>Quail é a sua atividade profissional e fale um pouco sobre ela</p></li>  
        <textarea maxLength="300" className="mb-3" required></textarea>
        
    </div>
}

return (



<div className='container'>
<p>Qual pergunta você escolhe</p>


<input type ="radio" className="mb-3" value ="1" name="resposta1" id='reposta1' onClick={Results1}>1</input>
 {show? <Results1 />:null}

<input type ="radio" className="mb-3" value="2" name="resposta2"  id='reposta2'  onClick={Results2}>2</input>
{show? <Results2 />:null}




</div>


)



}
export default SegundaPagina;