/*{
	name: "",
	codes: [],
	image: "",
	anime: ""
},*/

const girls = [
	{
		name: "Rem",
		codes: ["343822","178283","356687","289276","238807","352953"],
		image: "rem.png",
		anime: "Re:Zero"
	},
	{
		name: "Ichika",
		codes: ["353396","362891","305062","343465"],
		image: "ichika.png",
		anime: "Quintessential Quintruplets"
	},
	{
		name: "Itsuki",
		codes: ["326765","324884","312224","267516"],
		image: "itsuki.png",
		anime: "Quintessential Quintruplets"
	},
	{
		name: "Nejire",
		codes: ["343922","315869","344561","314925","317295"],
		image: "nejire.png",
		anime: "My hero academia"
	},
	{
		name: "Akeno",
		codes: ["100943","130809","144393","119735","304277"],
		image: "akeno.png",
		anime: "Higschool DxD"
	},
	{
		name: "Asia",
		codes: ["169709","148786","148335","146363","146514"],
		image: "asia.png",
		anime: "Higschool DxD"
	},
	{
		name: "Mai-san",
		codes: ["249873","310682","310084","307920","300887"],
		image: "mai.png",
		anime: "Bunny girl senpai"
	},
	{
		name: "Mikasa",
		codes: ["284506","261491","319670","252643","99050","98833","98564","98564","96779","219750"],
		image: "mikasa.png",
		anime: "Attack on titan"
	},
	{
		name: "Historia ",
		codes: ["363039","355808","240873"],
		image: "christa.png",
		anime: "Attack on titan"
	},
	{
		name: "Uzaki-chan",
		codes: ["335006", "334235","329468","329898","328106"],
		image: "uzaki.png",
		anime: "Uzaki-chan Wants to Hang Out!"
	},
	{
		name: "Tsunade",
		codes: ["2256", "102355", "333953", "314781", "305631", "298521", "269341"],
		image: "Tsunade.png",
		anime: "Naruto"
	},
	{
		name: "Hinata",
		codes: ["102355 ", " 354296 ", " 352468 ", " 349361", "340026 ", " 333023 ", " 330506 ", " 326941"],
		image: "hinata.png",
		anime: "Naruto"
	},
	{
		name: "Sakura",
		codes: ["353939", "323224", "321925", "311789", "309721", "304883", "304743", "292848", "281390", "13799"],
		image: "sakura.png",
		anime: "Naruto"
	},
	{
		name: "Temari",
		codes: ["102355", "136980", "311063", "13799", "176022", "2256", "136980", "51376", "13799"],
		image: "temari.jpg",
		anime: "Naruto"
	},
	{
		name: "Tenten",
		codes: ["126595", "17283", "13506", "13799", "105985"],
		image: "tenten.png",
		anime: "Naruto"
	},
	{
		name: "Ino",
		codes: ["316802", "311415", "317873", "208529", "45954", "176"],
		image: "ino.jpg",
		anime: "Naruto"
	},
	{
		name: "Karin",
		codes: ["147193", "39985", "66421"],
		image: "karin.jpg",
		anime: "Naruto"
	},
	{
		name: "Kurenai",
		codes: ["25530", "28378", "25799", "26382", "18435"],
		image: "kurenai.jpg",
		anime: "Naruto"
	},
	{
		name: "Mei Terumi",
		codes: ["357431", "285095", "284620", "71331"],
		image: "mei.png",
		anime: "Naruto"
	},
	{
		name: "Kushina",
		codes: ["344423", "334319", "323497", "255867"],
		image: "kushina.jpg",
		anime: "Naruto"
	},
	{
		name: "Nami",
		codes: ["352893", "351370", "347560", "345398", "340920", "332562", "330527", "325781"],
		image: "nami.png",
		anime: "One Piece"
	},
	{
		name: "Robin",
		codes: ["349752", "347560", "332562", "331514", "310015", "260557", "132866", "117558"],
		image: "robin.jpg",
		anime: "One Piece"
	},
	{
		name: "Carrot",
		codes: ["357815", "336022"],
		image: "carrot.jpg",
		anime: "One Piece"
	},
	{
		name: "Vivi",
		codes: ["136454", "299277", "44494", "14329", "19164", "5058"],
		image: "vivi.png",
		anime: "One Piece"
	},
	{
		name: "Hancock",
		codes: ["351504", "347804", "338653", "292660", "208607", "105467", "104987", "95702", "87077"],
		image: "hancock.jpg",
		anime: "One Piece"
	},
	{
		name: "Koala",
		codes: ["357814"],
		image: "koala.png",
		anime: "One Piece"
	},
	{
		name: "Jewelry Bonney",
		codes: ["112550", "56537", "54350", "54691", "35661"],
		image: "bonney.png",
		anime: "One Piece"
	},
	{
		name: "Perona",
		codes: ["356503", "341513", "240519", "122690", "78583", "36729"],
		image: "perona.png",
		anime: "One Piece"
	},
	{
		name: "Bulma",
		codes: ["357673", "355659", "350601", "349342", "346139", "342158", "291246", "259961", "238061", "239023", "195778", "194660"],
		image: "bulma.png",
		anime: "Dragon Ball"
	},
	{
		name: "ChiChi",
		codes: ["350190", "345356", "332747", "329587", "326237", "323433", "297300", "236640", "225962", "179922"],
		image: "chichi.png",
		anime: "Dragon Ball"
	},
	{
		name: "Android-18",
		codes: ["357117", "352856", "343668", "342118", "336124", "328097", "323009", "312444", "301626", "307608", "283520"],
		image: "android.png",
		anime: "Dragon Ball"
	},
	{
		name: "Touka",
		codes: ["226185", "197957", "193877", "160661", "151658", "146731", "139399"],
		image: "touka.png",
		anime: "Tokyo Ghoul"
	},
	{
		name: "Rize",
		codes: ["243703"],
		image: "rize.png",
		anime: "Tokyo Ghoul"
	},
	{
		name: "Lucy",
		codes: ["339665", "307699" ,"148268", "117379" ,"115703" ,"76082" ,"154190" ,"52751"],
		image: "lucy.png",
		anime: "Fairy Tail"
	},
	{
		name: "Erza",
		codes: ["148268", "282757" ,"99554" ,"76082", "154190"],
		image: "erza.png",
		anime: "Fairy Tail"
	},
	{
		name: "Juvia",
		codes: ["154190" ,"52751" ,"209832" ,"149550" ,"147762"],
		image: "juvia.png",
		anime: "Fairy Tail"
	},
	{
		name: "Mavis",
		codes: ["114746"],
		image: "mavis.png",
		anime: "Fairy Tail"
	},
	{
		name: "Levy",
		codes: ["187461" ,"154258" ,"167853" ,"162460" ,"162459" ,"139360" ,"139362" ,"147760" ,"144738"],
		image: "levy.png",
		anime: "Fairy Tail"
	},
	{
		name: "Mirajane",
		codes: ["336624" ,"223319" ,"210911" ,"49974" ],
		image: "mirajane.png",
		anime: "Fairy Tail"
	},
	{
		name: "Virgo",
		codes: ["162712", "76082"],
		image: "virgo.png",
		anime: "Fairy Tail"
	},
	{
		name: "Shinobu",
		codes: ["361290" ,"361597" ,"354818" ,"352804" ,"342190" ,"324153" ,"324038" ,"290398"],
		image: "shinobu.png",
		anime: "Demon Slayer"
	},
	{
		name: "Mitsuri",
		codes: ["363786" ,"359756" ,"362675" ,"326998" ,"322136" ,"310502"],
		image: "mitsuri.png",
		anime: "Demon Slayer"
	},
	{
		name: "Elizabeth",
		codes: ["130905" ,"267139" ,"266902" ,"198893" ,"156875" ,"139654" ,"134866" ,"136665"],
		image: "elizabeth.png",
		anime: "Seven deadly sins"
	},
	{
		name: "Diane",
		codes: ["266902" ,"255565" ,"166218" ,"138348", "130435" ,"124929"],
		image: "dianne.png",
		anime: "Seven deadly sins"
	},
	{
		name: "Eleine",
		codes: ["210871","176052","132007","132005","128078"],
		image: "eleine.png",
		anime: "Seven deadly sins"
	},
	{
		name: "Merlin",
		codes: ["301970" ,"147459" ,"176589" ,"190874"],
		image: "merlin.png",
		anime: "Seven deadly sins"
	},
	{
		name: "Chizuru",
		codes: ["353502", "348279" ,"351887" ,"329224"],
		image: "chizuru.png",
		anime: "Rent a girlfriend"
	},
	{
		name: "Ruka-chan",
		codes: ["322921" ,"359740" ,"336063" ,"346987" ,"351887" ,"341856"],
		image: "ruka.png",
		anime: "Rent a girlfriend"
	},
	{
		name: "Asuna",
		codes: ["362917" ,"360093" ,"355530" ,"356864", "355004","355528" ,"344846" ,"327745"],
		image: "asuna.png",
		anime: "Sword Art Online"
	},
	{
		name: "Leafa",
		codes: ["285418" ,"283911" ,"208764" ,"90325" ,"251830"],
		image: "leafa.png",
		anime: "Sword Art Online"
	},
	{
		name: "Sinon",
		codes: ["340540", "300854" ,"261865" ,"196138", "115305"],
		image: "sinon.png",
		anime: "Sword Art Online"
	},
	{
		name: "Rukia",
		codes: ["249853" ,"218509", "112432" ,"36348" ,"49554"],
		image: "rukia.png",
		anime: "Bleach"
	},
	{
		name: "Yoruichi",
		codes: ["249853" ,"36348" ,"323097" ,"282944" ,"288104" ,"171162" ,"129164" ,"61260"],
		image: "yoruichi.png",
		anime: "Bleach"
	},
	{
		name: "Orihime",
		codes: ["36348" ,"228104" ,"129194" ,"196138" ,"61260" ,"56949"],
		image: "orihime.png",
		anime: "Bleach"
	},
	{
		name: "Rangiku",
		codes: ["36348" ,"228104" ,"171162" ,"61260" ,"346824", "343286" ,"317876" ,"276417"],
		image: "rangiku.png",
		anime: "Bleach"
	},
	{
		name: "Kurumi Tokisaki",
		codes: ["160556","100094","169468","312395","309957"],
		image: "kurumi.png",
		anime: "Date a live"
	},
];

var mybutton = document.getElementById("button");
mybutton.style.display="none";

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	  });
}


//MAPPING THE CODES FROM THE ARRAY "CODES"
function codes(codes) {
	return `
		<ul>
			${codes.map(code => `<li>${code}</li>`).join("")}
		</ul>
	`
}

//FRONT OF THE CARDS
function girlFunction(girl) {
	return `
		<div class="flip-card" onClick="flip()">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<h2>${girl.name} <br> <span>(${girl.anime})</span></h2>
					<img src=${girl.image}>
				</div>
				<div class="flip-card-back">
					${girl.codes ? codes(girl.codes) : ""}
				</div>
			</div>
		</div>
	`
}


//PUTTING THE DATA INTO HTML
document.getElementById('content').innerHTML = `
		<h1>CODE<span id="kettospont">:</span>PARADISE</h1>
		<h3>Codes of the best ${girls.length} anime characters.</h3>
		<div id = "cards">${girls.map(girlFunction).join('')}</div>
`