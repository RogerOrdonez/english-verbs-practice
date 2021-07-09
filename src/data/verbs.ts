import { VerbType } from "../shared/types";
import { OrderedMap } from "immutable";

export const verbs: OrderedMap<string, VerbType> = OrderedMap({
  Answer: {
    name: "Answer",
    type: "regular",
    tenses: {
      infinitive: "To Answer",
      present: ["Answer", "Answers"],
      past: ["Answered"],
      pastParticiple: ["Answered"],
      presentParticiple: ["Answering"],
      meaning: ["Responder", "Contestar"],
    },
  },
  Ask: {
    name: "Ask",
    type: "regular",
    tenses: {
      infinitive: "To Ask",
      present: ["Ask", "Asks"],
      past: ["Asked"],
      pastParticiple: ["Asked"],
      presentParticiple: ["Asking"],
      meaning: ["Preguntar", "Pedir"],
    },
  },
  Be: {
    name: "Be",
    type: "irregular",
    tenses: {
      infinitive: "To Be",
      present: ["Am", "Is", "Are"],
      past: ["Was", "Were"],
      pastParticiple: ["Been"],
      presentParticiple: ["Being"],
      meaning: ["Ser", "Estar"],
    },
  },
  Call: {
    name: "Call",
    type: "regular",
    tenses: {
      infinitive: "To Call",
      present: ["Call", "Calls"],
      past: ["Called"],
      pastParticiple: ["Called"],
      presentParticiple: ["Calling"],
      meaning: ["Llamar"],
    },
  },
  Clean: {
    name: "Clean",
    type: "regular",
    tenses: {
      infinitive: "To Clean",
      present: ["Clean", "Cleans"],
      past: ["Cleaned"],
      pastParticiple: ["Cleaned"],
      presentParticiple: ["Cleaning"],
      meaning: ["Limpiar"],
    },
  },
  Close: {
    name: "Close",
    type: "regular",
    tenses: {
      infinitive: "To Close",
      present: ["Close", "Closes"],
      past: ["Closed"],
      pastParticiple: ["Closed"],
      presentParticiple: ["Closing"],
      meaning: ["Cerrar"],
    },
  },
  Come: {
    name: "Come",
    type: "irregular",
    tenses: {
      infinitive: "To Come",
      present: ["Come", "Comes"],
      past: ["Came"],
      pastParticiple: ["Come"],
      presentParticiple: ["Coming"],
      meaning: ["Venir"],
    },
  },
  Copy: {
    name: "Copy",
    type: "regular",
    tenses: {
      infinitive: "To Copy",
      present: ["Copy", "Copies"],
      past: ["Copied"],
      pastParticiple: ["Copied"],
      presentParticiple: ["Copying"],
      meaning: ["Copiar"],
    },
  },
  Do: {
    name: "Do",
    type: "irregular",
    tenses: {
      infinitive: "To Do",
      present: ["Do", "Does"],
      past: ["Did"],
      pastParticiple: ["Done"],
      presentParticiple: ["Doing"],
      meaning: ["Hacer"],
    },
  },
  Draw: {
    name: "Draw",
    type: "irregular",
    tenses: {
      infinitive: "To Draw",
      present: ["Draw", "Draws"],
      past: ["Drew"],
      pastParticiple: ["Drawn"],
      presentParticiple: ["Drawing"],
      meaning: ["Dibujar"],
    },
  },
  Drink: {
    name: "Drink ",
    type: "irregular",
    tenses: {
      infinitive: "To Drink ",
      present: ["Drink ", "Drinks"],
      past: ["Drank"],
      pastParticiple: ["Drunk"],
      presentParticiple: ["Drinking"],
      meaning: ["Tomar", "Beber"],
    },
  },
  Eat: {
    name: "Eat",
    type: "Irregular",
    tenses: {
      infinitive: "To Eat",
      present: ["Eat", "Eats"],
      past: ["Ate"],
      pastParticiple: ["Eaten"],
      presentParticiple: ["Eating"],
      meaning: ["Comer", "Consumir"],
    },
  },
  Erase: {
    name: "Erase",
    type: "Regular",
    tenses: {
      infinitive: "To Erase",
      present: ["Erase", "Erases"],
      past: ["Erased"],
      pastParticiple: ["Erased"],
      presentParticiple: ["Erasing"],
      meaning: ["Borrar"],
    },
  },
  Explain: {
    name: "Explain",
    type: "Regular",
    tenses: {
      infinitive: "To Explain",
      present: ["Explain", "Explains"],
      past: ["Explained"],
      pastParticiple: ["Explained"],
      presentParticiple: ["Explaining"],
      meaning: ["Explicar"],
    },
  },
  Finish: {
    name: "Finish",
    type: "Regular",
    tenses: {
      infinitive: "To Finish",
      present: ["Finish", "Finishes"],
      past: ["Finished"],
      pastParticiple: ["Finished"],
      presentParticiple: ["Finishing"],
      meaning: ["Finalizar", "Terminar"],
    },
  },
  Forget: {
    name: "Forget",
    type: "Irregular",
    tenses: {
      infinitive: "To Forget",
      present: ["Forget", "Forgets"],
      past: ["Forgot"],
      pastParticiple: ["Forgotten"],
      presentParticiple: ["Forgetting"],
      meaning: ["Olvidar"],
    },
  },
  Get: {
    name: "Get",
    type: "Irregular",
    tenses: {
      infinitive: "To Get",
      present: ["Get", "Gets"],
      past: ["Got"],
      pastParticiple: ["Got", "Gotten"],
      presentParticiple: ["Getting"],
      meaning: ["Obtener", "Conseguir"],
    },
  },
  Give: {
    name: "Give",
    type: "Irregular",
    tenses: {
      infinitive: "To Give",
      present: ["Give", "Gives"],
      past: ["Gave"],
      pastParticiple: ["Given"],
      presentParticiple: ["Giving"],
      meaning: ["Dar"],
    },
  },
  Go: {
    name: "Go",
    type: "Irregular",
    tenses: {
      infinitive: "To Go",
      present: ["Go", "Goes"],
      past: ["Went"],
      pastParticiple: ["Gone"],
      presentParticiple: ["Going"],
      meaning: ["Ir"],
    },
  },
  Grow: {
    name: "Grow",
    type: "Irregular",
    tenses: {
      infinitive: "To Grow",
      present: ["Grow", "Grows"],
      past: ["Grew"],
      pastParticiple: ["Grown"],
      presentParticiple: ["Growing"],
      meaning: ["Crecer", "Desarrollar"],
    },
  },
  Have: {
    name: "Have",
    type: "Irregular",
    tenses: {
      infinitive: "To Have",
      present: ["Have", "Has"],
      past: ["Had"],
      pastParticiple: ["Had"],
      presentParticiple: ["Having"],
      meaning: ["Tener", "Haber"],
    },
  },
  Help: {
    name: "Help",
    type: "Regular",
    tenses: {
      infinitive: "To Help",
      present: ["Help", "Helps"],
      past: ["Helped"],
      pastParticiple: ["Helped"],
      presentParticiple: ["Helping"],
      meaning: ["Ayudar"],
    },
  },
  Know: {
    name: "Know",
    type: "Irregular",
    tenses: {
      infinitive: "To Know",
      present: ["Know", "Knows"],
      past: ["Knew"],
      pastParticiple: ["Known"],
      presentParticiple: ["Knowing"],
      meaning: ["Saber", "Conocer"],
    },
  },
  Laugh: {
    name: "Laugh",
    type: "Regular",
    tenses: {
      infinitive: "To Laugh",
      present: ["Laugh", "Laughs"],
      past: ["Laughed"],
      pastParticiple: ["Laughed"],
      presentParticiple: ["Laughing"],
      meaning: ["Reir"],
    },
  },
  Learn: {
    name: "Learn",
    type: "Regular",
    tenses: {
      infinitive: "To Learn",
      present: ["Learn", "Learns"],
      past: ["Learned"],
      pastParticiple: ["Learned"],
      presentParticiple: ["Learning"],
      meaning: ["Aprender"],
    },
  },
  Like: {
    name: "Like",
    type: "Regular",
    tenses: {
      infinitive: "To Like",
      present: ["Like", "Likes"],
      past: ["Liked"],
      pastParticiple: ["Liked"],
      presentParticiple: ["Liking"],
      meaning: ["Gustar"],
    },
  },
  Listen: {
    name: "Listen",
    type: "Regular",
    tenses: {
      infinitive: "To Listen",
      present: ["Listen", "Listens"],
      past: ["Listened"],
      pastParticiple: ["Listened"],
      presentParticiple: ["Listening"],
      meaning: ["Escuchar"],
    },
  },
  Live: {
    name: "Live",
    type: "Regular",
    tenses: {
      infinitive: "To Live",
      present: ["Live", "Lives"],
      past: ["Lived"],
      pastParticiple: ["Lived"],
      presentParticiple: ["Living"],
      meaning: ["Vivir"],
    },
  },
  Look: {
    name: "Look",
    type: "Regular",
    tenses: {
      infinitive: "To Look",
      present: ["Look", "Looks"],
      past: ["Looked"],
      pastParticiple: ["Looked"],
      presentParticiple: ["Looking"],
      meaning: ["Mirar"],
    },
  },
  Need: {
    name: "Need",
    type: "Regular",
    tenses: {
      infinitive: "To Need",
      present: ["Need", "Needs"],
      past: ["Needed"],
      pastParticiple: ["Needed"],
      presentParticiple: ["Needing"],
      meaning: ["Necesitar"],
    },
  },
  Open: {
    name: "Open",
    type: "Regular",
    tenses: {
      infinitive: "To Open",
      present: ["Open", "Opens"],
      past: ["Opened"],
      pastParticiple: ["Opended"],
      presentParticiple: ["Opening"],
      meaning: ["Abrir"],
    },
  },
  Play: {
    name: "Play",
    type: "Regular",
    tenses: {
      infinitive: "To Play",
      present: ["Play", "Plays"],
      past: ["Played"],
      pastParticiple: ["Played"],
      presentParticiple: ["Playing"],
      meaning: ["Jugar", "Reproducir", "Tocar"],
    },
  },
  Practice: {
    name: "Practice",
    type: "Regular",
    tenses: {
      infinitive: "To Practice",
      present: ["Practice", "Practices"],
      past: ["Practiced"],
      pastParticiple: ["Practiced"],
      presentParticiple: ["Practicing"],
      meaning: ["Practicar"],
    },
  },
  Pronounce: {
    name: "Pronounce",
    type: "Regular",
    tenses: {
      infinitive: "To Pronounce",
      present: ["Pronounce", "Pronounces"],
      past: ["Pronounced"],
      pastParticiple: ["Pronounced"],
      presentParticiple: ["Pronouncing"],
      meaning: ["Pronunciar"],
    },
  },
  Put: {
    name: "Put",
    type: "Irregular",
    tenses: {
      infinitive: "To Put",
      present: ["Put", "Puts"],
      past: ["Put"],
      pastParticiple: ["Put"],
      presentParticiple: ["Putting"],
      meaning: ["Poner", "Colocar", "Situar"],
    },
  },
  Rain: {
    name: "Rain",
    type: "Regular",
    tenses: {
      infinitive: "To Rain",
      present: ["Rain", "Rains"],
      past: ["Rained"],
      pastParticiple: ["Rained"],
      presentParticiple: ["Raining"],
      meaning: ["Llover"],
    },
  },
  Read: {
    name: "Read",
    type: "Irregular",
    tenses: {
      infinitive: "To Read",
      present: ["Read", "Reads"],
      past: ["Read"],
      pastParticiple: ["Read"],
      presentParticiple: ["Reading"],
      meaning: ["Leer"],
    },
  },
  Rent: {
    name: "Rent",
    type: "Regular",
    tenses: {
      infinitive: "To Rent",
      present: ["Rent", "Rents"],
      past: ["Rented"],
      pastParticiple: ["Rented"],
      presentParticiple: ["Renting"],
      meaning: ["Rentar"],
    },
  },
  Repeat: {
    name: "Repeat",
    type: "Regular",
    tenses: {
      infinitive: "To Repeat",
      present: ["Repeat", "Repeats"],
      past: ["Repeated"],
      pastParticiple: ["Repeated"],
      presentParticiple: ["Repeating"],
      meaning: ["Repetir"],
    },
  },
  Rest: {
    name: "Rest",
    type: "Regular",
    tenses: {
      infinitive: "To Rest",
      present: ["Rest", "Rests"],
      past: ["Rested"],
      pastParticiple: ["Rested"],
      presentParticiple: ["Resting"],
      meaning: ["Descansar"],
    },
  },
  Run: {
    name: "Run",
    type: "Irregular",
    tenses: {
      infinitive: "To Run",
      present: ["Run", "Runs"],
      past: ["Ran"],
      pastParticiple: ["Run"],
      presentParticiple: ["Running"],
      meaning: ["Correr"],
    },
  },
  Say: {
    name: "Say",
    type: "Irregular",
    tenses: {
      infinitive: "To Say",
      present: ["Say", "Says"],
      past: ["Said"],
      pastParticiple: ["Said"],
      presentParticiple: ["Saying"],
      meaning: ["Decir"],
    },
  },
  See: {
    name: "See",
    type: "Irregular",
    tenses: {
      infinitive: "To See",
      present: ["See", "Sees"],
      past: ["Saw"],
      pastParticiple: ["Seen"],
      presentParticiple: ["Seeing"],
      meaning: ["Ver"],
    },
  },
  Sing: {
    name: "Sing",
    type: "Irregular",
    tenses: {
      infinitive: "To Sing",
      present: ["Sing", "Sings"],
      past: ["Sang"],
      pastParticiple: ["Sung"],
      presentParticiple: ["Singing"],
      meaning: ["Cantar"],
    },
  },
  Sit: {
    name: "Sit",
    type: "Irregular",
    tenses: {
      infinitive: "To Sit",
      present: ["Sit", "Sits"],
      past: ["Sat"],
      pastParticiple: ["Sat"],
      presentParticiple: ["Sitting"],
      meaning: ["Sentarse"],
    },
  },
  Sleep: {
    name: "Sleep",
    type: "Irregular",
    tenses: {
      infinitive: "To Sleep",
      present: ["Sleep", "Sleeps"],
      past: ["Slept"],
      pastParticiple: ["Slept"],
      presentParticiple: ["Sleeping"],
      meaning: ["Dormir"],
    },
  },
  Speak: {
    name: "Speak",
    type: "Irregular",
    tenses: {
      infinitive: "To Speak",
      present: ["Speak", "Speaks"],
      past: ["Spoke"],
      pastParticiple: ["Spoken"],
      presentParticiple: ["Speaking"],
      meaning: ["Hablar"],
    },
  },
  Spend: {
    name: "Spend",
    type: "Irregular",
    tenses: {
      infinitive: "To Spend",
      present: ["Spend", "Spends"],
      past: ["Spended", "Spent"],
      pastParticiple: ["Spended", "Spent"],
      presentParticiple: ["Spending"],
      meaning: ["Gastar", "Pasar"],
    },
  },
  Stay: {
    name: "Stay",
    type: "Regular",
    tenses: {
      infinitive: "To Stay",
      present: ["Stay", "Stays"],
      past: ["Stayed"],
      pastParticiple: ["Stayed"],
      presentParticiple: ["Staying"],
      meaning: ["Quedar", "Permanecer"],
    },
  },
  Study: {
    name: "Study",
    type: "Regular",
    tenses: {
      infinitive: "To Study",
      present: ["Study", "Studies"],
      past: ["Studied"],
      pastParticiple: ["Studied"],
      presentParticiple: ["Studying"],
      meaning: ["Estudiar"],
    },
  },
  Swim: {
    name: "Swim",
    type: "Irregular",
    tenses: {
      infinitive: "To Swim",
      present: ["Swim", "Swims"],
      past: ["Swam"],
      pastParticiple: ["Swum"],
      presentParticiple: ["Swimming"],
      meaning: ["Nadar"],
    },
  },
  Take: {
    name: "Take",
    type: "Irregular",
    tenses: {
      infinitive: "To Take",
      present: ["Take", "Takes"],
      past: ["Took"],
      pastParticiple: ["Taken"],
      presentParticiple: ["Taking"],
      meaning: ["Tomar", "Agarrar"],
    },
  },
  Talk: {
    name: "Talk",
    type: "Regular",
    tenses: {
      infinitive: "To Talk",
      present: ["Talk", "Talks"],
      past: ["Talked"],
      pastParticiple: ["Talked"],
      presentParticiple: ["Talking"],
      meaning: ["Hablar", "Platicar"],
    },
  },
  Teach: {
    name: "Teach",
    type: "Irregular",
    tenses: {
      infinitive: "To Teach",
      present: ["Teach", "Teaches"],
      past: ["Taught"],
      pastParticiple: ["Taught"],
      presentParticiple: ["Teaching"],
      meaning: ["Enseñar"],
    },
  },
  Tell: {
    name: "Tell",
    type: "Irregular",
    tenses: {
      infinitive: "To Tell",
      present: ["Tell", "Tells"],
      past: ["Told"],
      pastParticiple: ["Told"],
      presentParticiple: ["Telling"],
      meaning: ["Decir", "Contar", "Narrar"],
    },
  },
  Think: {
    name: "Think",
    type: "Irregular",
    tenses: {
      infinitive: "To Think",
      present: ["Think", "Thinks"],
      past: ["Thought"],
      pastParticiple: ["Thought"],
      presentParticiple: ["Thinking"],
      meaning: ["Pensar", "Creer"],
    },
  },
  Throw: {
    name: "Throw",
    type: "Irregular",
    tenses: {
      infinitive: "To Throw",
      present: ["Throw", "Throws"],
      past: ["Threw"],
      pastParticiple: ["Thrown"],
      presentParticiple: ["Throwing"],
      meaning: ["Tirar", "Lanzar"],
    },
  },
  Travel: {
    name: "Travel",
    type: "Regular",
    tenses: {
      infinitive: "To Travel",
      present: ["Travel", "Travels"],
      past: ["Traveled"],
      pastParticiple: ["Traveled"],
      presentParticiple: ["Traveling"],
      meaning: ["Viajar"],
    },
  },
  Try: {
    name: "Try",
    type: "Regular",
    tenses: {
      infinitive: "To Try",
      present: ["Try", "Tries"],
      past: ["Tried"],
      pastParticiple: ["Tried"],
      presentParticiple: ["Trying"],
      meaning: ["Probar", "Tratar"],
    },
  },
  Understand: {
    name: "Understand",
    type: "Irregular",
    tenses: {
      infinitive: "To Understand",
      present: ["Understand", "Understands"],
      past: ["Understood"],
      pastParticiple: ["Understood"],
      presentParticiple: ["Understanding"],
      meaning: ["Entender", "Comprender"],
    },
  },
  Use: {
    name: "Use",
    type: "Regular",
    tenses: {
      infinitive: "To Use",
      present: ["Use", "Uses"],
      past: ["Used"],
      pastParticiple: ["Used"],
      presentParticiple: ["Using"],
      meaning: ["Usar", "Emplear"],
    },
  },
  Visit: {
    name: "Visit",
    type: "Regular",
    tenses: {
      infinitive: "To Visit",
      present: ["Visit", "Visits"],
      past: ["Visited"],
      pastParticiple: ["Visited"],
      presentParticiple: ["Visiting"],
      meaning: ["Visitar"],
    },
  },
  Wait: {
    name: "Wait",
    type: "Regular",
    tenses: {
      infinitive: "To Wait",
      present: ["Wait", "Waits"],
      past: ["Waited"],
      pastParticiple: ["Waited"],
      presentParticiple: ["Waiting"],
      meaning: ["Esperar"],
    },
  },
  Walk: {
    name: "Walk",
    type: "Regular",
    tenses: {
      infinitive: "To Walk",
      present: ["Walk", "Walks"],
      past: ["Walked"],
      pastParticiple: ["Walked"],
      presentParticiple: ["Walking"],
      meaning: ["Caminar"],
    },
  },
  Want: {
    name: "Want",
    type: "Regular",
    tenses: {
      infinitive: "To Want",
      present: ["Want", "Wants"],
      past: ["Wanted"],
      pastParticiple: ["Wanted"],
      presentParticiple: ["Wanting"],
      meaning: ["Querer", "Desear"],
    },
  },
  Wash: {
    name: "Wash",
    type: "Regular",
    tenses: {
      infinitive: "To Wash",
      present: ["Wash", "Washes"],
      past: ["Washed"],
      pastParticiple: ["Washed"],
      presentParticiple: ["Washing"],
      meaning: ["Lavar"],
    },
  },
  Watch: {
    name: "Watch",
    type: "Regular",
    tenses: {
      infinitive: "To Watch",
      present: ["Watch", "Watches"],
      past: ["Watched"],
      pastParticiple: ["Watched"],
      presentParticiple: ["Watching"],
      meaning: ["Mirar"],
    },
  },
  Work: {
    name: "Work",
    type: "Regular",
    tenses: {
      infinitive: "To Work",
      present: ["Work", "Works"],
      past: ["Worked"],
      pastParticiple: ["Worked"],
      presentParticiple: ["Working"],
      meaning: ["Trabajar"],
    },
  },
  Write: {
    name: "Write",
    type: "Irregular",
    tenses: {
      infinitive: "To Write",
      present: ["Write", "Writes"],
      past: ["Wrote"],
      pastParticiple: ["Written"],
      presentParticiple: ["Writing"],
      meaning: ["Escribir"],
    },
  },
});
