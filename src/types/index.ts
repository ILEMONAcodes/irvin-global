export type LoanType = 'payday' | 'payroll' | 'sme' | 'stepup';

export interface LoanProduct {
  id: LoanType;
  title: string;
  description: string;
  maxAmount: number;
  minAmount: number;
  defaultTenureDays: number;
  monthlyRate: number;
  targetAudience: string;
}

export interface ApplicationState {
  step: number;
  loanType: LoanType;
  requestedAmount: number;
  tenureDays: number;
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    bvn: string;
  };
  employmentInfo: {
    employerOrBusiness: string;
    monthlyIncome: number;
    workAddress: string;
  };
  documents: {
    idCardUploaded: boolean;
    bankStatementUploaded: boolean;
  };
  status: 'draft' | 'submitted' | 'verifying' | 'under_review' | 'approved' | 'disbursed';
}

export interface UserActiveLoan {
  loanId: string;
  productTitle: string;
  principal: number;
  totalRepayable: number;
  amountPaid: number;
  nextRepaymentDate: string;
  nextRepaymentAmount: number;
  status: 'active' | 'completed' | 'overdue';
}