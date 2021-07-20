import kind from "@enact/core/kind";
import { Header, Panel } from "@enact/sandstone/Panels";

const ScanTestPanel = kind({
    name: 'ScanTestPanel',

    render: (props) => (
        <Panel {...props}>
            <Header title="Scan Test Panel" />
        </Panel>
    )

});

export default ScanTestPanel;