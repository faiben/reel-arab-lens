export interface MediaItem {
  id: string;
  title: string;
  type: 'TV' | 'Film';
  genre: string;
  year: number;
  description: string;
  portrayal: string;
  characters: Character[];
  imageUrl: string;
  rating: number;
  featured?: boolean;
  shaheen_category?: string;
}

export interface Character {
  name: string;
  actor: string;
  description: string;
  portrayal: string;
  stereotypical: boolean;
}

export const mediaData: MediaItem[] = [
  {
    id: '1',
    title: 'True Lies',
    type: 'Film',
    genre: 'Action',
    year: 1994,
    description: 'A secret agent balances his life as a spy with his familial responsibilities.',
    portrayal: 'Features Arab terrorists as one-dimensional villains, portraying them as fanatical, violent, and anti-American.',
    characters: [
      {
        name: 'Salim Abu Aziz',
        actor: 'Art Malik',
        description: 'Leader of the fictional terrorist group "Crimson Jihad"',
        portrayal: 'Portrayed as a violent fanatic with little depth beyond his desire to harm Americans.',
        stereotypical: true
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    rating: 2.0,
    shaheen_category: 'Villains',
    featured: true
  },
  {
    id: '2',
    title: 'The Siege',
    type: 'Film',
    genre: 'Thriller',
    year: 1998,
    description: 'After terrorist attacks in New York City, martial law is declared and tensions rise.',
    portrayal: 'While attempting to show some nuance by including positive Arab-American characters, the film still heavily leans on terrorist stereotypes.',
    characters: [
      {
        name: 'Frank Haddad',
        actor: 'Tony Shalhoub',
        description: 'Lebanese-American FBI agent who faces discrimination after martial law is declared.',
        portrayal: 'A more complex character who struggles with his identity as both Arab and American while serving his country.',
        stereotypical: false
      },
      {
        name: 'Samir Nazhde',
        actor: 'Sami Bouajila',
        description: 'Palestinian-American who becomes involved with terrorists.',
        portrayal: 'Initially presented as a positive character but eventually reinforces the "sleeper cell" stereotype.',
        stereotypical: true
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1466442929976-97f336a657be',
    rating: 2.5,
    shaheen_category: 'Mixed',
    featured: true
  },
  {
    id: '3',
    title: 'Lawrence of Arabia',
    type: 'Film',
    genre: 'Historical Drama',
    year: 1962,
    description: 'The story of T.E. Lawrence, the English officer who successfully united and led the diverse Arab tribes during World War I.',
    portrayal: 'Despite being praised as a classic, the film contains orientalist tropes and portrays Arabs as either noble savages or treacherous, while centering the white protagonist.',
    characters: [
      {
        name: 'Sherif Ali',
        actor: 'Omar Sharif',
        description: 'An educated tribal leader who allies with Lawrence.',
        portrayal: 'More nuanced than most portrayals but still feeds into the noble savage trope; dignified but exotic.',
        stereotypical: false
      },
      {
        name: 'Prince Faisal',
        actor: 'Alec Guinness',
        description: 'Historical figure who worked with Lawrence to lead the Arab Revolt.',
        portrayal: 'Problematically played by a non-Arab actor in brownface, though the character is portrayed with some dignity.',
        stereotypical: true
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
    rating: 3.0,
    shaheen_category: 'Orientalist',
    featured: false
  },
  {
    id: '4',
    title: 'Syriana',
    type: 'Film',
    genre: 'Political Thriller',
    year: 2005,
    description: 'A complex narrative about the global oil industry and its impact on various stakeholders.',
    portrayal: 'Makes some attempt at complexity in its portrayal of Arab characters, showing some as victims of geopolitical forces, though still relies on terrorist narratives.',
    characters: [
      {
        name: 'Prince Nasir Al-Subaai',
        actor: 'Alexander Siddig',
        description: 'Progressive Arab prince who wants to reform his country but is thwarted by American interests.',
        portrayal: 'Relatively nuanced portrayal of an educated Arab leader with progressive values.',
        stereotypical: false
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
    rating: 3.5,
    shaheen_category: 'Complex',
    featured: false
  },
  {
    id: '5',
    title: 'Aladdin',
    type: 'Film',
    genre: 'Animation',
    year: 1992,
    description: 'An animated tale about a street urchin who finds a magic lamp with a genie inside.',
    portrayal: 'Set in a fictional Arab land with problematic orientalist tropes, exaggerated accents, and cultural stereotyping, despite having a sympathetic Arab protagonist.',
    characters: [
      {
        name: 'Aladdin',
        actor: 'Scott Weinger/Brad Kane',
        description: 'The street urchin protagonist who finds a magic lamp.',
        portrayal: 'Heroic character but noticeably Americanized compared to other characters in the film.',
        stereotypical: false
      },
      {
        name: 'Merchant/Peddler',
        actor: 'Robin Williams',
        description: 'The opening character who introduces the story.',
        portrayal: 'Speaks with an exaggerated accent and embodies the stereotype of the deceitful Arab merchant.',
        stereotypical: true
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1466442929976-97f336a657be',
    rating: 2.5,
    shaheen_category: 'Caricature',
    featured: false
  },
  {
    id: '6',
    title: '24',
    type: 'TV',
    genre: 'Action-Thriller',
    year: 2001,
    description: 'An action series following counter-terrorist agent Jack Bauer as he tries to prevent attacks on America.',
    portrayal: 'Frequently cast Arabs and Muslims as terrorists, reinforcing negative stereotypes, especially in the post-9/11 seasons.',
    characters: [
      {
        name: 'Nadia Yassir',
        actor: 'Marisol Nichols',
        description: 'Intelligence analyst at CTU who faces discrimination and suspicion due to her Arab background.',
        portrayal: 'Despite being portrayed as competent, her character arc includes being suspected of treason based on her ethnicity.',
        stereotypical: true
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    rating: 2.0,
    shaheen_category: 'Villains',
    featured: true
  },
  {
    id: '7',
    title: 'Homeland',
    type: 'TV',
    genre: 'Drama',
    year: 2011,
    description: 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda.',
    portrayal: 'Perpetuates stereotypes about Arab and Muslim characters as inherently connected to terrorism, despite some attempts at complexity.',
    characters: [
      {
        name: 'Fara Sherazi',
        actor: 'Nazanin Boniadi',
        description: 'CIA analyst who faces discrimination at work due to her Muslim identity.',
        portrayal: 'A more nuanced character, though her story remains framed within the context of terrorism.',
        stereotypical: false
      },
      {
        name: 'Abu Nazir',
        actor: 'Navid Negahban',
        description: 'Terrorist mastermind and main antagonist in early seasons.',
        portrayal: 'One-dimensional villain who embodies post-9/11 fears about terrorism.',
        stereotypical: true
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    rating: 2.5,
    shaheen_category: 'Terrorist',
    featured: true
  },
  {
    id: '8',
    title: 'Three Kings',
    type: 'Film',
    genre: 'War',
    year: 1999,
    description: 'Set during the aftermath of the Gulf War, American soldiers attempt to steal gold but become involved with Iraqi rebels.',
    portrayal: 'Offers a more complex portrayal of Arabs than typical Hollywood films, showing Iraqi civilians as victims of both Saddam Hussein and American policy.',
    characters: [
      {
        name: 'Amir Abdullah',
        actor: 'Cliff Curtis',
        description: 'Iraqi rebel leader fighting against Saddam Hussein\'s regime.',
        portrayal: 'Depicted with dignity and humanity, challenging stereotypes.',
        stereotypical: false
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
    rating: 4.0,
    shaheen_category: 'Complex',
    featured: false
  },
  {
    id: '9',
    title: 'Ramy',
    type: 'TV',
    genre: 'Comedy-Drama',
    year: 2019,
    description: 'A first-generation Egyptian-American explores his dual identity.',
    portrayal: 'Created by and starring Arab-American comedian Ramy Youssef, offers an authentic portrayal of Arab-American life that confronts stereotypes while showing complexity within the community.',
    characters: [
      {
        name: 'Ramy Hassan',
        actor: 'Ramy Youssef',
        description: 'First-generation Egyptian-American Muslim trying to balance religious values with modern American life.',
        portrayal: 'A complex, flawed character who defies stereotypes while dealing with real struggles of identity.',
        stereotypical: false
      },
      {
        name: 'Sheikh Ali Malik',
        actor: 'Mahershala Ali',
        description: 'Sufi sheikh who becomes Ramy\'s spiritual mentor.',
        portrayal: 'Dignified, wise but human character who challenges stereotypes of Muslim religious leaders.',
        stereotypical: false
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1466442929976-97f336a657be',
    rating: 4.8,
    shaheen_category: 'Authentic',
    featured: true
  }
];

export const getMediaByType = (type: 'TV' | 'Film'): MediaItem[] => {
  return mediaData.filter(item => item.type === type);
};

export const getMediaByGenre = (genre: string): MediaItem[] => {
  return mediaData.filter(item => item.genre === genre);
};

export const getFeaturedMedia = (): MediaItem[] => {
  return mediaData.filter(item => item.featured);
};

export const getGenres = (type?: 'TV' | 'Film'): string[] => {
  if (type) {
    return [...new Set(mediaData.filter(item => item.type === type).map(item => item.genre))];
  }
  return [...new Set(mediaData.map(item => item.genre))];
};

export const getShaheenCategories = (): string[] => {
  return [...new Set(mediaData.filter(item => item.shaheen_category).map(item => item.shaheen_category as string))];
};
