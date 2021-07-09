import { verbs } from "../data/verbs";
import { getSelectedVerbsOnStorage } from "../services/storageService";

export const getVerbs = () => {
  const selectedVerbs = getSelectedVerbsOnStorage().map(
    (selectedVerb) => selectedVerb.name
  );
  const allVerbs = verbs.map((verb) => {
    // eslint-disable-next-line no-console
    console.log(verb);
    return {
      ...verb,
      isSelected: selectedVerbs.includes(verb.name),
    };
  });
  return allVerbs;
};
