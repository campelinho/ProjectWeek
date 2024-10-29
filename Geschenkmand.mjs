import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let geschenkmand =[]; //lege array (moet gevuld worden door klant)
let teller = 0;
let keuze;
let grootte = parseFloat(await userInput.question("Hoe groot is u geschenkmand? (3-20) "));
let resultaat;
let som = 0;
while (grootte<3 || grootte > 20 ) //Grenzen van onze mand

    {
        console.error("Foutieve invoer, probeer het opnieuw, u moet minimaal 3 cadeaus kiezen en mag niet meer dan 20 zijn ")
        grootte = parseFloat(await userInput.question("Hoe groot is u geschenkmand? (3-20) "));

        if(grootte>3 && grootte<20 ) //Geschenkmand grootte
            {
                break;
            }
    }


    async function vulgeschenkmand(geschenkmand,grootte) //aSYNC ANDERS IS HET ONMOGELIJK OM AWAIT USER TE GEBRUIKEN ik had hier altijd een foutmelding
    { 
        
        
        console.log("1.Wijn" + '\n'+ "2.Bier" +  '\n' + "3.Fruitsap");
        console.log("Kies uit 1,2 of 3");
        
       
        while(teller<grootte) // als de teller zo groot is als de grootte van de mand verlat die de loop
        {

        keuze = await userInput.question("Welk geschenk kies je ?");
        if(keuze == "1" || keuze == "Wijn" || keuze == "W" )
        {
            geschenkmand.push("Wijn"); //Naam + Waarde toegevoegd in de array om de functie (berekentotaal) te voeren met .reduce
            console.log("je hebt wijn aan je mandje toegevoegd");
          
            teller++;
        }

        else if (keuze == "2" || keuze == "Bier" || keuze == "B")
            {
                geschenkmand.push("Bier");//Naam + Waarde toegevoegd in de array om de functie (berekentotaal) te voeren met .reduce
                console.log("je hebt bier aan je mandje toegevoegd");
               
                teller++;
            }


        else if (keuze == "3" || keuze == "Fruitsap" || keuze == "F" )
            {
                 geschenkmand.push("Fruitsap");//Naam + Waarde toegevoegd in de array om de functie (berekentotaal) te voeren met .reduce
                 console.log("je hebt Fruitsap aan je mandje toegevoegd");
                
                teller++;
            }

        else
        {
            console.error("Foutieve invoer, probeer het opnieuw")
            keuze = await userInput.question("Welk geschenk kies je ?");
        }

        }
    }

   await vulgeschenkmand(geschenkmand,grootte); //door Async te gebruiken moet ik await function ook gebruiken "op internet gezocht" want mijn programma ging gewoon door de function zonder de function te beeindigen.

// 25/10/24:16:30 tot hier werkt het


/*function berekenTotaal(geschenkmand)
{
    let Wijn =0;
    let Bier=0;
    let Fruitsap=0;

    for(let i=0; i<geschenkmand.length;i++)
    {

    if(keuze == "1" || keuze == "Wijn" || keuze == "W" )
        {
            Wijn=+10;
            
        }

        else if (keuze == "2" || keuze == "Bier" || keuze == "B")
        {
            Bier=+2;
        }

        else if (keuze == "3" || keuze == "Fruitsap" || keuze == "F" )
        {
            Fruitsap=+3;
        }
    som = Wijn + Bier + Fruitsap;       
    
}*/

function berekenTotaal(geschenkmand)
 {
    let som = 0;

    for (let item of geschenkmand) /*met een for of loop kunnen we elke item doorlopen in onze array zou ook kunnen met een foreach.(zoals "Wijn", "Bier", of "Fruitsap").
    source:https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript  ==> 3. ES6 for-of statement
    */
    {
        if (item === "Wijn") {
            som += 10;
        } else if (item === "Bier") {
            som += 2;
        } else if (item === "Fruitsap") {
            som += 3;
        }
    }

        console.log("De waarde van je mand is: "+som+" EUR");
        return som;
}

resultaat = berekenTotaal(geschenkmand);



function berekenTotaalBTW(geschenkmand)
 {
    let som = 0;
    let BTW =0;
    for (let item of geschenkmand) /*met een for of loop kunnen we elke item doorlopen in onze array zou ook kunnen met een foreach.(zoals "Wijn", "Bier", of "Fruitsap").
    source:https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript  ==> 3. ES6 for-of statement
    */
    {
        if (item === "Wijn") {
            som += 10;
            BTW = som / 100 * 21;
        } else if (item === "Bier") {
            som += 2;
            BTW = som / 100 * 21;
        } else if (item === "Fruitsap") {
            som += 3;
            BTW = som / 100 * 21;
        }
    }

        console.log("Inclusief met btw is dit : "+BTW +" EUR");
        return BTW;
        
}
berekenTotaalBTW(geschenkmand);

function lotterij()
{
    let nummer = Math.floor(Math.random()*10)+1; /*random nummer tussen 1 en 10 math.random*10 = tussen 0 en 9 +1 wordt dit 1 en 10
    source: https://www.w3schools.com/js/js_random.asp */
    if (nummer === 5)//Waarom 5? zo elke keer dat er 5 gerenereerd wordt krijgt onze klant een geschenk dus 1 kans op 10
        {
            console.log("Gefeliciteerd, Je hebt een geschenk gewonnen!")
        }

    else
    {
        console.log("Helaas, deze keer geen gratis geschenk.")
    }
}

lotterij();
    process.exit();