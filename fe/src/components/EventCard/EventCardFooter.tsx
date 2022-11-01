import {
  CheckCircleOutlined,
  EllipsisOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import React from 'react';
import './EventCardFooter.css';

const EventCardFooter: React.FC<{ status: string }> = ({ status }) => {
  return (
    <div className="card-footer" data-testid="test-card-footer">
      <div className="card-footer-item">
        <CheckCircleOutlined
          data-testid="check-icon"
          style={status === 'CONFIRMED' ? { color: 'green' } : {}}
        />
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
