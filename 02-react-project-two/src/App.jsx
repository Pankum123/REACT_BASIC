import Usercard from "./components/Usercard"
import "./App.css"
import lovepic from "./assets/lovepic.jpeg"
import maharana from "./assets/maharana.jpeg"
import pritvirajc from "./assets/pritvirajc.jpeg"


function App() {

  return (
    <>
     <div className="container">
      <Usercard name="love Rana" desc="desc1" image={lovepic} style={{"border-radius":"10px"}} />
      <Usercard name="Maharana Pratap" desc="desc2" image={maharana} style={{"border-radius":"10px"}}/>
      <Usercard name="prithviRaj Chauhan" desc="desc3" image={pritvirajc} style={{"border-radius":"10px"}}/>
     </div>
    </>
  )
}

export default App
