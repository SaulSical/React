
import { useState} from "react"

export const Contador = () => {
 
    const [contador, setContador] = useState(0);


  return (
    <div>
        <h2>useEffect: ejemplo</h2>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>
            Cambiar estado
        </button>
    </div>
  )
}
