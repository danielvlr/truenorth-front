export interface Record {
  operation: string;
  amount: number;
  userBalance: number;
  operationResponse: number;
  data: Date;
  deleted: boolean;
}