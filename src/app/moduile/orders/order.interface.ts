export interface TOrder {
  firstName: string;
  lastName: string;
  companyName?: string; // Optional field
  country: string;
  streetAddress: string;
  apartment?: string; // Optional field
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  orderNotes?: string; // Optional field
}
