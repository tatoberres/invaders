var app = {
    invader: document.getElementById("invader"),
    myTable: document.createElement("table"),
    gridSize: 8,
    pixelSize: 20,
    classColor: '',
    classPlain: 'plain',
    classEmpty: 'empty',
    classLight: 'light',
    classHightLight: 'hightlight',
    inputGrid: document.createElement("input"),
    inputPixel: document.createElement("input"),
    submit: document.createElement("button"),
    form: document.getElementsByClassName('configuration'),
    formMaker: function() {
        app.inputGrid.id = 'grid';
        app.inputGrid.type = 'number';
        app.inputGrid.placeholder = 'Taille de la grille' ;
        app.inputPixel.id = 'pixel';
        app.inputPixel.type = 'number';
        app.inputPixel.placeholder = 'Taille des pixels' ;
        app.submit.id ='button';
        app.submit.type = 'submit';
        app.submit.textContent = 'Valider';
        app.form[0].appendChild(app.inputGrid);
        app.form[0].appendChild(app.inputPixel);
        app.form[0].appendChild(app.submit);
    },
    tableMaker: function(num, pixel) {
        app.myTable.classList.add("table-chart");
        app.invader.appendChild(app.myTable);
        app.myTable.innerHTML = '';
        for (var i = 0; i < num; i++) {
            var myTr = document.createElement("tr");
            myTr.classList.add("table-row");
            app.myTable.appendChild(myTr);
            
            for (var index = 0; index < num; index++) {
                var myTd = document.createElement("td");
                myTd.classList.add("table-cell");
                myTr.appendChild(myTd);
                myTd.style.width = pixel + "px";
                myTd.style.height = pixel + "px";
            }
        }
    },
    colorChanger: function(){
        var tableCell = document.getElementsByClassName('table-cell');
        app.classColor = app.stylesClass();
        console.log(app.classColor);
        for (var i = 0; i < tableCell.length; i++) {
            tableCell[i].addEventListener('click', function(event) {
                event.target.classList.toggle(app.classColor);
            })
        };
    },
    valueGetter: function(){
        app.form[0].addEventListener('submit',function(e){
            app.gridSize = document.getElementById("grid").value;
            console.log(app.gridSize);
            app.pixelSize = document.getElementById("pixel").value;
            console.log(app.pixelSize);
            e.preventDefault();
            
            app.tableMaker(app.gridSize, app.pixelSize);
            app.colorChanger();
        });
    },
    stylesClass: function() {
        var stylesColor = document.getElementById('color-choice');
        stylesColor.addEventListener('click',function(evt){
            if (evt.target.className === 'plain'){
                console.log(app.styles[0]);
                app.classColor = app.styles[0];
            } else if (evt.target.className === 'empty'){
                console.log(app.styles[1]);
                app.classColor =  app.styles[1];
            } else if (evt.target.className === 'light'){
                console.log(app.styles[2]);
                app.classColor = app.styles[2];
            } else if (evt.target.className === 'hightlight'){
                console.log(app.styles[3]);
                app.classColor = app.styles[3];
            }
        });
    },
    init: function(){
        app.formMaker();
        app.tableMaker(app.gridSize, app.pixelSize);
        app.colorChanger();
        app.valueGetter();
    },
    styles: ['plain', 'empty', 'light', 'hightlight'],
}

app.init();