import { Request, Response } from 'express';
import { MonkeypoxCaseModel } from '../../data/models/MonkeypoxCaseModel';
import { subDays } from 'date-fns';

export class MonkeypoxCaseController {
  
  public getMonkeypoxCases = async (req: Request, res: Response) => {
    try {
      const monkeypoxCases = await MonkeypoxCaseModel.find();
      res.json(monkeypoxCases);
    } catch (error) {
      console.error(`Error -> ${error}`);
    }
  };

  public getRecentMonkeypoxCases = async (req: Request, res: Response) => {
    try {
      const sevenDaysAgo = subDays(new Date(), 7);

      const recentMonkeypoxCases = await MonkeypoxCaseModel.find({
        creationDate: { $gte: sevenDaysAgo }
      });

      res.json(recentMonkeypoxCases);
    } catch (error) {
      console.error(`Error -> ${error}`);
    }
  };

  public createMonkeypoxCase = async (req: Request, res: Response) => {    
    try {
      const { genre, age, lat, lng } = req.body;
      const newMonkeypoxCase = await MonkeypoxCaseModel.create({
        genre: genre,
        age: age,
        lat: lat,
        lng: lng
      });

      return res.json(newMonkeypoxCase);
    } catch (error) {
      console.error(`Error -> ${error}`);
    }
  };

  public getMonkeypoxCaseById = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
      const monkeypoxCase = await MonkeypoxCaseModel.findById(id);
      res.json(monkeypoxCase);
    } catch (error) {
      console.error(`Error -> ${error}`);
    }
  };

  public updateMonkeypoxCase = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { genre, age, lat, lng } = req.body;

    try {
      const monkeypoxCase = await MonkeypoxCaseModel.findByIdAndUpdate(id, {
        genre,
        age,
        lat,
        lng
      });
      res.json(monkeypoxCase);
    } catch (error) {
      console.error(`Error -> ${error}`);
    }
  };

  public deleteMonkeypoxCase = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
      await MonkeypoxCaseModel.findByIdAndDelete(id);
      res.json({ message: 'Deleted record' });
    } catch (error) {
      console.error(`Error -> ${error}`);
    }
  };
}