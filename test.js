function listeDesNombres(liste_nombres){
     for (let i=0; i<liste_nombres.length; i++) {
          if (liste_nombres[i]%5===0 && liste_nombres[i]%3===0) {
               console.log("GarçonFille");
          }
          else if (liste_nombres[i]%3===0) {
               console.log("Garçon");
          }
          else if (liste_nombres[i]%5===0) {
               console.log("Fille");
          }
          else {
               console.log(liste_nombres[i]);
          }
     }

}

function listeDesDates(liste_dates){
     for (let i=0; i<liste_dates.length; i++) {
          var parts =liste_dates[i].split('/'); 
          var mydate = new Date(parts[2], parts[1] - 1, parts[0]);
     
          //premier affichage
          if (parts[1]>=0){
               var dateDernierMois= new Date(parts[2], parts[1]-1, 0);
               console.log(`la date qui correspond au dernier jour du mois précédant (${dateDernierMois.toString()}).` );
          }
          else {
               var dateDernierMois= new Date(parts[2]-1, 11, 0);
               console.log(`la date qui correspond au dernier jour du mois précédant (${dateDernierMois.toString()}).` );
          }
     
          //Deuxiéme affichage
          mydate.setHours(0, 0);
          console.log(mydate.toString());
     
          //Troxiéme affichage
          dformat = [mydate.getMonth()+1,
                    mydate.getDate(),
                    mydate.getFullYear()].join('/')+' '+
                   [mydate.getHours(),
                    mydate.getMinutes(),].join(':');
          console.log(dformat);
          
          //Dernier affichage
          var oneJan = new Date(mydate.getFullYear(),0,1);
          var numberOfDays = Math.floor((mydate - oneJan) / (24 * 60 * 60 * 1000));
          var result = Math.ceil(( mydate.getDay() + 1 + numberOfDays) / 7);
          console.log(`le nombre de la semaine dans la date (${dformat}) est ${result}.`);
     
          
          console.log('\n');
          console.log('********************************');
     }

}

var liste_nombres = [1,15,55,84,6,584,2,35,65,24,56];
listeDesNombres(liste_nombres);

var liste_dates = ["01/02/2021","08/05/1998","06/12/2005"]
listeDesDates(liste_dates);

