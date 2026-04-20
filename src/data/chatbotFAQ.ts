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
    answer: 'We offer a variety of tours including cultural tours, adventure tours, beach tours, wildlife tours, and custom packages tailored to your preferences. Each tour showcases the beauty and diversity of Sri Lanka.',
    keywords: ['tours', 'types', 'packages', 'what']
  },
  {
    id: '2',
    question: 'What is the best time to visit Sri Lanka?',
    answer: 'Sri Lanka can be visited year-round, but the best time depends on the region. December to March is ideal for the west and south coasts, while May to September is perfect for the east coast and cultural triangle.',
    keywords: ['time', 'visit', 'season', 'when', 'best']
  },
  {
    id: '3',
    question: 'How long should I stay in Sri Lanka?',
    answer: 'We recommend a minimum of 7-10 days to experience the best of Sri Lanka. However, shorter 3-5 day tours are also available if you have limited time.',
    keywords: ['duration', 'days', 'long', 'stay', 'how']
  },
  {
    id: '4',
    question: 'What should I pack for a Sri Lankan tour?',
    answer: 'Pack light, breathable clothing, sunscreen, insect repellent, comfortable walking shoes, and a hat or cap. If visiting during the monsoon season, bring rain gear. Don\'t forget your passport and travel documents!',
    keywords: ['pack', 'packing', 'bring', 'clothes', 'what']
  },
  {
    id: '5',
    question: 'Do you provide accommodation?',
    answer: 'Yes, we provide comfortable accommodations ranging from budget-friendly guesthouses to luxury resorts. Your accommodation is included in your tour package.',
    keywords: ['accommodation', 'hotel', 'stay', 'lodging', 'sleep']
  },
  {
    id: '6',
    question: 'Is transportation included in the tour?',
    answer: 'Yes, all transportation within Sri Lanka is included in your tour package. We provide comfortable vehicles and experienced drivers for all tours.',
    keywords: ['transportation', 'transport', 'vehicle', 'car', 'driving']
  },
  {
    id: '7',
    question: 'What about travel insurance?',
    answer: 'We recommend purchasing travel insurance before your trip. While not mandatory, it covers unexpected events like flight cancellations and medical emergencies.',
    keywords: ['insurance', 'travel', 'coverage', 'protection']
  },
  {
    id: '8',
    question: 'Can I customize my tour?',
    answer: 'Absolutely! We offer fully customizable tours. You can choose your destinations, duration, activities, and accommodation based on your preferences and budget.',
    keywords: ['customize', 'custom', 'personalize', 'flexible', 'tailor']
  },
  {
    id: '9',
    question: 'What is your cancellation policy?',
    answer: 'Our cancellation policy offers full refunds if you cancel more than 30 days before your tour. For cancellations within 30 days, a portion of the fee may be retained.',
    keywords: ['cancellation', 'cancel', 'refund', 'policy', 'canceling']
  },
  {
    id: '10',
    question: 'How do I book a tour?',
    answer: 'You can book a tour through our website, or contact us directly via the contact form or phone. Our team will help you select the perfect tour and handle all the details.',
    keywords: ['book', 'booking', 'reserve', 'how', 'contact']
  },
  {
    id: '11',
    question: 'Do you offer group discounts?',
    answer: 'Yes, we offer special discounts for groups of 6 or more people. Please contact our team for a customized group quote.',
    keywords: ['discount', 'group', 'price', 'offer']
  },
  {
    id: '12',
    question: 'What languages do you speak?',
    answer: 'Our guides speak English, Sinhala, Tamil, and other languages. Please let us know your language preference when booking.',
    keywords: ['language', 'english', 'sinhala', 'tamil', 'speak']
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
