var PieChart = function() {
  var container = document.querySelector('#pie-chart');

  var chart = new Highcharts.Chart({

    chart: {
      type: 'pie',
      renderTo: container
    },
    title: {
      text: "Types of Cards Available"
    },
    series: [{
      name: 'Type',
      data: [{
        name: "Creature",
        y: 21,
        color: "yellow"
      }, {
        name: "Instant",
        y: 15,
        color: "#0000ff"
      }, {
        name: "Enchantment",
        y: 30,
        color: "#00ff00",
      }, {
        name: "Artifact",
        y: 16,
        color: "red",
      }, {
        name: "Sorcery",
        y: 14,
        color: "purple",
      }]
    }]

  });
}