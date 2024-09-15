import { Request, Response } from 'express';
import { IllnessCaseModel } from '../../data/models/IllnessCaseModel';

export class IllnessCaseController {
  
  public getIllnessCases = async (req: Request, res: Response) => {
    try {
      const illnessCases = await IllnessCaseModel.find();
      res.json(illnessCases);
    } catch (error) {
      console.error(`Error -> ${error}`);
    }
  }

  public createIllnessCase = async (req: Request, res: Response) => {    
    try {
      const { genre, age, lat, lng } = req.body;
      const newIllnessCase = await IllnessCaseModel.create({
        genre: genre,
        age: age,
        lat: lat,
        lng: lng
      });

      return res.json(newIllnessCase);
    } catch (error) {
      console.error(`Error -> ${error}`);
    }
  }

  public getIllnessCaseById = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
      const illnessCase = await IllnessCaseModel.findById(id);
      res.json(illnessCase);
    } catch (error) {
      console.error(`Error -> ${error}`);
    }
  }

  public updateIllnessCase = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { genre, age, lat, lng } = req.body;

    try {
      const illnessCase = await IllnessCaseModel.findByIdAndUpdate(id, {
        genre,
        age,
        lat,
        lng
      });
      res.json(illnessCase);
    } catch (error) {
      console.error(`Error -> ${error}`);
    }
  }

  public deleteIllnessCase = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
      await IllnessCaseModel.findByIdAndDelete(id);
      res.json({ message: 'Deleted record' });
    } catch (error) {
      console.error(`Error -> ${error}`);
    }
  }
}