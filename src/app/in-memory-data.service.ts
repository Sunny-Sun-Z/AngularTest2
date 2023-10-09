import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
interface Quote {
  id: number;
  quote: string;
}
const QUOTES: Quote[] = [
  'Always do right. This will gratify some people and astonish the rest.',
  'I have never let my schooling interfere with my education.',
  'Don\'t go around saying the world owes you a living. The world owes you nothing. It was here first.',
  'Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
  'If you tell the truth, you don\'t have to remember anything.',
  'Clothes make the man. Naked people have little or no influence on society.',
  'It\'s not the size of the dog in the fight, it\'s the size of the fight in the dog.',
  'Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn\'t.',
  'The man who does not read good books has no advantage over the man who cannot read them.',
  'Get your facts first, and then you can distort them as much as you please.',
]
.map((q, i) => ({ id: i + 1, quote: q }));

const maxQuotes = Infinity;

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
   createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    return {heroes, quotes:QUOTES.slice(0, maxQuotes) };
  }
}
