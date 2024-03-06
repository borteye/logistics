import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOMServer from "react-dom/server";
import shipIcon from "../assets/ship.svg";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Tooltip,
  GeoJSON,
} from "react-leaflet";
import bezierspline from "@turf/bezier-spline";
import { LatLngTuple } from "leaflet";
import * as helpers from "@turf/helpers";

type Props = {};

const Map = (props: Props) => {
  const position: LatLngTuple = [40.68534639594973, -74.16232346028008];
  const line = helpers.lineString(
    [
      [25.36123864903644, 55.37759746658427],
      [26.62867479694662, 56.1323925508988],
      [25.682000903401395, 57.044257797175604],
      [23.44396810062296, 59.45575685208834],
      [21.167377522802333, 60.53241702239106],
      [14.563245364517332, 53.08368645641915],
      [12.169162507048036, 44.90985834518508],
      [12.3838643449092, 43.866157160404505],
      [14.020285431094049, 42.5368114399287],
      [21.32097360762346, 37.999457917850926],
      [27.747897976575608, 33.80868867669647],
      [28.621834933890906, 33.009433304993316],
      [29.910382436254736, 32.52744033572273],
      [30.004461537394885, 32.58178191308942],
      [30.058334854011566, 32.57251219867122],
      [30.177717555610855, 32.56787734154056],
      [30.268494132072025, 32.469000387125],
      [30.42709344849075, 32.36011328226289],
      [30.46361034522386, 32.35573591709793],
      [30.525643425038165, 32.3437438887812],
      [30.585031806420428, 32.331255523700264],
      [30.604647481502198, 32.332113830590636],
      [30.671517765664312, 32.348550407527995],
      [30.690451634360286, 32.35314234933627],
      [30.72240564597538, 32.34584674088412],
      [30.79970085180402, 32.32009753424706],
      [31.11678385284579, 32.30730876166746],
      [31.234331746343734, 32.30393847873468],
      [31.271441976495, 32.32460376780388],
      [31.30806062764109, 32.35572420891799],
      [32.04901159391332, 31.599380176736396],
      [32.35376939515323, 28.026581553468674],
      [35.184495120195, 26.61918359186091],
      [36.385383002343424, 25.94421105202607],
      [36.77847770673343, 26.087422765336537],
      [36.89553241993699, 26.11557522611112],
      [37.45304290391845, 25.899281888506337],
      [38.66834176907768, 25.734486964480407],
      [39.75232312079886, 25.792851846992967],
      [40.003146867708885, 26.1100820781089],
      [40.02733750972465, 26.230245043544475],
      [40.09801964545105, 26.34457152208746],
      [40.130577078970155, 26.384053599668878],
      [40.1610198937891, 26.38920344104469],
      [40.19197358711679, 26.376157176073608],
      [40.21740799615, 26.432462108449133],
      [40.31512355591105, 26.60103358058127],
      [40.42107867587122, 26.712162881428213],
      [40.46273818123046, 26.75226725339242],
      [40.642209926701625, 27.29128396599276],
      [40.900135791537494, 28.38442362869808],
      [40.913628476481435, 28.84310282236029],

      [41.0054, 29.0115],
    ].map((latlng) => [latlng[1], latlng[0]])
  );
  const line1 = helpers.lineString(
    [
      [41.0054, 29.0115],
      [40.913628476481435, 28.84310282236029],
      [40.900135791537494, 28.38442362869808],
      [40.642209926701625, 27.29128396599276],
      [40.46273818123046, 26.75226725339242],
      [40.42107867587122, 26.712162881428213],
      [40.31512355591105, 26.60103358058127],
      [40.21740799615, 26.432462108449133],
      [40.19197358711679, 26.376157176073608],
      [40.1610198937891, 26.38920344104469],
      [40.130577078970155, 26.384053599668878],
      [40.09801964545105, 26.34457152208746],
      [40.02733750972465, 26.230245043544475],
      [40.003146867708885, 26.1100820781089],
      [39.75232312079886, 25.792851846992967],
      [38.66834176907768, 25.734486964480407],
      [37.45304290391845, 25.899281888506337],
      [36.89553241993699, 26.11557522611112],
      [36.40760818360417, 25.643654923835626],
      [36.0464638494368, 25.356637100745488],
      [36.02314281817531, 23.348885642426197],
      [35.98537032004109, 15.133858741680433],
      [37.27036643594351, 11.725350396410835],
      [39.45588629166453, -0.3190489947444434],
    ].map((latlng) => [latlng[1], latlng[0]])
  );

  const line2 = helpers.lineString(
    [
      [39.45588629166453, -0.3190489947444434],
      [37.79900950192579, 1.049263809572716],
      [35.75439198194608, -3.9541503764665533],
      [36.008084071473355, -5.310961889041868],
      [35.82345876580935, -6.483752290592214],
      [35.163783408191215, -6.640307468416846],
      [32.64523778408968, -10.988146880634227],
      [23.737629882832707, -26.44711556936922],
      [5.465725895785461, -14.05693746590526],
      [1.4250782210006039, -7.5507695425991255],
      [5.633246624624595, 0.016579036395634638],
    ].map((latlng) => [latlng[1], latlng[0]])
  );
  const line3 = helpers.lineString(
    [
      [5.633246624624595, 0.016579036395634638],
      [1.4250782210006039, -7.5507695425991255],
      [5.465725895785461, -14.05693746590526],
      [10.792972267002654, -37.64655374393073],
      [11.426319923254301, -64.07004638394251],
      [11.805655635977402, -69.06607912642569],
      [12.306593251280828, -69.79392337420683],
      [12.215339514151786, -70.38718510070017],
      [12.730235365951094, -71.49131109540217],
      [12.558717389189768, -73.39194588583455],
      [11.053215110431596, -75.41343028721924],
      [10.404909047041023, -75.52877685316427],
    ].map((latlng) => [latlng[1], latlng[0]])
  );
  const line4 = helpers.lineString(
    [
      [10.404909047041023, -75.52877685316427],
      [11.053215110431596, -75.41343028721924],
      [12.558717389189768, -73.39194588583455],
      [18.189754299820578, -75.00569563977061],
      [19.9135091663239, -73.9070629029833],
      [20.84039070622596, -70.7649730182223],
      [23.04137821363984, -70.98469962130319],
      [26.393894865323045, -72.83040281111774],
      [36.59970402291716, -73.9729809510308],
      [39.93464039073716, -73.56305358816324],
      [40.486013084391324, -73.88959835586725],
      [40.47713444820322, -74.22193478468668],
      [40.4870575525974, -74.25420712397509],
      [40.49854563030029, -74.2597002881093],
      [40.508661342809496, -74.25819825102012],
      [40.51936751498561, -74.24901245591026],
      [40.544613472734184, -74.25124405379276],
      [40.557982800647906, -74.23279045565934],
      [40.55662968524453, -74.21794174635906],
      [40.57126796330815, -74.21064613781783],
      [40.589813837709215, -74.20699833954292],
      [40.598579799638344, -74.19871567809315],
      [40.602522478185826, -74.20120476809146],
      [40.60783332222418, -74.20515297976755],
      [40.62532679845699, -74.20352219666631],
      [40.63332275635532, -74.20036791895362],
      [40.63723081890816, -74.19592618079858],
      [40.64582775132498, -74.1849613103085],
      [40.65758161293311, -74.14676665368884],
      [40.67392287628678, -74.13560866416675],
      [40.685509074483086, -74.16187285518338],
    ].map((latlng) => [latlng[1], latlng[0]])
  );

  const redIcon = new L.Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });

  const curved = bezierspline(line);
  const curved1 = bezierspline(line1);
  const curved2 = bezierspline(line2);
  const curved3 = bezierspline(line3);
  const curved4 = bezierspline(line4);
  const geoJSONStyle1 = {
    color: "red", // Change color to blue, you can replace it with any other color
    weight: 1, // Change weight if needed
    dashArray: "5, 5",
  };
  const geoJSONStyle2 = {
    color: "green", // Change color to blue, you can replace it with any other color
    weight: 2, // Change weight if needed
    dashArray: "5, 5",
  };
  const geoJSONStyle3 = {
    color: "yellow", // Change color to blue, you can replace it with any other color
    weight: 2, // Change weight if needed
    dashArray: "5, 5",
  };
  const geoJSONStyle4 = {
    color: "orange", // Change color to blue, you can replace it with any other color
    weight: 2, // Change weight if needed
  };

  return (
    <MapContainer
      className="w-[100%] h-[70vh]"
      center={position}
      zoom={8}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />
      <GeoJSON data={curved} />
      <GeoJSON data={curved1} style={geoJSONStyle1} />
      <GeoJSON data={curved2} style={geoJSONStyle2} />
      <GeoJSON data={curved3} style={geoJSONStyle3} />
      <GeoJSON data={curved4} style={geoJSONStyle4} />
      {/* <GeoJSON data={curved1} style={geoJSONStyle} /> */}
      <CircleMarker
        center={[38.8325, 30.4515]}
        radius={20}
        pathOptions={{ color: "red" }}
      >
        <Marker
          position={[38.8325, 30.4515]}
          icon={
            new L.DivIcon({
              className: "ship-icon",
              html: ReactDOMServer.renderToString(
                <img
                  src={shipIcon}
                  className="w-9 h-9 mt-[-1rem] ml-[-0.7rem]"
                />
              ),
            })
          }
          zIndexOffset={1000}
        >
          <Tooltip>Vercel</Tooltip>
        </Marker>
      </CircleMarker>

      <Marker position={position}>
        <Popup>Skytrain</Popup>
        <CircleMarker
          center={[40.6725, 74.1612]}
          pathOptions={{ color: "red" }}
        >
          <Tooltip>Tooltip for Marker</Tooltip>
        </CircleMarker>
        <Tooltip>Tooltip for Marker</Tooltip>
      </Marker>

      <Marker position={[40.6725, 74.1612]} icon={redIcon}>
        <Tooltip>Your destination</Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Map;