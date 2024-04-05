import React, { useState, useEffect } from "react";
import wineData from "../wine-data.json";
import { Utils } from "./Utilities/Utils";

export function Gamma() {
  const [data, setData] = useState([]);
  const [values, setValues] = useState([]);

  // Function to calculate Gamma for each point in the dataset
  function calculateGamma(data) {
    return data.map((point) => ({
      ...point,
      "Gamma": (point.Ash * point.Hue) / point.Magnesium
    }));
  }

  // Function to calculate class-wise mean, median, and mode of Gamma
  function calculateGammaStats(data) {
    const classes = {};
    data.forEach((point) => {
      const wineClass = point["Alcohol"];
      const gamma = point["Gamma"];
      if (!classes[wineClass]) {
        classes[wineClass] = [];
      }
      classes[wineClass].push(gamma);
    });

    const results = [];
    for (const wineClass in classes) {
      const gammaData = classes[wineClass];
      const mean = Utils.calculateMean(gammaData);
      const median = Utils.calculateMedian(gammaData);
      const mode = Number(Utils.calculateMode(gammaData));
      results.push({
        wineClass,
        mean,
        median,
        mode,
      });
    }
    return results;
  }

  useEffect(() => {
    const gammaData = calculateGamma(wineData);
    setData(gammaData);
    const gammaStats = calculateGammaStats(gammaData);
    setValues(gammaStats);
  }, []);

  return (
    <div className="table-container">
      <h2>Statistics for Gamma</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {values &&
              values.map((wineClass, index) => (
                <th key={`${index}`}>Class {wineClass?.wineClass}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mean</td>
            {values &&
              values.map((wineClass,index) => {
                return (
                  <td key={`${wineClass}--${index}-mean`}>
                    {wineClass?.mean?.toFixed(2)}
                  </td>
                );
              })}
          </tr>
          <tr>
            <td>Median</td>
            {values &&
              values.map((wineClass,index) => {
                return (
                  <td key={`${wineClass}--${index}-median`}>
                    {wineClass?.mean?.toFixed(2)}
                  </td>
                );
              })}
          </tr>
          <tr>
            <td>Mode</td>
            {values &&
              values.map((wineClass, index) => {
                return <td key={`${wineClass}-${index}-mode`}>{wineClass?.mode?.toFixed(2)}</td>;
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
