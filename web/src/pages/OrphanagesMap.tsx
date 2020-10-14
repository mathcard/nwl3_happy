import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import mapMarkImg from '../images/Local.svg';
import { Map, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanagesMap.css';
import 'leaflet/dist/leaflet.css';

export default function OrphanagesMap (){
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkImg} alt="Happy"/>
          <h2>Escolha um orfanato no Mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>
        <footer>
          <strong>Goiânia</strong>
          <span>Goiás</span>
        </footer>
        
        

        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#FFF"/>
        </Link>
      </aside>
      <Map 
          center={[-16.6851995,-49.2716594]}
          zoom={15}
          style={{width: '100%', height: '100%'}}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </Map>
    </div>
  );
}