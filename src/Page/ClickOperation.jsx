import React, {useState} from 'react'
import Button from '../Components/Button'
import "../Style/Style.css"

let ClickOperation=()=> {

   let [show,setIsShow]=useState(1)

   let react=()=>{
    setIsShow(1)
   
   }
   let java=()=>{
    setIsShow(2)
   }
   let node=()=>{
    setIsShow(3)
   
   }
  return (
   <React.Fragment>
     <div className='buttonDiv'>
        <div className='singleDiv' onClick={react}><Button buttonName="React Js" class="btn btn-success buttons"/></div>
        <div className='singleDiv' onClick={java}><Button buttonName="Java Script" class="btn btn-danger buttons"/></div>
        <div className='singleDiv' onClick={node}><Button buttonName="Node JS" class="btn btn-warning buttons"/></div>
    </div>
    <div className=' paragraph'>
      {(show===1)?<p className='reactPara'><strong><u>React.js</u></strong>, commonly referred to as React, is an open-source JavaScript library developed and maintained by Facebook. It is primarily used for building user interfaces for single-page applications where the user interface needs to be dynamic and responsive. React allows developers to create reusable UI components and manage the state of an application efficiently.

Key features and concepts of React include: <br />

1. **Components:** React applications are built using components, which are modular and reusable pieces of the user interface. Components encapsulate the structure and behavior of a part of the UI, making it easier to manage and maintain code. <br />

2. **Virtual DOM:** React uses a virtual DOM to improve the efficiency of updating the actual DOM. Instead of directly updating the entire DOM when changes occur, React updates a virtual representation of the DOM and then calculates the most efficient way to update the actual DOM. This minimizes the number of manipulations needed, improving performance. <br />

3. **JSX (JavaScript XML):** React uses JSX, a syntax extension for JavaScript, to describe what the UI should look like. JSX allows developers to write HTML-like code within JavaScript, making the creation of React components more concise and expressive. <br />

4. **Unidirectional Data Flow:** React follows a unidirectional data flow, where the data flows in one direction—from parent components to child components. This makes it easier to understand how data changes and how those changes affect the UI. <br />

5. **State and Props:** React components can have state, which represents the current condition of the component, and props, which are properties passed to a component from its parent. Changes in state or props trigger the re-rendering of the component. <br />

6. **React Router:** For managing navigation and creating single-page applications, React Router is often used. It enables the creation of different views and allows users to navigate between them without the need for a full-page reload. <br />

7. **Declarative Syntax:** React uses a declarative syntax, which means developers describe what they want the UI to look like, and React takes care of updating the DOM to match that description. This is in contrast to imperative programming, where developers explicitly specify each step to achieve a result. <br />

React has gained widespread adoption in the web development community due to its simplicity, flexibility, and the ability to create interactive user interfaces efficiently. It is often used in conjunction with other libraries and frameworks to build full-featured web applications. </p>:(show===2)?<h3 className='javascript'><strong><u>JavaScript</u></strong> is a high-level, interpreted programming language primarily known for its use in web development. It is a versatile scripting language that allows developers to create dynamic and interactive content within web browsers. Here's a concise definition of JavaScript:

**JavaScript:**
JavaScript is a lightweight, object-oriented, and dynamically-typed programming language. It is commonly used as a client-side scripting language to enhance web pages by enabling interactive and dynamic features. JavaScript allows developers to manipulate the Document Object Model (DOM), handle events, perform asynchronous operations, and communicate with servers. Additionally, it is widely used on the server side (with platforms like Node.js) to build scalable and efficient server applications.

Key features of JavaScript include its ability to be embedded in HTML, its support for event-driven programming, and its role as a core technology for building modern web applications. It has become an essential part of web development, providing the means to create responsive and engaging user interfaces.</h3>:<h6 className='node'><strong><u>Node.js</u></strong> is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It is built on the V8 JavaScript runtime engine, which is the same engine used by the Google Chrome browser. Node.js enables developers to use JavaScript for server-side scripting and allows them to create scalable and high-performance network applications. <br />

Key characteristics and features of Node.js include: <br />

1. **JavaScript on the Server:** Node.js extends the use of JavaScript from the client side (browser) to the server side. This allows developers to use a single programming language (JavaScript) for both the front-end and back-end development, streamlining the development process. <br />

2. **Asynchronous and Event-Driven:** Node.js is designed to be asynchronous and event-driven, making it well-suited for handling concurrent operations. It uses an event loop to efficiently manage I/O operations, enabling non-blocking, high-performance applications. <br />

3. **Single-Threaded, Non-Blocking I/O:** Node.js operates on a single-threaded event loop, but it can handle many concurrent connections without the need for multi-threading. This is achieved through non-blocking I/O operations, where the server can continue processing other tasks while waiting for I/O operations to complete. <br />

4. **NPM (Node Package Manager):** Node.js comes with NPM, a powerful package manager that allows developers to easily install, manage, and share third-party libraries and tools. NPM has become one of the largest ecosystems of open-source libraries, enabling rapid development and code reuse. <br />

5. **Scalability:** Node.js is designed to be scalable, allowing developers to build scalable network applications that can handle a large number of simultaneous connections. <br />

6. **Cross-Platform:** Node.js is cross-platform and can run on various operating systems, including Windows, macOS, and Linux, making it versatile for different deployment environments.  <br />

7. **Community and Ecosystem:** Node.js has a vibrant and active community of developers contributing to its growth. The ecosystem includes a wide range of modules and frameworks that extend the functionality of Node.js for different types of applications.  <br />

Node.js is commonly used for building web servers, APIs (Application Programming Interfaces), real-time applications (such as chat applications and online gaming), and various server-side applications. It has become a popular choice for developers seeking a fast and scalable solution for building networked applications using JavaScript.</h6>}
    

    </div>
   </React.Fragment>
  )
  }

export default ClickOperation
