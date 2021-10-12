import "./App.css";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import {
  useOvermindState,
  useOvermindAction,
} from "./components/overmind/index";

function App() {
  const state = useOvermindState();
  const action = useOvermindAction();

  const next = e => {
    e.preventDefault();
    if (state.currentStep === 3)
      return alert(
        `Your email is ${state.email} \n Your username is: ${state.username} \n and your password is ${state.password}`
      );
    action.updateStep(state.currentStep + 1);
  };

  const previous = e => {
    e.preventDefault();
    action.updateStep(state.currentStep - 1);
  };

  return (
    <div className="App">
      <h1 className="title">
        Login form using Overmind in React with Bootstrap
      </h1>
      <div className="form-container">
        <p className="step">Step {state.currentStep}</p>
        <form className="form">
          <Step1 />
          <Step2 />
          <Step3 />
          <button variant="success btn-block" onClick={e => next(e)}>
            {state.currentStep === 3 ? "SignUp" : "Next"}
          </button>
          {state.currentStep === 1 ? null : (
            <button onClick={e => previous(e)}>Previous</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
