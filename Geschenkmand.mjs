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

    for (let item of geschenkmand) /*Deze lus doorloopt elk element (of geschenk) in de array geschenkmand. In elke iteratie wordt de waarde van item ingesteld op het huidige geschenk (zoals "Wijn", "Bier", of "Fruitsap").*/
    {
        if (item === "Wijn") {
            som += 10;
        } else if (item === "Bier") {
            som += 2;
        } else if (item === "Fruitsap") {
            som += 3;
        }
    }

        console.log("totaal van u aankoop is "+som+" EUR");
        return som;
}

resultaat = berekenTotaal(geschenkmand);




    process.exit();