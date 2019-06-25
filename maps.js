console.log("rachel");

// On initialise la latitude et la longitude de Paris (centre de la carte)
			var lat = 45.18;
			var lon = 5.73;
			var macarte = null;
			var markerClusters; // Servira à stocker les groupes de marqueurs
			var bacsables={
				"jardin des plantes":{'lat': 45.18759, 'lon': 5.73602},
				"bac à sable <br> jardin de ville":{'lat':45.19197, 'lon':5.72659}
			};
			var ecoles={
			"ecole Jean perrot":{'lat': 45.18527, 'lon': 5.72722},
			"ecole Clemenceau" :{'lat': 45.18333, 'lon': 5.74043}
			};
			var lesmarkers = [];//nous initialisons la liste des markeurs


//***********************************************INITIALISER LA CARTE **************************************************************************
function initMap() {// Fonction d'initialisation de la carte
	
	macarte = L.map('map').setView([lat, lon], 11); // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"	

	L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',   // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer.Ici, openstreetmap.fr
			{attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',// Il est toujours bien de laisser le lien vers la source des données
			minZoom: 5,
			maxZoom: 80})
		.addTo(macarte);
}
//***********************************************AFFICHER LES BACS A SABLE**************************************************************************
function Bac() {
	var iconBase = 'carte/icons/'; // Nous définissons le dossier qui contiendra les marqueurs
		markerClusters = L.markerClusterGroup(); // Nous initialisons les groupes de marqueurs
		for (bac in bacsables)// Nous définissons l'icône à utiliser pour le marqueur bacsables, sa taille affichée (iconSize), sa position (iconAnchor) et le décalage de son ancrage (popupAnchor)
		{
			let myIcon = L.icon({
				iconUrl: iconBase + "seau.png",
				iconSize: [100, 100],
				iconAnchor: [20, 0],
				popupAnchor: [-3, -75],
				});
		    let marker = L.marker([bacsables[bac].lat,bacsables[bac].lon], { icon: myIcon }).addTo(macarte);
			marker.bindPopup(bac);//pour afficher les noms des marqueurs
			// markerClusters.addLayer(marker);// ajouter le markeur au groupe
			// lesmarkers.push(marker);//nous ajoutons le marqueur à la liste des marqueurs
		}
}
//***********************************************AFFICHER LES ECOLES**************************************************************************
function Ecole() {
	var iconBase = 'carte/icons/'; // Nous définissons le dossier qui contiendra les marqueurs
		for (zou in ecoles){
			let myIcon = L.icon({
				iconUrl: iconBase + "ecole.png",
				iconSize: [100, 100],
				iconAnchor: [20, 0],
				popupAnchor: [-3, -75],
				});
		    let marker = L.marker([ecoles[zou].lat,ecoles[zou].lon], { icon: myIcon }).addTo(macarte);
			marker.bindPopup(zou);//pour afficher les noms des marqueurs
			// markerClusters.addLayer(marker);// ajouter le markeur au groupe
			// lesmarkers.push(marker);//nous ajoutons le marqueur à la liste des marqueurs
		}
}
// 		
// 		    let marker = L.marker([ecoles[zou].lat,ecoles[zou].lon], { icon: myIcon });
// 			marker.bindPopup(zou);//pour afficher les noms des marqueurs
// 			markerClusters.addLayer(marker);// ajouter le markeur au groupe
// 			lesmarkers.push(marker);//nous ajoutons le marqueur à la liste des marqueurs
// 		}

// 	var group = new L.featureGroup(lesmarkers);//nous créons le groupe des marquerus pour adapter le zoom
// 	macarte.fitBounds(group.getBounds().pad(0.5));//nous demandons à tous les marqueurs soient visibles et ajoutons un padding pour pas qu'il soit coupé
// 	macarte.addLayer(markerClusters);
// // }

let bouton = document.getElementById('mapclic');
// console.log(typeof(bouton));
bouton.onclick = initMap;
let boutonBac = document.getElementById('mapclicbac');
boutonBac.onclick = Bac;//appelle la fonction bac à sable

let boutonEcole = document.getElementById('mapclicecole');
boutonEcole.onclick = Ecole;//appelle la fonction Ecole


// window.onload = function(){
	// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
	// initMap(); 
// };