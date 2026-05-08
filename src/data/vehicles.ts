import { Vehicle } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: 'Private Car',
    capacity: '1–3 Guests',
    features: ['Air Conditioned', 'WiFi Hotspot', 'Bottled Water', 'USB Charging', 'English-Speaking Driver'],
    image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
    ideal: 'Couples & Solo Travelers',
  },
  {
    id: 2,
    name: 'Luxury Van',
    capacity: '4–8 Guests',
    features: ['Reclining Seats', 'Air Conditioned', 'WiFi', 'Cooler Box', 'Panoramic Windows', 'Guide Onboard'],
    image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
    ideal: 'Families & Small Groups',
  },
  {
    id: 3,
    name: 'Tuk Tuk',
    capacity: '1–3 Guests',
    features: ['Open Air Experience', 'Local Driver', 'Village Routes', 'Photo Stops'],
    image: 'https://images.pexels.com/photos/3703462/pexels-photo-3703462.jpeg?auto=compress&cs=tinysrgb&w=800',
    ideal: 'Cultural Immersion',
  },
  {
    id: 4,
    name: 'Coach Bus',
    capacity: '9–30 Guests',
    features: ['Luxury Seating', 'Air Conditioned', 'PA System', 'Large Luggage Bay', 'Onboard Toilet'],
    image: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800',
    ideal: 'Large Groups & Corporate',
  },
];
