import { faker } from '@faker-js/faker';

export type Person = {
  uid: number;
  date: string;
  txnId: string;
  username: string;
  email: string;
  planName: 'Monthly' | 'Yearly';
  planAmount: '30' | '299';
  planMode: 'GPay' | 'Paytm' | 'Card';
  status: 'Success' | 'Failure' | 'Pending';
  subRows?: Person[];
};

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (idx: number): Person => {
  return {
    uid: idx,
    date: '13 Jan, 2023 11:45',
    txnId: 'TXN-' + faker.number.int(),
    username: faker.person.firstName(),
    email: faker.person.lastName(),
    planName: faker.helpers.shuffle<Person['planName']>([
      'Monthly',
      'Yearly',
    ])[0],
    planAmount: faker.helpers.shuffle<Person['planAmount']>(['30', '299'])[0],
    planMode: faker.helpers.shuffle<Person['planMode']>([
      'GPay',
      'Paytm',
      'Card',
    ])[0],
    status: faker.helpers.shuffle<Person['status']>([
      'Success',
      'Failure',
      'Pending',
    ])[0],
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((d, index): Person => {
      return {
        ...newPerson(index + 1),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
