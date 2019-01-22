import { serviceLineData } from '../../../../services/DummyDataNewBox';

export const countProjects = obj => {
  let id;

  switch (obj.toLowerCase()) {
    case 'cit':
      id = 0;
      break;
    case 'tp':
      id = 1;
      break;
    case 'mps':
      id = 2;
      break;
    case 'vat':
      id = 3;
      break;
    default:
      id = 0;
  }

  let counter = 0;

  for (let dataObj of serviceLineData) {
    if (dataObj.serviceLineId === id.toString()) {
      counter++;
    }
  }
  return counter;
};
