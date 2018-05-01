// Step 05 - Global and Local Configuration Options
Chart.defaults.global.animation.duration = 700; // Animation Speed 
Chart.defaults.scale.ticks.beginAtZero = true; // Graph Begins at Zero
Chart.defaults.global.legend.display = true; // Hide or Show Legend 
Chart.defaults.global.legend.position = 'bottom'; // Legend Position

// Step 02 - Creating a hook 
let woodyChart = document.getElementById("mainChart");

// Step 03 - Setting the data object
let woodData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
        label: "No. of Wood Packs Used",   
        fill: false,                       
        backgroundColor: 'rgba(249, 241, 0, 0.7)',
        borderColor: 'rgba(249, 241, 0, 0.7)', //yellow
        data: [3, 5, 12, 21, 11, 15, 20],
    }, 
    { 
        label: "No. of Wood Packs Purchased",
        fill: true,
        backgroundColor: 'rgba(10, 140, 255, 0.7)',
        borderColor: 'rgba(10, 140, 255, 0.7)', //blue 
        data: [0, 0, 0, 8, 0, 0, 0],
    },
    { 
        label: "No. of Wood Packs Chopped",   // label seen on legend
        fill: false, // boolean if charted area should be filled with color 
        backgroundColor: 'rgba(249, 0, 8, 0.7)', // chart point color 
        borderColor: 'rgba(249, 0, 8, 0.7)', //red  // chart fill color 
        data: [10, 15, 12, 15, 12, 12, 24], // data to be plotted 
    },   
    { 
        label: "No. of guests at the chalet", // CHALLENGE! 
        fill: false,
        backgroundColor: 'green',
        borderColor: 'green', //green 
        data: [8, 7, 10, 19, 12, 9, 11],
    },
]};

// Step 04 - Instantiate our Chart!
let myChart = new Chart(woodyChart, {
    type: "line",
    data: woodData,
    options: {  // locally defining options 
        responsive: true, 
        maintainAspectRatio: true,
        animation: {  
            duration: 2000 // overriding global default
        },
    }
});
