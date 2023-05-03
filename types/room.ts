export interface Room {
  fields: {
    name: string;
    description: string;
    floor: string;
    roomnumber: string;
  };
  sys: {
    id: string;
  };
}
