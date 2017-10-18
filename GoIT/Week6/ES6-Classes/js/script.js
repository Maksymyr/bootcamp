					/* Arrays for created objects */
					
var fracCount = [];
var raceCount = [];
var leadCount = [];
var unitCount = [];

					/* Creation of lists */

var menuFraction = document.createElement("li");
menuFraction.classList.add("first-menu", "menu-list");
var pFrac = document.createElement('p');
menuFraction.appendChild(pFrac);
pFrac.innerHTML = "Fraction";
var menuUlInLiFrac = document.createElement("ul");
menuUlInLiFrac.classList.add("menu-drop");
menuFraction.appendChild(menuUlInLiFrac);
var menuUl = document.getElementsByClassName("menu")[0];
menuUl.appendChild(menuFraction);

var menuRace = document.createElement("li");
menuRace.classList.add("first-menu", "menu-list");
var pRace = document.createElement('p');
menuRace.appendChild(pRace);
pRace.innerHTML = "Race";
var menuUlInLiRace = document.createElement("ul");
menuUlInLiRace.classList.add("menu-drop");
menuRace.appendChild(menuUlInLiRace);
menuUl.appendChild(menuRace);

var menuLeader = document.createElement("li");
menuLeader.classList.add("first-menu", "menu-list");
var pLead = document.createElement('p');
menuLeader.appendChild(pLead);
pLead.innerHTML = "Leader";
var menuUlInLiLead = document.createElement("ul");
menuUlInLiLead.classList.add("menu-drop");
menuLeader.appendChild(menuUlInLiLead);
menuUl.appendChild(menuLeader);

var menuUnit = document.createElement("li");
menuUnit.classList.add("first-menu", "menu-list");
var pUnit = document.createElement('p');
menuUnit.appendChild(pUnit);
pUnit.innerHTML = "Unit";
var menuUlInLiUnit = document.createElement("ul");
menuUlInLiUnit.classList.add("menu-drop");
menuUnit.appendChild(menuUlInLiUnit);
menuUl.appendChild(menuUnit);

var blockInfo = document.createElement("li");
blockInfo.classList.add("block-info");
menuUl.appendChild(blockInfo);
var divInfo = document.createElement('div');
divInfo.classList.add("div-info");
blockInfo.appendChild(divInfo);

						/* Classes */

class Fraction {
    constructor(fraction, img) {
        this.fraction = fraction;
        this.img = img;
        this.addCount();
        this.createLi();
    }
    createLi() {
        var fracLi = document.createElement("li");
        var par = document.createElement('p');
        par.innerHTML = this.fraction;
        fracLi.appendChild(par);
        menuUlInLiFrac.appendChild(fracLi);
        fracLi.onclick =()=> {OnClickFrac(this)};
    }
    addCount() {
        fracCount.push(this);
    }
}
class Race {
    constructor(race, fraction, img) {
        this.race=race;
        this.fraction = fraction;
        this.img = img;
        this.addCount();
        this.createLi();
    }
    addCount(){
        raceCount.push(this);
    }
    createLi(){
        var raceLi = document.createElement("li");
        var par = document.createElement('p');
        par.innerHTML = this.race;
        raceLi.appendChild(par);
        menuUlInLiRace.appendChild(raceLi);
	      raceLi.onclick =()=> {OnClickRace(this)};
    }
}
class Leader {
    constructor(leader, fraction, race, img) {
        this.leader = leader;
        this.race = race;
        this.fraction = fraction;
        this.img = img;
        this.createLi();
        this.addCount();
    }
    addCount(){
        leadCount.push(this);
    }
    createLi(){
        var leadLi = document.createElement("li");
        var par = document.createElement('p');
        par.innerHTML = this.leader;
        leadLi.appendChild(par);
        menuUlInLiLead.appendChild(leadLi);
		    leadLi.onclick =()=> {OnClickLead(this)};
    }
}
class Unit {
    constructor(leader, fraction, unit, img){
        this.leader = leader;
        this.fraction = fraction;
        this.unit = unit;
        this.img = img;
        this.createLi();
        this.addCount();
    }
    addCount(){
        unitCount.push(this);
    }
    createLi(){
        var unitLi = document.createElement("li");
        var par = document.createElement('p');
        par.innerHTML = this.unit;
        unitLi.appendChild(par);
        menuUlInLiUnit.appendChild(unitLi);
	      unitLi.onclick =()=> {OnClickUnit(this)};
    }
}
        
            /* Fractions */
            
/*1*/  new Fraction("Alliance", "img/alliance.png");
/*2*/  new Fraction("Horde", "img/horde.png");

						/* Races */

/*1*/  new Race("Human", "Alliance", "img/human_emblem.png");
/*2*/  new Race("Orc", "Horde", "img/orc-emblem.png");
/*3*/  new Race("Drenei", "Alliance", "img/drenei_emblem.png");
/*4*/  new Race("Tauren", "Horde", "img/tauren_emblem.png");
/*5*/  new Race("Dwarf", "Alliance", "img/dwarf_emblem.png");
/*6*/  new Race("Undead", "Horde", "img/undead_emblem.png");

						/* Leaders */

/*1*/  new Leader("Varian","Alliance", "Human", "img/Varian.jpg");
/*2*/  new Leader("Thrall", "Horde", "Orc", "img/thrall.jpg");
/*3*/  new Leader("Velen",  "Alliance", "Drenei", "img/velen.jpg");
/*4*/  new Leader("Bein", "Horde", "Tauren", "img/bein.jpg");
/*5*/  new Leader("Bronzebeard", "Alliance", "Dwarf", "img/bronzebeard.jpg");
/*6*/  new Leader("Sylvana", "Horde", "Undead", "img/Sylvana.jpg");

						/* Units */

/*1*/  new Unit("Thrall", "Horde", "Durotan", "img/durotan.jpg");
/*2*/  new Unit("Thrall", "Horde", "Orgrim", "img/orgrim.jpg");
/*3*/  new Unit("Bein", "Horde", "Kern", "img/kern.jpg");
/*4*/  new Unit("Bein", "Horde", "Voldgin", "img/voldgin.jpg");
/*5*/  new Unit("Sylvana","Horde", "Keltalas", "img/keltalas.jpg");
/*6*/  new Unit("Sylvana","Horde", "Nerzhul", "img/nerzhul.jpg");
/*7*/  new Unit("Varian","Alliance", "Anduin", "img/anduin.jpg");
/*8*/  new Unit("Varian","Alliance", "Bolvar", "img/bolvar.jpg");
/*9*/  new Unit("Velen","Alliance", "Genn", "img/genn.jpg");
/*10*/ new Unit("Velen","Alliance", "Irel", "img/irel.png");
/*11*/ new Unit("Bronzebeard","Alliance", "Loken", "img/loken.jpg");
/*12*/ new Unit("Bronzebeard","Alliance", "Yorg", "img/yorg.jpg");

						/* Function onclick for elements of lists */

function OnClickFrac(e) {
    divInfo.innerHTML = "";
    var pElem = document.createElement("p");
    pElem.setAttribute("id", "pInfo");
    pElem.innerHTML = e.fraction;
    divInfo.appendChild(pElem);
    var imgInfo = document.createElement('div');
    imgInfo.setAttribute("id", "imgInfo");
    imgInfo.style.backgroundImage = "url('"+e.img+"')";
    divInfo.appendChild(imgInfo);
    var headRace = document.createElement('span');
    headRace.classList.add("text-info");
    headRace.innerHTML = 'Races: ';
    divInfo.appendChild(headRace);
    for (var key in raceCount) {
        if (e.fraction === raceCount[key].fraction) {
            var divRace = document.createElement('div');
            divRace.classList.add("divRace");
            divRace.innerHTML = "&nbsp;" + raceCount[key].race;
            divInfo.appendChild(divRace)
        }
    }
    divInfo.appendChild(document.createElement('br'));
    var headLead = document.createElement('span');
    headLead.classList.add("text-info");
    headLead.innerHTML = 'Leaders: ';
    divInfo.appendChild(headLead);
    for (var key in leadCount) {
        if (e.fraction === leadCount[key].fraction) {
            var divLead = document.createElement('div');
            divLead.classList.add("divRace");
            divLead.innerHTML = "&nbsp;" + leadCount[key].leader;
            divInfo.appendChild(divLead)
        }
    }
    divInfo.appendChild(document.createElement('br'));
    var headUnit = document.createElement('span');
    headUnit.classList.add("text-info");
    headUnit.innerHTML = 'Units: ';
    divInfo.appendChild(headUnit);
    for (var key in unitCount) {
        if (e.fraction === unitCount[key].fraction) {
            var divUnit = document.createElement('div');
            divUnit.classList.add("divRace");
            divUnit.innerHTML = "&nbsp;" + unitCount[key].unit;
            divInfo.appendChild(divUnit);
        }
    }
}

function OnClickRace(e) {
	divInfo.innerHTML = "";
	var pElem = document.createElement("p");
	pElem.setAttribute("id", "pInfo");
	pElem.innerHTML = e.race;
	divInfo.appendChild(pElem);
	var imgInfo = document.createElement('div');
	imgInfo.setAttribute("id", "imgInfo");
	imgInfo.style.backgroundImage = "url('"+e.img+"')";
	divInfo.appendChild(imgInfo);
	var headRace = document.createElement('span');
	headRace.classList.add("text-info");
	headRace.innerHTML = 'Fraction: ';
	divInfo.appendChild(headRace);
	var divRace = document.createElement('div');
	divRace.classList.add("divRace");
	divRace.innerHTML = "&nbsp;" + e.fraction;
	divInfo.appendChild(divRace);
	
	divInfo.appendChild(document.createElement('br'));
	var headLead = document.createElement('span');
	headLead.classList.add("text-info");
	headLead.innerHTML = 'Leader: ';
	divInfo.appendChild(headLead);
	var leader = null;
	for (var key in leadCount) {
		if (e.race === leadCount[key].race) {
			var divLead = document.createElement('div');
			divLead.classList.add("divRace");
			leader = leadCount[key].leader;
			divLead.innerHTML = "&nbsp;" + leadCount[key].leader;
			console.log( leadCount[key].leader);
			divInfo.appendChild(divLead)
		}
	}
	console.log(leader);
	divInfo.appendChild(document.createElement('br'));
	var headUnit = document.createElement('span');
	headUnit.classList.add("text-info");
	headUnit.innerHTML = 'Units: ';
	divInfo.appendChild(headUnit);
	for (var key in unitCount) {
		if (leader === unitCount[key].leader) {
			var divUnit = document.createElement('div');
			divUnit.classList.add("divRace");
			divUnit.innerHTML = "&nbsp;" + unitCount[key].unit;
			divInfo.appendChild(divUnit);
		}
	}
}

function OnClickLead(e) {
	divInfo.innerHTML = "";
	var pElem = document.createElement("p");
	pElem.setAttribute("id", "pInfo");
	pElem.innerHTML = e.leader;
	divInfo.appendChild(pElem);
	var imgInfo = document.createElement('div');
	imgInfo.setAttribute("id", "imgInfo");
	imgInfo.style.backgroundImage = "url('"+e.img+"')";
	divInfo.appendChild(imgInfo);
	var headRace = document.createElement('span');
	headRace.classList.add("text-info");
	headRace.innerHTML = 'Fraction: ';
	divInfo.appendChild(headRace);

	var divRace = document.createElement('div');
	divRace.classList.add("divRace");
	divRace.innerHTML = "&nbsp;" + e.fraction;
	divInfo.appendChild(divRace);

	divInfo.appendChild(document.createElement('br'));
	var headLead = document.createElement('span');
	headLead.classList.add("text-info");
	headLead.innerHTML = 'Race: ';
	divInfo.appendChild(headLead);
	var divLead = document.createElement('div');
	divLead.classList.add("divRace");
	divLead.innerHTML = "&nbsp;" + e.race;
	divInfo.appendChild(divLead);
	
	divInfo.appendChild(document.createElement('br'));
	var headUnit = document.createElement('span');
	headUnit.classList.add("text-info");
	headUnit.innerHTML = 'Units: ';
	divInfo.appendChild(headUnit);
	for (var key in unitCount) {
		if (e.leader === unitCount[key].leader) {
			var divUnit = document.createElement('div');
			divUnit.classList.add("divRace");
			divUnit.innerHTML = "&nbsp;" + unitCount[key].unit;
			divInfo.appendChild(divUnit);
		}
	}
}

function OnClickUnit(e) {
	divInfo.innerHTML = "";
	var pElem = document.createElement("p");
	pElem.setAttribute("id", "pInfo");
	pElem.innerHTML = e.unit;
	divInfo.appendChild(pElem);
	var imgInfo = document.createElement('div');
	imgInfo.setAttribute("id", "imgInfo");
	imgInfo.style.backgroundImage = "url('"+e.img+"')";
	divInfo.appendChild(imgInfo);
	var headRace = document.createElement('span');
	headRace.classList.add("text-info");
	headRace.innerHTML = 'Fraction: ';
	divInfo.appendChild(headRace);
	
	var divRace = document.createElement('div');
	divRace.classList.add("divRace");
	divRace.innerHTML = "&nbsp;" + e.fraction;
	divInfo.appendChild(divRace);
	
	divInfo.appendChild(document.createElement('br'));
	var headLead = document.createElement('span');
	headLead.classList.add("text-info");
	headLead.innerHTML = 'Race: ';
	divInfo.appendChild(headLead);
	for (var key in raceCount) {
		if (e.leader === leadCount[key].leader) {
			var divLead = document.createElement('div');
			divLead.classList.add("divRace");
			divLead.innerHTML = "&nbsp;" + leadCount[key].race;
			divInfo.appendChild(divLead)
		}
	}
	divInfo.appendChild(document.createElement('br'));
	var headUnit = document.createElement('span');
	headUnit.classList.add("text-info");
	headUnit.innerHTML = 'Leader: ';
	divInfo.appendChild(headUnit);
	var divUnit = document.createElement('div');
	divUnit.classList.add("divRace");
	divUnit.innerHTML = "&nbsp;" + e.leader;
	divInfo.appendChild(divUnit);
}

