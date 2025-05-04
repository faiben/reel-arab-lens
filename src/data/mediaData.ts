
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
    title: 'Homeland',
    type: 'TV',
    genre: 'Drama',
    year: 2011,
    description: 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil.',
    portrayal: 'Mixed portrayal with some nuanced characters but also relying on stereotypical terrorist narratives.',
    characters: [
      {
        name: 'Fara Sherazi',
        actor: 'Nazanin Boniadi',
        description: 'CIA analyst who faces discrimination at work due to her Muslim identity.',
        portrayal: 'More nuanced portrayal showing challenges of being a Muslim in post-9/11 America while working for the CIA.',
        stereotypical: false
      },
      {
        name: 'Abu Nazir',
        actor: 'Navid Negahban',
        description: 'Terrorist mastermind and main antagonist in early seasons.',
        portrayal: 'Reinforces terrorist stereotypes but given some depth regarding his motivations.',
        stereotypical: true
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    rating: 4.2,
    featured: true
  },
  {
    id: '2',
    title: 'Ramy',
    type: 'TV',
    genre: 'Comedy-Drama',
    year: 2019,
    description: 'A first-generation Egyptian-American who is on a spiritual journey in his politically-divided New Jersey neighborhood.',
    portrayal: 'Authentic and complex portrayal showing diversity within the Muslim community and challenging stereotypes while addressing real issues.',
    characters: [
      {
        name: 'Ramy Hassan',
        actor: 'Ramy Youssef',
        description: 'First-generation Egyptian-American Muslim trying to balance religious values with modern American life.',
        portrayal: 'Complex, flawed but sympathetic character who struggles with his identity and faith.',
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
    featured: true
  },
  {
    id: '3',
    title: 'Lawrence of Arabia',
    type: 'Film',
    genre: 'Historical Drama',
    year: 1962,
    description: 'The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I.',
    portrayal: 'Mixed portrayal with orientalist elements typical of its era but also showing Arab characters with agency and complexity.',
    characters: [
      {
        name: 'Sherif Ali',
        actor: 'Omar Sharif',
        description: 'Fictional character representing Arab tribal leaders who allies with Lawrence.',
        portrayal: 'Dignified and complex but at times exoticized through a Western lens.',
        stereotypical: false
      },
      {
        name: 'Prince Faisal',
        actor: 'Alec Guinness',
        description: 'Historical figure who worked with Lawrence to lead the Arab Revolt.',
        portrayal: 'Portrayed as wise and strategic but problematically played by a non-Arab actor in brownface.',
        stereotypical: true
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
    rating: 4.5,
    featured: false
  },
  {
    id: '4',
    title: 'The Reluctant Fundamentalist',
    type: 'Film',
    genre: 'Thriller',
    year: 2012,
    description: 'A young Pakistani man chasing corporate success on Wall Street finds himself embroiled in a conflict between his American Dream, a hostage crisis, and the enduring call of his family\'s homeland.',
    portrayal: 'Nuanced exploration of identity, prejudice, and radicalization that challenges simplistic narratives.',
    characters: [
      {
        name: 'Changez Khan',
        actor: 'Riz Ahmed',
        description: 'Pakistani financial analyst whose life and perspective change after 9/11.',
        portrayal: 'Complex protagonist whose experiences of discrimination and disillusionment are portrayed with depth.',
        stereotypical: false
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
    rating: 4.0,
    featured: false
  },
  {
    id: '5',
    title: 'Aladdin',
    type: 'Film',
    genre: 'Fantasy',
    year: 1992,
    description: 'A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.',
    portrayal: 'Problematic orientalist portrayal with stereotypical accents and culture, though with a sympathetic Arab protagonist.',
    characters: [
      {
        name: 'Aladdin',
        actor: 'Scott Weinger/Brad Kane',
        description: 'The street urchin protagonist who finds a magic lamp.',
        portrayal: 'Heroic character but Americanized compared to other characters.',
        stereotypical: false
      },
      {
        name: 'Merchant/Peddler',
        actor: 'Robin Williams',
        description: 'The opening character who introduces the story.',
        portrayal: 'Exaggerated stereotypical accent and mannerisms.',
        stereotypical: true
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1466442929976-97f336a657be',
    rating: 3.5,
    featured: false
  },
  {
    id: '6',
    title: 'Elite',
    type: 'TV',
    genre: 'Teen Drama',
    year: 2018,
    description: 'Three working-class teenagers enroll in an exclusive private school in Spain, leading to a clash between them and the wealthy students.',
    portrayal: 'Positive representation of a Muslim character who deals with issues of identity, religion, and sexuality.',
    characters: [
      {
        name: 'Nadia Shanaa',
        actor: 'Mina El Hammani',
        description: 'Palestinian-born Muslim student who excels academically while dealing with discrimination.',
        portrayal: 'Complex character who navigates multiple identities while challenging stereotypes.',
        stereotypical: false
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    rating: 4.0,
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
