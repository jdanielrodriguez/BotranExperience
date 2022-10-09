import { compose, withState } from 'recompose';

import Botran18Screen from './Botran18View';

export default compose(withState('isExtended', 'setIsExtended', false))(
  Botran18Screen,
);
