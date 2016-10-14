var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var artilcleone = {
    title:'article-one',
    heading:'lets start our web app',
    date:'13 oct,2016',
    content: '<p>hello,friends my name is NAMAN YADAV</p>',
    };
    function createtemplate (data) {
        var title=data.title;
        var heading=data.heading;
        var content=data.content;
        var date=data.date;
    var htmltemplate =
         '<html>'
         <head> 
          '<title>'
         '<center>${title}</center>'
         '</title>'
        '<link href="/ui/style.css" rel="stylesheet" />'
       '</head>'
       ' <div>'
       '${date}'
       ' </div>'
    <div>
                    '<a href = "artilcle-one.html">home</a>'
               '</div>'
               ' <div class="naman">'
                <h1>
                 ' <B><U>  ${heading}</B></U>'
                <p>
                  ' <center>${content}</center>'
               ' </h1>'
                '</div>'
                '</body>'
'</html>';
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artilcle-one',function(req,res) {
  res.send(createtemplate(artilcleone));
});

app.get('/article-two',function(req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
