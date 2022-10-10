import { compose, withState } from 'recompose';

import Botran15Screen from './Botran15View';

export default compose(withState('isExtended', 'setIsExtended', false))(
  Botran15Screen,
);
