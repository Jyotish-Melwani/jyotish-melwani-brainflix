
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import MainPage from './Components/Page/MainPage';
import Upload from './Components/Upload/Upload';
import { Component } from 'react'
import './Styles/App.scss'

class App extends Component {


  defaultPrevent = (event) => {
    event.preventDefault()
  }


  render() {

    return (
      <BrowserRouter>
        <Navbar defaultPrevent={this.defaultPrevent} />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/upload" component={Upload} />
          <Route path="/videos/:id" component={MainPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;