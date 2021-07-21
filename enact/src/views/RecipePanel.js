import kind from "@enact/core/kind";
import { Header, Panel } from "@enact/sandstone/Panels";

const RecipePanel = kind({
    name: 'Recipe Panel',

    render: (props) => (
        <Panel {...props}>
            <Header title="Recipe Test Panel" />
        </Panel>
    )

});

export default RecipePanel;