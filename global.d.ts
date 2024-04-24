interface Language {
  code: string;
  name: string;
}

interface State {
  name: string;
}

interface Country {
  __typename: string;
  capital: string | null;
  currency: string;
  emoji: string;
  emojiU: string;
  languages: Language[];
  name: string;
  native: string;
  phone;
  states: State[];
}
