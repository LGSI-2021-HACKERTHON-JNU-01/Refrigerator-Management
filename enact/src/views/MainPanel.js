// import React from 'react';
import {  Router } from 'react-router-dom';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/sandstone/Panels';

import CreateButton from '../components/CreateButton';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Router>
				<Header title="Refrigerator Management" />
				<CreateButton btnName="Scan" btnAddress="/Scan"/>
				<CreateButton btnName="List" btnAddress="/List"/>
				<CreateButton btnName="Timer" btnAddress="/Timer"/>
				<CreateButton btnName="Recipe" btnAddress="Recipe"/>
				<CreateButton btnName="Calendar" btnAddress="/Calendar"/>
			</Router>
		</Panel>
	)
});

export default MainPanel;
