import React from 'react';
import FilteredList from './318';

function App() {
  const ages = [70, 83, 38, 65, 49, 94];

  const olderThan60 = ages.filter(function(age) {
    return age > 60;
  });

  const count = olderThan60.length;

  return (
    <div>
      <h1>Age Verification Dashboard</h1>
      <hr />
      
      <FilteredList agesList={olderThan60} totalCount={count} />
    </div>
  );
}

export default App;