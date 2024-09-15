import { envs } from '../../_config/envs';

export function generateMonkeypoxCaseEmailTemplate(genre: string, age: number, lat: number, lng: number): string {

	enum Gender {
		Male = 'Male',
		Female = 'Female'
	}
  
  const mapImageUrl = generateMapboxStaticImageURL(lat, lng);
  
  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Details of monkeypoxcase</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              color: #333;
              margin: 0;
              padding: 0;
          }
          .container {
              width: 100%;
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              overflow: hidden;
          }
          .header {
              background-color: #007BFF;
              color: #ffffff;
              padding: 20px;
              text-align: center;
          }
          .header h1 {
              margin: 0;
              font-size: 24px;
          }
          .content {
              padding: 20px;
          }
          .content p {
              margin: 10px 0;
          }
          .footer {
              background-color: #f4f4f4;
              color: #777;
              padding: 10px;
              text-align: center;
              font-size: 12px;
          }

          .map-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>Monkeypox case details:</h1>
          </div>
          <div class="content">
              <p><strong>Age of the affected person:</strong> ${ age }</p>
              <p><strong>Sex of the affected person:</strong> ${ genre === 'F' ? Gender.Female : Gender.Male }</p>
              <p><strong>Latitude:</strong> ${ lat }</p>
              <p><strong>Longitude:</strong> ${ lng }</p>
              <img src="${ mapImageUrl }" class="map-image" />
          </div>
          <div class="footer">
              <p>This is an auto-generated email. Please don't respond to this message.</p>
          </div>
      </div>
  </body>
  </html>
  `;
}

export const generateMapboxStaticImageURL = (lat: number, lng: number): string => {
  const accessToken = envs.MAP_BOX_ACCESS_TOKEN;
  const zoom = 13;
  const width = 800;
  const height = 500;
  
  return `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-l-embassy+f74e4e(${lng},${lat})/${lng},${lat},${zoom}/${width}x${height}?access_token=${accessToken}`;
}