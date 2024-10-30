function maxProfit(timeUnits) {
  let maxEarnings = 0;
  let results = [];

  // Check all combinations of Theatres, Pubs, and Commercial Parks
  for (let t = 0; t <= Math.floor(timeUnits / 5); t++) {  // Theatres
    for (let p = 0; p <= Math.floor(timeUnits / 4); p++) {  // Pubs
      for (let c = 0; c <= Math.floor(timeUnits / 10); c++) {  // Commercial Parks
        let timeSpent = (t * 5) + (p * 4) + (c * 10);

        if (timeSpent <= timeUnits) {
          // Calculate earnings based on remaining time after construction
          let operationalTime = timeUnits - timeSpent;
          let earnings = (t * 1500 * operationalTime) + (p * 1000 * operationalTime) + (c * 3000 * operationalTime);

          // Update results if this combination yields a new maximum
          if (earnings > maxEarnings) {
            maxEarnings = earnings;
            results = [{ T: t, P: p, C: c }];
          } else if (earnings === maxEarnings) {
            // Add to results if it matches the current max earnings
            results.push({ T: t, P: p, C: c });
          }
        }
      }
    }
  }

 
  console.log(`Time Unit: ${timeUnits} Earnings: $${maxEarnings}`);
  results.forEach((result, index) => {
    console.log(`Solution ${index + 1}. T: ${result.T}, P: ${result.P}, C: ${result.C}`);
  });

  return results;
}

maxProfit(13);  