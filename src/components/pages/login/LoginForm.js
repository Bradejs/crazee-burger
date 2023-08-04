import { useState } from "react"
import { Link } from "react-router-dom"


export default function LoginForm() {
// state 
const [inputValue, setInputValue] = useState("")

// comportement
const handleSubmit = (event) => { 
event.preventDefault()
// alert(`Bonjour ${inputValue}`)
setInputValue("")
}

const handleChange = (event) => {
setInputValue(event.target.value)
}

// affichage (render)
  return (
      <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br/>
      <h2>Connectez-vous</h2>
        <input value={inputValue} onChange={handleChange} type="text" placeholder="Entre votre prénom..." required/>
       <button>Accédez a votre espace</button> 
       <Link to="/OrderPage">Vers OrderPage</Link>
      </form>
  )
}
