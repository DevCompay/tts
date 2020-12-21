
import { BrowserRouter, Switch,Route } from "react-router-dom"
import Landing from './Landing'
import '../css/App.css'

function App() {
  return (
    <div className = "App container-fluid">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {Landing}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
