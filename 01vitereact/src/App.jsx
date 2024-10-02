
/*
As we know, in return statement of component we can return only one enclosed tag
but if we want to enclose more than one tag then we can add them in fragments <> </>
<>
..
..
</>
it treated as one tag <> and can add other tags in <>

*/



import Chai from "./chai"


function App() {
  const username = "chai aur code"

  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>
    <p>test para</p>
   </>
  )
}

export default App

