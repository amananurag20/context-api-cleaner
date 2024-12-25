
import HomePage from "./components/HomePage"
import ContextWrapper from "./context/contextWrapper"



const App = () => {


  return (
    <ContextWrapper>
   <HomePage/>
    </ContextWrapper>
  )
}

export default App