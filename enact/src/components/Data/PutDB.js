import { method } from 'lodash';
import LS2Request from '@enact/webos/LS2Request';

const PutDB = ({ tag, name, expirationDate, number }) => {
  const data = {
    _kind: 'com.sample.app:1',
    tag: tag,
    name: name,
    expirationDate: expirationDate,
    number: number,
  };

  const datas = [data];

  webOS.service.request('luna://com.webos.service.db', {
    method: 'put',
    parameters: {
      objects: datas,
    },
    onSuccess: function (args) {
      console.log('Success!');
    },
  });
};

export default PutDB;
