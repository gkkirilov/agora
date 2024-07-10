export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        header: {
          title: 'Agora - The election game'
        },
        index: {
          title: 'Get elected today!',
          subtitle: 'Flashy text to show the player this game means BUSINESS',
          playButton: 'PLAY',
          learnMore: 'Learn more'
        },
        intro: {
          title: 'Let’s get started!',
          description: 'First, mind taking a quick survey? It’ll really help us out!',
          yes: 'YES, I’D LOVE TO!',
          no: 'NO, I WANNA PLAY...'
        },
        compass: {
          title: 'Political Compass!',
          continue: 'Continue',
          welldone: 'Well done!',
          youare: 'You are',
          getstarted: 'Get Started',
          authoritarian:  'Authoritarian',
          conservative:  'Conservative',
          centrist:  'Centrist',
          liberal:  'Liberal',
          libertarian:  'Libertarian',
          questions1: '1.5',
        },
        languages: {
          en: 'English',
          sk: 'Slovak',
          cs: 'Czech',
          de: 'German'
        }
      },
      sk: {
        header: {
          title: 'Agora - Volebná hra'
        },
        index: {
          title: 'Buďte zvolení dnes!',
          subtitle: 'Pútavý text, ktorý ukáže hráčovi, že táto hra je VÁŽNA',
          playButton: 'HRAŤ',
          learnMore: 'Dozvedieť sa viac'
        },
        languages: {
          en: 'English',
          sk: 'Slovak',
          cs: 'Czech',
          de: 'German'
        }
      },
      cs: {
        header: {
          title: 'Agora - Volební hra'
        },
        index: {
          title: 'Buďte zvoleni dnes!',
          subtitle: 'Poutavý text, který ukáže hráči, že tato hra je VÁŽNÁ',
          playButton: 'HRÁT',
          learnMore: 'Dozvědět se více'
        },
        languages: {
          en: 'English',
          sk: 'Slovak',
          cs: 'Czech',
          de: 'German'
        }
      },
      de: {
        header: {
          title: 'Agora - Das Wahlspiel'
        },
        index: {
          title: 'Lassen Sie sich heute wählen!',
          subtitle: 'Auffälliger Text, um dem Spieler zu zeigen, dass dieses Spiel ERNST gemeint ist',
          playButton: 'SPIELEN',
          learnMore: 'Mehr erfahren'
        },
        languages: {
          en: 'English',
          sk: 'Slovak',
          cs: 'Czech',
          de: 'German'
        }
      }
    }
  }))
