// Write a ReactJS code in which we have apply filter to skip digits which are less than “10” from 
// the array and display all remaining digits of the array [3,5,11,4,17,8,21,2,26,13,8]. Pass values 
// as props.

import PB305_2 from './305_2'
function PB305(){
   const arr = [3, 5, 11, 4, 17, 8, 21, 2, 26, 13, 8];

  return (
    <div>
      <h2>React Props Filtering Assignment</h2>
      <PB305_2 numbers={arr} />
    </div>
  );
}
export default PB305
