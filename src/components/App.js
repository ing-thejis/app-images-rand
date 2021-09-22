
import './App.css';
import logo from '../img/logo.png'
import PiePagina from './PiePagina'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FaSearch } from 'react-icons/fa'

function App() {
  return (
    <div className="container">
      <div className="App">
        <Form>
          <img src={logo} alt="logo"/>
          <div className="search">
            <div className="icon"><FaSearch /></div>
            <Input className="searchBar" type="search" name="searchBox" id="searchBox" placeholder="Search Images..." />
          </div>
          <br />
          <Button color="success"><b>Search</b></Button> 
        </Form>
      
      </div>
      <PiePagina className="piepagina"/>
    </div>
  );
}

export default App;
