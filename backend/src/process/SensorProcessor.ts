
import { SensorData, TransportType } from "./interface";
import { Data } from './interface';
import * as Papa from 'papaparse';

type RawData = [string, Date, Date, TransportType, string, string, string]

export class SensorProcessor {
  process(data: string): SensorData[] {
    const parsedData = Papa.parse(data, { header: true }).data as RawData[];

    const processedData = parsedData.map((row): SensorData => {
      return [
        <Data>row[<any>Data.trackId],
        new Date(<Data>row[<any>Data.date]),
        new Date(`${<Data>row[<any>Data.date]}T${<Data>row[<any>Data.time]}`),
        <TransportType>row[<any>Data.class],
        JSON.parse(<Data>row[<any>Data.box]),
        JSON.parse(<Data>row[<any>Data.bottomCenter]),
        JSON.parse(<Data>row[<any>Data.geoBottomCenter]),
      ]
    })
    return processedData;
  }
}

