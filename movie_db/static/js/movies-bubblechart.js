console.log("movies-bubblechart.js")

// Fetch data from the API endpoint
fetch('/api/directors')
.then(response => response.json())
.then(data => {
  console.log(data)
  // Extract data for the chart
  const labels = data.map(movie => movie.title);
  const directors = data.map(movie => movie.director);
  const revenues = data.map(movie => movie.revenue);
  console.log("labels")
  console.log(labels)
  console.log("directors")
  console.log(directors)
  console.log("revenues")
  console.log(revenues)  

  // Create a data object for the chart
  const chartData = {
    labels: labels,
    datasets: [{
      label: 'Movies',
      data: revenues,
      backgroundColor: 'rgba(75, 192, 192, 0.5)', // Set bubble background color
      borderColor: 'rgba(75, 192, 192, 1)', // Set bubble border color
      borderWidth: 1, // Set bubble border width
      hoverRadius: 10, // Set hover radius for bubbles
      hoverBorderWidth: 2 // Set hover border width for bubbles
    }]
  };

  // Create a chart using Chart.js
  new Chart(document.getElementById('bubbleChart'), {
    type: 'bubble',
    data: {
      labels: labels,
      datasets: [{
        label: 'Movies',
        data: data.map(movie => ({
          x: movie.director,
          y: movie.revenue,
          r: 10 // Set bubble radius
        })),
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Set bubble background color
        borderColor: 'rgba(75, 192, 192, 1)', // Set bubble border color
        borderWidth: 1, // Set bubble border width
        hoverRadius: 10, // Set hover radius for bubbles
        hoverBorderWidth: 2 // Set hover border width for bubbles
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Director' // Set x-axis label
          }
        },
        y: {
          title: {
            display: true,
            text: 'Revenue' // Set y-axis label
          }
        }
      }
    }
  });
})
.catch(error => console.error('Error fetching data:', error));
