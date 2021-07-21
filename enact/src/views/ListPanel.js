import kind from "@enact/core/kind";
import { Header, Panel } from "@enact/sandstone/Panels";

const ListPanel = kind({
    name: 'ListPanel',

    render: (props) => (
        <Panel {...props}>
            <Header title="List Test Panel" />
        </Panel>
    )

});

export default ListPanel;