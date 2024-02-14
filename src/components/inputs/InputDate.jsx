import Calendar from 'react-calendar';
import { useState } from 'react';

const InputDate = ({ text }) => {
  const [value, onChange] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleShowCalendar = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <label htmlFor="limitdate">
      <span>{text}</span>
      <input
        className="is-hidden"
        type="text"
        name="limitdate"
        id="limitdate"
        value={value.toISOString()}
      />
      <button className="button is-small" onClick={(e) => handleShowCalendar(e)}>
        {value.toLocaleDateString()}
      </button>
      {show && (
        <div className="is-relative">
          <div style={{ position: 'absolute', zIndex: 9 }}>
            <Calendar key={'calendar'} onChange={onChange} value={value} />
          </div>
        </div>
      )}
    </label>
  );
};

export default InputDate;
