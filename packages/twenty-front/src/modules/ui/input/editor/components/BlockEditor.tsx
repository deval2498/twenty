import { useEffect } from 'react';
import { ClipboardEvent } from 'react';
import { BlockColorsItem, DragHandleMenu, SideMenu, SuggestionMenuController, RemoveBlockItem } from '@blocknote/react';
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { SideMenuController } from '@blocknote/react';
import { blockSchema } from '@/activities/blocks/schema';
import { ResetBlockTypeItem } from '@/ui/input/editor/components/ResetBlockTypeItem';
import { blockConfirmationModalState } from '@/object-record/record-right-drawer/states/blockConfirmationModalState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ConfirmationModal } from '@/ui/layout/modal/components/BlockEditorConfirmationModal';
import { selectedBlocksState } from '@/object-record/record-right-drawer/states/selectedBlocksState';

interface BlockEditorProps {
  editor: typeof blockSchema.BlockNoteEditor;
  onFocus?: () => void;
  onBlur?: () => void;
  onPaste?: (event: ClipboardEvent) => void;
  onChange?: () => void;
}

const StyledEditor = styled.div`
  width: 100%;
  & .editor {
    background: ${({ theme }) => theme.background.primary};
    font-size: 13px;
    color: ${({ theme }) => theme.font.color.primary};
  }
  & .editor [class^='_inlineContent']:before {
    color: ${({ theme }) => theme.font.color.tertiary};
    font-style: normal !important;
  }
  & .editor .bn-inline-content:has(> .ProseMirror-trailingBreak):before {
    font-style: normal;
  }
  & .mantine-ActionIcon-icon {
    width: 20px;
  }
  & .bn-container .bn-drag-handle {
    width: 20px;
    height: 20px;
  }
`;

export const BlockEditor = ({
  editor,
  onFocus,
  onBlur,
  onChange,
  onPaste,
}: BlockEditorProps) => {
  const theme = useTheme();
  const blockNoteTheme = theme.name === 'light' ? 'light' : 'dark';

  const handleFocus = () => {
    onFocus?.();
  };

  const handleBlur = () => {
    onBlur?.();
  };

  const handleChange = () => {
    onChange?.();
  };

  const handlePaste = (event: ClipboardEvent) => {
    onPaste?.(event);
  };

  const [isConfirmationModalOpen, setConfirmationModal] = useRecoilState(blockConfirmationModalState)
  const selectedBlocksValue = useRecoilValue(selectedBlocksState)
  useEffect(() => {
}, [isConfirmationModalOpen]);

const handleConfirm = () => {
  if(selectedBlocksValue.block) {
    editor.removeBlocks([selectedBlocksValue.block]);
  }
  setConfirmationModal(false); // Close the modal after confirming
};

  return (
    <StyledEditor>
      <BlockNoteView
        onFocus={handleFocus}
        onBlur={handleBlur}
        onPaste={handlePaste}
        onChange={handleChange}
        editor={editor}
        theme={blockNoteTheme}
        slashMenu={false}
        sideMenu={false}
      >
      <SideMenuController
        sideMenu={(props) => (
          <SideMenu
            {...props}
            dragHandleMenu={(props) => (
              <DragHandleMenu {...props}>
                <RemoveBlockItem {...props}>Delete</RemoveBlockItem>
                <BlockColorsItem {...props}>Colors</BlockColorsItem>
                {/* Item which resets the hovered block's type. */}
                <ResetBlockTypeItem {...props}>Reset Type</ResetBlockTypeItem>
              </DragHandleMenu>
            )}
          />
        )}
      />
      <ConfirmationModal 
        isOpen={isConfirmationModalOpen}
        title="Confirm Deletion"
        subtitle="Are you sure you want to delete this activity?"
        setIsOpen={setConfirmationModal}
        onConfirmClick={handleConfirm}
        deleteButtonText="Delete"
        confirmButtonAccent="danger"
      />
      </BlockNoteView>
    </StyledEditor>
  );
};
