import kind from "@enact/core/kind";
import { Header, Panel } from "@enact/sandstone/Panels";

const CalendarPanel = kind({
    name: 'CalendarPanel',

    render: (props) => (
        <Panel {...props}>
            <Header title="Calendar Test Panel" />
        </Panel>
    )

});

export default CalendarPanel;