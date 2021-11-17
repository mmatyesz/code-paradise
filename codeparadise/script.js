/*{
	name: "",
	codes: [],
	image: "images/",
	anime: ""
},*/

const girls = [
	{
		name: "Rio Futaba",
		codes: ["310841","285208","261690","345508","345090","259834","258225"],
		image: "images/futaba.png",
		anime: "Bunny Girl-senpai "
	},{
		name: "Tatsumaki",
		codes: ["369127","350195","366827","330827","311740","306008","301549"],
		image: "images/tatsumaki.png",
		anime: "One Punch Man"
	},{
		name: "Albedo",
		codes: ["344679","345277","325569","199646","218816","234690","153830"],
		image: "images/albedo.png",
		anime: "Overlord"
	},{
		name: "Aqua",
		codes: ["209519","266448","311853","369984","374090","195287","162662","173911"],
		image: "images/aqua.png",
		anime: "Konosuba"
	},{
		name: "Esdeath",
		codes: ["236243","137716","293159","236243","127701","137366"],
		image: "images/esdeath.png",
		anime: "Akame ga kill"
	},{
		name: "Jolyne Kujo",
		codes: ["342162","181312","44468","348601"],
		image:"images/jolyne.png",
		anime: "Jojo's bizarre adventures",
		id:57
	},{
		name: "Rem",
		codes: ["343822","178283","356687","289276","238807","352953"],
		image: "images/rem.png",
		anime: "Re:Zero",id:1
	},
	{
		name: "Ichika",
		codes: ["353396","362891","305062","343465"],
		image: "images/ichika.png",
		anime: "Quintessential Quintruplets",id:2
	},
	{
		name: "Itsuki",
		codes: ["326765","324884","312224","267516"],
		image: "images/itsuki.png",
		anime: "Quintessential Quintruplets",id:3
	},
	{
		name: "Nejire",
		codes: ["343922","315869","344561","314925","317295"],
		image: "images/nejire.png",
		anime: "My hero academia",id:4
	},
	{
		name: "Akeno",
		codes: ["100943","130809","144393","119735","304277"],
		image: "images/akeno.png",
		anime: "Higschool DxD",id:5
	},
	{
		name: "Asia",
		codes: ["169709","148786","148335","146363","146514"],
		image: "images/asia.png",
		anime: "Higschool DxD",id:6
	},
	{
		name: "Mai-san",
		codes: ["249873","310682","310084","307920","300887"],
		image: "images/mai.png",
		anime: "Bunny Girl-senpai ",id:7
	},
	{
		name: "Mikasa",
		codes: ["284506","261491","319670","252643","99050","98833","98564","98564","96779","219750"],
		image: "images/mikasa.png",
		anime: "Attack on titan",id:8
	},
	{
		name: "Historia ",
		codes: ["363039","355808","240873"],
		image: "images/christa.png",
		anime: "Attack on titan",id:9
	},
	{
		name: "Uzaki-chan",
		codes: ["335006", "334235","329468","329898","328106"],
		image: "images/uzaki.png",
		anime: "Uzaki-chan Wants to Hang Out!",id:10
	},
	{
		name: "Tsunade",
		codes: ["2256", "102355", "333953", "314781", "305631", "298521", "269341"],
		image: "images/Tsunade.png",
		anime: "Naruto",id:11
	},
	{
		name: "Hinata",
		codes: ["102355 ", " 354296 ", " 352468 ", " 349361", "340026 ", " 333023 ", " 330506 ", " 326941"],
		image: "images/hinata.png",
		anime: "Naruto",id:12
	},
	{
		name: "Sakura",
		codes: ["353939", "323224", "321925", "311789", "309721", "304883", "304743", "292848", "281390", "13799"],
		image: "images/sakura.png",
		anime: "Naruto",id:13
	},
	{
		name: "Temari",
		codes: ["102355", "136980", "311063", "13799", "176022", "2256", "136980", "51376", "13799"],
		image: "images/temari.jpg",
		anime: "Naruto",id:14
	},
	{
		name: "Tenten",
		codes: ["126595", "17283", "13506", "13799", "105985"],
		image: "images/tenten.png",
		anime: "Naruto",id:15
	},
	{
		name: "Ino",
		codes: ["316802", "311415", "317873", "208529", "45954", "176"],
		image: "images/ino.jpg",
		anime: "Naruto",id:16
	},
	{
		name: "Karin",
		codes: ["147193", "39985", "66421"],
		image: "images/karin.jpg",
		anime: "Naruto",id:17
	},
	{
		name: "Kurenai",
		codes: ["25530", "28378", "25799", "26382", "18435"],
		image: "images/kurenai.jpg",
		anime: "Naruto",id:18
	},
	{
		name: "Mei Terumi",
		codes: ["357431", "285095", "284620", "71331"],
		image: "images/mei.png",
		anime: "Naruto",id:19
	},
	{
		name: "Kushina",
		codes: ["344423", "334319", "323497", "255867"],
		image: "images/kushina.jpg",
		anime: "Naruto",id:20
	},
	{
		name: "Nami",
		codes: ["352893", "351370", "347560", "345398", "340920", "332562", "330527", "325781"],
		image: "images/nami.png",
		anime: "One Piece",id:21
	},
	{
		name: "Robin",
		codes: ["349752", "347560", "332562", "331514", "310015", "260557", "132866", "117558"],
		image: "images/robin.jpg",
		anime: "One Piece",id:22
	},
	{
		name: "Carrot",
		codes: ["357815", "336022"],
		image: "images/carrot.jpg",
		anime: "One Piece",id:23
	},
	{
		name: "Vivi",
		codes: ["136454", "299277", "44494", "14329", "19164", "5058"],
		image: "images/vivi.png",
		anime: "One Piece",id:24
	},
	{
		name: "Hancock",
		codes: ["351504", "347804", "338653", "292660", "208607", "105467", "104987", "95702", "87077"],
		image: "images/hancock.jpg",
		anime: "One Piece",id:25
	},
	{
		name: "Koala",
		codes: ["357814"],
		image: "images/koala.png",
		anime: "One Piece",id:26
	},
	{
		name: "Jewelry Bonney",
		codes: ["112550", "56537", "54350", "54691", "35661"],
		image: "images/bonney.png",
		anime: "One Piece",id:27
	},
	{
		name: "Perona",
		codes: ["356503", "341513", "240519", "122690", "78583", "36729"],
		image: "images/perona.png",
		anime: "One Piece",id:28
	},
	{
		name: "Bulma",
		codes: ["357673", "355659", "350601", "349342", "346139", "342158", "291246", "259961", "238061", "239023", "195778", "194660"],
		image: "images/bulma.png",
		anime: "Dragon Ball",id:29
	},
	{
		name: "ChiChi",
		codes: ["350190", "345356", "332747", "329587", "326237", "323433", "297300", "236640", "225962", "179922"],
		image: "images/chichi.png",
		anime: "Dragon Ball",id:30
	},
	{
		name: "Android-18",
		codes: ["357117", "352856", "343668", "342118", "336124", "328097", "323009", "312444", "301626", "307608", "283520"],
		image: "images/android.png",
		anime: "Dragon Ball",id:31
	},
	{
		name: "Touka",
		codes: ["226185", "197957", "193877", "160661", "151658", "146731", "139399"],
		image: "images/touka.png",
		anime: "Tokyo Ghoul",id:32
	},
	{
		name: "Rize",
		codes: ["243703"],
		image: "images/rize.png",
		anime: "Tokyo Ghoul",id:33
	},
	{
		name: "Lucy",
		codes: ["339665", "307699" ,"148268", "117379" ,"115703" ,"76082" ,"154190" ,"52751"],
		image: "images/lucy.png",
		anime: "Fairy Tail",id:34
	},
	{
		name: "Erza",
		codes: ["148268", "282757" ,"99554" ,"76082", "154190"],
		image: "images/erza.png",
		anime: "Fairy Tail",id:35
	},
	{
		name: "Juvia",
		codes: ["154190" ,"52751" ,"209832" ,"149550" ,"147762"],
		image: "images/juvia.png",
		anime: "Fairy Tail",id:36
	},
	{
		name: "Mavis",
		codes: ["114746"],
		image: "images/mavis.png",
		anime: "Fairy Tail",id:37
	},
	{
		name: "Levy",
		codes: ["187461" ,"154258" ,"167853" ,"162460" ,"162459" ,"139360" ,"139362" ,"147760" ,"144738"],
		image: "images/levy.png",
		anime: "Fairy Tail",id:38
	},
	{
		name: "Mirajane",
		codes: ["336624" ,"223319" ,"210911" ,"49974" ],
		image: "images/mirajane.png",
		anime: "Fairy Tail",id:39
	},
	{
		name: "Virgo",
		codes: ["162712", "76082"],
		image: "images/virgo.png",
		anime: "Fairy Tail",id:40
	},
	{
		name: "Shinobu",
		codes: ["361290" ,"361597" ,"354818" ,"352804" ,"342190" ,"324153" ,"324038" ,"290398"],
		image: "images/shinobu.png",
		anime: "Demon Slayer",id:41
	},
	{
		name: "Mitsuri",
		codes: ["363786" ,"359756" ,"362675" ,"326998" ,"322136" ,"310502"],
		image: "images/mitsuri.png",
		anime: "Demon Slayer",id:42
	},
	{
		name: "Elizabeth",
		codes: ["130905" ,"267139" ,"266902" ,"198893" ,"156875" ,"139654" ,"134866" ,"136665"],
		image: "images/elizabeth.png",
		anime: "Seven deadly sins",id:43
	},
	{
		name: "Diane",
		codes: ["266902" ,"255565" ,"166218" ,"138348", "130435" ,"124929"],
		image: "images/dianne.png",
		anime: "Seven deadly sins",id:44
	},
	{
		name: "Eleine",
		codes: ["210871","176052","132007","132005","128078"],
		image: "images/eleine.png",
		anime: "Seven deadly sins",id:45
	},
	{
		name: "Merlin",
		codes: ["301970" ,"147459" ,"176589" ,"190874"],
		image: "images/merlin.png",
		anime: "Seven deadly sins",id:46
	},
	{
		name: "Chizuru",
		codes: ["353502", "348279" ,"351887" ,"329224"],
		image: "images/chizuru.png",
		anime: "Rent a girlfriend",id:47
	},
	{
		name: "Ruka-chan",
		codes: ["322921" ,"359740" ,"336063" ,"346987" ,"351887" ,"341856"],
		image: "images/ruka.png",
		anime: "Rent a girlfriend",id:48
	},
	{
		name: "Asuna",
		codes: ["362917" ,"360093" ,"355530" ,"356864", "355004","355528" ,"344846" ,"327745"],
		image: "images/asuna.png",
		anime: "Sword Art Online",id:49
	},
	{
		name: "Leafa",
		codes: ["285418" ,"283911" ,"208764" ,"90325" ,"251830"],
		image: "images/leafa.png",
		anime: "Sword Art Online",id:50
	},
	{
		name: "Sinon",
		codes: ["340540", "300854" ,"261865" ,"196138", "115305"],
		image: "images/sinon.png",
		anime: "Sword Art Online",id:51
	},
	{
		name: "Rukia",
		codes: ["249853" ,"218509", "112432" ,"36348" ,"49554"],
		image: "images/rukia.png",
		anime: "Bleach",id:52
	},
	{
		name: "Yoruichi",
		codes: ["249853" ,"36348" ,"323097" ,"282944" ,"288104" ,"171162" ,"129164" ,"61260"],
		image: "images/yoruichi.png",
		anime: "Bleach",id:53
	},
	{
		name: "Orihime",
		codes: ["36348" ,"228104" ,"129194" ,"196138" ,"61260" ,"56949"],
		image: "images/orihime.png",
		anime: "Bleach",id:54
	},
	{
		name: "Rangiku",
		codes: ["36348" ,"228104" ,"171162" ,"61260" ,"346824", "343286" ,"317876" ,"276417"],
		image: "images/rangiku.png",
		anime: "Bleach",id:55
	},
	{
		name: "Kurumi Tokisaki",
		codes: ["160556","100094","169468","312395","309957"],
		image: "images/kurumi.png",
		anime: "Date a live",id:56
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
	<div class=card-containter>
		<div class="flip-card">
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
	</div>
	`
}






//PUTTING THE DATA INTO HTML
document.getElementById('content').innerHTML = `
		<h1>CODE<span id="kettospont">:</span>PARADISE</h1>
		<h3>Codes of the best <span id="orange">${girls.length}</span> anime characters.</h3>
		<h4>You can send codes here: <a href="suggest.html">SUGGEST</a></h4>
		<div id = "cards">${girls.map(girlFunction).join('')}</div>
	` 