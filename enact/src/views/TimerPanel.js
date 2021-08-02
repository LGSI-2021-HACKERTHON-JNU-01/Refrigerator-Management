import kind from '@enact/core/kind';
import { Header, Panel } from '@enact/sandstone/Panels';
import Timer from "../components/Timer/Timer";

const TimerPanel = kind({
  name: 'TimerPanel',

  render: props => (
    <Panel {...props}>
      <Header title="Count Down Timer" />
      <Timer/>
    </Panel>
  ),
});

export default TimerPanel;
