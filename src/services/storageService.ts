import { VerbType } from "../shared/types";

export const setSelectedVerbsOnStorage = (selectedVerbs: VerbType[]) => {
  localStorage.setItem("selectedVerbs", JSON.stringify(selectedVerbs));
};

export const getSelectedVerbsOnStorage = (): VerbType[] => {
  return JSON.parse(localStorage.getItem("selectedVerbs") || "[]");
};
