export enum CurrentVerbAction {
  MarkVerbCorrect = "MARK_VERB_CORRECT",
  MarkVerbIncorrect = "MARK_VERB_INCORRECT",
  MarkPresentCorrect = "MARK_PRESENT_CORRECT",
  MarkPresentIncorrect = "MARK_PRESENT_INCORRECT",
  MarkPastCorrect = "MARK_PAST_CORRECT",
  MarkPastIncorrect = "MARK_PAST_INCORRECT",
  MarkPresentParticipleCorrect = "MARK_PRESENT_PARTICIPLE_CORRECT",
  MarkPresentParticipleIncorrect = "MARK_PRESENT_PARTICIPLE_INCORRECT",
  MarkPastParticipleCorrect = "MARK_PAST_PARTICIPLE_CORRECT",
  MarkPastParticipleIncorrect = "MARK_PAST_PARTICIPLE_INCORRECT",
  MarkMeaningCorrect = "MARK_MEANING_CORRECT",
  MarkMeaningIncorrect = "MARK_MEANING_INCORRECT",
  ShowAnswer = "SHOW_ANSWER",
  HideAnswer = "HIDE_ANSWER",
  SetCurrentVerb = "SET_CURRENT_VERB",
}

export enum ControlStateAction {
  IncrementCounter = "INCREMENT_COUNTER",
  DecrementCounter = "DECREMENT_COUNTER",
  SetTotalVerbsCount = "SET_TOTAL_VERBS_COUNT",
}
