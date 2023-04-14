

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
        minZoom: -2.5, // can see whole map
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


    // simplified sidebar, added functions for easier usage
    function openNav() {
        document.getElementById("sideNav").style.width = "15%";
        document.getElementById("map").style.width = "85%";
    }
    
    function closeNav() {
        document.getElementById("sideNav").style.width = "0px";
        document.getElementById("map").style.width = "100%";
    }
    
    // just to avoid complications
    openNav()

    document.getElementById("menuIcon").addEventListener("click", function(){
        console.log((document.getElementById("sideNav")).style.width)
        if ((document.getElementById("sideNav")).style.width > '0px'){
            closeNav()
        } 
        else{
            openNav()
        }
    });



    window.onresize = function(){
        
    };

    //added function which shows you where you click, useful for new markers
    map.on('click', function (e) {
        closeNav() // just in case cause I hate it
        var type = e.layerType,
        popup = L.popup();
        if (type !== 'marker'){
            popup
            .setLatLng(e.latlng)
            .setContent(e.latlng.toString())
            .openOn(map);
        }
    });




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
var villageIcon = L.icon({
    iconUrl: 'Media/Icons/village.png', 
    iconSize: [iconScale/4, iconScale/4]
});
var emblemIcon = L.icon({
    iconUrl: 'Media/Icons/emblem.png', 
    iconSize: [iconScale/4, iconScale/4]
});
}

//------Hineouma Region-------
{
var ku = L.marker([600, 590], {icon: cityIcon})
    .bindTooltip("<b>Hinoeuma</b><br>City of Ku.")
    .bindPopup("<b>Hinoeuma</b><br>City of Ku.<br>More text!");

var sai = L.marker([855, 1166], {icon: townIcon})
    .bindTooltip("<b>Hinoeuma</b><br>Town of Sai.")
    .bindPopup("<b>Hinoeuma</b><br>Town of Sai.<br><br> This is were the more detailed text will go.");






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
var northernWellgroveTrail = L.marker([1665, 880], {icon: routeIcon})
    .bindTooltip("<b>Northern Wellgrove Trail</b><br>Danger Level: 18")
    .bindPopup("<b>Northern Wellgrove Trail</b><br>Danger Level: 18<br><br>This is were the more detailed text will go.");
}

//Altar of the Lady of Grace
{
var ladyOfGrace = L.marker([1750, 840], {icon: shrineIcon})
    .bindTooltip("<b>Altar of the Lady of Grace</b>")
    .bindPopup("<b>Altar of the Lady of Grace</b><br><br>This is were the more detailed text will go.");
}

//I don't know what the fuck this cave is called I haven't even found it yet
var southForestCave = L.marker([1585, 1160], {icon: caveIcon});

//Southern Cropdale Trail
{
var southernCropdaleTrail = L.marker([1700, 1160], {icon: routeIcon})
    .bindPopup("<b>Southern Cropdale Trail</b><br>Danger Level: 11")
    .bindTooltip("<b>Southern Cropdale Trail</b><br>Danger Level: 11<br><br>This is were the more detailed text will go.");
}

//Eastern Cropdale Trail
{
var easternCropdaleTrail = L.marker([1820, 1230], {icon: routeIcon})
    .bindTooltip("<b>Eastern Cropdale Trail</b>")
    .bindPopup("<b>Eastern Cropdale Trail</b><br>Danger Level: 11<br><br>This is were the more detailed text will go.");
}

//Cropdale
{
var cropdale =  L.marker([1820, 1080], {icon: villageIcon})
    .bindTooltip("<b>Cropdale</b>")
    .bindPopup("<b>Cropdale</b><br><br>This is were the more detailed text will go.");
}

//Forest Path
{
var forestPath = L.marker([1980, 1145], {icon: routeIcon})
    .bindTooltip("<b>Forest Path</b><br>Danger Level: 1")
    .bindPopup("<b>Forest Path</b><br>Danger Level: 1<br><br>This is were the more detailed text will go.");
}

//Festival Grounds
{
var festivalGrounds = L.marker([2060, 1145], {icon: routeIcon})
    .bindTooltip("<b>Festival Grounds</b>")
    .bindPopup("<b>Festival Grounds</b><br><br>This is were the more detailed text will go.");
}

//Veil of Trees
{
var veilOfTrees = L.marker([1980, 1020], {icon: forestIcon})
    .bindTooltip("<b>Veil of Trees</b><br>Danger Level: 5")
    .bindPopup("<b>Veil of Trees</b><br>Danger Level: 5<br><br>This is were the more detailed text will go.");
}
    
//Animal Trail 
{
var animalTrail = L.marker([1960, 1270], {icon: forestIcon})
    .bindTooltip("<b>Animal Trail</b><br>Danger Level: 16")
    .bindPopup("<b>Animal Trail</b><br>Danger Level: 16<br><br>This is were the more detailed text will go.");
}


//Toto'haha
{
var pathToWardenbeasts = L.marker([350, 2970], {icon: routeIcon})
    .bindTooltip("<b>Path to the Tombs of the Wardenbeasts</b>")
    .bindPopup("Path to the Tombs of the Wardenbeasts<br>This is were the more detailed text will go.");
}

{
var tombsOfWardenbeasts = L.marker([350, 3100], {icon: ruinsIcon})
    .bindTooltip("<b>Tombs of the Wardenbeasts</b>")
    .bindPopup("<b>Tombs of the Wardenbeasts</b><br><br>This is were the more detailed text will go.");
}

{
var beastingVillage = L.marker([405, 2965], {icon: villageIcon})
    .bindTooltip("<b>Beasting village</b>")
    .bindPopup("<b>Beasting village</b><br><br>This is were the more detailed text will go.");
}

{
var northBeasting = L.marker([461, 3014], {icon: routeIcon})
    .bindTooltip("<b>North Beasting Traverse</b><br>Danger Level: 11")
    .bindPopup("<b>North Beasting Traverse</b><br>Danger Level: 11<br><br>This is were the more detailed text will go.");
}

{
var beastingBay = L.marker([570, 2991], {icon: routeIcon})
    .bindTooltip("<b>Beasting Bay: Anchorage</b><br>Danger Level: 11")
    .bindPopup("<b>Beasting Bay: Anchorage</b><br>Danger Level: 11<br><br>This is were the more detailed text will go.");
}

{
var cavernOfWaves = L.marker([636, 3034], {icon: caveIcon})
    .bindTooltip("<b>Cavern of Waves</b><br>Danger Level: 48")
    .bindPopup("<b>Cavern of Waves</b><br>Danger Level: 48<br><br>This is were the more detailed text will go.");
}

{
var westernTropu = L.marker([546, 3155], {icon: routeIcon})
    .bindTooltip("<b>Western Tropu'hopu Traverse</b><br>Danger Level: 18")
    .bindPopup("<b>Western Tropu'hopu Traverse</b><br>Danger Level: 18<br><br>This is were the more detailed text will go.");
}

{
var hunterGuild = L.marker([590, 3165], {icon: emblemIcon})
    .bindTooltip("<b>Hunter Guild</b>")
    .bindPopup("<b>Hunter Guild</b><br><br>This is were the more detailed text will go.");
}

{
var southernNameless = L.marker([631, 3203], {icon: routeIcon})
    .bindTooltip("<b>Southern Nameless Village Traverse</b><br>Danger Level: 45")
    .bindPopup("<b>Southern Nameless Village Traverse</b><br>Danger Level: 45<br><br>This is were the more detailed text will go.");
}

{
var huntressAltar = L.marker([479, 3220], {icon: shrineIcon})
    .bindTooltip("<b>Altar of the Huntress</b>")
    .bindPopup("<b>Altar of the Huntress</b><br><br>This is were the more detailed text will go.");
}

{
var tropuHopu = L.marker([580, 3339], {icon: townIcon})
    .bindTooltip("<b>Tropu'hopu</b>")
    .bindPopup("<b>Tropu'hopu</b><br><br>This is were the more detailed text will go.");
}

{
var namelessVillage = L.marker([766, 3176], {icon: villageIcon})
    .bindTooltip("<b>Nameless Village</b>")
    .bindPopup("<b>Nameless Village</b><br><br>This is were the more detailed text will go.");
}

{
var sinkingRuins  = L.marker([689, 3155], {icon: ruinsIcon})
    .bindTooltip("<b>Sinking Ruins</b><br>Danger Level: 46")
    .bindPopup("<b>Sinking Ruins</b><br>Danger Level: 46<br><br>This is were the more detailed text will go.");
}

{
var wanderingWood = L.marker([840, 3206], {icon: caveIcon})
    .bindTooltip("<b>Wandering Wood</b><br>Danger Level: 45")
    .bindPopup("<b>Wandering Wood</b><br>Danger Level: 45<br><br>This is were the more detailed text will go.");
}

{
var summitOfStrife = L.marker([326, 2908], {icon: forestIcon})
    .bindTooltip("<b>Summit of Strife</b><br>Danger Level: 45")
    .bindPopup("<b>Summit of Strife</b><br>Danger Level: 45<br><br>This is were the more detailed text will go.");
}





//Adds all layers to map
{
    var cities = L.layerGroup([ku, forestCity]);
    cities.addTo(map);
    
    var towns = L.layerGroup([sai, forestNorthTown, ryu, tropuHopu]);
    towns.addTo(map);

    var villages = L.layerGroup([cropdale, beastingVillage, namelessVillage]);
    villages.addTo(map);
    
    var routes = L.layerGroup([routeEastofForest, routeFarWestofSai, 
        routeNorthOfDesertShrine, routeNorthWestofSai, routeOnBorder,
        routeSouthEastOfKu, routeSouthOfKu, routeSouthofSai, 
        routeWestofSai, forestRouteToMansion, routeEastOfForestCity,
        northernWellgroveTrail, southernCropdaleTrail, easternCropdaleTrail,
        forestPath, festivalGrounds, northernRyuSands,
        pathToWardenbeasts, northBeasting, beastingBay, westernTropu, southernNameless]);
    routes.addTo(map);
    
    var caves = L.layerGroup([caveEastOfSai, caveNorthOfKu, caveNorthOfSai,
        southForestCave, cavernOfWaves, wanderingWood]);
    caves.addTo(map);
    
    var mansions = L.layerGroup([mansionNorthOfKu, mansionNorthOfShrine, northForestMansion, 
        southForestMansion]);
    mansions.addTo(map);
    
    var shrines = L.layerGroup([desertShrine, ladyOfGrace, huntressAltar]);
    shrines.addTo(map);
    
    var ruins = L.layerGroup([ruinsEastOfKu, tombsOfWardenbeasts, sinkingRuins]);
    ruins.addTo(map);
    
    var forests = L.layerGroup([southForest, northForst, veilOfTrees, animalTrail,
        summitOfStrife]);
    forests.addTo(map); 

    var guilds = L.layerGroup([hunterGuild]);
    guilds.addTo(map); 
}

// added layercontrol to replace sidenav choices
base ={}
nodes = {
    "<img src='Media/Icons/city pls look good.png' style='max-width:25px' /> <b>Cities</b><hr>": cities,
    "<img src='Media/Icons/town.png' style='max-width:25px' /> <b>Towns</b><hr>": towns,
    "<img src='Media/Icons/village.png' style='max-width:25px' /> <b>Villages</b><hr>": villages,
    "<img src='Media/Icons/zone.png' style='max-width:25px' /> <b>Routes</b><hr>": routes,
    "<img src='Media/Icons/cave.png' style='max-width:25px' /> <b>Caves</b><hr>": caves,
    "<img src='Media/Icons/mansion.png' style='max-width:25px' /> <b>Mansions</b><hr>": mansions,
    "<img src='Media/Icons/shrine.png' style='max-width:25px' /> <b>Shrines</b><hr>": shrines,
    "<img src='Media/Icons/ruins.png' style='max-width:25px' /> <b>Ruins</b><hr>": ruins,
    "<img src='Media/Icons/forest.png' style='max-width:25px' /> <b>Forests</b><hr>": forests,
    "<img src='Media/Icons/emblem.png' style='max-width:25px' /> <b>Guilds</b><hr>": guilds,
}
var layerControl = L.control.layers(base, nodes, {position: 'topleft'}).addTo(map);


