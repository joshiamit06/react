// Normal counter App where Add button incerase counter value by 1
// And decrease button decrease value of counter by 1

/*

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)

  const addValue = function(){
    if(counter===20){
      setCounter(counter)
    }else{
      setCounter(counter+1)
    }
  }

  const removeValue=function(){
    if(counter!=0){
    setCounter(counter-1)
    }else{
      setCounter(counter)
    }
  }

  return (
    <>
    <h1>Counter with React</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value:{counter}</button>
    <br />
    <button onClick={removeValue}>Decrease Value: {counter}</button>
    </>
  )
}

export default App


*/



// Interview question
// What happens when we call setCounter multiple times like below in addValue function ?
// does it increase value by 4 as we calling setCounter 4 times? or it just change value of
// counter by 1 only
// const addValue = () => {
//   setCounter(counter+1)
//   setCounter(counter+1)
//   setCounter(counter+1)
//   setCounter(counter+1)
// }




// Answer is it just change value of counter by 1
// because it has nothint to deal with setCounter but this case is related to useState
// as we read about react fiber, usestate send the updates to UI in batches
// so we are doing same kind of work in setCounter(counter+1) four times so it 
// value is getting updated on UI by one time i.e. gets increased by 1 only





// but what if we want to increase value everytime we call setCounter here.
// we cann do that as per below. In setter function such as setCounter here
// we get a callback function we are getting last updated state everytime 
// in prevCounter and increasing its value
// so for first time of calline setCounter(), counter value is suppose 10
// so we are incerasing it by setCounter(prevCounter => prevCounter + 1) so counter is 11
// for second time we are again getting its last updated state i.e. 11 and storing it in
// prevCounter and increasing it by setCounter(prevCounter => prevCounter + 1) so now
// counter is 12 like wise we can increase counter value by 4 by clicking Add value button 
// just by once.


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
