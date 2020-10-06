import React from 'react';
import GoogleMapReact from 'google-map-react';
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
	<div className="pin">
		<p className="pin-text">{text}</p>
	</div>
);

const Map = ({ location, zoomLevel }) => {
	return (
		<div className="map-container">
			<h1>Where</h1>

			<div className="map-text">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto architecto sint, ex doloremque
					deleniti possimus odio consequatur voluptates, necessitatibus commodi dignissimos itaque voluptatem
					labore illum provident eveniet aut nesciunt illo.
				</p>
			</div>

			<div className="google-map">
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyALMk1pv4cGt - lY4TlemxE7mN3QbLFN2ME' }}
					defaultCenter={location.center}
					defaultZoom={zoomLevel}
				>
					<LocationPin lat={location.center.lat} lng={location.center.lng} text={location.address} />
				</GoogleMapReact>
			</div>
		</div>
	);
};

export default Map;

// const Map = ({ location, zoomLevel }) => {
//   return (
//     <div className="map-container">
//       <h2>Map</h2>
//       <div className="google-map">
//         <GoogleMapReact
//           bootstrapURLKeys={{key: 'AIzaSyALMk1pv4cGt - lY4TlemxE7mN3QbLFN2ME'}}
//           defaultCenter={location}
//           defaultZoom={zoomLevel}
//         >
//           <LocationPin
//             lat={location.lat}
//             lon={location.lng}
//             text={location.address}
//           />
//         </GoogleMapReact>
//       </div>
//     </div>
//   )
// }

// export default Map
