import kind from '@enact/core/kind';
import { Header, Panel } from '@enact/sandstone/Panels';
import BodyText from '@enact/sandstone/BodyText';
import Scroller from '@enact/sandstone/Scroller';


const ListPanel = kind({
  name: 'ListPanel',

  render: props => (
    <Panel {...props}>
      <Header title="List Test Panel" />
      <Scroller>
      </Scroller>
    </Panel>
  ),
});

export default ListPanel;
