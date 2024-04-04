import React from 'react';

export function GammaStatistics({ data }) { 

  return (
    <div className="table-container">
      <h2>Statistics for Gamma</h2>
      <table style={{ width: "100%" }}>
        <thead>
        <tr>
          <th>Measure</th>
          <th>Class1</th>
          <th>Class2</th>
          <th>Class..</th>
          <th>Class..</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Gamma Mean</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Gamma Median</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Gamma Mode</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}


 
