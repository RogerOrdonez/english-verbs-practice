import { VerbType } from "../shared/types";
import { OrderedMap } from "immutable";

export const setVerbsOnStorage = (
  selectedVerbs: OrderedMap<string, VerbType | undefined>
) => {
  localStorage.setItem("verbs", JSON.stringify(selectedVerbs));
};

export const getSelectedVerbsOnStorage = (): OrderedMap<string, VerbType> => {
  const selectedVerbs: OrderedMap<string, VerbType> = OrderedMap(
    JSON.parse(localStorage.getItem("verbs") || "{}")
  );
  return selectedVerbs.filter((verb) => verb.isSelected);
};
