export interface Vehicle {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  available: boolean;
}

export interface Reservation {
  id: string;
  vehicleId: string;
  startDate: string;
  endDate: string;
  customerName: string;
  customerEmail: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}