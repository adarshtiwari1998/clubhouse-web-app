
import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import {BrowserRouter, Route} from "react-router-dom";
import PhoneConfirmations from './pages/PhoneConfirmations';
import CodeConfirmations from './pages/CodeConfirmations';

function App() {
  return (
    <BrowserRouter>
    <PlanLayout>
     <Route exact path="/" component={Welcome} />
     <Route exact path="/invite" component={PhoneConfirmations} />
     <Route exact path="/code_confirm" component={CodeConfirmations} />
    </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
