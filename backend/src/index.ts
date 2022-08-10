import express, { Request, Response } from 'express';
import cors from 'cors';

// import { RemoteCsvReader } from "./process/RemoteCsvReader";
import { LocalCsvReader } from "./process/LocalCsvReader";
import { SensorProcessor } from "./process/SensorProcessor";
import { Processor } from './process/Processor';

// const url = 'https://numina-take-home-interview.s3.us-east-2.amazonaws.com/data.csv';
const path = './src/data/data.csv';

const app = express();
app.use(cors());

app.get('/track-points/:trackId', (req: Request, res: Response): void => {
  const localCsvReader = new LocalCsvReader(path);
  const sensorProcessor = new SensorProcessor();
  const processor = new Processor(localCsvReader, sensorProcessor);
  processor.process();

  const points = processor.getTrackPoints(req.params.trackId);
  res.send(points);
})

app.listen(3001, () => {
  console.log('listening on 3001')
})