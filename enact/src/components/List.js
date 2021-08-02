import kind from '@enact/core/kind';
import BodyText from '@enact/sandstone/BodyText';
import FetchData from '../components/Data/FetchData';

const List = kind({
  name: 'List',

  render: () => (
    <BodyText>
      <FetchData />
    </BodyText>
  ),
});
