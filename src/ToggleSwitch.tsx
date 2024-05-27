import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch = (props: ToggleSwitchProps) => {
  const { checked, onChange } = props;
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="slider round">Show All</span>
    </label>
  );
};

export default ToggleSwitch;
