export interface Record {
  id: number;
  operation: string;
  amount: number;
  userBalance: number;
  operationResponse: number;
  data: Date;
  deleted: boolean;
}