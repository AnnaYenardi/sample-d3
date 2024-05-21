import { createSlider, createButton } from "./js/uikit.js"
import { samplePolygon, sampleScale } from "./js/sample.js"

const slider1 = {
    title: "Structure Interval",
    id: "cpparam1",
    minValue: 0,
    maxValue: 10000,
    value: 7700,
    min: 0,
    max: 10000,
    ticks: 1000,
    step: 100
}
const slider2 = {
    title: "Lot Width",
    id: "cpparam2",
    minValue: 0,
    maxValue: 10000,
    value: 2400,
    min: 0,
    max: 10000,
    ticks: 1000,
    step: 100
}
const slider3 = {
    title: "Lot Length",
    id: "cpparam3",
    minValue: 0,
    maxValue: 10000,
    value: 4800,
    min: 0,
    max: 10000,
    ticks: 1000,
    step: 100
}
const slider4 = {
    title: "Parking Interval",
    id: "cpparam4",
    minValue: 0,
    maxValue: 10000,
    value: 7700,
    min: 0,
    max: 10000,
    ticks: 1000,
    step: 100
}
const button = {
    id: "actionButton",
    text: "COMPUTE Test"
}

createSlider(slider1)
createSlider(slider2)
createSlider(slider3)
createSlider(slider4)
createButton(button)

const resultBox = document.createElement("div")
resultBox.id = "result-box"
resultBox.style.fontSize = "12px"
document.getElementById("input-panel").appendChild(resultBox)

document.getElementById("actionButton").addEventListener("click", () => {drawResult(samplePolygon, sampleScale)})

function drawResult(polygons, input_scale){
    var svg = d3.select("#canvas-box");
    var polys = document.getElementById('canvas-box').getElementsByTagName('polygon');
    // Remove all polygon elements
    while (polys.length > 0) {
        document.getElementById('canvas-box').removeChild(polys[0]);
    }
    var svgWidth = +svg.attr("width");
    var svgHeight = +svg.attr("height");
    
    var minX = Number.MAX_VALUE,
        minY = Number.MAX_VALUE,
        maxX = Number.MIN_VALUE,
        maxY = Number.MIN_VALUE;
    
    // Only consider the site boundary to determine bounding box
    polygons[polygons.length - 1].forEach(function(point) {
        minX = Math.min(minX, point[0]);
        minY = Math.min(minY, point[1]);
        maxX = Math.max(maxX, point[0]);
        maxY = Math.max(maxY, point[1]);
    });
    
    // var scaleX = svgWidth / (maxX - minX);
    // var scaleY = svgHeight / (maxY - minY);
    var scaleX = svgWidth / input_scale[0];
    var scaleY = svgHeight / input_scale[1];
    console.log(scaleX, scaleY)
    var scale = Math.min(scaleX, scaleY);
    
    polygons.forEach(function(polygonPoints) {
        var scaledPoints = polygonPoints.map(function(point) {
            return [(point[0] - minX) * scale, (point[1] - minY) * scale];
        });
        var polygonString = scaledPoints.map(function(point) {
            return point.join(",");
        }).join(" ");
        svg.append("polygon")
            .attr("points", polygonString)
            .attr("fill", "white")
            .attr("fill-opacity", 0)
            .attr("stroke", "black");
    });
}