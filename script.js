

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
    let tooltip = "<b>Hinoeuma</b><br>City of Ku."
    var ku = L.marker([600, 590], {icon: cityIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br> This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Hinoeuma</b><br>Town of Sai."
    var sai = L.marker([855, 1166], {icon: townIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br> This is where the more detailed text will go.");
}




{
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

{
    let tooltip = "<b>Northern Wellgrove Trail</b><br>Danger Level: 18"
    var northernWellgroveTrail = L.marker([1665, 880], {icon: routeIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Altar of the Lady of Grace</b>"
    var ladyOfGrace = L.marker([1750, 840], {icon: shrineIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Starfall Spring</b><br>Danger Level: 15"
    var starfallSpring = L.marker([1585, 1160], {icon: caveIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip +
            "<br><br>Can be reached by taking a canoe from Eastern Cropdale Trail and going down the stream."+
            "<br><br>This is where the more detailed text will go.");

}

{
    let tooltip = "<b>Southern Cropdale Trail</b><br>Danger Level: 11"
    var southernCropdaleTrail = L.marker([1700, 1160], {icon: routeIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Eastern Cropdale Trail</b>"
    var easternCropdaleTrail = L.marker([1820, 1230], {icon: routeIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Cropdale</b>"
    var cropdale =  L.marker([1820, 1080], {icon: villageIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Forest Path</b><br>Danger Level: 1"
    var forestPath = L.marker([1980, 1145], {icon: routeIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Festival Grounds</b>"
    var festivalGrounds = L.marker([2060, 1145], {icon: routeIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Veil of Trees</b><br>Danger Level: 5"
    var veilOfTrees = L.marker([1980, 1020], {icon: forestIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}
    
//Animal Trail 
{
    let tooltip = "<b>Animal Trail</b><br>Danger Level: 16"
    var animalTrail = L.marker([1960, 1270], {icon: forestIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}


//Toto'haha
{
    let tooltip = "<b>Path to the Tombs of the Wardenbeasts</b><br>Danger Level: 1"
    var pathToWardenbeasts = L.marker([350, 2970], {icon: routeIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Tombs of the Wardenbeasts</b><br>Danger Level: 5"
    var tombsOfWardenbeasts = L.marker([350, 3100], {icon: ruinsIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Beasting village</b>"
    var beastingVillage = L.marker([405, 2965], {icon: villageIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>North Beasting Traverse</b><br>Danger Level: 11"
    var northBeasting = L.marker([461, 3014], {icon: routeIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Beasting Bay: Anchorage</b><br>Danger Level: 11"
    var beastingBay = L.marker([570, 2991], {icon: routeIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Cavern of Waves</b><br>Danger Level: 48"
    var cavernOfWaves = L.marker([636, 3034], {icon: caveIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Western Tropu'hopu Traverse</b><br>Danger Level: 32"
    var westernTropu = L.marker([546, 3155], {icon: routeIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Hunter Guild</b>"
    var hunterGuild = L.marker([590, 3165], {icon: emblemIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + 
            "<br><br>Can be found to the far left from the Elderly Man in "+
            "Western Tropu'Hopu Traverse, hidden by some trees.");
}

{
    let tooltip = "<b>Southern Nameless Village Traverse</b><br>Danger Level: 45"
    var southernNameless = L.marker([631, 3203], {icon: routeIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Altar of the Huntress</b>"
    var huntressAltar = L.marker([479, 3220], {icon: shrineIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Tropu'hopu</b>"
    var tropuHopu = L.marker([580, 3339], {icon: townIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Nameless Village</b>"
    var namelessVillage = L.marker([766, 3176], {icon: villageIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Sinking Ruins</b><br>Danger Level: 46"
    var sinkingRuins  = L.marker([689, 3155], {icon: ruinsIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Wandering Wood</b><br>Danger Level: 45"
    var wanderingWood = L.marker([840, 3206], {icon: caveIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip + "<br><br>This is where the more detailed text will go.");
}

{
    let tooltip = "<b>Summit of Strife</b><br>Danger Level: 45"
    var summitOfStrife = L.marker([326, 2908], {icon: forestIcon})
        .bindTooltip(tooltip)
        .bindPopup(tooltip +
            "<br><br>Area unlocked through Ochette story."+
            "<br><br>This is where the more detailed text will go.");
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
        starfallSpring, cavernOfWaves, wanderingWood]);
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


