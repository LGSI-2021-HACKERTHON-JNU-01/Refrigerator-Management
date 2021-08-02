import kind from '@enact/core/kind';
import Scroller from '@enact/sandstone/Scroller';

import getData from '../../../server/javascriptservice/controllers/GetData';
import deleteData from '../../../server/javascriptservice/controllers/DeleteData';

const List = kind({
  name: 'List',

  render: () => <Scroller></Scroller>,
});
