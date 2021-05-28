import { verbs } from "../data/verbs";
import { getSelectedVerbsOnStorage } from "../services/storageService";

export const getVerbs = () => {
  const selectedVerbs = getSelectedVerbsOnStorage().map(
    (selectedVerb) => selectedVerb.name
  );
  const allVerbs = verbs.map((verb) => {
    return {
      ...verb,
      isSelected: selectedVerbs.includes(verb.name),
    };
  });
  return allVerbs;
};
