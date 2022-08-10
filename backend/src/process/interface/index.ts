
export enum TransportType {
  bicycle,
  pedestrian,
}

export type SensorData = [
  string, Date, Date, TransportType, number[], number[], number[]
];


export enum Data {
  trackId = 'trackid',
  date = 'date',
  time = 'time',
  class = 'class',
  box = 'box',
  bottomCenter = 'bottom_center',
  geoBottomCenter = 'geo_bottom_center',
}