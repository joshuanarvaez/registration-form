// import React, { useState } from 'react';
// import moment from 'moment';
// import validator from 'validator'


// const ValidateDate = (props) => {
//   const { value, setValue } = props;
//   const [dateError, setDateError] = useState('')
    
//   const validateDate = (value) => {
//     const date = moment(value, 'MM/DD/YYYY', true);
//     if (date.isValid()) {
//       setDateError('');
//       setValue(value);
//     } else {
//       setDateError('Please enter a valid date');
//     }
//   }
//   return (
//       <input type="text" value={value} onChange={(e) => validateDate(e.target.value)} />
//   );
// }

// export default ValidateDate;
