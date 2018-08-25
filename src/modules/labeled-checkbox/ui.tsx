import * as React from 'react';

interface UIProps {
  isChecked: boolean;
  onChange(): void;
  label: string;
}

export const LabeledCheckboxUI = (props: UIProps) => {
  return (
    <div>
      <label>
        {props.label}
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
}
