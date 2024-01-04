import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component{
   
    render(){
      return(
        
        <div>
          <Router>
            <NavBar/>
            <Routes>
              <Route exact path = "/" element = {<News key = "general" category = "general"/>}/>
              <Route exact path = "/general" element = {<News key = "general" category = "general"/>}/>
              <Route exact path = "/business" element = {<News key = "business" category = "business"/>}/>
              <Route exact path = "/entertainment" element = {<News key = "entertainment" category = "entertainment"/>}/>
              <Route exact path = "/health" element = {<News key = "health" category = "health"/>}/>
              <Route exact path = "/science" element = {<News key = "science" category = "science"/>}/>
              <Route exact path = "/sports" element = {<News key = "sports" category = "sports"/>}/>
              <Route exact path = "/technology" element = {<News key = "technology" category = "technology"/>}/>
            </Routes>
          </Router>
        </div>

      )
    }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
