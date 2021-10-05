import { useState } from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  const [name, setName] = useState('Gustavo')
  const [age, setAge] = useState(20)
  const [bg, setBg] = useState('red')

  const [list, setList] = useState([
    "O rato roeu a roupa do rei de roma",
    "Aqui vai uma frase poética",
    "a inspiração desse programador é pouca"
  ])

  const handleAge = () => {
    setAge(20)
    setBg('blue')
  }
  const handle90 = () => {
    setAge(90)
    setBg('yellow')
  }
  const handle = () => setBg('#CCC')


  return (
    <div style={{ backgroundColor: bg }}>
      <Header name={name} age={age} />

      {age === 90 &&
        <button onClick={handleAge}>Tenho 20 anos</button>
      }
      {age === 20 &&
        <button onClick={handle90}>Tenho 90 anos</button>
      }

      {age > 30 && 'Eu sou maior de 30 anos'}

      <br />

      <ul>
        <li>{list.map((item, index)=>(
          <li key={index}>{item}</li>
        ) )}</li>
      </ul>
      <Footer />
    </div>
  );
};

export default App;
