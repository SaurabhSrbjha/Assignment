import React, { useState, useEffect } from "react";
import wineData from "../wine-data.json";
import { Utils } from "./Utilities/Utils";
export function Flavanoids() {
  const [data, setData] = useState([]);
  const [values, setValues] = useState([]);

  // Function to calculate class-wise mean, median, and mode of Flavanoids
  function calculateFlavanoidsStats(data) {
    const classes = {};
    data.forEach((checkSaurabh) => {
      const alcoholClass = checkSaurabh["Alcohol"];
      const flavanoids = checkSaurabh["Flavanoids"];
      if (!classes[alcoholClass]) {
        classes[alcoholClass] = [];
      }
      classes[alcoholClass].push(flavanoids);
    });

    const results = [];
    for (const alcoholClass in classes) {
      const flavanoidsData = classes[alcoholClass];
      const mean = Utils.calculateMean(flavanoidsData);
      const median = Utils.calculateMedian(flavanoidsData);
      const mode = Utils.calculateMode(flavanoidsData);
      results.push({
        alcoholClass,
        mean,
        median,
        mode,
      });
    }
    return results;
  }

  useEffect(() => {
    const flavanoidsStats = calculateFlavanoidsStats(wineData);
    if (flavanoidsStats != null && flavanoidsStats != undefined) {
      setData(flavanoidsStats);
      const alcoholClasses = flavanoidsStats.map((entry) => entry.alcoholClass);
      const uniqueAlcoholClasses = [...new Set(alcoholClasses)];
      setValues(uniqueAlcoholClasses);
    }
  }, []);

  return (
    <div className="table-container">
      <h2>Statistics for Flavanoids</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {values &&
              values?.map((alcoholClass) => (
                <th key={alcoholClass}>Class {alcoholClass}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mean</td>
            {values &&
              values?.map((alcoholClass) => {
                const entry = data.find(
                  (entry) =>
                    Number(entry?.alcoholClass) === Number(alcoholClass)
                );
                return (
                  <td key={`${alcoholClass}-mean`}>
                    {entry?.mean?.toFixed(2)}
                  </td>
                );
              })}
          </tr>
          <tr>
            <td>Median</td>
            {values &&
              values?.map((alcoholClass) => {
                const entry = data.find(
                  (entry) => entry.alcoholClass === alcoholClass
                );
                return (
                  <td key={`${alcoholClass}-median`}>
                    {entry?.median?.toFixed(2)}
                  </td>
                );
              })}
          </tr>
          <tr>
            <td>Mode</td>
            {values &&
              values?.map((alcoholClass) => {
                const entry = data.find(
                  (entry) => entry?.alcoholClass === alcoholClass
                );
                return <td key={`${alcoholClass}-mode`}>{entry?.mode}</td>;
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
