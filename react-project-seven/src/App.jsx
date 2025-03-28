
import './App.css'

function App() {
  
  function handleClick(){
    alert("I am clicked");
  }

  function handleMouseOver() {
    alert("para k uper mouse lekar aaye ho")
    
  }

  
  function handleInputChange(e){
    //console.log("Input mai value change hua hai")
    console.log("value till now: ",e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    //i am writing my custom behaviour down
    alert("Form Submit krdu kya ");
  }

  return (
    <div>

      <button onClick={()=>alert("Button Click hua hai")}>Click me</button>

      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button typr='submit'>Submit</button>
      </form> */}

      {/* <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
        I am Para
      </p>

      <button onClick={handleClick}>
        Click me
      </button> */}

    </div>
  )
}

export default App
