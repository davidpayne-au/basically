// src/mocks/handlers.ts
import { http, HttpResponse, delay } from 'msw';

export const handlers = [
  http.get('/api/version', async () => {
    await delay(500);
    return HttpResponse.json({ 
      version: '1.0.0',
      description: 'Mock version',
    }, { status: 200 });
  }),
];
