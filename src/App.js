import React,{useEffect} from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';

//import Contentboard from './app/Contentboard';
import routes from './app/routes'
import  Login  from './app/Login';
import ProtectedRoute from './app/ProtectedRoute';
import GuestRoute from './app/GuestRoute';


function App() {

  const customScript = ()=>{
    const script = document.createElement('script')
    script.src = 'assets/js/common-scripts.js'
    script.async = true
    document.body.appendChild(script)
  }

  useEffect(() => {
    customScript()
    // eslint-disable-next-line 
  }, [])

  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={Login}/> */}
        <GuestRoute exact path="/" component={Login}/>
        {
          routes.map((route, index) => (
              <ProtectedRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
          ))
        }
        <Route path="*" component={()=>"404 PAGE NOT FOUND"} />
      </Switch>
    </div>
    
  );
}

export default App;
