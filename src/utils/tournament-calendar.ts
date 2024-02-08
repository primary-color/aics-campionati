export function generateWeekList(weekCount: number): {label:string, week: number}[] {
  const arr = [];
  for (let week = 1; week <= weekCount; week++) {
    arr.push({
      label: `Giornata ${week}`,
      week,
    });
  }
  return arr;
}
