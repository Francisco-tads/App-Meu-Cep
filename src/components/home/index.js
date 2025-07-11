import React, {useState} from "react";
import { FiSearch } from "react-icons/fi";
import api from "../../services/api";
import { Container } from "./styled";

export const Home = () => {
    const logoImg = "https://www.gstatic.com/images/branding/product/2x/maps_64dp.png";
    const [input, setInput]=useState('');
    const [cep, setCep]=useState({});


    async function handleSearch(){

if(input===''){
    alert("Campo vazio! Preencha com um CEP ;) ")
    return;
}

try{
    const response = await api.get(`${input}/json`);
    setCep(response.data)
    setInput("");

}catch{
    alert("Esse Cep não é valido :( ");
    setInput("")
   }
}

    function handleOpenMap(){
        if(Object.keys(cep).length > 0){
            const address = `${cep.logradouro}, ${cep.bairro}, ${cep.localidade} - ${cep.uf}`;
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
            window.open(mapUrl, '_blank');
        }
    }
  return (
    <Container>
      <img alt="map" src={logoImg} className="navbar-img" />

      <h1>Buscador de CEP</h1>

      <div className="containerInput">
        <input
        type="text" 
        placeholder="Digite o cep..." 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        onClick={Object.keys(cep).length > 0 ? handleOpenMap : undefined}
        style={{cursor: Object.keys(cep).length > 0 ? 'pointer' : 'text'}}
        />
        
        <button onClick={handleSearch}> 
          <FiSearch size={20} color="#fff" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <div className="main" >
        <h2>Informações encontradas</h2>
        <span>{cep.cep}</span>
        <span>{cep.logradouro}</span>
        <span>{cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
        <button className="mapButton" onClick={handleOpenMap}>
          Ver no Mapa
        </button>
        </div>
      )}
    </Container>
  );
};
