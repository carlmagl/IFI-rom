export interface Room {
  fields: {
    name: string;
    type: string;
    floor: string;
    roomnumber: string;
  };
  sys: {
    id: string;
  };
}
