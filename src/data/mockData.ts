import { LoanProduct, UserActiveLoan } from '@/types';

export const LOAN_PRODUCTS: Record<string, LoanProduct> = {
  payday: {
    id: 'payday',
    title: 'Payday Loan',
    description: 'Structured credit for private sector salary earners to meet urgent needs.',
    maxAmount: 2000000,
    minAmount: 50000,
    defaultTenureDays: 90,
    monthlyRate: 0.06,
    targetAudience: 'Private Sector Employees',
  },
  payroll: {
    id: 'payroll',
    title: 'Payroll Loan',
    description: 'Quick facility tailored for public sector and government employees.',
    maxAmount: 5000000,
    minAmount: 100000,
    defaultTenureDays: 180,
    monthlyRate: 0.06,
    targetAudience: 'Public Sector Workers',
  },
  sme: {
    id: 'sme',
    title: 'SME & Working Capital Loan',
    description: 'Flexible financing for entrepreneurs, supply LPOs, and project execution.',
    maxAmount: 15000000,
    minAmount: 500000,
    defaultTenureDays: 180,
    monthlyRate: 0.05,
    targetAudience: 'Registered Businesses & Traders',
  },
  stepup: {
    id: 'stepup',
    title: 'Step-Up Loan',
    description: 'Designed for traders with lockup shops and daily cash flow turnover.',
    maxAmount: 1000000,
    minAmount: 30000,
    defaultTenureDays: 60,
    monthlyRate: 0.055,
    targetAudience: 'Shop Owners & Daily Income Earners',
  },
};

export const MOCK_ACTIVE_LOAN: UserActiveLoan = {
  loanId: 'IRV-2026-8842',
  productTitle: 'Payday Credit Facility',
  principal: 500000,
  totalRepayable: 540000,
  amountPaid: 360000,
  nextRepaymentDate: 'September 28, 2026',
  nextRepaymentAmount: 180000,
  status: 'active',
};

export const MOCK_BRANCHES = [
  {
    name: 'Head Office (Maitama Branch)',
    address: 'No 33, Pope John Paul Street, off Gana Street, Maitama, Abuja',
    phone: '+234 907 821 6588',
    hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
  },
  {
    name: 'Garki Business Hub',
    address: 'Area 11, Commercial Complex, Garki, Abuja',
    phone: '+234 907 821 6589',
    hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
  },
];