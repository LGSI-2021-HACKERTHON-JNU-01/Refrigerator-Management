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
<<<<<<< HEAD
=======
        <BodyText></BodyText>
>>>>>>> 9f2f29bbc590ca0060a596aaf0217be2dc97db24
      </Scroller>
    </Panel>
  ),
});

export default ListPanel;
