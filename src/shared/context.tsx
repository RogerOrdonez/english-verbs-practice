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
  selectedVerbsReducer,
} from "./reducers";
import { verbs } from "../data/verbs";
import { getSelectedVerbsOnStorage } from "../services/storageService";

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

const initialSelectedVerbs: VerbType[] =
  getSelectedVerbsOnStorage().length > 0 ? getSelectedVerbsOnStorage() : verbs;

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

const SelectedVerbsContext = createContext<{
  state: VerbType[];
  dispatch: Dispatch<SelectedVerbsActionType>;
}>({
  state: initialSelectedVerbs,
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
  const [selectedVerbs, selectedVerbsDispatch] = useReducer(
    selectedVerbsReducer,
    initialSelectedVerbs
  );

  return (
    <ControlStateContext.Provider
      value={{ state: controlState, dispatch: controlStateDispatch }}
    >
      <SelectedVerbsContext.Provider
        value={{ state: selectedVerbs, dispatch: selectedVerbsDispatch }}
      >
        <CurrentVerbContext.Provider
          value={{ state: currentVerb, dispatch: currentVerbDispatch }}
        >
          {children}
        </CurrentVerbContext.Provider>
      </SelectedVerbsContext.Provider>
    </ControlStateContext.Provider>
  );
};

export {
  CurrentVerbContext,
  ControlStateContext,
  SelectedVerbsContext,
  AppProvider,
};
