import { IllnessCaseModel } from "../../data/models/IllnessCaseModel";
import { InterfaceIllnessCaseDocument } from "../entities/IllnessCase";

export class IllnessCaseDataSource {
  
  public updateIncident = async (id: string, illnessCase:Partial<InterfaceIllnessCaseDocument>) => {
    await IllnessCaseModel.findByIdAndUpdate(id, {
      genre: illnessCase.genre,
      age: illnessCase.age,
      lng: illnessCase.lng,
      lat: illnessCase.lat,
      isEmailSent: illnessCase.isEmailSent
    });
  }
}