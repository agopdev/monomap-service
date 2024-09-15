export interface InterfaceIllnessCase {
  genre: string;
  age: number;
  lat: number;
  lng: number;
  isEmailSent: boolean;
}

export interface InterfaceIllnessCaseDocument extends Document, InterfaceIllnessCase {
}