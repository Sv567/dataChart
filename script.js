const mychart = document.getElementById('myChart') ;

new Chart(mychart, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: '# Monthly Sales',
        data: [66, 59, 80, 81, 56, 38],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

