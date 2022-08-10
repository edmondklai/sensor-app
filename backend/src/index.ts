
// import { RemoteCsvReader } from "./process/RemoteCsvReader";
import { LocalCsvReader } from "./process/LocalCsvReader";
import { Processor } from './process/Processor';

// const url = 'https://numina-take-home-interview.s3.us-east-2.amazonaws.com/data.csv';
const path = './src/data/data.csv';

// const data = new LocalCsvReader(path).read();

const localCsvReader = new LocalCsvReader(path);
const processor = new Processor(localCsvReader, '');
console.log()
