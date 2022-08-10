import express, { Request, Response } from 'express';
// import { RemoteCsvReader } from "./process/RemoteCsvReader";
import { LocalCsvReader } from "./process/LocalCsvReader";
import { SensorProcessor } from "./process/SensorProcessor";
import { Processor } from './process/Processor';

// const url = 'https://numina-take-home-interview.s3.us-east-2.amazonaws.com/data.csv';
const path = './src/data/data.csv';



// const data = new LocalCsvReader(path).read();

const localCsvReader = new LocalCsvReader(path);
const sensorProcessor = new SensorProcessor();
const processor = new Processor(localCsvReader, sensorProcessor);
processor.process();

const points = processor.getTrackPoints('e71e1c7e573346368b2c2989e8eee61a')


const app = express();

app.get('/:trackId', (req: Request, res: Response): void => {
  res.send('hi');
})