/*
We create component in another files and import it here.
And render the component to DOM in this file.
*/


import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

/*

// This is the custom component. 
// Component name should be starts with a capital letter

// Also note that while returning we can enclose only one tag below example
// we have enclose in div tag.
// Also, we are using blundler like Vite or others so in jsx we rendering html
// <MyApp /> and inside MyApp we are rendering html so Vite or other blundler 
// convert this html into tree like structure similar to below.

const reactElement = React.createElement(
    'div',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement
)

here MyApp is a fuction we can also render this as per below

ReactDOM.createRoot(document.getElementById('root')).render(
 
    MyApp()
  
)

*/

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <MyApp/>
  
)



/*
we dont need to create component in another file and import it here
like we created App in another file as function and rendering it in html file
we can directly create Chai function here also in this file
and reddering it to html like we did above

*/


/*
H

*/

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherUser
)


// here you can see, you can directly pass reactElement inside render
// as we know when we create App function it will convert return html
// into a tree like object. that object only we have created directly here
// instread of App function. so we can render it directly.
// below is the way. and syntax of rendering object
// for more understanding go to https://www.youtube.com/watch?v=FxgM9k1rg0Q
// from timestamp 2:00:00
ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
  
)


