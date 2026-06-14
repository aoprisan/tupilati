// Date despre comuna Tupilați, județul Neamț.
// Toate informațiile sunt culese din surse publice (vezi `sources`).

export interface Sat {
  nume: string;
  resedinta?: boolean;
  descriere: string;
}

export interface Recensamant {
  an: number;
  populatie: number;
}

export interface Monument {
  nume: string;
  datare: string;
  localitate: string;
  descriere: string;
}

export interface Procent {
  eticheta: string;
  procent: number;
}

export interface Persoana {
  rol: string;
  nume: string;
}

export interface Sursa {
  titlu: string;
  url: string;
}

export const identitate = {
  nume: "Comuna Tupilați",
  judet: "Neamț",
  regiune: "Moldova (Moldova de Vest)",
  tara: "România",
  tagline:
    "O comună moldovenească de pe terasa râului Moldova, la poarta legendarului Han al Ancuței.",
  descriere:
    "Tupilați este o comună din județul Neamț, situată în extremitatea estică a județului, " +
    "la granița cu județul Iași, pe terasa superioară a râului Moldova. Are o formă alungită " +
    "de la est la vest și este traversată de drumul național DN2 (E85), care leagă Romanul de Suceava.",
};

export const geografie = {
  suprafataKm2: 32.16,
  altitudineM: 254,
  coordonate: { lat: 47.0808, lon: 26.6444, text: "47°04′51″N 26°38′40″E" },
  distantaResedintaJudetKm: 40, // față de Piatra Neamț
  drum: "DN2 / E85 (Roman – Suceava)",
  vecinatate: "la granița cu județul Iași, pe râul Moldova",
};

export const sate: Sat[] = [
  {
    nume: "Tupilați",
    resedinta: true,
    descriere:
      "Satul de reședință al comunei. Aici se află primăria, Biserica „Sfinții Voievozi” (1811) " +
      "și ansamblul fostei curți boierești. Oborul de animale vii de la Tupilați era cândva renumit în toată Moldova.",
  },
  {
    nume: "Hanul Ancuței",
    descriere:
      "Sat organizat în 1968, în jurul vestitului han de pe drumul Romanului spre Suceava — " +
      "locul imortalizat de Mihail Sadoveanu în volumul „Hanu-Ancuței”.",
  },
  {
    nume: "Arămoaia",
    descriere:
      "Sat alipit comunei Tupilați în 1968, provenind din fosta comună Războieni.",
  },
  {
    nume: "Totoiești",
    descriere:
      "Sat alipit comunei Tupilați în 1968, provenind tot din fosta comună Războieni.",
  },
];

export const recensaminte: Recensamant[] = [
  { an: 1992, populatie: 2400 },
  { an: 2002, populatie: 2419 },
  { an: 2011, populatie: 2186 },
  { an: 2021, populatie: 1991 },
];

export const demografie = {
  populatieActuala: 1991, // recensământ 2021
  densitateLocKm2: 61.9,
  etnii: [{ eticheta: "Români", procent: 91.21 }] as Procent[],
  religie: [
    { eticheta: "Ortodocși", procent: 81.01 },
    { eticheta: "Romano-catolici", procent: 9.39 },
    { eticheta: "Fără religie declarată", procent: 8.64 },
  ] as Procent[],
};

export interface EvenimentIstoric {
  perioada: string;
  text: string;
}

export const istorie: EvenimentIstoric[] = [
  {
    perioada: "Sfârșitul sec. XIX",
    text:
      "Comuna făcea parte din plasa Moldova a județului Roman și era formată doar din satul de " +
      "reședință, cu 1.144 de locuitori. Avea o școală mixtă, două biserici ortodoxe și o biserică catolică.",
  },
  {
    perioada: "1950",
    text: "Comuna a fost arondată raionului Roman din regiunea Bacău.",
  },
  {
    perioada: "1968",
    text:
      "Comuna a trecut la județul Neamț. I-au fost alipite satele Arămoaia și Totoiești (din comuna " +
      "Războieni), iar Hanul Ancuței a fost organizat ca sat de sine stătător.",
  },
];

export const hanulAncutei = {
  titlu: "Hanul Ancuței",
  rezumat:
    "Cel mai cunoscut punct turistic al comunei: un han de popas aflat pe drumul european E85, " +
    "la circa 27 km de Roman, în drum spre Suceava (la aproximativ 350 km de București).",
  detalii: [
    "Hanul a fost construit la începutul secolului al XVIII-lea — o placă de la intrare indică anul 1718. " +
      "Aici își găseau odihna negustorii care călătoreau spre Roman, Suceava sau Iași.",
    "Locul a devenit celebru datorită lui Mihail Sadoveanu (1880–1961), care a plasat aici acțiunea " +
      "volumului „Hanu-Ancuței” (1928), alcătuit din nouă povestiri.",
    "După trecerea în proprietatea statului, hanul a fost reconstituit după planurile originale și " +
      "păstrează numeroase obiecte care reproduc atmosfera unui han tradițional din secolul al XVIII-lea. " +
      "Astăzi oferă circa 28 de locuri de cazare în 15 camere.",
  ],
};

export const monumente: Monument[] = [
  {
    nume: "Biserica „Sfinții Voievozi”",
    datare: "1811",
    localitate: "Tupilați",
    descriere:
      "Biserică ortodoxă din satul de reședință, cu adăugiri de la începutul secolului al XIX-lea, " +
      "inclusă pe lista monumentelor istorice din județul Neamț.",
  },
  {
    nume: "Ansamblul fostei curți boierești",
    datare: "sec. XVII–XIX",
    localitate: "Tupilați",
    descriere:
      "Ansamblu de curte boierească din satul Tupilați, monument istoric reprezentativ pentru " +
      "trecutul comunei.",
  },
  {
    nume: "Hanul Ancuței",
    datare: "început de sec. XVIII (1718)",
    localitate: "satul Hanul Ancuței",
    descriere:
      "Han de popas pe vechiul drum al Moldovei, monument istoric și reper cultural prin legătura " +
      "cu opera lui Mihail Sadoveanu.",
  },
];

export const economie = {
  rezumat:
    "Economia comunei este tradițional agricolă, specifică zonei rurale moldovenești.",
  detalii: [
    "Oborul de animale vii de la Tupilați era cândva renumit în toată Moldova.",
    "Activitatea predominantă rămâne agricultura și creșterea animalelor, alături de mici afaceri locale.",
  ],
};

export const administratie: Persoana[] = [
  { rol: "Primar", nume: "Petru Gherghel" },
  { rol: "Viceprimar", nume: "Costel Plugaru" },
  { rol: "Secretar general", nume: "Constantin Bostan" },
];

export const contact = {
  institutie: "Primăria Comunei Tupilați",
  judet: "județul Neamț, România",
  siteOficial: "https://www.primaria-tupilati.ro",
};

export const sources: Sursa[] = [
  {
    titlu: "Comuna Tupilați, Neamț — Wikipedia (ro)",
    url: "https://ro.wikipedia.org/wiki/Comuna_Tupila%C8%9Bi,_Neam%C8%9B",
  },
  {
    titlu: "Tupilați — Wikipedia (en)",
    url: "https://en.wikipedia.org/wiki/Tupila%C8%9Bi",
  },
  {
    titlu: "Hanul Ancuței — Wikipedia (ro)",
    url: "https://ro.wikipedia.org/wiki/Hanul_Ancu%C8%9Bei",
  },
  {
    titlu: "Primăria Tupilați — site oficial",
    url: "https://www.primaria-tupilati.ro",
  },
];
