import { MonkeypoxCaseModel } from "../../data/models/MonkeypoxCaseModel";
import { InterfaceMonkeypoxCaseDocument } from "../entities/MonkeypoxCase";

export class MonkeypoxCaseDataSource {
  
  public updateIncident = async (id: string, monkeypoxCase:Partial<InterfaceMonkeypoxCaseDocument>) => {
    await MonkeypoxCaseModel.findByIdAndUpdate(id, {
      genre: monkeypoxCase.genre,
      age: monkeypoxCase.age,
      lng: monkeypoxCase.lng,
      lat: monkeypoxCase.lat,
      isEmailSent: monkeypoxCase.isEmailSent
    });
  }
}