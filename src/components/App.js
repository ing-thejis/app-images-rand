import React from 'react'

import './App.css';
import logo from '../img/logo.png'
import PiePagina from './PiePagina'

import { Button, Form, Input } from 'reactstrap';
import { Container } from 'reactstrap';
import { FaSearch } from 'react-icons/fa'

const clientID = "H3nbGe6qvZtX7RjMpbcfYsyQ305vxwFLlEtTodIO-mM"
const endpoint = "https://api.unsplash.com/search/photos"

class App extends React.Component {
  constructor() {
    super()
    this.query = "";
    this.trackQueryValue = this.trackQueryValue.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      images: []
    }
  }
  search(){
    fetch(`${endpoint}?query=${this.query}&client_id=${clientID}`)
    .then(response=>{
      return response.json()
    }).then(jsonResponse=>{
      console.log(jsonResponse);
      this.setState({
        images: jsonResponse.results
      })
    })
  }

  trackQueryValue(ev){
    this.query = ev.target.value;
  }

  images(){
    return this.state.images.map(image=>{
      return <img src={image.urls.thumb} key={image.id} alt="" />
    })
  }

  render(){
    return (
      <div className="container">
        <div className="App">
          <Form>
            <img src={logo} alt="logo"/>
            <div className="search">
              <div className="icon"><FaSearch /></div>
              <Input className="input" type="text" onChange={this.trackQueryValue} placeholder="  Search Images..." />
            </div>
            <br />
            <Button onClick={this.search} onKeyDown={this.search} color="success"><b>Search</b></Button> 
          </Form>
        
        </div>

        <Container>

              {this.images()}

        </Container>
  

        <PiePagina className="piepagina"/>
      </div>
    );
  }
}

export default App;
