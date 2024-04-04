import React, { useState, useEffect } from "react";

export function Flavanoids({ data }) {
  const [statistics, setStatistics] = useState({});

  return (
    <div className="table-container">
      <h2>Statistics for Flavanoids</h2>
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
          <td>Flavanoids Mean</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Flavanoids Median</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Flavanoids Mode</td>
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
