import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { Database } from './database.model';

export class DatabaseData implements InMemoryDbService, InMemoryBackendConfig {
  createDb() {
    const database: Database[] = [
      {
        'id': 1
      },
      {
        'id': 2
      },
      {
        'id': 5
      },
      {
        'id': 8
      },
      {
        'id': 10
      }
    ];
    return { database };
  }
}
