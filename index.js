var http = require('http');
var fs = require('fs');
let date_ob = new Date();
var test = 0
var cud
var trd
var nc
http.createServer(function (req, res) {

  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();


  
  const datad = fs.readFileSync('cd.txt', 'utf8')
  const datam = fs.readFileSync('cm.txt', 'utf8')
  const datay = fs.readFileSync('cy.txt', 'utf8')
  trd = false
  if (datad != date) {
    console.log("Day is difrent")
    trd = true;
  } else {
    console.log("THEY ARE THE SAME")
  }
  if (datam != month) {
    console.log("Month Is difrent")
    trd = true;
  } else {
    console.log("THEY ARE THE SAME")
  }
    if (datay != year) {
    console.log("Year is difrent")
    trd = true;
  } else {
    console.log("THEY ARE THE SAME")
  }

  if (trd == true) {
    nc = Math.floor(Math.random() * 9999) + 1000;
    fs.writeFile('cd.txt', date, function (err) {
      if (err) throw err;
      console.log('Day saved!');
    });
    fs.writeFile('cm.txt', month, function (err) {
      if (err) throw err;
      console.log('Month saved!');
    });
    fs.writeFile('cy.txt', year, function (err) {
      if (err) throw err;
      console.log('Year saved!');
    });
    fs.writeFile('code.txt', nc, function (err) {
      if (err) throw err;
      console.log('Code saved!');
    });
    fs.writeFile('out.html', nc, function (err) {
      if (err) throw err;
      console.log('Html saved!');
    });

  } else {
    const code2 = fs.readFileSync('code.txt', 'utf8')
    fs.writeFile('out.html', code2, function (err) {
      if (err) throw err;
      console.log('Html saved!');
    });
  }

  console.log("Loaded:", test)
  console.log(date)
  console.log(month)
  console.log(year)
  console.log("=======")
  test = test + 1
  
  

  fs.readFile('out.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
