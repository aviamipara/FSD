function PB305_2(props){

  // Apply the filter to skip digits less than 10 (Keep numbers >= 10)
  const filteredNumbers = props.numbers.filter(num => num >= 10);

  return (
    <div>
      <h3>Original Array:</h3>
      <p>[{props.numbers.join(', ')}]</p>

      <h3>Filtered Array (Numbers greter than 10):</h3>
      <ul>
        {filteredNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}
export default PB305_2