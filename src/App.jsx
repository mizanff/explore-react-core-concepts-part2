import Users from '../users'
import './App.css'
import Counter from './counter'
import Tem from './tem'
import Friends from './friends'

function App() {

  function handleClick(){
    alert('Button Clicked')
  }

  const handleClick2 = () =>{
    alert('Button 2 Clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
      <h3>React core concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Tem></Tem>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button> 
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('third clicked')} }>Third</button>
      {/* {vejailla} */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
