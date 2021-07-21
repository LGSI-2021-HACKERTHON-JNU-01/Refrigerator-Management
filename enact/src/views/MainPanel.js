import kind from '@enact/core/kind';
import { Panel } from '@enact/sandstone/Panels';

import MainTabLayout from '../components/MainTabLayout';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<MainTabLayout/>
		</Panel>
	)
});

export default MainPanel;
