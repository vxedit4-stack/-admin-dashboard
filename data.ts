export interface ExpenseCategory {
  name: string;
  amount: number;
  percentage: number;
  color: string;
}

export const EXPENSE_CATEGORIES: ExpenseCategory[] = [
  {
    name: 'Housing',
    amount: 1200,
    percentage: 34,
    color: '#8b5cf6'
  },
  {
    name: 'Food',
    amount: 800,
    percentage: 23,
    color: '#ec4899'
  },
  {
    name: 'Transport',
    amount: 500,
    percentage: 14,
    color: '#f59e0b'
  },
  {
    name: 'Entertainment',
    amount: 400,
    percentage: 11,
    color: '#10b981'
  },
  {
    name: 'Shopping',
    amount: 350,
    percentage: 10,
    color: '#3b82f6'
  },
  {
    name: 'Utilities',
    amount: 250,
    percentage: 8,
    color: '#6366f1'
  }
];
