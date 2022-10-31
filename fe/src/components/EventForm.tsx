import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import './EventForm.css';
import { useForm } from 'react-hook-form';
import { createNewEvent } from '../lib/apis/events';

const EventForm: React.FC<{ setIsOpen: Function }> = ({ setIsOpen }) => {
  const { register, getValues } = useForm();
  const handleSubmit = () => {
    const data = getValues();
    data.startTime = `${data.startDate as string} ${data.startTime as string}`;

    data.officeId = Number(data.officeId);
    data.minParticipants = Number(data.minParticipants);
    data.duration = Number(data.duration);
    data.requiresMinParticipants = true;

    createNewEvent(data)
      .then((res) => {
        alert('Submit successfully');
        setIsOpen(false);
      })
      .catch(console.log);
  };

  return (
    <>
      <div className={'darkBG'} onClick={() => setIsOpen(false)} />
      <div className={'centered'}>
        <div className={'modal'}>
          <div className={'modalHeader'}>
            <h5 className={'heading'}>Event Create Form</h5>
          </div>
          <button className={'closeBtn'} onClick={() => setIsOpen(false)}>
            <CloseOutlined style={{ marginBottom: '-3px' }} />
          </button>
          <div className={'modalContent'}>
            <form className="form-container">
              <label>
                Event name: <input {...register('eventName')} />
              </label>

              <p />

              <label>
                Description: <textarea rows={5} {...register('description')} />
              </label>

              <p />

              <label>
                Event date: <input type="date" {...register('startDate')} />
              </label>

              <p />

              <label>
                Office: <input defaultValue={1} {...register('officeId')} />
              </label>

              <p />

              <label>
                Duration:{' '}
                <input type="number" step="1" {...register('duration')} /> hours
              </label>

              <p />

              <label>
                Time start:{' '}
                <input type="time" step="1" {...register('startTime')} />
              </label>

              <p />

              <label>
                Location: <input type="text" {...register('location')} />
              </label>

              <p />

              <label>
                Minimum participants:{' '}
                <input
                  type="number"
                  step="1"
                  {...register('minParticipants')}
                />
              </label>
            </form>
          </div>
          <div className={'modalActions'}>
            <div className={'actionsContainer'}>
              <button className={'submitBtn'} onClick={handleSubmit}>
                CREATE YOUR EVENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventForm;
