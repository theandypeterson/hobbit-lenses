import * as React from 'react';
import { LabeledCheckbox } from '../labeled-checkbox';

export interface UIProps {
  frodoIsSelected: boolean;
  onFrodoCheckboxClicked(): void;
  samwiseIsSelected: boolean;
  onSamwiseCheckboxClicked(): void;
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
    </div>
  );
};
