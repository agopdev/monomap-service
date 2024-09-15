import cron from 'node-cron';
import { IllnessCaseModel } from '../../data/models/IllnessCaseModel';
import { EmailService } from '../services/EmailService';
import { IllnessCaseDataSource } from '../datasources/IllnessCaseDataSource';
import { generateIllnessCaseEmailTemplate } from '../templates/EmailTemplate';

export const emailJob = () => {
  const emailService = new EmailService();
  const illnessCaseDataSource = new IllnessCaseDataSource();

  cron.schedule('*/10 * * * * *', async () => {

    console.log('Each 10 seconds');

    try {

      const illnessCases = await IllnessCaseModel.find({ isEmailSent: false });

      if (!illnessCases.length){
        console.log('No illness cases to report');
        return;
      }

      console.log(`Proccesing ${illnessCases.length} illnessCases.`);

      await Promise.all(
        illnessCases.map(async (illnessCase)=>{
          const htmlBody = generateIllnessCaseEmailTemplate(
            illnessCase.genre,
            illnessCase.age,
            illnessCase.lat,
            illnessCase.lng
          )

          await emailService.sendEmail({
            to: 'alonsogonzalez423@gmail.com',
            subject: `New Monkeypox case`,
            htmlBody: htmlBody
          });
          console.log(`Email sent for illnessCase [${illnessCase.id}]`);

          await illnessCaseDataSource.updateIncident(illnessCase._id.toString(), {...illnessCase, isEmailSent: true});
          console.log(`Incident updated for ID [${illnessCase._id}]`);
        })
      );


    } catch (error) {
      console.error(`[Error] -> ${error}`);
    }
  });
}