
interface Reader {
  data: string[];
  read: () => string[],
  processor: any,
}

export class Processor {
  data: string[] = []
  constructor(public reader: Reader, public processor: any) {

  }

  process() {
    this.data = this.reader.read();
    this.process.process();
  }
}