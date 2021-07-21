// import React from 'react';
import kind from '@enact/core/kind';
import { Panel } from '@enact/sandstone/Panels';

// import CreateButton from '../components/CreateButton';
import MainTabLayout from '../components/MainTabLayout';
//import { Route } from '@enact/ui/Routable';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<MainTabLayout/>
		</Panel>
	)
});

export default MainPanel;
