import { compose, withState } from 'recompose';

import Botran12Screen from './Botran12View';

export default compose(withState('isExtended', 'setIsExtended', false))(
  Botran12Screen,
);
