import kind from '@enact/core/kind';
import TabLayout, { Tab } from '@enact/sandstone/TabLayout';
import Item from '@enact/sandstone/Item'
import { Header, Panels } from '@enact/sandstone/Panels';

import PropTypes from 'prop-types';

import HomePanel from '../views/HomePanel';
import ScanPanel from '../views/ScanPanel';
import ListPanel from '../views/ListPanel';
import TimerPanel from '../views/TimerPanel';
import RecipePanel from '../views/RecipePanel';
import CalendarPanel from '../views/CalendarPanel';

// const tabs = [
//     'Home',
//     'Scan',
//     'List',
//     'Timer',
//     'Recipe',
//     'Calendar'
// ];

// const homeIcon = <Icon>home</Icon>;
// const scanIcon = <Icon>picture</Icon>
// const listIcon = <Icon>list</Icon>;
// const timerIcon = <Icon>timer</Icon>;
// const recipeIcon = <Icon>guide</Icon>;
// const calendarIcon = <Icon>checker</Icon>;

const MainTabLayout = kind({
    name: 'MainTabLayout',

    propTypes: {
        index: PropTypes.number,
        tab: PropTypes.number,
        children: PropTypes.node,
        icon: PropTypes.string,
        onTabClick: PropTypes.func
    },

    defaultProps: {
        index: 0,
        tab: 0,
        children: [
            {HomePanel},
            {ScanPanel},
            {ListPanel},
            {TimerPanel},
            {RecipePanel},
            {CalendarPanel}
        ]
    },

    styles: {/* unchanged */},

    handlers: {
        onTabClick: (ev, { onTabClick }) => {
            if (onTabClick) {
                onTabClick({
                    tab: ev.children
                });
                // children({
                //     index: ev.tab
                // });
            }
        }
    },

    render: ({children}) => (
        <TabLayout>
            <Tab title="Home" icon="home">
                <Item>Home</Item>
                <HomePanel/>
            </Tab>
            <Tab title="Scan" icon="picture">
                <Item>Scan</Item>
                <ScanPanel/>
            </Tab>
            <Tab title="List" icon="list">
                <Item>List</Item>
                <ListPanel/>
            </Tab>
            <Tab title="Timer" icon="timer">
                <Item>Timer</Item>
                <TimerPanel/>
            </Tab>
            <Tab title="Recipe" icon="guide">
                <Item>Recipe</Item>
                <RecipePanel/>
            </Tab>
            <Tab title="Calendar" icon="checker">
                <Item>Calendar</Item>
                <CalendarPanel/>
            </Tab>
        </TabLayout>
    )
});

export default MainTabLayout;