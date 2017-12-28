import { Injectable } from '@angular/core';
import { Detail } from '../components/detail/detail'
import { Summary } from '../components/summary/summary'

@Injectable()
export class DataService {

  constructor() {
    console.log('data service')
  }

  getAllSummaries(): Summary[] {
    return [
      { userName: 'Cokey',
        userGoal: 3000,
        userProgress: 2470
      },
      { userName: 'Paige',
        userGoal: 3000,
        userProgress: 2472
      },
      { userName: 'Tracey',
        userGoal: 3000,
        userProgress: 2400
      }
    ]
  }

}
