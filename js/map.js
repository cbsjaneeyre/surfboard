let myMap;
 
const init = () => {
 myMap = new ymaps.Map("map", {
   center: [55.755864, 37.617698],
   zoom: 12,
   controls: []
 });

 var myPlacemark = new ymaps.Placemark(
  [55.752004, 37.576133],
  {},
  { draggable: false,
    iconLayout: "default#image",
    iconImageHref: "../pics/pointer.svg",
    iconImageSize: [58, 73],
    iconImageOffset: [-35, -52]
  }
);

myMap.geoObjects.add(myPlacemark);

myMap.controls.add("zoomControl");

myMap.behaviors.disable("scrollZoom");
};
 
ymaps.ready(init);