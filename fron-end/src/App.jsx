import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Register } from './components/Register'
import { GetBooks } from './components/GetBooks'

function App() {
  
  return (
    <>
      <div>
        <Register/>
        <hr/>
        <GetBooks/>
      </div>
    </>
  )
}

export default App
