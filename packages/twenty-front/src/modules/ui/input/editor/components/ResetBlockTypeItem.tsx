import { ConfirmationModal } from "@/ui/layout/modal/components/BlockEditorConfirmationModal";
import {
    DragHandleMenuProps,
    useBlockNoteEditor,
    useComponentsContext,
  } from "@blocknote/react";
  import { blockConfirmationModalState } from '@/object-record/record-right-drawer/states/blockConfirmationModalState';
  import { selectedBlocksState } from "@/object-record/record-right-drawer/states/selectedBlocksState";
import { useState, useEffect } from "react"; 
import { useRecoilState } from "recoil";
  export function ResetBlockTypeItem(props: DragHandleMenuProps) {
    const editor = useBlockNoteEditor();
   
    const Components = useComponentsContext()!;

    // State to manage the modal visibility
    const [isConfirmationModalOpen, setConfirmationModal] = useRecoilState(blockConfirmationModalState)
    const [selectedBlocks, setSelectedBlocks] = useRecoilState(selectedBlocksState) 

  // Handler to open the modal
  const openConfirmationModal = () => {
    setConfirmationModal(true);
    setSelectedBlocks(props)
  };

  // Handler to confirm the action
 
   
    return (
      <>
      <Components.Generic.Menu.Item
        onClick={openConfirmationModal}>
        Reset Type
      </Components.Generic.Menu.Item>
    </>
    );
  }