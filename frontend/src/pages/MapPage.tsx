import React from 'react';
import Map, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { env } from '../config/env';

export function MapPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="h-[60%] w-full relative">
        <Map
          initialViewState={{
            longitude: -97.7431,
            latitude: 30.2672,
            zoom: 6
          }}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/cstites/cm4d82aeg015g01slbo0na7cs"
          mapboxAccessToken={env.MAPBOX_API_KEY}
        >
          <NavigationControl position="top-right" />
        </Map>
      </div>

      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Urban Heat Analysis
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Understanding Heat Islands
            </h3>
            <p className="text-gray-600 mb-4">
              Urban heat islands are areas within cities that experience higher temperatures
              than outlying areas. These heat islands are created by dense concentrations
              of pavement, buildings, and other surfaces that absorb and retain heat.
            </p>
            <p className="text-gray-600">
              Our map visualization will soon feature detailed overlays showing heat
              vulnerability zones and successful mitigation strategies implemented across
              different cities in the United States.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Coming Soon
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Heat vulnerability index overlays</li>
              <li>Solution spotlights and case studies</li>
              <li>Real-time temperature data</li>
              <li>Community impact assessments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}