import React from 'react';
import Map, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { env } from '../config/env';

export function MapPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <h2 className="text-center text-2xl font-bold text-black m-6">
        Interactive Map
      </h2>
      <div className="h-[50%] w-full relative">
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

      <div className="flex-1 overflow-y-auto p-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-black m-3">
              About the map
            </h3>
            <p className="m-4">
              In May 2024, the CDC launched the Heat and Health Index (HHI), a national tool assessing heat vulnerability across U.S. ZIP Code Tabulation Areas (ZCTAs). The HHI integrates four key modules:</p>
            <p className="m-4">
              <ol className="list-decimal list-inside">
                <li><span className='font-bold'>Historical Heat and Health Burden:</span> Evaluates past local heat impacts on health.</li>
                <li><span className='font-bold'>Sensitivity:</span> Assesses risk from pre-existing health conditions.</li>
                <li><span className='font-bold'>Sociodemographic:</span> Considers social and demographic factors affecting heat exposure and resilience.</li>
                <li><span className='font-bold'>Natural and Built Environment:</span> Examines environmental features influencing heat exposure and coping capacity.</li>
              </ol>
            </p>
            <p className="m-4">
              This index aids public health officials, city planners, policymakers, and community members in identifying and prioritizing areas requiring focused heat-related health interventions.
            </p>

            Map Sources:
            <ul className='list-none'>
              <li><a className='underline' href='https://ephtracking.cdc.gov/Applications/heatTracker/'>CDC Health & Heat Index</a></li>
              <li><a className='underline' href='https://www.hhs.gov/about/news/2024/05/31/biden-harris-administration-launches-nationwide-heat-health-tool-protect-communities-most-impacted-extreme-heat.html'>Heat & Health Tracker</a></li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-black m-3">
              Using the map
            </h3>
            <p className="m-4">
              Ths interactive map explores where the most heat-vulnerable communities are and how that intersects with their ability to adapt and mitigate heat based on additional overlaying factors like building age, renting, poverty.
            </p>
            <p className="m-4">Discover
              <ul className="list-disc list-inside ml-5">
                <li>Explore factors that affect heat vulnerability in the US</li>
                <li>Make better decisions when choosing solutions and know where to prioritize action</li>
              </ul>
            </p>
            <p className="m-4">Explore Filters
              <ul className="list-disc list-inside ml-5">
                <li>Building Age</li>
                <li>Rent</li>
                <li>Poverty</li>
              </ul>
            </p>
            <p className="m-4">Find Implementable Solutions
              <ul className="list-disc list-inside ml-5">
                <li>Using this interactive map, </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}