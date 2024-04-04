import React from 'react';



export function GammaStatistics({ data }) { 
  const alcoholClasses = data.map(entry => entry.alcoholClass);
  const uniqueAlcoholClasses = [...new Set(alcoholClasses)];

  return (
    <div className="table-container">
      <h2>Statistics for Gamma</h2>
      <table>
      <thead>
        <tr>
          <th>Measure</th>
          {uniqueAlcoholClasses.map(alcoholClass => (
            <th key={alcoholClass}>Class {alcoholClass}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mean (Gamma)</td>
          {uniqueAlcoholClasses.map(alcoholClass => {
            const entry = data.find(entry => entry.alcoholClass === alcoholClass);
            return <td key={`${alcoholClass}-mean`}>{entry.mean.toFixed(2)}</td>;
          })}
        </tr>
        <tr>
          <td>Median (Gamma)</td>
          {uniqueAlcoholClasses.map(alcoholClass => {
            const entry = data.find(entry => entry.alcoholClass === alcoholClass);
            return <td key={`${alcoholClass}-median`}>{entry.median.toFixed(2)}</td>;
          })}
        </tr>
        <tr>
          <td>Mode (Gamma)</td>
          {uniqueAlcoholClasses.map(alcoholClass => {
            const entry = data.find(entry => entry.alcoholClass === alcoholClass);
            return <td key={`${alcoholClass}-mode`}>{entry.mode}</td>;
          })}
        </tr>
      </tbody>
    </table>
    </div>
  );
}


 
