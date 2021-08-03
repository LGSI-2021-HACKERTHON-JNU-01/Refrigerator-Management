import { method } from 'lodash';
import LS2Request from '@enact/webos/LS2Request';

const MergeDB = ({ name }) => {
  webOS.service.request('luna://com.webos.service.db', {
    method: 'merge',
    query: {
      from: 'com.webos.service.test:1',
      where: [
        {
          prop: name,
        },
      ],
    },
    props: {
      _kind: 'sample_updated_value',
      number: number + 1,
    },

    onSuccess: function (args) {
      console.log('Success!');
    },
  });
};

export default MergeDB;
