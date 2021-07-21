import kind from '@enact/core/kind';
import TabLayout, { Tab } from '@enact/sandstone/TabLayout';
import Item from '@enact/sandstone/Item'


import HomePanel from '../views/HomePanel';
import ScanPanel from '../views/ScanPanel';
import ListPanel from '../views/ListPanel';
import TimerPanel from '../views/TimerPanel';
import RecipePanel from '../views/RecipePanel';
import CalendarPanel from '../views/CalendarPanel';

const MainTabLayout = kind({
    name: 'MainTabLayout',

    render: () => (
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