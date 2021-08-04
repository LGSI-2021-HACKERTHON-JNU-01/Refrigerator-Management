import kind from '@enact/core/kind';
import { Header, Panel } from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';

import ShowList from '../components/List';

const ListPanel = kind({
  name: 'ListPanel',

  render: props => (
    <Panel {...props}>
      <Scroller>
        <ShowList name={'apple'} number={3} expirationDate={'2021-09-03'} />
        <ShowList name={'plum'} number={5} expirationDate={'2021-08-23'} />
      </Scroller>
    </Panel>
  ),
});

export default ListPanel;
