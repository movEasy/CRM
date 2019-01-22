export const serviceLineData = [
  {
    id: 1,
    clientId: 4030377,
    serviceLineId: '0',
    project: 'M&PS Siemens 7P',
    contact: 'Jesper Arnø',
    completed: false,
    createdAt: '18/1/2019',
    details: {
      projectName: 'M&PS Siemens Project 7P',
      clientId: 4030377,
      caseType: 'BC2200',
      status: 'Open',
      caseResponsiblePartner: 'Jesper Arnø',
      lawyer: 'Karina Johansen',
      invoiced: 1205000,
      nonInvoiced: 15475,
      nonInvoicedExpense: 0,
      balance: -353929,
      OpenAccount: -46875,
    },
  },
  {
    id: 2,
    serviceLineId: '1',
    project: 'Corp-AP Pension-Various Tax Advice',
    contact: 'Mariana Pereira',
    completed: true,
    createdAt: '18/1/2019',
  },
  {
    id: 3,
    serviceLineId: '0',
    clientId: 4030577,
    project: 'M&PS Siemens Project',
    contact: 'Mariana Pereira',
    completed: true,
    createdAt: '18/1/2019',
    details: {
      projectName: 'M&PS Siemens Project',
      clientId: 4030577,
      caseType: 'AB2200',
      status: 'Closed',
      caseResponsiblePartner: 'Mariana Pereira',
      lawyer: 'Karina Johansen',
      invoiced: 2205000,
      nonInvoiced: 2000,
      nonInvoicedExpense: 0,
      balance: 0,
      OpenAccount: -46875,
    },
  },
  {
    id: 4,
    serviceLineId: '3',
    project: 'M&PS Niels Soelberg',
    contact: 'Jesper Arnø',
    completed: true,
    createdAt: '18/1/2019',
  },
  {
    id: 5,
    serviceLineId: '0',
    project: 'M&PS Siemens Something something',
    contact: 'Jesper Arnø',
    completed: false,
    createdAt: '18/1/2019',
    clientId: 4030590,
    details: {
      projectName: 'M&PS Siemens Something something',
      clientId: 4030577,
      caseType: 'AB2200',
      status: 'Closed',
      caseResponsiblePartner: 'Jesper Arnø',
      lawyer: 'Karina Johansen',
      invoiced: 1213000,
      nonInvoiced: 2000,
      nonInvoicedExpense: 0,
      balance: 0,
      OpenAccount: -465,
    },
  },
  {
    id: 6,
    serviceLineId: '3',
    project: 'Novartis-CH-Alexandra Bianca Abraham',
    contact: 'Jesper Arnø',
    completed: true,
    createdAt: '15/1/2019',
  },
  {
    id: 7,
    serviceLineId: '1',
    project: 'M&PS-Niels Soelberg',
    contact: 'Jesper Arnø',
    completed: false,
    createdAt: '13/1/2019',
  },
  {
    id: 8,
    serviceLineId: '2',
    project: 'Siemens/MD/Christiaan Torres Stockl',
    contact: 'Jesper Arnø',
    completed: true,
    createdAt: '11/1/2019',
  },
];

export const headers = ['Service line', 'Project', 'Contact Person'];
export const serviceLine = ['CIT', 'TP', 'MPS', 'VAT'];
