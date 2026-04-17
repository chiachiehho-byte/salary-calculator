function formatNumber(num) {
  return Number(num).toLocaleString("zh-TW");
}

function calculateBonus(equivalentRevenue) {
  // 先用示範規則，之後再換成你的正式級距
  if (equivalentRevenue >= 500000) {
    return equivalentRevenue * 0.0075;
  } else {
    return equivalentRevenue * 0.005;
  }
}

document.getElementById("calcBtn").addEventListener("click", function () {
  const baseSalary = Number(document.getElementById("baseSalary").value);
  const jobAllowance = Number(document.getElementById("jobAllowance").value);
  const revenue = Number(document.getElementById("revenue").value);
  const consultDays = Number(document.getElementById("consultDays").value);
  const totalDays = Number(document.getElementById("totalDays").value);

  if (consultDays <= 0 || totalDays <= 0 || consultDays > totalDays) {
    alert("請確認諮詢天數與總上班天數是否正確");
    return;
  }

  const originalDays = totalDays - consultDays;
  const equivalentRevenue = revenue / consultDays * totalDays;
  const actualAllowance = jobAllowance * (originalDays / totalDays);
  const bonus = calculateBonus(equivalentRevenue);
  const totalIncome = baseSalary + actualAllowance + bonus;

  document.getElementById("originalDays").textContent =
    formatNumber(originalDays);

  document.getElementById("equivalentRevenue").textContent =
    formatNumber(Math.round(equivalentRevenue));

  document.getElementById("actualAllowance").textContent =
    formatNumber(Math.round(actualAllowance));

  document.getElementById("bonus").textContent =
    formatNumber(Math.round(bonus));

  document.getElementById("totalIncome").textContent =
    formatNumber(Math.round(totalIncome));
});