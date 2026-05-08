export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'harmon';
  timestamp: Date;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
}

export const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'What types of tours do you offer?',
    answer: 'We offer six amazing tour packages: Sigiriya & Dambulla Heritage Trail (2D), Kandy & Tea Country Escape (3D), Yala Wildlife Safari (2D), Galle Fort & Southern Coast (2D), Ella Nine Arch Bridge & Hiking (2D), and our Full Island Grand Tour (10D). Each showcases different aspects of Sri Lanka\'s culture, nature, and wildlife.',
    keywords: ['tours', 'types', 'packages', 'what', 'offer']
  },
  {
    id: '2',
    question: 'Tell me about Sigiriya & Dambulla Heritage Trail',
    answer: 'This 2-day tour at $120 takes you to the legendary Lion Rock fortress in Sigiriya and the ancient cave temples at Dambulla. You\'ll experience Pidurangala Rock, enjoy a village safari, and immerse yourself in heritage history. Perfect for history enthusiasts!',
    keywords: ['sigiriya', 'dambulla', 'heritage', 'rock', 'fortress']
  },
  {
    id: '3',
    question: 'What can I do in the Kandy & Tea Country Escape tour?',
    answer: 'This 3-day tour ($180) includes the sacred Temple of the Tooth in Kandy, tea factory visits, Gregory Lake exploration, and Kandyan cultural dance shows. It\'s ideal for experiencing both spiritual culture and natural beauty with misty tea plantations.',
    keywords: ['kandy', 'tea', 'temple', 'culture', 'escape']
  },
  {
    id: '4',
    question: 'Tell me about the Yala Wildlife Safari',
    answer: 'The Yala Wildlife Safari is a 2-day tour for $200 in Yala National Park, home to the world\'s highest density of leopards. You\'ll spot leopards and elephant herds, enjoy bird watching, and visit Crocodile Lagoon. A must for wildlife lovers!',
    keywords: ['yala', 'wildlife', 'safari', 'leopard', 'elephant']
  },
  {
    id: '5',
    question: 'What\'s included in the Galle Fort & Southern Coast tour?',
    answer: 'This 2-day tour ($150) covers the UNESCO-listed Galle Fort with its cobblestone streets, stilt fishermen experiences, turtle hatchery visits, and whale watching. Perfect for combining history, marine life, and beach relaxation.',
    keywords: ['galle', 'fort', 'coast', 'beach', 'southern']
  },
  {
    id: '6',
    question: 'Tell me about Ella Nine Arch Bridge & Hiking',
    answer: 'This 2-day adventure tour ($140) features hiking through emerald green hills to the iconic Nine Arch Bridge, summiting Little Adam\'s Peak for breathtaking views, visiting Ravana Falls, and enjoying scenic train rides. Great for adventure seekers!',
    keywords: ['ella', 'hiking', 'bridge', 'adventure', 'peak']
  },
  {
    id: '7',
    question: 'What is the Full Island Grand Tour?',
    answer: 'Our ultimate 10-day tour ($850) covers the entire island: Cultural Triangle, Kandy, Nuwara Eliya, Yala National Park, Mirissa beaches, and Galle. It\'s the perfect choice for first-time visitors who want to experience everything Sri Lanka has to offer.',
    keywords: ['grand', 'full', 'island', 'complete', '10']
  },
  {
    id: '8',
    question: 'What is the best time to visit Sri Lanka?',
    answer: 'Sri Lanka can be visited year-round, but the best time depends on the region. December to March is ideal for the west and south coasts (perfect for Galle and southern tours), while May to September is perfect for the east coast and cultural triangle (best for Sigiriya and Kandy tours).',
    keywords: ['time', 'visit', 'season', 'when', 'best']
  },
  {
    id: '9',
    question: 'How long should I stay in Sri Lanka?',
    answer: 'For a complete experience, we recommend 7-10 days with our Grand Tour. However, if you have limited time, our 2-day tours are perfect for focused experiences, and the 3-day Kandy tour offers a balanced option. Even 2-5 days can give you unforgettable memories!',
    keywords: ['duration', 'days', 'long', 'stay', 'how']
  },
  {
    id: '10',
    question: 'What should I pack for a Sri Lankan tour?',
    answer: 'Pack light, breathable clothing, sunscreen, insect repellent, and comfortable walking shoes (essential for hiking tours). Bring a hat or cap, and if visiting during monsoon, pack rain gear. Don\'t forget your passport, camera, and binoculars for wildlife tours!',
    keywords: ['pack', 'packing', 'bring', 'clothes', 'what']
  },
  {
    id: '11',
    question: 'Do you provide accommodation?',
    answer: 'Yes, we provide comfortable accommodations ranging from budget-friendly guesthouses to luxury resorts, all included in your tour package. Your choice of accommodation will be discussed during booking.',
    keywords: ['accommodation', 'hotel', 'stay', 'lodging', 'sleep']
  },
  {
    id: '12',
    question: 'Is transportation included in the tour?',
    answer: 'Yes, all transportation within Sri Lanka is included in every tour package. We provide comfortable vehicles and experienced drivers. For the Grand Tour, you\'ll also enjoy scenic train rides as part of the experience.',
    keywords: ['transportation', 'transport', 'vehicle', 'car', 'driving']
  },
  {
    id: '13',
    question: 'What about travel insurance?',
    answer: 'We recommend purchasing travel insurance before your trip. While not mandatory, it covers unexpected events like flight cancellations and medical emergencies, especially important for adventure activities like hiking in Ella.',
    keywords: ['insurance', 'travel', 'coverage', 'protection']
  },
  {
    id: '14',
    question: 'Can I customize my tour?',
    answer: 'Absolutely! We offer fully customizable tours. You can combine elements from different tours, adjust duration, choose specific activities, and select your preferred accommodation. Our team will tailor the perfect itinerary for you.',
    keywords: ['customize', 'custom', 'personalize', 'flexible', 'tailor']
  },
  {
    id: '15',
    question: 'What is your cancellation policy?',
    answer: 'Our cancellation policy offers full refunds if you cancel more than 30 days before your tour. For cancellations within 30 days, a portion of the fee may be retained based on how close you are to the tour date.',
    keywords: ['cancellation', 'cancel', 'refund', 'policy', 'canceling']
  },
  {
    id: '16',
    question: 'How do I book a tour?',
    answer: 'You can book a tour through our website using the tour planner, fill out the contact form, or message us directly on WhatsApp at +94703476874. Our team will help you select the perfect tour and handle all the details promptly.',
    keywords: ['book', 'booking', 'reserve', 'how', 'contact', 'whatsapp']
  },
  {
    id: '17',
    question: 'Do you offer group discounts?',
    answer: 'Yes, we offer special discounts for groups of 6 or more people. Contact our team on WhatsApp at +94703476874 for a customized group quote and special arrangements.',
    keywords: ['discount', 'group', 'price', 'offer', 'group']
  },
  {
    id: '18',
    question: 'What languages do you speak?',
    answer: 'Our guides speak English, Sinhala, Tamil, French, German, Japanese, and Mandarin. Please let us know your language preference when booking to ensure the best experience.',
    keywords: ['language', 'english', 'sinhala', 'tamil', 'speak']
  },
  {
    id: '19',
    question: 'How much do your tours cost?',
    answer: 'Our tours range from $120-$850: Sigiriya ($120), Ella ($140), Galle ($150), Kandy ($180), Yala ($200), and Full Island Grand Tour ($850). All prices include accommodation, meals, activities, and transportation.',
    keywords: ['price', 'cost', 'how much', 'expensive', 'money']
  },
  {
    id: '20',
    question: 'What activities are included in each tour?',
    answer: 'Each tour has unique activities: Sigiriya has rock climbing and temple visits, Kandy offers tea factory tours, Yala includes safari drives, Galle features whale watching and forts, and Ella has hiking and train rides. All tours include guided sightseeing and cultural experiences.',
    keywords: ['activities', 'activities', 'included', 'experience', 'do']
  }
];

export const findBestMatch = (userMessage: string): FAQItem | null => {
  const normalizedMessage = userMessage.toLowerCase();
  let bestMatch: FAQItem | null = null;
  let bestScore = 0;

  for (const item of faqData) {
    let score = 0;
    
    // Check Keywords match
    for (const keyword of item.keywords) {
      if (normalizedMessage.includes(keyword)) {
        score += 2;
      }
    }
    
    // Check question words match
    const questionWords = item.question.toLowerCase().split(' ');
    for (const word of questionWords) {
      if (word.length > 3 && normalizedMessage.includes(word)) {
        score += 1;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  return bestScore > 0 ? bestMatch : null;
};
