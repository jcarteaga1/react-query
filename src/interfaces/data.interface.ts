export interface Data {
  name: string;
  url: string;
}

export interface DataRequest {
  count: number;
  next: string;
  previous: null;
  results: Data[];
}
