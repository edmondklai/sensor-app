import { Data, SensorData } from './interface'

interface Reader {
  data: string;
  read: () => string,
}

interface DataProcessor {
  process: (data: string) => any,
}

export class Processor {
  data: string = '';
  processedData: SensorData[] = [];
  constructor(public reader: Reader, public processor: DataProcessor) {

  }

  process() {
    this.data = this.reader.read();
    this.processedData = this.processor.process(this.data);
  }

  getTrackPoints(id: string): number[][] {
    const points: number[][] = [];
    this.processedData.forEach((row: SensorData): void => {
      if (row[0] === id) points.push(row[5])
    })
    return points
  }
}