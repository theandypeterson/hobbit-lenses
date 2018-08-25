import * as React from 'react';

export interface UIProps {
  frodoIsSelected: boolean;
  onFrodoCheckboxClicked(): void;
}

export const ChecklistUI = (props: UIProps) => {
  return (
    <div>
      <label>
        Frodo
        <input
          type="checkbox"
          checked={props.frodoIsSelected}
          onChange={props.onFrodoCheckboxClicked}
        />
      </label>
    </div>
  );
};
