import type { Translations, LanguageMeta } from '$src/types/Language';

const translations: Translations = {
  // English
  en: {
    // Page titles
    'pages.home': 'Home',
    'pages.blog': 'Blog',
    'pages.about': 'About',
    'pages.contact': 'Contact',
    'pages.projects': 'Projects',

    // Blog page text
    'blog.sources-menu': 'Sources',
    'blog.sources-all': 'Select All',
    'blog.sources-none': 'Clear Checked',
    'blog.read-more': 'Read more',
    'blog.time-days-ago': 'days ago',
    'blog.time-years-ago': 'years ago',
    'blog.post-hover.read': 'Read',
    'blog.post-hover.from': 'From',
    'blog.search.showing': 'Showing {{count}} results for "{{query}}"',
    'blog.search.clear': 'Clear',
    'blog.results.none': 'No Results',
    'blog.results.none-1': 'There were no results returned.',
    'blog.results.none-2':
      'Try selecting more feeds in the dropdown, or broadening your search term',
    'blog.error': 'Oh no, something real bad happened',

    // About page text
    'about.text': '',
    'about.experience': '',

    // Contact page text
    'contact.connect': 'Lets Connect',
    'contact.email': 'Send a Message',
    'contact.keys': 'Keys',
  },
  // French
  fr: {
    // Titres des pages
    'pages.home': 'Accueil',
    'pages.blog': 'Blog',
    'pages.about': 'À propos',
    'pages.contact': 'Contact',
    'pages.projects': 'Projets',

    // Texte de la page Blog
    'blog.sources-menu': 'Sources',
    'blog.sources-all': 'Tout sélectionner',
    'blog.sources-none': 'Tout déselectionner',
    'blog.read-more': 'Lire la suite',
    'blog.time-days-ago': 'jours passés',
    'blog.time-years-ago': 'ans passés',
    'blog.post-hover.read': 'Lire',
    'blog.post-hover.from': 'De',
    'blog.search.showing': 'Affichage de {{count}} résultats pour "{{query}}"',
    'blog.search.clear': 'Effacer',
    'blog.results.none': 'Aucun résultat',
    'blog.results.none-1': "Aucun résultat n'a été trouvé.",
    'blog.results.none-2':
      'Essayez de sélectionner plus de flux dans le menu déroulant, ou élargissez votre terme de recherche',
    'blog.error': 'Oh non, quelque chose de vraiment mauvais est arrivé',

    // Texte de la page de contact
    'contact.connect' : 'Connectons-nous',
    'contact.email' : 'Envoyer un message',
    'contact.keys' : 'Clés',
  },
  // German
  de: {
    // Seitentitel
    'pages.home': 'Startseite',
    'pages.blog': 'Blog',
    'pages.about': 'Über uns',
    'pages.contact': 'Kontakt',
    'pages.projects': 'Projekte',

    // Text auf der Blogseite
    'blog.sources-menu': 'Quellen',
    'blog.sources-all': 'Alle auswählen',
    'blog.sources-none': 'Auswahl aufheben',
    'blog.read-more': 'Mehr lesen',
    'blog.time-days-ago': 'Tag(e) zuvor',
    'blog.time-years-ago': 'Jahr(e) zuvor',
    'blog.post-hover.read': 'Lesen',
    'blog.post-hover.from': 'Von',
    'blog.search.showing': 'Zeige {{count}} Ergebnisse für "{{query}}"',
    'blog.search.clear': 'Löschen',
    'blog.results.none': 'Keine Ergebnisse',
    'blog.results.none-1': 'Es wurden keine Ergebnisse zurückgegeben.',
    'blog.results.none-2':
      'Versuchen Sie, mehr Feeds im Dropdown-Menü auszuwählen oder Ihren Suchbegriff zu erweitern.',
    'blog.error': 'Oh nein, etwas ist wirklich schiefgelaufen',

    // Text der Kontaktseite
    'contact.connect': "Let's Connect",
    'contact.email': 'Eine Nachricht senden',
    'contact.keys': 'Schlüssel',
  },
  // Polish
  pl: {
    // Tytuły stron
    'pages.home': 'Strona główna',
    'pages.blog': 'Blog',
    'pages.about': 'O nas',
    'pages.contact': 'Kontakt',
    'pages.projects': 'Projekty',

    // Tekst na stronie Blog
    'blog.sources-menu': 'Źródła',
    'blog.sources-all': 'Zaznacz wszystko',
    'blog.sources-none': 'Wyczyść zaznaczenie',
    'blog.read-more': 'Czytaj więcej',
    'blog.time-days-ago': 'dni temu',
    'blog.time-years-ago': 'lat temu',
    'blog.post-hover.read': 'Czytaj',
    'blog.post-hover.from': 'Od',
    'blog.search.showing': 'Wyświetlanie {{count}} wyników dla "{{query}}"',
    'blog.search.clear': 'Wyczyść',
    'blog.results.none': 'Brak wyników',
    'blog.results.none-1': 'Nie zwrócono żadnych wyników.',
    'blog.results.none-2':
      'Spróbuj wybrać więcej kanałów w rozwijanym menu lub poszerzyć swoje słowo wyszukiwania',
    'blog.error': 'O nie, coś naprawdę złego się stało',

    // Tekst strony kontaktowej
    'contact.connect': 'Połączmy się',
    'contact.email': 'Wyślij wiadomość',
    'contact.keys': 'Klucze',
  },
  // Dutch
  nl: {
    // Paginatitels
    'pages.home': 'Home',
    'pages.blog': 'Blog',
    'pages.about': 'Over ons',
    'pages.contact': 'Contact',
    'pages.projects': 'Projecten',

    // Tekst op de blogpagina
    'blog.sources-menu': 'Bronnen',
    'blog.sources-all': 'Alles selecteren',
    'blog.sources-none': 'Selectie wissen',
    'blog.read-more': 'Lees meer',
    'blog.time-days-ago': 'dagen geleden',
    'blog.time-years-ago': 'jaar geleden',
    'blog.post-hover.read': 'Lezen',
    'blog.post-hover.from': 'Van',
    'blog.search.showing': 'Toont {{count}} resultaten voor "{{query}}"',
    'blog.search.clear': 'Wissen',
    'blog.results.none': 'Geen resultaten',
    'blog.results.none-1': 'Er zijn geen resultaten geretourneerd.',
    'blog.results.none-2':
      'Probeer meer feeds te selecteren in het dropdownmenu of verbreed uw zoekterm',
    'blog.error': 'O nee, er is iets heel ergs gebeurd',

    // Contactpaginatekst
    'contact.connect': 'Laten we verbinding maken',
    'contact.email': 'Verstuur een bericht',
    'contact.keys': 'Sleutels',
  },
  // Romanian
  ro: {
    // Titlurile paginilor
    'pages.home': 'Acasă',
    'pages.blog': 'Blog',
    'pages.about': 'Despre',
    'pages.contact': 'Contact',
    'pages.projects': 'Proiecte',

    // Text pe pagina Blog
    'blog.sources-menu': 'Surse',
    'blog.sources-all': 'Selectează tot',
    'blog.sources-none': 'Deselectează tot',
    'blog.read-more': 'Citește mai mult',
    'blog.time-days-ago': 'zile în urmă',
    'blog.time-years-ago': 'ani în urmă',
    'blog.post-hover.read': 'Citește',
    'blog.post-hover.from': 'De la',
    'blog.search.showing': 'Se afișează {{count}} rezultate pentru "{{query}}"',
    'blog.search.clear': 'Șterge',
    'blog.results.none': 'Niciun rezultat',
    'blog.results.none-1': 'Nu au fost returnate rezultate.',
    'blog.results.none-2':
      'Încearcă să selectezi mai multe surse în meniul derulant sau să îți extinzi termenul de căutare',
    'blog.error': 'O, nu, ceva rău s-a întâmplat',

    // Textul paginii de contact
    'contact.connect': 'Permitem să ne conectăm',
    'contact.email': 'Trimite un mesaj',
    'contact.keys': 'Chei',
  },
  // Russian
  ru: {
    // Заголовки страниц
    'pages.home': 'Главная',
    'pages.blog': 'Блог',
    'pages.about': 'О нас',
    'pages.contact': 'Контакты',
    'pages.projects': 'Проекты',

    // Текст на странице блога
    'blog.sources-menu': 'Источники',
    'blog.sources-all': 'Выбрать все',
    'blog.sources-none': 'Снять выделение',
    'blog.read-more': 'Читать далее',
    'blog.time-days-ago': 'дней назад',
    'blog.time-years-ago': 'лет назад',
    'blog.post-hover.read': 'Читать',
    'blog.post-hover.from': 'От',
    'blog.search.showing': 'Показано {{count}} результатов для "{{query}}"',
    'blog.search.clear': 'Очистить',
    'blog.results.none': 'Нет результатов',
    'blog.results.none-1': 'Результаты не найдены.',
    'blog.results.none-2':
      'Попробуйте выбрать больше источников в выпадающем меню или расширить ваш поисковый запрос',
    'blog.error': 'О нет, что-то пошло не так',

    // Текст страницы контактов
    'contact.connect': 'Давайте соединимся',
    'contact.email': 'Отправить сообщение',
    'contact.keys': 'Ключи',
  },
  // Spanish
  es: {
    // Títulos de las páginas
    'pages.home': 'Inicio',
    'pages.blog': 'Blog',
    'pages.about': 'Acerca de',
    'pages.contact': 'Contacto',
    'pages.projects': 'Proyectos',

    // Texto de la página del blog
    'blog.sources-menu': 'Fuentes',
    'blog.sources-all': 'Seleccionar todo',
    'blog.sources-none': 'Limpiar selección',
    'blog.read-more': 'Leer más',
    'blog.time-days-ago': 'días atrás',
    'blog.time-years-ago': 'años atrás',
    'blog.post-hover.read': 'Leer',
    'blog.post-hover.from': 'De',
    'blog.search.showing': 'Mostrando {{count}} resultados para "{{query}}"',
    'blog.search.clear': 'Limpiar',
    'blog.results.none': 'Sin resultados',
    'blog.results.none-1': 'No se encontraron resultados.',
    'blog.results.none-2':
      'Intente seleccionar más fuentes en el menú desplegable o ampliar su término de búsqueda',
    'blog.error': 'Oh no, algo realmente malo sucedió',

    // Texto de la página de contacto
    'contact.connect': 'Vamos a conectarnos',
    'contacto.email': 'Enviar un mensaje',
    'contacto.keys': 'Claves',
  }, 
  // Italian
  it: {
    // Titoli delle pagine
    'pages.home': 'Home',
    'pages.blog': 'Blog',
    'pages.about': 'Chi siamo',
    'pages.contact': 'Contatti',
    'pages.projects': 'Progetti',

    // Testo della pagina del blog
    'blog.sources-menu': 'Fonti',
    'blog.sources-all': 'Seleziona tutto',
    'blog.sources-none': 'Deseleziona tutto',
    'blog.read-more': 'Leggi di più',
    'blog.time-days-ago': 'giorni fa',
    'blog.time-years-ago': 'anni fa',
    'blog.post-hover.read': 'Leggi',
    'blog.post-hover.from': 'Da',
    'blog.search.showing': 'Mostrando {{count}} risultati per "{{query}}"',
    'blog.search.clear': 'Cancella',
    'blog.results.none': 'Nessun risultato',
    'blog.results.none-1': 'Nessun risultato restituito.',
    'blog.results.none-2':
      'Prova a selezionare più feed nel menu a discesa o ad allargare il termine di ricerca',
    'blog.error': 'Oh no, è successo qualcosa di veramente brutto',

    // Testo della pagina dei contatti
    'contact.connect': 'Connettiamoci',
    'contact.email': 'Invia un messaggio',
    'contact.keys': 'Chiavi',
  },
  // Swedish
  se: {
    // Sidtitlar
    'pages.home': 'Hem',
    'pages.blog': 'Blogg',
    'pages.about': 'Om oss',
    'pages.contact': 'Kontakt',
    'pages.projects': 'Projekt',

    // Text på bloggsidan
    'blog.sources-menu': 'Källor',
    'blog.sources-all': 'Välj alla',
    'blog.sources-none': 'Rensa markerade',
    'blog.read-more': 'Läs mer',
    'blog.time-days-ago': 'dagar sedan',
    'blog.time-years-ago': 'år sedan',
    'blog.post-hover.read': 'Läs',
    'blog.post-hover.from': 'Från',
    'blog.search.showing': 'Visar {{count}} resultat för "{{query}}"',
    'blog.search.clear': 'Rensa',
    'blog.results.none': 'Inga resultat',
    'blog.results.none-1': 'Inga resultat returnerades.',
    'blog.results.none-2':
      'Försök att välja fler flöden i rullgardinsmenyn eller bredda din sökterm',
    'blog.error': 'Åh nej, något riktigt dåligt hände',

    // Text på kontaktsidan
    'contact.connect': 'Låter ansluta',
    'contact.email': 'Skicka ett meddelande',
    'contact.keys': 'Nycklar',
  },
  // Norwegian
  no: {
    // Sidetitler
    'pages.home': 'Hjem',
    'pages.blog': 'Blogg',
    'pages.about': 'Om oss',
    'pages.contact': 'Kontakt',
    'pages.projects': 'Prosjekter',

    // Tekst på bloggsiden
    'blog.sources-menu': 'Kilder',
    'blog.sources-all': 'Velg alle',
    'blog.sources-none': 'Fjern merking',
    'blog.read-more': 'Les mer',
    'blog.time-days-ago': 'dager siden',
    'blog.time-years-ago': 'år siden',
    'blog.post-hover.read': 'Les',
    'blog.post-hover.from': 'Fra',
    'blog.search.showing': 'Viser {{count}} resultater for "{{query}}"',
    'blog.search.clear': 'Tøm',
    'blog.results.none': 'Ingen resultater',
    'blog.results.none-1': 'Ingen resultater ble returnert.',
    'blog.results.none-2':
      'Prøv å velge flere kilder i rullegardinmenyen, eller utvid søket ditt',
    'blog.error': 'Å nei, noe virkelig dårlig skjedde',

    // Kontaktsidetekst
    'contact.connect': 'La oss koble til',
    'contact.email': 'Send en melding',
    'contact.keys': 'Nøkler',
  }, 
};

export const supportedLanguages: LanguageMeta[] = [
  {
    name: 'English',
    flag: '🇬🇧',
    code: 'en',
    text: translations.en,
  },
  {
    name: 'Français',
    flag: '🇫🇷',
    code: 'fr',
    text: translations.fr,
  },
  {
    name: 'Deutsch',
    flag: '🇩🇪',
    code: 'de',
    text: translations.de,
  },
  {
    name: 'Русский',
    flag: '🇷🇺',
    code: 'ru',
    text: translations.ru,
  },
  {
    name: 'Română',
    flag: '🇷🇴',
    code: 'ro',
    text: translations.ro,
  },
  {
    name: 'Español',
    flag: '🇪🇸',
    code: 'es',
    text: translations.es,
  },
  {
    name: 'Italiano',
    flag: '🇮🇹',
    code: 'it',
    text: translations.it,
  },
  {
    name: 'Svenska',
    flag: '🇸🇪',
    code: 'se',
    text: translations.se,
  },
  {
    name: 'Norsk',
    flag: '🇳🇴',
    code: 'no',
    text: translations.no,
  },
  {
    name: 'Nederlands',
    flag: '🇳🇱',
    code: 'nl',
    text: translations.nl,
  },
  {
    name: 'Polski',
    flag: '🇵🇱',
    code: 'pl',
    text: translations.pl,
  },
];

export default translations;