import {
  CheckCircleOutlined,
  EllipsisOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import React from 'react';
import './EventCardFooter.css';

const EventCardFooter: React.FC<{}> = () => {
  return (
    <div className="card-footer">
      <div className="card-footer-item">
        <CheckCircleOutlined />
      </div>

      <div className="card-footer-item">
        <ShareAltOutlined />
      </div>

      <div className="card-footer-item">
        <EllipsisOutlined />
      </div>
    </div>
  );
};

export default EventCardFooter;
