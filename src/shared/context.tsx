import { createContext, Dispatch, useReducer } from "react";
import {
  ControlStateType,
  CurrentVerbType,
  InitialStateType,
  ControlStateActionType,
  CurrentVerbActionType,
} from "./types";
import { controlStateReducer, currentVerbReducer } from "./reducers";
import { ControlStateAction, CurrentVerbAction } from "./enums";
import { verbs } from "../data/verbs";

const initialCurrentVerb: CurrentVerbType = {
  verbTense: {
    verb: "",
    type: "",
    tenses: {
      infinitive: "",
      present: [""],
      past: [""],
      pastParticiple: [""],
      presentParticiple: [""],
      meaning: [""],
    },
  },
  isVerbCorrect: false,
  isVerbChecked: false,
  isPresentCorrect: false,
  isPastCorrect: false,
  isPastParticipleCorrect: false,
  isPresentParticipleCorrect: false,
  isMeaningCorrect: false,
  isShowingAnswer: false,
};

const initialControlState: ControlStateType = {
  counter: 0,
  verbsLength: 0,
};

const initialState = {
  currentVerb: initialCurrentVerb,
  controlState: initialControlState,
};

/* const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ControlStateActionType | CurrentVerbActionType>;
}>({
  state: initialState,
  dispatch: () => null,
}); */

const CurrentVerbContext = createContext<{
  state: CurrentVerbType;
  dispatch: Dispatch<CurrentVerbActionType>;
}>({
  state: initialCurrentVerb,
  dispatch: () => null,
});

const ControlStateContext = createContext<{
  state: ControlStateType;
  dispatch: Dispatch<ControlStateActionType>;
}>({
  state: initialControlState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  /* const [state, dispatch] = useReducer(mainReducer, initialState); */
  const [currentVerb, currentVerbDispatch] = useReducer(
    currentVerbReducer,
    initialCurrentVerb
  );
  const [controlState, controlStateDispatch] = useReducer(
    controlStateReducer,
    initialControlState
  );
  return (
    <ControlStateContext.Provider
      value={{ state: controlState, dispatch: controlStateDispatch }}
    >
      <CurrentVerbContext.Provider
        value={{ state: currentVerb, dispatch: currentVerbDispatch }}
      >
        {children}
      </CurrentVerbContext.Provider>
    </ControlStateContext.Provider>
  );
};

export { CurrentVerbContext, ControlStateContext, AppProvider };
