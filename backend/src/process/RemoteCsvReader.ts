import axios from 'axios';

interface RemoteCsv {

}

export class RemoteCsvReader {
  constructor(public url: string) { }

  async read(): Promise<any> {
    const res = await axios.get(this.url);

    console.log(res);
    return res
  }
}

