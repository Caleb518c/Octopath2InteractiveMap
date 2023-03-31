    //Sets all checkboxes on by default.
    document.getElementById("cityCheckbox").checked = true;
    document.getElementById("townCheckbox").checked = true;
    document.getElementById("routeCheckbox").checked = true;
    document.getElementById("caveCheckbox").checked = true;
    document.getElementById("mansionCheckbox").checked = true;
    document.getElementById("shrineCheckbox").checked = true;
    document.getElementById("ruinCheckbox").checked = true;
    document.getElementById("forestCheckbox").checked = true;


    //Hides all expandable text on load
    document.querySelector("#aboutText").style.display = "none";
    document.querySelector("#notesText").style.display = "none";


    //Toggles about section text
    document.getElementById("about").addEventListener("click", function(){
        if (document.getElementById("aboutText").style.display == "flex")
            document.getElementById("aboutText").style.display = "none";
        else
            document.getElementById("aboutText").style.display = "flex";
    })

     //Toggles map notes text
     document.getElementById("notes").addEventListener("click", function(){
        if (document.getElementById("notesText").style.display == "flex")
            document.getElementById("notesText").style.display = "none";
        else
            document.getElementById("notesText").style.display = "flex";
    })

    


    


    //Creates the map object in leaflet, then sets the image and bound for it
    var bounds = [[0,0], [3168, 5632]];

    var mapOptions = {
        crs: L.CRS.Simple, 
        minZoom: -1.75,
        maxZoom: 1,
        maxBounds: bounds, 
        //Makes the map slingshot back onto screen
        maxBoundsViscosity: .3
    }
    var map = L.map('map', mapOptions);
    
    var image = L.imageOverlay('Media/Octopath II Map High Res-min(1)(2).jpg', bounds).addTo(map);
    map.fitBounds(bounds);
    
    //Removes leaflet attribution at the bottom right of the screen
    document.getElementsByClassName('leaflet-control-attribution')[0].style.display = 'none';



    document.querySelector("#menuIcon").addEventListener("click", function(){
        if (document.querySelector("#sideNav").style.width == "0%"){

            if (window.innerWidth > 1000){
                (document.querySelector("#map")).style.width = "85%";
                (document.querySelector("#sideNav")).style.width = "15%";
            }

            else { 
                (document.querySelector("#map")).style.width = "0%";
                (document.querySelector("#map")).style.height = "0%";
                (document.querySelector("#sideNav")).style.width = "100%";
                (document.querySelector("#sideNav")).style.height = "200vh";
            }
    
            
        }
        else{

            if (window.innerWidth > 1000){
            document.querySelector("#sideNav").style.width = "0%";
            document.querySelector("#map").style.width = "100%";
            }

            else { 
                (document.querySelector("#map")).style.width = "100%";
                (document.querySelector("#sideNav")).style.width = "0%";
                (document.querySelector("#map")).style.height = "100vh";
                (document.querySelector("#sideNav")).style.height = "0vh";
            }
        }
    })


    window.onresize = function(){
        
    };






//-------Icons------
{
const iconScale = 113;

var townIcon = L.icon({
    iconUrl: 'Media/Icons/town.png', 
    iconSize: [iconScale/2.2, iconScale/2.8]
});
var cityIcon = L.icon({
    iconUrl: 'Media/Icons/city pls look good.png', 
    iconSize: [iconScale/2.05, iconScale/2.2]
});
var routeIcon = L.icon({
    iconUrl: 'Media/Icons/zone.png', 
    iconSize: [iconScale/5, iconScale/5]
});
var caveIcon = L.icon({
    iconUrl: 'Media/Icons/cave.png', 
    iconSize: [iconScale/3.3, iconScale/3.3]
});
var ruinsIcon = L.icon({
    iconUrl: 'Media/Icons/ruins.png', 
    iconSize: [iconScale/3.3, iconScale/3.3]
});
var shrineIcon = L.icon({
    iconUrl: 'Media/Icons/shrine.png', 
    iconSize: [iconScale/4, iconScale/4]
});
var mansionIcon = L.icon({
    iconUrl: 'Media/Icons/mansion.png', 
    iconSize: [iconScale/3.3, iconScale/3.3]
});
var forestIcon = L.icon({
    iconUrl: 'Media/Icons/forest.png', 
    iconSize: [iconScale/3.3, iconScale/3.3]
});
}

//------Hineouma Region-------
{
var ku = L.marker([600, 590], {icon: cityIcon});
ku.bindPopup("<b>Hinoeuma</b><br>City of Ku.");

var sai = L.marker([855, 1166], {icon: townIcon});
sai.bindPopup("");
sai.on('mouseover', function(e){
    this.sai = sai;
    this.sai.bindPopup("<b>Hinoeuma</b><br>Town of Sai.");
    this.sai.openPopup();
})
sai.on('click', function(e){
    sai.bindPopup("<b>Hinoeuma</b><br>Town of Sai.<br><br> This is were the more detailed text will go.");
    sai.openPopup();
})

ku.on('mouseover', function(e){
    ku.openPopup();
})





//---------------Rename these later once I learn the real names------------------
var routeSouthOfKu = L.marker([420, 580], {icon: routeIcon});
var routeSouthEastOfKu = L.marker([450, 850], {icon: routeIcon});
var routeFarWestofSai = L.marker([820, 885], {icon: routeIcon});
var routeSouthofSai = L.marker([755, 1186], {icon: routeIcon});
var routeWestofSai = L.marker([835, 1066], {icon: routeIcon});
var routeNorthWestofSai = L.marker([900, 1066], {icon: routeIcon});
var routeNorthOfDesertShrine = L.marker([735, 1430], {icon: routeIcon});

var caveNorthOfSai = L.marker([980, 1100], {icon: caveIcon});
var caveEastOfSai = L.marker([805, 1310], {icon: caveIcon});
var caveNorthOfKu = L.marker([880, 820], {icon: caveIcon});

var ruinsEastOfKu = L.marker([450, 1015], {icon: ruinsIcon});
var desertShrine = L.marker([635, 1400], {icon: shrineIcon});
var mansionNorthOfShrine = L.marker([830, 1455], {icon: mansionIcon});
var mansionNorthOfKu = L.marker([650, 670], {icon: mansionIcon});
//Change this to house icon once I get one
var ryu = L.marker([1200, 1470], {icon: townIcon});
var northernRyuSands = L.marker([1330, 1518], {icon: routeIcon});
}

//------Leaflands-------

var routeOnBorder = L.marker([1240, 550], {icon: routeIcon});
var southForest = L.marker([1330, 525], {icon: forestIcon});
var routeEastofForest = L.marker([1350, 630], {icon: routeIcon});
var forestCity = L.marker([1485, 650], {icon: cityIcon});
var southForestMansion = L.marker([1640, 545], {icon: mansionIcon});
var northForestMansion = L.marker([1867, 617], {icon: mansionIcon});
var northForst = L.marker([1505, 500], {icon: forestIcon});
var forestNorthTown = L.marker([1780, 590], {icon: townIcon});
var forestRouteToMansion = L.marker([1645, 620], {icon: routeIcon});
var routeEastOfForestCity = L.marker([1490, 825], {icon: routeIcon});

//Northern Wellgrove Trail
{
var northernWellgroveTrail = L.marker([1665, 880], {icon: routeIcon});
northernWellgroveTrail.bindPopup("");
northernWellgroveTrail.on('mouseover', function(e){
    this.northernWellgroveTrail = northernWellgroveTrail;
    this.northernWellgroveTrail.bindPopup("<b>Northern Wellgrove Trail</b><br>Danger Level: 18");
    this.northernWellgroveTrail.openPopup();
})
northernWellgroveTrail.on('click', function(e){
    northernWellgroveTrail.bindPopup("<b>Northern Wellgrove Trail</b><br>Danger Level: 18<br><br>This is were the more detailed text will go.");
    northernWellgroveTrail.openPopup();
})
}

//Alter of the Lady of Grace
{
var ladyOfGrace = L.marker([1750, 840], {icon: shrineIcon});
ladyOfGrace.bindPopup("");
ladyOfGrace.on('mouseover', function(e){
    this.ladyOfGrace = ladyOfGrace;
    this.ladyOfGrace.bindPopup("<b>Alter of the Lady of Grace</b>");
    this.ladyOfGrace.openPopup();
})
ladyOfGrace.on('click', function(e){
    ladyOfGrace.bindPopup("<b>Alter of the Lady of Grace</b><br><br>This is were the more detailed text will go.");
    ladyOfGrace.openPopup();
})
}

//I don't know what the fuck this cave is called I haven't even found it yet
var southForestCave = L.marker([1585, 1160], {icon: caveIcon});

//Southern Cropdale Trail
{
var southernCropdaleTrail = L.marker([1700, 1160], {icon: routeIcon});
southernCropdaleTrail.bindPopup("");
southernCropdaleTrail.on('mouseover', function(e){
    this.southernCropdaleTrail = southernCropdaleTrail;
    this.southernCropdaleTrail.bindPopup("<b>Southern Cropdale Trail</b><br>Danger Level: 11");
    this.southernCropdaleTrail.openPopup();
})
southernCropdaleTrail.on('click', function(e){
    southernCropdaleTrail.bindPopup("<b>Southern Cropdale Trail</b><br>Danger Level: 11<br><br>This is were the more detailed text will go.");
    southernCropdaleTrail.openPopup();
})
}

//Eastern Cropdale Trail
{
var easternCropdaleTrail = L.marker([1820, 1230], {icon: routeIcon});
easternCropdaleTrail.bindPopup("");
easternCropdaleTrail.on('mouseover', function(e){
    this.easternCropdaleTrail = easternCropdaleTrail;
    this.easternCropdaleTrail.bindPopup("<b>Eastern Cropdale Trail</b><br>Danger Level: 11");
    this.easternCropdaleTrail.openPopup();
})
easternCropdaleTrail.on('click', function(e){
    easternCropdaleTrail.bindPopup("<b>Eastern Cropdale Trail</b><br>Danger Level: 11<br><br>This is were the more detailed text will go.");
    easternCropdaleTrail.openPopup();
})
}

//Cropdale
{
    var cropdale =  L.marker([1820, 1080], {icon: townIcon});
    cropdale.bindPopup("");
    cropdale.on('mouseover', function(e){
        this.cropdale = cropdale;
        this.cropdale.bindPopup("<b>Cropdale</b>");
        this.cropdale.openPopup();
    })
    cropdale.on('click', function(e){
        cropdale.bindPopup("<b>Cropdale</b><br><br>This is were the more detailed text will go.");
        cropdale.openPopup();
    })
}

//Forest Path
{
var forestPath = L.marker([1980, 1145], {icon: routeIcon});
forestPath.bindPopup("");
forestPath.on('mouseover', function(e){
    this.forestPath = forestPath;
    this.forestPath.bindPopup("<b>Forest Path</b><br>Danger Level: 1");
    this.forestPath.openPopup();
})
forestPath.on('click', function(e){
    forestPath.bindPopup("<b>Forest Path</b><br>Danger Level: 1<br><br>This is were the more detailed text will go.");
    forestPath.openPopup();
})
}

//Festival Grounds
{
var festivalGrounds = L.marker([2060, 1145], {icon: routeIcon});
festivalGrounds.bindPopup("");
festivalGrounds.on('mouseover', function(e){
    this.festivalGrounds = festivalGrounds;
    this.festivalGrounds.bindPopup("<b>Festival Grounds</b>");
    this.festivalGrounds.openPopup();
})
festivalGrounds.on('click', function(e){
    festivalGrounds.bindPopup("<b>Festival Grounds</b><br><br>This is were the more detailed text will go.");
    festivalGrounds.openPopup();
})
}

//Veil of Trees
{
var veilOfTrees = L.marker([1980, 1020], {icon: forestIcon});
veilOfTrees.bindPopup("");
veilOfTrees.on('mouseover', function(e){
    this.veilOfTrees = veilOfTrees;
    this.veilOfTrees.bindPopup("<b>Veil of Trees</b><br>Danger Level: 5");
    this.veilOfTrees.openPopup();
})
veilOfTrees.on('click', function(e){
    veilOfTrees.bindPopup("<b>Veil of Trees</b><br>Danger Level: 5<br><br>This is were the more detailed text will go.");
    veilOfTrees.openPopup();
})
}
    
//Animal Trail 
{
var animalTrail = L.marker([1960, 1270], {icon: forestIcon});
animalTrail.bindPopup("");
animalTrail.on('mouseover', function(e){
    this.animalTrail = animalTrail;
    this.animalTrail.bindPopup("<b>Animal Trail</b><br>Danger Level: 16");
    this.animalTrail.openPopup();
})
animalTrail.on('click', function(e){
    animalTrail.bindPopup("<b>Animal Trail</b><br>Danger Level: 16<br><br>This is were the more detailed text will go.");
    animalTrail.openPopup();
})
}
    






//Adds all layers to map
{
    var cities = L.layerGroup([ku, forestCity]);
    cities.addTo(map);
    
    var towns = L.layerGroup([sai, forestNorthTown, cropdale, ryu]);
    towns.addTo(map);
    
    var routes = L.layerGroup([routeEastofForest, routeFarWestofSai, 
        routeNorthOfDesertShrine, routeNorthWestofSai, routeOnBorder,
        routeSouthEastOfKu, routeSouthOfKu, routeSouthofSai, 
        routeWestofSai, forestRouteToMansion, routeEastOfForestCity,
        northernWellgroveTrail, southernCropdaleTrail, easternCropdaleTrail,
        forestPath, festivalGrounds, northernRyuSands]);
    routes.addTo(map);
    
    var caves = L.layerGroup([caveEastOfSai, caveNorthOfKu, caveNorthOfSai,
        southForestCave]);
    caves.addTo(map);
    
    var mansions = L.layerGroup([mansionNorthOfKu, mansionNorthOfShrine, northForestMansion, 
        southForestMansion]);
    mansions.addTo(map);
    
    var shrines = L.layerGroup([desertShrine, ladyOfGrace]);
    shrines.addTo(map);
    
    var ruins = L.layerGroup([ruinsEastOfKu]);
    ruins.addTo(map);
    
    var forests = L.layerGroup([southForest, northForst, veilOfTrees, 
        animalTrail]);
    forests.addTo(map); 
}











//Toggles layers on the map when the checkboxes are clicked.
{
$("#cityCheckbox").click(function(){
    if ($("#cityCheckbox").prop('checked')) 
        cities.addTo(map); 
    else 
        cities.remove(); 
})

$("#townCheckbox").click(function(){
    if ($("#townCheckbox").prop('checked')) 
        towns.addTo(map); 
    else 
        towns.remove(); 
})

$("#routeCheckbox").click(function(){
    if ($("#routeCheckbox").prop('checked')) 
        routes.addTo(map); 
    else 
        routes.remove(); 
})

$("#caveCheckbox").click(function(){
    if ($("#caveCheckbox").prop('checked')) 
        caves.addTo(map); 
    else 
        caves.remove(); 
})

$("#mansionCheckbox").click(function(){
    if ($("#mansionCheckbox").prop('checked')) 
        mansions.addTo(map); 
    else 
        mansions.remove(); 
})

$("#shrineCheckbox").click(function(){
    if ($("#shrineCheckbox").prop('checked')) 
        shrines.addTo(map); 
    else 
        shrines.remove(); 
})

$("#ruinCheckbox").click(function(){
    if ($("#ruinCheckbox").prop('checked')) 
        ruins.addTo(map); 
    else 
        ruins.remove(); 
})

$("#forestCheckbox").click(function(){
    if ($("#forestCheckbox").prop('checked')) 
        forests.addTo(map); 
    else 
        forests.remove(); 
})
}






  
