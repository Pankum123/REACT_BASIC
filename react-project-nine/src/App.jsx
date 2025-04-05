
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';


//step1: create context
const UserContext = createContext();
//step2: wrap all the child inside a provider
//srep3: pass value
//step4: consumer ke ander jakar consume kar lo

const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({name:"pankaj"});
  const [theme, setTheme] = useState('light');

  return (

    <UserContext.Provider value={user}>

        <ThemeContext.Provider value={{theme,setTheme}}>
            <div id='cotainer' style={{backgroundColor:theme==='light'?"beige":"black"}} >
              <ChildA/>
            </div>
        </ThemeContext.Provider>


    </UserContext.Provider>

    










    // <> 
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </>
  )
}

export default App
export {UserContext}
export {ThemeContext}
