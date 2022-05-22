var currentPlayer = 1;
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var grille = document.getElementById("board");
var arrayPlayer1Pieces = new Array();

arrayPlayer1Pieces[0]="blanc-pion";
arrayPlayer1Pieces[1]="blanc-pion";
arrayPlayer1Pieces[2]="blanc-pion";
arrayPlayer1Pieces[3]="blanc-pion";
arrayPlayer1Pieces[4]="blanc-pion";
arrayPlayer1Pieces[5]="blanc-pion";
arrayPlayer1Pieces[6]="blanc-pion";
arrayPlayer1Pieces[7]="blanc-pion";
arrayPlayer1Pieces[8]="blanc-tour";
arrayPlayer1Pieces[9]="blanc-cavalier";
arrayPlayer1Pieces[10]="blanc-fou";
arrayPlayer1Pieces[11]="blanc-roi";
arrayPlayer1Pieces[12]="blanc-reine";
arrayPlayer1Pieces[13]="blanc-fou";
arrayPlayer1Pieces[14]="blanc-cavalier";
arrayPlayer1Pieces[15]="blanc-tour";

var arrayPlayer2Pieces = new Array();

arrayPlayer2Pieces[15]="noir-pion";
arrayPlayer2Pieces[14]="noir-pion";
arrayPlayer2Pieces[13]="noir-pion";
arrayPlayer2Pieces[12]="noir-pion";
arrayPlayer2Pieces[11]="noir-pion";
arrayPlayer2Pieces[10]="noir-pion";
arrayPlayer2Pieces[9]="noir-pion";
arrayPlayer2Pieces[8]="noir-pion";
arrayPlayer2Pieces[7]="noir-tour";
arrayPlayer2Pieces[6]="noir-cavalier";
arrayPlayer2Pieces[5]="noir-fou";
arrayPlayer2Pieces[4]="noir-roi";
arrayPlayer2Pieces[3]="noir-reine";
arrayPlayer2Pieces[2]="noir-fou";
arrayPlayer2Pieces[1]="noir-cavalier";
arrayPlayer2Pieces[0]="noir-tour";


/**
 * Variables liées à la sélection
 */
var currentSelection = false;
var selectedHTML ;
var selectedHTMLClasses;


/**
 * Récupère la deuxième classe déclaré dans votre liste.
 * Découpe votre ensemble de classe selon les espaces pour les mettre dans un tableau (split).
 * @param {*} selectedClasses 
 * @returns la classe liée à une pièce si elle exise sinon renvoie vide.
 */
function getCaseClass(selectedClasses) {
    /**
     * On récupère l'ensemble des classes sous forme de tableau, et on récupère la deuxième.
     * Note : Toujours déclarer votre class liée à une pièce en deuxième.
     */
    if (selectedClasses !== "") {
        var arraySplitedClasses = selectedClasses.split(" ");
        if (arraySplitedClasses.length > 1) {
            return arraySplitedClasses[arraySplitedClasses.length-1];
        } else {
            return "";
        }
    }
}

/**
 fonction qui permet de verifié de si la case est vide
 */

var isCaseEmpty = function(selectedElement){ //mettre this.className
    return(getCaseClass(selectedElement) === "");
}

/**
 fonction qui permet de verifié de si la case est clickable par le joueur
 */

var isCaseAllowed =function(element){
    if (currentPlayer == 1) {
        if( getCaseClass(element).includes("blanc-pion")    ||
            getCaseClass(element).includes("blanc-tour")    ||
            getCaseClass(element).includes("blanc-cavalier")||
            getCaseClass(element).includes("blanc-fou")     ||
            getCaseClass(element).includes("blanc-roi")     ||
            getCaseClass(element).includes("blanc-reine")){
            return true;
        }
        else{
            return false;
        }
    } else if (currentPlayer == 2) {
        if( getCaseClass(element).includes("noir-pion")    ||
            getCaseClass(element).includes("noir-tour")    ||
            getCaseClass(element).includes("noir-cavalier")||
            getCaseClass(element).includes("noir-fou")     ||
            getCaseClass(element).includes("noir-roi")     ||
            getCaseClass(element).includes("noir-reine")){
            return true;
        }
        else{
            return false;
        }
    }
}


/**
 * Passe au joueur suivant.
 */
function changePlayer() {
        if (currentPlayer == 1) {
            document.getElementById("info").innerHTML = "<h1>Tour du joueur 1</h1>";
            currentPlayer = 2;
        } else if (currentPlayer == 2) {
            document.getElementById("info").innerHTML = "<h1>Tour du joueur 2</h1>";
            currentPlayer = 1;
        }
}


function getElementsChildren(element){
    return element.childNodes;
}

function initiate_board(element){

    getElementsChildren(element)[1].classList.add("noir-tour");
    getElementsChildren(element)[3].classList.add("noir-cavalier");
    getElementsChildren(element)[5].classList.add("noir-fou");
    getElementsChildren(element)[7].classList.add("noir-roi");
    getElementsChildren(element)[9].classList.add("noir-reine");
    getElementsChildren(element)[11].classList.add("noir-fou");
    getElementsChildren(element)[13].classList.add("noir-cavalier");
    getElementsChildren(element)[15].classList.add("noir-tour");
    getElementsChildren(element)[17].classList.add("noir-pion");
    getElementsChildren(element)[19].classList.add("noir-pion");
    getElementsChildren(element)[21].classList.add("noir-pion");
    getElementsChildren(element)[23].classList.add("noir-pion");
    getElementsChildren(element)[25].classList.add("noir-pion");
    getElementsChildren(element)[27].classList.add("noir-pion");
    getElementsChildren(element)[29].classList.add("noir-pion");
    getElementsChildren(element)[31].classList.add("noir-pion");

    getElementsChildren(element)[127].classList.add("blanc-tour");
    getElementsChildren(element)[125].classList.add("blanc-cavalier");
    getElementsChildren(element)[123].classList.add("blanc-fou");
    getElementsChildren(element)[121].classList.add("blanc-roi");
    getElementsChildren(element)[119].classList.add("blanc-reine");
    getElementsChildren(element)[117].classList.add("blanc-fou");
    getElementsChildren(element)[115].classList.add("blanc-cavalier");
    getElementsChildren(element)[113].classList.add("blanc-tour");
    getElementsChildren(element)[111].classList.add("blanc-pion");
    getElementsChildren(element)[109].classList.add("blanc-pion");
    getElementsChildren(element)[107].classList.add("blanc-pion");
    getElementsChildren(element)[105].classList.add("blanc-pion");
    getElementsChildren(element)[103].classList.add("blanc-pion");
    getElementsChildren(element)[101].classList.add("blanc-pion");
    getElementsChildren(element)[99].classList.add("blanc-pion");
    getElementsChildren(element)[97].classList.add("blanc-pion");

}

function erase_board(element){
    getElementsChildren(element)[1].classList.remove("noir-tour");
    getElementsChildren(element)[3].classList.remove("noir-cavalier");
    getElementsChildren(element)[5].classList.remove("noir-fou");
    getElementsChildren(element)[7].classList.remove("noir-roi");
    getElementsChildren(element)[9].classList.remove("noir-reine");
    getElementsChildren(element)[11].classList.remove("noir-fou");
    getElementsChildren(element)[13].classList.remove("noir-cavalier");
    getElementsChildren(element)[15].classList.remove("noir-tour");
    getElementsChildren(element)[17].classList.remove("noir-pion");
    getElementsChildren(element)[19].classList.remove("noir-pion");
    getElementsChildren(element)[21].classList.remove("noir-pion");
    getElementsChildren(element)[23].classList.remove("noir-pion");
    getElementsChildren(element)[25].classList.remove("noir-pion");
    getElementsChildren(element)[27].classList.remove("noir-pion");
    getElementsChildren(element)[29].classList.remove("noir-pion");
    getElementsChildren(element)[31].classList.remove("noir-pion");

    getElementsChildren(element)[127].classList.remove("blanc-tour");
    getElementsChildren(element)[125].classList.remove("blanc-cavalier");
    getElementsChildren(element)[123].classList.remove("blanc-fou");
    getElementsChildren(element)[121].classList.remove("blanc-roi");
    getElementsChildren(element)[119].classList.remove("blanc-reine");
    getElementsChildren(element)[117].classList.remove("blanc-fou");
    getElementsChildren(element)[115].classList.remove("blanc-cavalier");
    getElementsChildren(element)[113].classList.remove("blanc-tour");
    getElementsChildren(element)[111].classList.remove("blanc-pion");
    getElementsChildren(element)[109].classList.remove("blanc-pion");
    getElementsChildren(element)[107].classList.remove("blanc-pion");
    getElementsChildren(element)[105].classList.remove("blanc-pion");
    getElementsChildren(element)[103].classList.remove("blanc-pion");
    getElementsChildren(element)[101].classList.remove("blanc-pion");
    getElementsChildren(element)[99].classList.remove("blanc-pion");
    getElementsChildren(element)[97].classList.remove("blanc-pion");
}
/**
 * Ajoute une classe selon le joueur courant à une liste de classe liée à un élément HTML.
 * @param {*} classList liste des classes d'un élément HTML.
 */

function addSelectedClassByPlayer(classList) {
    if (currentPlayer == 1 ) {
        classList.add("selectedBlue");
    } else if (currentPlayer == 2) {
        classList.add("selectedRed");
    }
}

/**
 * Retire une classe selon le joueur courant d'une liste de classe liée à un élément HTML.
 * @param {*} classList liste des classes d'un élément HTML.
 */
function removeSelectedClassByPlayer(classList) {
    if (currentPlayer == 1) {
        classList.remove("selectedBlue");
    } else if (currentPlayer == 2) {
        classList.remove("selectedRed");
    }
}

var alreadySelected = function (){
    if (currentPlayer == 1) {
        return("selectedBlue");
    } else if (currentPlayer == 2) {
        return("selectedRed");
    }
}



/**
 * Fonction liée à l'évènement 'click'.
 * A MODIFIER
 */
var play = function() {

    selectedHTMLClasses = this.className;
    var selection = getCaseClass(selectedHTMLClasses);

    if (!currentSelection) {
        selectedHTML = this;
        /*var piece = getCaseClass(selectedHTMLClasses)*/
        if(isCaseAllowed(this.className)){
            addSelectedClassByPlayer(this.classList);
            currentSelection = true;
        }

        //var classPiece = getCaseClass(selectedHTMLClasses);

    } else {
        console.log(currentPlayer);

        if(alreadySelected() === selection){
            removeSelectedClassByPlayer(this.classList);
            currentSelection = false;
        } else if(isCaseEmpty(this.className)){
            removeSelectedClassByPlayer(selectedHTML.classList);
            //deplacer pion

            changePlayer();
            currentSelection = false;
        }
    }
};

var initialiser = function (event){
    initiate_board(grille)
}

var vider = function (event){
    erase_board(grille)
}

/**
 * On lie tous les éléments avec la classe 'case' à l'événement 'click'.
 */
var elements = document.getElementsByClassName("case");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', play, false);
}