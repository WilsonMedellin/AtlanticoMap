let map = document.getElementById("atlanticoMap");
let svg;

const areas = [
    { map: "puertoColombiaMap", text: "puertoColombiaMapText" },
    { map: "barranquillaMap", text: "barranquillaMapText" },
    { map: "tubaraMap", text: "tubaraMapText" },
    { map: "galapaMap", text: "galapaMapText" },
    { map: "soledadMap", text: "soledadMapText" },
    { map: "malamboMap", text: "malamboMapText" },
    { map: "baranoaMap", text: "baranoaMapText" },
    { map: "juanDeAcostaMap", text: "juanDeAcostaMapText" },
    { map: "piojoMap", text: "piojoMapText" },
    { map: "usiacuriMap", text: "usiacuriMapText" },
    { map: "sabanagrandeMap", text: "sabanagrandeMapText" },
    { map: "polonuevoMap", text: "polonuevoMapText" },
    { map: "santoTomasMap", text: "santoTomasMapText" },
    { map: "palmarDeVarelaMap", text: "palmarDeVarelaMapText" },
    { map: "ponederaMap", text: "ponederaMapText" },
    { map: "sabanalargaMap", text: "sabanalargaMapText" },
    { map: "luruacoMap", text: "luruacoMapText" },
    { map: "repelonMap", text: "repelonMapText" },
    { map: "manatiMap", text: "manatiMapText" },
    { map: "candelariaMap", text: "candelariaMapText" },
    { map: "campoDeLaCruzMap", text: "campoDeLaCruzMapText" },
    { map: "santaLuciaMap", text: "santaLuciaMapText" },
    { map: "suanMap", text: "suanMapText" }
];

const zone = {}

zone.over = (map, mapText) => {
    map.style.opacity = 0.2;
    mapText.style.visibility = "visible";
}

zone.out = (map, mapText) => {
    map.style.opacity = 1;
    mapText.style.visibility = "hidden";
}

map.addEventListener("load", () => {

    svg = map.contentDocument;
    for (let area of areas) {
        let map = svg.getElementById(area.map);
        let mapText = svg.getElementById(area.text);
        mapText.style.visibility = "hidden";
        mapText.addEventListener("mouseenter", () => { zone.over(map, mapText) });
        map.addEventListener("mouseenter", () => { zone.over(map, mapText) })
        map.addEventListener("mouseout", () => { zone.out(map, mapText) });
    }
})