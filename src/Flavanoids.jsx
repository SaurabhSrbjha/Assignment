import React, { useState, useEffect } from "react";

export function Flavanoids({ data }) {
  const alcoholClasses = data.map(entry => entry.alcoholClass);
  const uniqueAlcoholClasses = [...new Set(alcoholClasses)];

  return (
    <div className="table-container">
      <h2>Statistics for Flavanoids</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {uniqueAlcoholClasses.map((alcoholClass) => (
              <th key={alcoholClass}>Class {alcoholClass}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mean</td>
            {uniqueAlcoholClasses.map((alcoholClass) => {
              const entry = data.find(
                (entry) => entry.alcoholClass === alcoholClass
              );
              return (
                <td key={`${alcoholClass}-mean`}>{entry.mean.toFixed(2)}</td>
              );
            })}
          </tr>
          <tr>
            <td>Median</td>
            {uniqueAlcoholClasses.map((alcoholClass) => {
              const entry = data.find(
                (entry) => entry.alcoholClass === alcoholClass
              );
              return (
                <td key={`${alcoholClass}-median`}>
                  {entry.median.toFixed(2)}
                </td>
              );
            })}
          </tr>
          <tr>
            <td>Mode</td>
            {uniqueAlcoholClasses.map((alcoholClass) => {
              const entry = data.find(
                (entry) => entry.alcoholClass === alcoholClass
              );
              return <td key={`${alcoholClass}-mode`}>{entry.mode}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
