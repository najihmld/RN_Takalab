import moment from 'moment';

const TIME_DATA = [
  {id: '10', time: '9 AM', until: '10 AM'},
  {id: '11', time: '10 AM', until: '10 AM'},
  {id: '12', time: '11 AM', until: '12 PM'},
  {id: '13', time: '12 PM', until: '01 PM'},
  {id: '14', time: '01 PM', until: '02 PM'},
  {id: '15', time: '02 PM', until: '03 PM'},
  {id: '16', time: '03 PM', until: '04 PM'},
  {id: '17', time: '04 PM', until: '05 PM'},
  {id: '18', time: '05 PM', until: '06 PM'},
];

export const getListTime = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(TIME_DATA);
    }, 50);
  });
};

export const getListDate = () => {
  return new Promise((resolve, reject) => {
    let dateTomorrow = moment().add(2, 'days').format(' MMM DD');
    const tomorrow = [
      {
        id: '00001',
        date: `Tomorrow \n${dateTomorrow}`,
      },
    ];

    setTimeout(() => {
      let cal = [];
      for (let i = 1; i <= 29; i++) {
        let id = Math.random().toString(36).substr(2, 5);
        let ddd = moment().add(i, 'days').format('ddd');
        let MMMDD = moment().add(i, 'days').format('MMM DD');
        let setData = {id, date: `${ddd}\n${MMMDD}`};
        cal.push(setData);
      }
      resolve([...tomorrow, ...cal]);
    }, 50);
  }).then((res) => res);
};
