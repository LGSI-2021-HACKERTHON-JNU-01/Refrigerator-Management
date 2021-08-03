import { method } from 'lodash';
import LS2Request from '@enact/webos/LS2Request';

const request = webOS.service.request('luna://com.webos.service.db', {
  method: 'putKind',
  parameters: {
    id: 'com.sample.app:1',
    owner: 'com.sample.app',
    indexes: [
      { name: 'PRDLST_NM', props: [{ name: 'name' }] },
      { name: 'POG_DAYCNT', props: [{ name: 'expirationDate' }] },
      { name: 'number', props: [{ number: number }] },
      { name: 'category', props: [{ name: 'category' }] },
    ],
  },
  onSuccess: function (args) {
    console.log('Success!');
  },
});

const put = webOS.service.request('luna://com.webos.service.db', {
  method: 'put',
  parameters: {
    objects: [{ _kind: 'com.sample.app:1' }],
  },
  onSuccess: function (args) {
    console.log('Success!');
  },
});

const merge = webOS.service.request('luna://com.webos.service.db', {
  method: 'merge',
  query: {
    from: 'com.webos.service.test:1',
    where: [
      {
        prop: number,
        op: '=',
        val: number + 1,
      },
    ],
  },
  props: {
    _kind: 'sample_updated_value',
    number: number,
  },

  onSuccess: function (args) {
    console.log('Success!');
  },
});
