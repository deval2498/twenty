import { createState } from 'twenty-ui';

export const confirmationModalState = createState<boolean | false>({
  key: 'activities/confirmtion-modal-state',
  defaultValue: false,
});
