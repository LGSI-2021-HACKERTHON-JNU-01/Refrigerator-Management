import React from 'react';
import kind from '@enact/core/kind';
import { Panel, Header } from '@enact/sandstone/Panels';

import CreateButton from '../components/CreateButton';
//import { Route } from '@enact/ui/Routable';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Header title="Refrigerator Management" />
			<CreateButton btnName="Scan" btnAction="/ScanTest"/>
			<CreateButton btnName="List" btnAction="/List"/>
			<CreateButton btnName="Timer" btnAction="/Timer"/>
			<CreateButton btnName="Recipe" btnAction="/Recipe"/>
			<CreateButton btnName="Calendar" btnAction="/Calendar"/>
		</Panel>
	)
});

export default MainPanel;
