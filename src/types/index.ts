export interface Tour {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  highlights: string[];
  category: string;
}

export interface Vehicle {
  id: number;
  name: string;
  capacity: string;
  features: string[];
  image: string;
  ideal: string;
}

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  rating: number;
  review: string;
  tour: string;
  avatar: string;
}
