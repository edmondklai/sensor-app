import { Line } from 'react-chartjs-2';

const Chart = (): JSX.Element => {

  const data = {
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: '',
        data: [3, 2, 1],
      },
    ],
  };

  return <div>
    <Line
      datasetIdKey='id123'
      data={data}
    />
  </div>
}

export default Chart;