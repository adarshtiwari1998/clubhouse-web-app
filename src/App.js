
import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PhoneConfirmations from './pages/PhoneConfirmations';
import CodeConfirmations from './pages/CodeConfirmations';
import AllowNotifications from './pages/AllowNotifications';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Route exact path={["/", "/invite", "/get_username", "/code_confirm", "/allow_notifications"]} >
     <PlanLayout>
     <Switch>
     <Route exact path="/" component={Welcome} />
     <Route exact path="/invite" component={PhoneConfirmations} />
     <Route exact path="/code_confirm" component={CodeConfirmations} />
     <Route exact path="/allow_notifications" component={AllowNotifications} />
     </Switch>
    </PlanLayout>
    </Route>
    <Route exact path={["/home"]} >
      <AppLayout>
        <Switch>
          {/* there are multiple ways to passing a components */}
          {/* First ways */}
          {/* <Route exact path="/home" component={Home} /> */}
         {/* Second ways */}
          {/* we try this ways */}
          <Route exact path="/home" component={() => <Home />}></Route>
        </Switch>
      </AppLayout>
     </Route>
   </BrowserRouter>
  );
}

export default App;
