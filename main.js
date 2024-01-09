document.addEventListener('DOMContentLoaded', function() {
    var data = [{
      type: "sunburst",
      labels: ["project", "moda2202","FrontEnd", "BackEnd", "Sunburst Char","abkh2100", "FrontEnd.", "BackEnd.", "commints",
      "rest-data-source.js","add-trainee.js","main.js 50 %","data-source.js & add-students.html",".post & .delete methods (app.js)",
      "dance-school.http.","modify-trainee.js","atlas.js","main.js 50 %.","index.html & modify-trainee.html & style.css", ".get & .put methods (app.js)", "dance-school.http",],
      parents: ["","project", "moda2202", "moda2202", "moda2202","project",
      "abkh2100","abkh2100","abkh2100", "FrontEnd.","FrontEnd.","FrontEnd.","FrontEnd.", "BackEnd.", "BackEnd.","FrontEnd","FrontEnd",
      "FrontEnd","FrontEnd","BackEnd","BackEnd","BackEnd","BackEnd", "Sunburst Char",
       "Sunburst Char", "Sunburst Char", "Sunburst Char"],
      outsidetextfont: {size: 20, color: "#377eb8"},
      leaf: {opacity: 0.4},
      marker: {line: {width: 2}},
    }];
  
    var layout = {
      margin: {l: 0, r: 0, b: 0, t:0},
      sunburstcolorway:["#636efa","#ef553b","#00cc96"],
      extendsunburstcolors: true
    };
  
    Plotly.newPlot('myChart', data, layout);
  });