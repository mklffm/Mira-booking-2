"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with Next.js
const DefaultIcon = L.icon({
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Define the props interface
interface MapProps {
  center: [number, number];
  zoom?: number;
  markerTitle?: string;
  height?: string;
}

const Map = ({ center, zoom = 13, markerTitle = 'Our Location', height = '400px' }: MapProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Fix for SSR
    setIsMounted(true);
    
    // Set default icon for all markers
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);
  
  if (!isMounted) {
    // Return a placeholder while component mounts on client side
    return <div style={{ height, backgroundColor: '#f0f0f0' }} className="rounded-lg" />;
  }

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height, width: '100%' }}
      className="rounded-lg z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>{markerTitle}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map; 