import 'bulma/css/bulma.css';
import React from 'react';

interface Props {
  isLight: string;
  activeButton: string;
  setActiveButton: (value: string) => void;
  resetVisible: boolean;
  setResetVisible: (value: boolean) => void;
  isReverse: boolean;
  setIsReverse: (value: boolean) => void;
  handleSort: (field: string) => void;
}

export const Buttons: React.FC<Props> = ({
  isLight,
  activeButton,
  setActiveButton,
  resetVisible,
  setResetVisible,
  isReverse,
  setIsReverse,
  handleSort
}) => {
  return (
    <div className="buttons">
      {[
        ['Sort alphabetically', 'is-info'],
        ['Sort by length', 'is-success'],
      ].map(([label, style]) => (
        <button
          key={label}
          type="button"
          className={`button ${style} ${activeButton !== label ? isLight : ''}`}
          onClick={() => {
            setActiveButton(label);
            handleSort(label);
            setResetVisible(true);
          }}
        >
          {label}
        </button>
      ))}

      <button
        type="button"
        className={`button is-warning ${!isReverse ? isLight : ''}`}
        onClick={() => {
          handleSort('Reverse');
        }}
      >
        Reverse
      </button>

      {resetVisible && (
        <button
          type="button"
          className="button is-danger is-light"
          onClick={() => {
            handleSort('Reset');
            setResetVisible(false);
            setActiveButton('');
            setIsReverse(false);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
