const inputJsonObj = '[{"_id":"66585a86f96fa5443587abdc","respondentName":"Field supervisor S.O.C.","teamPerformance":"Over all the team did good.  We caught one person doing the wrong thing and that person was sent home.","supportTeam":"The Warriors","vampireHighSchool":false,"forgetMemory":"The nightmares.","favoriteToy":"Memory (the card game)","comfortFood":"Tacos","snackPreference":"Savory","dreamDestination":"Spain but mostly unknown as for a dream destination maybe the moon.","memorableTravel":"I almost got married in Guayaquil, Ecuador.","reincarnationAnimal":"Lion or an Eagle ","datingPreference":"All the time","Love":true},{"_id":"665db0766b972f7c791b8d43","respondentName":"F.S. S.O.C.","teamPerformance":"Pretty good. 1 person missing. ","teamSupporterOf":"Warriors / Bay area teams","vampireHighSchool":false,"forgetAMemory":"Nightmares","favoriteToyOrGame":"Memory the card game.","comfortFood":"Chocolate","snackPreference":"Savory","dreamDestination":"As for a dream idk but maybe the moon!","memorableTravel":"I almost got married in Guayaquil, Ecuador","campingAnyone?":"850","petPreference":"other","petPreference-Comment":"animal person","reincarnationAnimal":"A Lion or an Eagle.","religion":true,"DatingPreferenceRe:Persistence":"All the time","mystics?":"500"}]';

const countIdKeys = (inputJson) => {
  // Initialize the _id counter
  let idCount = 0;

  // Parse JSON string to an array of objects
  let arrFromJson = JSON.parse(inputJson);

  // Iterate through each object in the array
  for (let obj of arrFromJson) {
    if (obj.hasOwnProperty('_id')) {
      idCount++;
    }
  }

  return idCount;
};

const idCount = countIdKeys(inputJsonObj);
console.log("Number of _id keys:", idCount);

module.exports = countIdKeys;
