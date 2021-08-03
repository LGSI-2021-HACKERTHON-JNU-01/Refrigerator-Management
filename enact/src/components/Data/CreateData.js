import LS2Request from '@enact/webos/LS2Request';

LS2Request.send();

webOS.service.request('luna://com.webos.service.db', {
  method: 'putKind',
  parameters: {
    id: 'com.sample.db.owner:1',
    owner: 'com.sample.db.owner',
    private: true,
    schema: {
      id: 'com.sample.db.owner:1',
      type: 'object',
      properties: {
        _kind: {
          type: 'string',
          value: kindId,
        },
        number: {
          type: 'integer',
          description: 'number',
        },
        grade: {
          type: 'string',
          description: 'grade string',
        },
        isUsed: {
          type: 'boolean',
          description: 'flag',
        },
      },
    },
    indexes: [
      {
        name: 'index0',
        props: [{ name: 'number' }],
      },
      {
        name: 'index1',
        props: [{ name: 'grade' }, { name: 'isUsed' }],
      },
      {
        name: 'index2',
        props: [{ name: 'isUsed' }],
      },
    ],
  },
  onSuccess: function (res) {
    clearLog;
    printLog('[putKind] onSuccess');
  },
  onFailure: function (res) {
    printLog('[putKind] onFailure');
    printLog('(' + res.errorCode + ') ' + res.errorText);
    return;
  },
});
