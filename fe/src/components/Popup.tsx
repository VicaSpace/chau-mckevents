import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import './Popup.css';

const PopUp: React.FC<{
  heading: string;
  setIsOpen: Function;
  children: React.ReactNode;
}> = ({ heading, setIsOpen, children }) => {
  return (
    <>
      <div className={'darkBG'} onClick={() => setIsOpen(false)} />
      <div className={'centered'}>
        <div className={'modal'}>
          <div className={'modalHeader'}>
            <h5 className={'heading'}>{heading}</h5>
          </div>
          <button className={'closeBtn'} onClick={() => setIsOpen(false)}>
            <CloseOutlined style={{ marginBottom: '-3px' }} />
          </button>
          <div className={'modalContent'}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
