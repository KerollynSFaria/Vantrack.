// 1. Coloque aqui a SUA access token do Mapbox
// Pegue em: https://account.mapbox.com/
mapboxgl.accessToken = "SUA_MAPBOX_ACCESS_TOKEN_AQUI";

// 2. Cria o mapa
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12", // estilo de mapa
  center: [-46.6333, -23.5505], // [longitude, latitude] (ex: São Paulo)
  zoom: 14
});

// 3. Adiciona controles de zoom e rotação (opcional)
map.addControl(new mapboxgl.NavigationControl(), "top-right");

// 4. Marker da van (roxo) simulando rastreamento
const rotaSimulada = [
  [-46.6333, -23.5505],
  [-46.6352, -23.5512],
  [-46.6370, -23.5520],
  [-46.6385, -23.5531],
  [-46.6400, -23.5538]
];

let indice = 0;

// Marker da van
const markerVan = new mapboxgl.Marker({
  color: "#7f3fbf"
})
  .setLngLat(rotaSimulada[0])
  .addTo(map);

// “círculo” em volta da van (só pra lembrar o estilo da sua referência)
const popupCircle = document.createElement("div");
popupCircle.style.width = "40px";
popupCircle.style.height = "40px";
popupCircle.style.borderRadius = "50%";
popupCircle.style.border = "2px solid rgba(127, 63, 191, 0.3)";
popupCircle.style.backgroundColor = "rgba(127, 63, 191, 0.15)";

const markerCircle = new mapboxgl.Marker({
  element: popupCircle
})
  .setLngLat(rotaSimulada[0])
  .addTo(map);

// 5. Simula movimento da van a cada 2 segundos
setInterval(() => {
  indice = (indice + 1) % rotaSimulada.length;
  const novaPosicao = rotaSimulada[indice];

  markerVan.setLngLat(novaPosicao);
  markerCircle.setLngLat(novaPosicao);

  // movimenta o mapa suavemente junto
  map.easeTo({
    center: novaPosicao,
    duration: 1000
  });
}, 2000);

// 6. (Opcional) lidar com a caixa de pesquisa
const campoPesquisa = document.getElementById("campo-pesquisa");
campoPesquisa.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    // Por enquanto só mostra o texto digitado.
    // Depois você pode integrar com Mapbox Search / Geocoding.
    console.log("Pesquisar por:", campoPesquisa.value);
  }
});
