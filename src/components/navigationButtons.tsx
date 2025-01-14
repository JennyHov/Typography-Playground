import React from 'react';
import RightArrow from '../assets/icons/arrow-right.svg';
import LeftArrow from '../assets/icons/arrow-left.svg';


interface NavigationButtonsProps {
  goToNextPage: () => void;
  goToPrevPage: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div className="navigation-buttons">
      <button onClick={goToPrevPage} className="nav-button">
        <img src={LeftArrow} alt="Previous" />
      </button>
      <button onClick={goToNextPage} className="nav-button">
        <img src={RightArrow} alt="Next" />
      </button>
    </div>
  );
};

export default NavigationButtons;
