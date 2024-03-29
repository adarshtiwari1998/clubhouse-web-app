
import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PhoneConfirmations from './pages/PhoneConfirmations';
import CodeConfirmations from './pages/CodeConfirmations';
import AllowNotifications from './pages/AllowNotifications';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Activity from "./pages/Activity";

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
      <Route exact path={["/home", "/explore", "/profile", "/activity"]} >
        <AppLayout>
          <Switch>
            {/* there are multiple ways to passing a components */}
            {/* First ways */}
            {/* <Route exact path="/home" component={Home} /> */}
            {/* Second ways */}
            {/* we try this ways */}
            <Route exact path="/home" component={() => <Home />}></Route>
            <Route exact path="/explore" component={() => <Explore />}></Route>
            <Route exact path="/profile" component={() => <Profile />}></Route>
            <Route exact path="/activity" component={() => <Activity />}></Route>
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
