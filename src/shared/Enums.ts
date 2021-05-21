export enum CurrentVerbAction {
  markVerbCorrect = "MARK_VERB_CORRECT",
  markVerbIncorrect = "MARK_VERB_INCORRECT",
  markPresentCorrect = "MARK_PRESENT_CORRECT",
  markPresentIncorrect = "MARK_PRESENT_INCORRECT",
  markPastCorrect = "MARK_PAST_CORRECT",
  markPastIncorrect = "MARK_PAST_INCORRECT",
  markPresentParticipleCorrect = "MARK_PRESENT_PARTICIPLE_CORRECT",
  markPresentParticipleIncorrect = "MARK_PRESENT_PARTICIPLE_INCORRECT",
  markPastParticipleCorrect = "MARK_PAST_PARTICIPLE_CORRECT",
  markPastParticipleIncorrect = "MARK_PAST_PARTICIPLE_INCORRECT",
  markMeaningCorrect = "MARK_MEANING_CORRECT",
  markMeaningIncorrect = "MARK_MEANING_INCORRECT",
  showAnswer = "SHOW_ANSWER",
  hideAnswer = "HIDE_ANSWER",
}

export enum ControlStateAction {
  incrementCounter = "INCREMENT_COUNTER",
  decrementCounter = "DECREMENT_COUNTER",
  setTotalVerbsCount = "SET_TOTAL_VERBS_COUNT",
}
