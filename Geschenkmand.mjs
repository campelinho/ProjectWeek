import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geschenk; //variabel voor product
let geschenkmand =[]; //lege array (moet gevuld worden door klant)
let teller =0;

let keuze = await userInput.question("Hoe groot is u geschenkmand? (3-20) ");

while (keuze<3 || keuze > 20 ) //Grenzen van onze mand
    {
        console.error("Foutieve invoer, probeer het opnieuw, u moet minimaal 3 cadeaus kiezen en mag niet meer dan 20 zijn ")
        keuze = await userInput.question("Hoe groot is u geschenkmand? (3-20) ");

        if(keuze>3 && keuze<20 ) //Geschenkmand grootte
            {
                geschenkmand.push(keuze);
            }
    }


    function vulgeschenkmand(geschenkmand)
    {
        console.log("1.Wijn" + '\n'+ "2.Bier" +  '\n' + "3.Fruitsap");



        while(teller < keuze )
        {

        switch(geschenk)
    {
        case "Wijn":
            console.log("W");
            teller++;
            break;
        case "Bier":
            console.log("B")
            teller++;
            break;
        case "Fruitsap":
            console.log("F")
            teller++;
            break;
            default:



    }
        }
    }

    vulgeschenkmand();


    process.exit();