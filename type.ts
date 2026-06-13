export interface CashflowItem {
  month: string;
  income: number;
  expense: number;
}

export const cashflowData: CashflowItem[] = [
  { month: 'Jan', income: 4500, expense: 3200 },
  { month: 'Feb', income: 5200, expense: 3800 },
  { month: 'Mar', income: 4800, expense: 3500 },
  { month: 'Apr', income: 6100, expense: 4200 },
  { month: 'May', income: 5800, expense: 3900 },
  { month: 'Jun', income: 6500, expense: 4100 },
  { month: 'Jul', income: 7200, expense: 4500 },
  { month: 'Aug', income: 6800, expense: 4300 },
  { month: 'Sep', income: 7500, expense: 4800 },
  { month: 'Oct', income: 8100, expense: 5200 },
  { month: 'Nov', income: 7800, expense: 4900 },
  { month: 'Dec', income: 8500, expense: 5500 }
];
