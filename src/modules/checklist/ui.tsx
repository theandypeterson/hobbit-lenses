import * as React from 'react';
import { LabeledCheckbox } from '../labeled-checkbox';

export interface UIProps {
  frodoIsSelected: boolean;
  onFrodoCheckboxClicked(): void;
  samwiseIsSelected: boolean;
  onSamwiseCheckboxClicked(): void;
  peregrinIsSelected: boolean;
  onPeregrinCheckboxClicked(): void;
  meriadocIsSelected: boolean;
  onMeriadocCheckboxClicked(): void;
  allSelected: boolean;
  onSelectAllClicked(): void;
}

export const ChecklistUI = (props: UIProps) => {
  return (
    <div>
      <LabeledCheckbox
        label="Frodo"
        isChecked={props.frodoIsSelected}
        onChange={props.onFrodoCheckboxClicked}
      />
      <LabeledCheckbox
        label="Samwise"
        isChecked={props.samwiseIsSelected}
        onChange={props.onSamwiseCheckboxClicked}
      />
      <LabeledCheckbox
        label="Peregrin"
        isChecked={props.peregrinIsSelected}
        onChange={props.onPeregrinCheckboxClicked}
      />
      <LabeledCheckbox
        label="Meriadoc"
        isChecked={props.meriadocIsSelected}
        onChange={props.onMeriadocCheckboxClicked}
      />
      <LabeledCheckbox
        label="Select All"
        isChecked={props.allSelected}
        onChange={props.onSelectAllClicked}
      />
    </div>
  );
};
