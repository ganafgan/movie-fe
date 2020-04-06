import React from 'react';
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ConnectionList from './pages/ConnectionList';
import ManageMovie from './pages/ManageMovie';
import ManageCategory from './pages/ManageCategory';
 

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
          <div>
            <Route exact path='/'>
              <Homepage/>
            </Route>

            <Route path='/managemovie'>
              <ManageMovie/>
            </Route>

            <Route path='/managecategory'>
              <ManageCategory/>
            </Route>

            <Route path='/connectionlist'>
              <ConnectionList/>
            </Route>
          </div>
      </div>
    )
  }
}

export default App;
