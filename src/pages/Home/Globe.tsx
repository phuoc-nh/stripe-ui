
import React, { useRef, useEffect } from "react";
import Globe from 'react-globe.gl';

import './scss/Globe.scss'

function GlobeComponent() {
  const globeEl = useRef<any>()
  const N = 12;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [['blue', 'blue', 'blue', 'blue'][Math.round(Math.random() * 3)], ['blue', 'blue', 'blue', 'blue'][Math.round(Math.random() * 3)]]
  }));

  const w = window.innerWidth;
  const shiftFactor = 0.4;
  const shiftAmmount = shiftFactor * w;

  useEffect(() => {
    if (globeEl) {
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.7;
      globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 }); 
    }
  }, []);

  return (
    <div className="globe-section">
        <section className="verbiage">
          <div className="verbiage-upper">
              <div className="upper-text">
                  <span className="verbiage-head">
                      Global scale
                  </span>
                  <h1 className="verbiage-title">
                      The backbone for global commerce
                  </h1>
                  <p className="verbiage-desc">
                      Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.
                  </p>
              </div>
          </div>

          <div className="verbiage-details">
              <div className="box">
                  <div className="head">250M+</div>
                  <p className="desc">
                      API requests per day, peaking at 13,000 requests a second.
                  </p>
              </div>

              <div className="box">
                  <div className="head">99.99%</div>
                  <p className="desc">
                      Historical up time for Stripe Services.
                  </p>
              </div>

              <div className="box">
                  <div className="head">47+</div>
                  <p className="desc">
                      Countries with local acquiring.
                  </p>
              </div>

              <div className="box">
                  <div className="head">135+</div>
                  <p className="desc">
                      Currencies and payment methos supported.
                  </p>
              </div>
          </div>
      </section>
      <div className="globe" style={{
        marginLeft: `-${shiftAmmount}px`,
      }}>
        <Globe
          ref={globeEl}
          width={w + shiftAmmount}
          globeImageUrl={"/images/earth-night.jpg"}
          arcsData={arcsData}
          arcColor={'color'}
          arcDashLength={() => Math.random()}
          arcDashGap={() => Math.random()}
          arcDashAnimateTime={() => Math.random() * 10000 + 500}
        />
      </div>
    </div>
  )
}
export default GlobeComponent

{/* <Globe
      ref={globeEl}
      globeImageUrl={"/images/earth-night.jpg"}
      arcsData={arcs}
      arcStartLat={d => +d.startlat}
      arcStartLng={d => +d.startlng}
      arcEndLat={d => +d.endlat}
      arcEndLng={d => +d.endlng}
      arcDashLength={0.25}
      arcDashGap={1}
      arcLabel={d => +d.label}
      arcDashInitialGap={() => Math.random()}
      arcDashAnimateTime={4000}
      arcColor={() => "#9cff00"}
      arcsTransitionDuration={0}
      pointsData={places.slice(0, 20000)}
      pointColor={() => "#FFFF00"}
      pointAltitude={0.01}
      pointLabel={"city"}
      pointRadius="size"
      hexPolygonsData={countries.features}
      hexPolygonResolutio={3}
      hexPolygonMargin={0.7}
      hexPolygonColor={() => "rgba(255,255,255, 1)"}
      showAtmosphere={false}
    /> */}