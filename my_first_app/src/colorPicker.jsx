import React,  {useState} from 'react';

function ColorPicker() {
  const [color, setColor] = useState("#000000");

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <div className='color-picker-cont' style={{background: color}}>
        <p>Selected Color is : {color}</p>
      </div>
      <label>Select A Color:</label>
        <input type="color" value={color} onChange={handleChange} />
    </div>
  );
}
export default ColorPicker;