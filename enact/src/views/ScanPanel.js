import kind from "@enact/core/kind";
import { Header, Panel } from "@enact/sandstone/Panels";

const ScanPanel = kind({
    name: 'ScanPanel',

    render: (props) => (
        <Panel {...props}>
            <Header title="Scan Panel" />
        </Panel>
    )

});

export default ScanPanel;