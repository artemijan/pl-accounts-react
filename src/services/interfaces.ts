export interface PlAccount {
  plAccountId: number;
  originalName: string;
  totalAmount: number;
}

export interface MonthlyReport {
  year: number;
  month: number;
  totalAmount: number;
  plAccounts: PlAccount[];
}

export interface TopFiveReport {
  bestPracticeName: string;
  totalAmount: number;
}

export interface FinancialReport {
  monthly?: MonthlyReport[];
  topFive?: TopFiveReport[];
}
