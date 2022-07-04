export enum customerTypeENUM {
  INDIVIDUAL,
  BUSINESS,
}

export enum invoiceTypeENUM {
  EMAIL,
  SMS,
  PRINT,
  EMAILPLUSPRINT,
  EINVOICE,
  UNKNOWN = 256,
}

export enum invoiceTemplateENUM {
  MODERN,
  CLASSIC,
}

export type posLatLon = {
  latitude: number;
  longitude: number;
};

export type Address = {
  careOf: string;
  street: string;
  streetNo: number;
  entrance: string;
  apartment: string;
  zipcode: number;
  city: string;
  country: string;
  position: posLatLon;
};

export type Contact = {
  name: string;
  role: string;
  phone: string;
  cellphone: string;
  email: string;
  primary: boolean;
  _id: string;
};

export type Customer = {
  _id: string;
  name: string;
  alias: number;
  customerType: customerTypeENUM;
  ssn: string;
  address: Address;
  vat: string;
  invoiceMethod: invoiceTypeENUM;
  invoiceTemplate: invoiceTemplateENUM;
  reseller: boolean;
  contacts: Contact[];
  createdAt: Date;
  updatedAt: Date;
  comment: string;
  __v: number;
};

export type AddressAccess = {
  country: string;
  street: string;
  streetNo: number;
  entrance: string;
  zipcode: number;
  city: string;
};

export type Accesspoint = {
  _id: string;
  address: AddressAccess;
  metro: string;
  alias: string;
  identifier: string;
  comment: string;
  propertyDeignation: string;
  attentionlevel: number;
  __v: number;
};

export type Metro = {
  _id: string;
  alias: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type Brand = {
  _id: string;
  alias: number;
  name: string;
  metros: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type Service = {
  _id: string;
  name: string;
  alias: number;
  brand: string;
  metro: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type boardingType = {
  // sid 8
  ordered: Date; // Beställningsdat. Uppsägningsdat.
  prefered: Date; // Önskat startdat. Önskat stoppdat.
  completed: Date; // Aktiverat. Avslutat.
  metroorder: Date;
  metrorequest: Date;
};

export type procflagType = {
  status: number;
  autoinvoice: number;
};

export type Contract = {
  _id: string;
  source: number;
  invoiceInterval: number;
  quantity: number;
  aperror: string;
  onboarding: boardingType;
  offboarding: boardingType;
  procflag: procflagType;
  customer: string;
  service: string;
  accessPoint: string;
  lastinvoied: Date;
  invoicedto: Date;
  comment: string;
  alias: number;
  __v: number;
};
