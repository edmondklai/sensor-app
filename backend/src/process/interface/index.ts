
export enum TransportType {
  bicycle,
  pedestrian,
}

export type SensorData = [
  string, Date, Date, TransportType, number[], number[], number[]
]; 