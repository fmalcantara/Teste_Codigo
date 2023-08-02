import React from "react"
import style from './App.module.css'
import { Card } from "./Card"

function App() {

  const [input, setInput]=React.useState('')
  const [nome, setNome]=React.useState([])
  const [avatar, setavatar]=React.useState({nome: '', avatar: ''})

  function handleChange(event){
    setInput(event.target.value)
  }

  function handleClick(){
    const novoNome = {
      novo: input,
      hora: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setNome([...nome, novoNome])
  }

  const renderizarNomes = nome.map((nome, index) => 
      <Card key={nome.hora} 
        nome={nome.novo} 
        hora={nome.hora}
        remover={()=>{remover(index)}}
        
        />)


  function remover(indexRemove){
    const removerItem = nome.filter((item, index) => index !== indexRemove)
    setNome(removerItem)
  }

  React.useEffect(() => {
    
    async function avatar(){
      const response = await fetch('https://api.github.com/users/fmalcantara')
      const data = await response.json()
      setavatar({foto: data.avatar_url, nome: data.name})
    }
    avatar()

  }, [])

  return (
  <div className={style.container}>
    <div>
      <h1>Registro</h1> 
        <div>
          <span>{avatar.nome}</span>
          <img src={avatar.foto}/>
        </div>
    </div>
    <input type='text' placeholder="digite um nome"  onChange={handleChange}/>
    <button onClick={handleClick}>Adicionar</button>
    
    {renderizarNomes}
    
 
    
  
  </div>

  )
}

export default App
