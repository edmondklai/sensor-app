import fs from 'fs';

export class LocalCsvReader {
  data: string[] = [];

  constructor(public path: string) { }

  read() {
    return fs.readFileSync(this.path, { encoding: 'utf-8' }).split('\n');
  }
}