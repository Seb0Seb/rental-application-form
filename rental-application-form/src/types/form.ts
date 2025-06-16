export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface ContactInfo {
  name: string;
  phone: string;
  email?: string;
}

export interface PersonalInfo {
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  currentAddress: Address;
  ssn?: string;
  idNumber: string;
}

export interface EmploymentInfo {
  employer: string;
  position: string;
  monthlyIncome: number;
  startDate: Date;
  contactInfo: ContactInfo;
  previousEmployer?: {
    name: string;
    position: string;
    startDate: Date;
    endDate: Date;
    contactInfo: ContactInfo;
  };
}

export interface RentalHistory {
  currentLandlord: ContactInfo;
  currentRent: number;
  moveReason: string;
  previousAddresses: Array<{
    address: Address;
    startDate: Date;
    endDate: Date;
    landlordName: string;
    landlordPhone: string;
  }>;
}

export interface FinancialInfo {
  bankName: string;
  accountType: string;
  monthlyExpenses: number;
  outstandingDebts: number;
  creditScore: 'excellent' | 'good' | 'fair' | 'poor';
}

export interface AdditionalInfo {
  occupants: number;
  pets: Array<{
    type: string;
    breed?: string;
    weight: number;
  }>;
  smokingStatus: boolean;
  specialRequirements?: string;
  emergencyContact: ContactInfo;
}

export interface FormData {
  personalInfo?: PersonalInfo;
  employmentInfo?: EmploymentInfo;
  rentalHistory?: RentalHistory;
  financialInfo?: FinancialInfo;
  additionalInfo?: AdditionalInfo;
} 