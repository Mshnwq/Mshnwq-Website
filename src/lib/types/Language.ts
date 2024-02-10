export type Locale = 'en' | 'fr' | 'de' | 'es' | 'no' | 'se' | 'nl' | 'ro' | 'ru' | 'pl' | 'it'; 

export type Translations = {
  [key in Locale]: {
    [key: string]: string;
  };
};

export interface LanguageMeta {
  name: string;
  flag: string;
  code: Locale;
  text: Translations[Locale];
}