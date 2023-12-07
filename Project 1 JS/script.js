const imageBox1 = document.getElementById("imageBox1");
const imageName = document.getElementById("imageName");
const cardAdded = document.getElementById("cardAdded");
const rightTop = document.getElementById("rightTop");
const allCards = document.getElementById("allCards");
const imageAdded = document.getElementById("imageAdded");
const arr13 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let arraddedCards = [];
let arrAllCards = [];

function changeName(ele){
    const l = ele.innerHTML.length;
    if (l == 7){
        imageBox1.innerHTML = `This is Card ${ele.innerHTML.slice(5,7)}`;
        imageName.innerHTML = `Card ${ele.innerHTML.slice(5,7)}`;
    }else{
        imageBox1.innerHTML = `This is Card ${ele.innerHTML[5]}`;
        imageName.innerHTML = `Card ${ele.innerHTML[5]}`;
    }
}
function changeName2(ele){
    const l = ele.innerHTML.length;
    if (l == 2){
        imageBox1.innerHTML = `This is Card ${ele.innerHTML.slice(0,2)}`;
        imageName.innerHTML = `Card ${ele.innerHTML.slice(0,2)}`;
    }else{
        imageBox1.innerHTML = `This is Card ${ele.innerHTML[0]}`;
        imageName.innerHTML = `Card ${ele.innerHTML[0]}`;
    }
}
function mouseOut(){
    imageBox1.innerHTML = `This is Card`;
    imageName.innerHTML = `Card`;
}
function addCard(ele) {
    arrAllCards = [];
    const l = ele.innerHTML.length;
    let eleNum = 0;
    if (l == 7){
        eleNum = Number(ele.innerHTML.slice(5,7));
    }else{
        eleNum = Number(ele.innerHTML[5]);
    }
    if ( !arraddedCards.includes(eleNum)){
        arraddedCards.push(eleNum);
        for ( let i of arr13){
            if ( !arraddedCards.includes(i)){
                arrAllCards.push(i);
            }
        }
        arraddedCards.sort((a, b) => a - b);
        let cardAddedHtml = "";
        let allCardsHtml = "";
        for ( let i of arraddedCards){
            cardAddedHtml += `<div class="cardsAdded" id="card1" onmouseout="mouseOut()" onmouseover="changeName2(this)" onclick="removeCard(this)">${i}</div>`;
        }
        cardAdded.innerHTML = cardAddedHtml;
        for ( let i of arrAllCards){
            allCardsHtml += `<div class="cards" onmouseout="mouseOut()" onmouseover="changeName(this)" onclick="addCard(this)" id="card1">Card ${i}</div>`
        }
        allCards.innerHTML = allCardsHtml;
        console.log(arrAllCards);
        rightTop.innerHTML = `All Cards (${arrAllCards.length})`;
        imageAdded.innerHTML = `Yours Cards (${arraddedCards.length})`;
    }
    
}
function removeCard(ele) {
    arraddedCards = [];
    eleNum = Number(ele.innerHTML);
    if ( !arrAllCards.includes(eleNum)){
        arrAllCards.push(eleNum);
        for ( let i of arr13){
            if ( !arrAllCards.includes(i)){
                arraddedCards.push(i);
            }
        }
        arrAllCards.sort((a, b) => a - b);
        let cardAddedHtml = "";
        let allCardsHtml = "";
        for ( let i of arraddedCards){
            cardAddedHtml += `<div class="cardsAdded" id="card1" onmouseout="mouseOut()" onmouseover="changeName2(this)" onclick="removeCard(this)">${i}</div>`;
        }
        cardAdded.innerHTML = cardAddedHtml;
        for ( let i of arrAllCards){
            allCardsHtml += `<div class="cards" onmouseout="mouseOut()" onmouseover="changeName(this)" onclick="addCard(this)" id="card1">Card ${i}</div>`
        }
        allCards.innerHTML = allCardsHtml;
        console.log(arrAllCards);
        rightTop.innerHTML = `All Cards (${arrAllCards.length})`;
        imageAdded.innerHTML = `Yours Cards (${arraddedCards.length})`;
    }
    
}


