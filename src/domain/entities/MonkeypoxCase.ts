export interface InterfaceMonkeypoxCase {
  genre: string;
  age: number;
  lat: number;
  lng: number;
  isEmailSent: boolean;
}

export interface InterfaceMonkeypoxCaseDocument extends Document, InterfaceMonkeypoxCase {
}