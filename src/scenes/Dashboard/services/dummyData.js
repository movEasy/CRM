export const data = {
  departments: {
    department1: {
      id: '1',
      infoItem: ['XXX1', 'Corporate Income Tax', '10'],
      details: [
        ['4016145', 'M&PS Siemens Project 7P', 'notComplete'],
        ['4014674', 'Novartis-ch-Alexandra Bianca Abraham', 'complete'],
        ['4016872', 'Siemens/MD/Christiaan Torres Stocki', 'complete'],
        ['4014128-1204', 'Corp-AP Pension-Various tax advice', 'complete'],
        ['4016146', 'M&PS-Nielse Soelberg', 'complete'],
        ['4016146', 'M&PS Siemens Project 7P', 'notComplete'],
      ],
    },
    department2: {
      id: '2',
      infoItem: ['XXX2', 'Corporate Tax', '1'],
    },
    department3: {
      id: '3',
      infoItem: ['XXX3', 'Income Tax', '11'],
    },
  },
  tasks: {
    task1: {
      id: '2',
      infoItem: [
        '31-2012-2018',
        'HL',
        'Ryk falk for om vi skal lave et TP review(...)',
      ],
      status: 'notComplete',
      details: [
        ['4016145', 'M&PS Siemens Project 7P', 'notComplete'],
        ['4014674', 'Novartis-ch-Alexandra Bianca Abraham', 'complete'],
        ['4016872', 'Siemens/MD/Christiaan Torres Stocki', 'complete'],
        ['4014128-1204', 'Corp-AP Pension-Various tax advice', 'complete'],
        ['4016146', 'M&PS-Nielse Soelberg', 'complete'],
        ['4016146', 'M&PS Siemens Project 7P', 'notComplete'],
      ],
    },
    task2: {
      id: '2',
      status: 'complete',
      infoItem: [
        '01-04-2019',
        'JA',
        'Tag fat i Carsten omkring Mobility policy',
      ],
    },
    task3: {
      id: '3',
      status: 'notComplete',
      infoItem: ['29-04-2019', 'MP', 'Test tekst'],
    },
    task4: {
      id: '3',
      status: 'complete',
      infoItem: [
        '29-04-2019',
        'MP',
        'Tag fat i Carsten omkring Mobility policy',
      ],
    },
  },
};

/*
    Service line id:
    1 = CIT
    2 = TP
    3 = MPS/Mobility
    4 = VAT

*/

export const NewData = [
  {
    id: 321321,
    serviceLineId: '1',
    contact: 'Jesper Arnø',
    completed: false,
    createdAt: '18/1/2019',
  },
  {
    id: 9841,
    serviceLineId: '1',
    project: 'Novartis-CH-Alexandra Bianca Abraham',
    contact: 'Jesper Arnø',
    completed: true,
    createdAt: '15/1/2019',
  },
  {
    id: 1212,
    serviceLineId: '2',
    project: 'M&PS-Niels Soelberg',
    contact: 'Jesper Arnø',
    completed: false,
    createdAt: '13/1/2019',
  },
  {
    id: 34211321,
    serviceLineId: '3',
    project: 'Siemens/MD/Christiaan Torres Stockl',
    contact: 'Jesper Arnø',
    completed: true,
    createdAt: '11/1/2019',
  },
];
