import kind from '@enact/core/kind';
import { Header, Panel } from '@enact/sandstone/Panels';

const TimerPanel = kind({
  name: 'TimerPanel',

  render: props => (
    <Panel {...props}>
      <Header title="Timer Test Panel" />
    </Panel>
  ),
});

export default TimerPanel;
