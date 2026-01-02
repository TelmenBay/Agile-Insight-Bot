import NaturalLanguageUnderstandingV1 from 'ibm-watson/natural-language-understanding/v1.js';
import { IamAuthenticator } from 'ibm-watson/auth/index.js';


const nlu = new NaturalLanguageUnderstandingV1({
    authenticator: new IamAuthenticator({
        apikey: process.env.WATSON_API_KEY,
    }),
    serviceUrl: process.env.WATSON_URL,
    version: '2021-08-01',
});

export async function analyzeText(text) {
  const response = await nlu.analyze({
    text,
    features: {
      keywords: { limit: 10 },
      entities: { limit: 10 },
      sentiment: {},
    },
  });

return response.result;
}