import kind from "@enact/core/kind";
import { Header, Panel } from "@enact/sandstone/Panels";

const HomePanel = kind({
    name: 'HomePanel',

    render: (props) => (
        <Panel {...props}>
            <Header title="Home Test Panel" />
        </Panel>
    )

});

export default HomePanel;