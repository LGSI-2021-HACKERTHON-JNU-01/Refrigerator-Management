import LS2Request from '@enact/webos/LS2Request';

const InitDB = () => {
  webOS.service.request('luna://com.webos.service.db', {
    method: 'putKind',
    parameters: {
      id: 'com.sample.app:1',
      owner: 'com.sample.app',
      indexes: [
        { name: 'TAG', props: [{ tag: 'tag' }] },
        { name: 'PRDLST_NM', props: [{ name: 'name' }] },
        { name: 'POG_DAYCNT', props: [{ name: 'expirationDate' }] },
        { name: 'number', props: [{ number: number }] },
      ],
    },
    onSuccess: function (args) {
      console.log('Success!');
    },
  });
};

export default InitDB;
