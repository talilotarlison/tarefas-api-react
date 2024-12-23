import  './styles.css';
import  React, { useState,useEffect } from 'react';

function ListaTarefas(props) {


  // Declare a new state variable, which we'll call "count"
  const [tarefas, setTarefas] = useState(tarefasBD);
  const [filtroTarefas, setFiltroTarefas] = useState('');
  //console.log(filtroTarefas);

  
   var tarefasBD = [
    { id:1, tarefa:'CAFE', complete:true},
    { id:2, tarefa:'pao',complete:false},
    { id:3, tarefa:'biscoito',complete:false},
    { id:4, tarefa:'sorvete',complete:true},
    { id:5, tarefa:'molho',complete:false}
 ]

const listaNova  = tarefasBD.filter((item)=>{return item.tarefa.toLowerCase().includes(filtroTarefas.toLowerCase())})

function Pesquisas(){
  if(tarefas){
    setTarefas(listaNova)
   }else{
    setTarefas(tarefasBD)
  }
}


 useEffect(()=>{
    Pesquisas()
 },[filtroTarefas])
 


  return(
    <div className='caixa'>
     <input value={filtroTarefas} placeholder='Faça uma busca aqui' onChange={(e)=>setFiltroTarefas(e.target.value)}/>  
     <ul>
       {
         tarefas.map((item)=>{
          return(
              <li key={item.id}  className={item.complete?"concluido":'naoconcluido'}>{item.tarefa}</li>
            )
         }) 
       }
     </ul>
    </div>
    ) 
}

export default ListaTarefas;
