"use client"
import mapboxgl from 'mapbox-gl';
import React, { useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

interface Location {
  lng: number;
  lat: number;
}

interface Props {
  location: Location;
}

const MapComponent: React.FC<Props> = ({ location }) => {
  useEffect(() => {
    if (!location) return;

    const mapboxToken = 'pk.eyJ1Ijoibml0aW5rYW5pc2giLCJhIjoiY2xzM2RtOXZlMHpqajJqb2VyZ2MyZWIwdSJ9.Htm9KTYp1AWjs2ao6XZjSw';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [location.lng, location.lat],
      zoom: 10,
      accessToken: mapboxToken
    });

    new mapboxgl.Marker({ offset: [-41 / 2, -51] })
      .setLngLat([location.lng, location.lat])
      .addTo(map);

    return () => map.remove();
  }, [location]);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }} />
  );
};

export default MapComponent;
