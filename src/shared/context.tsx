import { createContext, Dispatch, useReducer } from "react";
import {
  ControlStateType,
  CurrentVerbType,
  ControlStateActionType,
  CurrentVerbActionType,
  VerbType,
  SelectedVerbsActionType,
} from "./types";
import {
  controlStateReducer,
  currentVerbReducer,
  verbsReducer,
} from "./reducers";
import { getVerbs } from "../services/verbService";

const initialCurrentVerb: CurrentVerbType = {
  verbTense: {
    name: "",
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
  userInputVerb: {
    present: "",
    past: "",
    pastParticiple: "",
    presentParticiple: "",
    meaning: "",
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

const initialVerbs: VerbType[] = getVerbs();

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

const VerbsContext = createContext<{
  state: VerbType[];
  dispatch: Dispatch<SelectedVerbsActionType>;
}>({
  state: initialVerbs,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [currentVerb, currentVerbDispatch] = useReducer(
    currentVerbReducer,
    initialCurrentVerb
  );
  const [controlState, controlStateDispatch] = useReducer(
    controlStateReducer,
    initialControlState
  );
  const [verbs, verbsDispatch] = useReducer(verbsReducer, initialVerbs);

  return (
    <ControlStateContext.Provider
      value={{ state: controlState, dispatch: controlStateDispatch }}
    >
      <VerbsContext.Provider value={{ state: verbs, dispatch: verbsDispatch }}>
        <CurrentVerbContext.Provider
          value={{ state: currentVerb, dispatch: currentVerbDispatch }}
        >
          {children}
        </CurrentVerbContext.Provider>
      </VerbsContext.Provider>
    </ControlStateContext.Provider>
  );
};

export { CurrentVerbContext, ControlStateContext, VerbsContext, AppProvider };
