import Dexie from 'dexie';

const db = new Dexie('ArabicWords');
db.version(1).stores({
  words: '++id, arabicScript, englishScript, meaning'
});

export default db;
