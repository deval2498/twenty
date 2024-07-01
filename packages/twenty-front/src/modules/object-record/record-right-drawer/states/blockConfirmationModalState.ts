import { createState } from 'twenty-ui';

export const blockConfirmationModalState = createState<boolean | false>({
  key: 'blockEditor/block-confirmtion-modal-state',
  defaultValue: false,
});
