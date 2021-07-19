import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/sandstone/Panels';

import CreateButton from '../components/CreateButton';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Header title="Refrigerator Management" />
			
			<CreateButton
				btnName="Scan"
				// btnAction={}
			/>
			<CreateButton
				btnName="List"
				// btnAction={}	
			/>
			<CreateButton
				btnName="Timer"
				// btnAction={}
			/>
			<CreateButton
				btnName="Recipe"
				// btnAction={}
			/>
		/
		</Panel>
	)
});

export default MainPanel;
