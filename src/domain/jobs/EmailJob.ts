import cron from 'node-cron';
import { MonkeypoxCaseModel } from '../../data/models/MonkeypoxCaseModel';
import { EmailService } from '../services/EmailService';
import { MonkeypoxCaseDataSource } from '../datasources/MonkeypoxCaseDataSource';
import { generateMonkeypoxCaseEmailTemplate } from '../templates/EmailTemplate';

export const emailJob = () => {
  const emailService = new EmailService();
  const monkeypoxCaseDataSource = new MonkeypoxCaseDataSource();

  cron.schedule('*/10 * * * * *', async () => {

    console.log('Each 10 seconds');

    try {

      const monkeypoxCases = await MonkeypoxCaseModel.find({ isEmailSent: false });

      if (!monkeypoxCases.length){
        console.log('No illness cases to report');
        return;
      }

      console.log(`Proccesing ${monkeypoxCases.length} monkeypoxCases.`);

      await Promise.all(
        monkeypoxCases.map(async (monkeypoxCase)=>{
          const htmlBody = generateMonkeypoxCaseEmailTemplate(
            monkeypoxCase.genre,
            monkeypoxCase.age,
            monkeypoxCase.lat,
            monkeypoxCase.lng
          )

          await emailService.sendEmail({
            to: 'alonsogonzalez423@gmail.com',
            subject: `New Monkeypox case`,
            htmlBody: htmlBody
          });
          console.log(`Email sent for monkeypoxCase [${monkeypoxCase.id}]`);

          await monkeypoxCaseDataSource.updateIncident(monkeypoxCase._id.toString(), {...monkeypoxCase, isEmailSent: true});
          console.log(`Incident updated for ID [${monkeypoxCase._id}]`);
        })
      );


    } catch (error) {
      console.error(`[Error] -> ${error}`);
    }
  });
}