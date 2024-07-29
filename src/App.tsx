
import './App.css'
import { employersData } from './data/data';
import EmployeeCard from "./components/EmployeeCard";

function App() {

  return (
    <>
      <div className="hierarchy">
        <h1>Employee hierarchy</h1>
        <EmployeeCard employee={employersData} />
      </div>
    </>
  )
}

export default App
