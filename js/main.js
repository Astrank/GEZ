var images = {
    dibujos: [
        "media/DSCN0232.jpg...jpg",
        "media/ceibos en....jpg",
        "media/criollos argentinos...jpg",
        "media/cru vi.jpg",
    ],
    oleos: [
        "media/1.jpg",
        "media/23549946_168597597069858_862215589665002282_o.jpg",
        "media/cap campo.jpg",
        "media/blog via.jpg",
    ],
    acuarelas: [
        "media/DSCN0074.jpg...jpg",
        "media/DSCN0087.jpg",
        "media/El descanso.jpg",
        "media/pensan.jpg",
    ],
    acrilicos: [
        "media/la siest.jpg",
        "media/vias 4.jpg",
        "media/DSCN0246.jpg..jpg",
        "media/dunamar.. ..jpg"
    ]
};

var column = "";

getImages("null");

function getImageSources(input) {
    var array = [];

    if(input != "null") {
        for (let i = 0; i < images[input].length; i++) {
            array.push(images[input][i]);
        }

        return array;
    }
    else {
        for (let i = 0; i < Object.keys(images).length; i++) {
            for (let y = 0; y < images[Object.keys(images)[i]].length; y++) {
                array.push(images[Object.keys(images)[i]][y]);                
            }
        }

        return array;
    }
}

function getImages(input) {
    removeImages();
    var array = getImageSources(input);

    array.forEach(img => {

        switch (column) {
            case "column-one":
                column = "column-two";
                break;
            case "column-two":
                column = "column-three";
                break;
            case "column-three":
                column = "column-one";
                break;
            
            default:
                column = "column-one";
                break;
        }

        var newImg = document.createElement("IMG");
        newImg.src = img;

        document.getElementsByClassName(column)[0].appendChild(newImg);
    });
};

function removeImages() {
    column = "";
    var columns = [
        document.getElementsByClassName("column-one"),
        document.getElementsByClassName("column-two"),
        document.getElementsByClassName("column-three")
    ];

    for (let i = 0; i < columns.length; i++) {
        while(columns[i][0].firstChild) {
            columns[i][0].removeChild(columns[i][0].lastChild);
        }
    }
};