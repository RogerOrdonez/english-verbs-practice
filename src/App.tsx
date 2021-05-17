import { useState } from "react";
import { verbs } from "./verbs";
import tw from "twin.macro";

function App() {
  const [formValue, setFormValue] = useState({
    present: { label: "Present", value: "" },
    past: { label: "Past", value: "" },
    pastParticiple: { label: "Past Participle", value: "" },
    presentParticiple: { label: "Present Participle", value: "" },
    meaning: { label: "Meaning", value: "" },
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      present: { ...formValue.present, value: e.target.value },
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const verb = verbs[0];
  return (
    <div>
      <h1>English Verbs Practice</h1>
      <h5>{verb.tenses.infinitive}</h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="present">{formValue.present.label}</label>
        <input
          id="present"
          type="text"
          value={formValue.present.value}
          onChange={(e) => handleInputChange(e)}
        />
      </form>
      <div tw="antialiased flex justify-center items-center h-screen bg-purple-500">
        <div tw=" flex rounded-lg bg-white shadow-md overflow-hidden">
          <div tw="p-4 bg-purple-900 w-56">
            <div tw="text-purple-400 uppercase tracking-wider text-sm">
              course
            </div>
            <div tw="text-white text-2xl">Javascript Fondamentals</div>
            <div tw="text-purple-400 mt-12 text-sm">
              View all chapters{" "}
              <svg
                tw="inline w-2 h-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
              </svg>
            </div>
          </div>
          <div tw="p-4">
            <div tw="flex justify-between">
              <div tw="text-purple-400 uppercase tracking-wider text-sm">
                Chapter 4
              </div>
              <div tw="pt-1 pl-32">
                <div tw="bg-purple-200 rounded-full h-2 w-48 overflow-hidden">
                  <div tw="h-2 bg-purple-900 w-32"></div>
                </div>
                <div tw="text-xs text-purple-400 text-right uppercase">
                  6/9 chapters
                </div>
              </div>
            </div>
            <div tw="text-3xl text-purple-900">Callbacks & Closures</div>
            <div tw="flex justify-end pt-12">
              <button tw="px-12 py-2 bg-purple-900 rounded-full text-purple-100 text-lg shadow-md hover:bg-purple-800">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
