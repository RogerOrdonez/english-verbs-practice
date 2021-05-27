/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from "react";
import { verbs } from "./data/verbs";
import { ControlStateContext, CurrentVerbContext } from "./shared/context";
import { ControlStateAction, CurrentVerbAction } from "./shared/enums";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Play } from "./features/Play";
import { Config } from "./features/Config";

function App() {
  const { dispatch: controlStateDispatch } = useContext(ControlStateContext);
  const { dispatch: currentVerbDispatch } = useContext(CurrentVerbContext);
  useEffect(() => {
    controlStateDispatch({
      type: ControlStateAction.SetVerbsLenght,
      payload: verbs.length,
    });
    currentVerbDispatch({
      type: CurrentVerbAction.SetCurrentVerb,
      payload: {
        newCurrentVerb: verbs[0],
      },
    });
  }, [controlStateDispatch, currentVerbDispatch]);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/config">
            <Config />
          </Route>
          <Route path="/">
            <Play />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
