import { VerbType } from "../shared/types";

export const setVerbsOnStorage = (selectedVerbs: VerbType[]) => {
  localStorage.setItem("verbs", JSON.stringify(selectedVerbs));
};

export const getSelectedVerbsOnStorage = (): VerbType[] => {
  const selectedVerbs: VerbType[] = JSON.parse(
    localStorage.getItem("verbs") || "[]"
  );
  return selectedVerbs.filter((verb) => verb.isSelected);
};
