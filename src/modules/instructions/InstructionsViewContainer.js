import { compose, withState } from 'recompose';

import InstructionsScreen from './InstructionsView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  InstructionsScreen,
);
