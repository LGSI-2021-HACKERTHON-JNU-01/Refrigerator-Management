
import kind from "@enact/core/kind";
import { Header, Panel } from "@enact/sandstone/Panels";
import Button from '@enact/sandstone/Button';

const HomePanel = kind({
  name: 'HomePanel',

  render: (props) => (
      <Panel {...props}>
          <Header title="fruit/rotten recognition" />
          <Button size="small" onClick={(e) => {
            e.preventDefault();
            window.location.href='http://localhost:3000/';
          }}>
            rotten recognition
          </Button>
          <Button size="small" onClick={(e) => {
            e.preventDefault();
            window.location.href='http://localhost:7000/fruit.html';
          }}>
            fruit recognition
          </Button>
          
      </Panel>
  )

});

export default HomePanel;
