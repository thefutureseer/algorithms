// const inputJsonObj = '[{"_id":"66585a86f96fa5443587abdc","respondentName":"Field supervisor S.O.C.","teamPerformance":"Over all the team did good.  We caught one person doing the wrong thing and that person was sent home.","supportTeam":"The Warriors","vampireHighSchool":false,"forgetMemory":"The nightmares.","favoriteToy":"Memory (the card game)","comfortFood":"Tacos","snackPreference":"Savory","dreamDestination":"Spain but mostly unknown as for a dream destination maybe the moon.","memorableTravel":"I almost got married in Guayaquil, Ecuador.","reincarnationAnimal":"Lion or an Eagle ","datingPreference":"All the time","Love":true},{"_id":"665db0766b972f7c791b8d43","respondentName":"F.S. S.O.C.","teamPerformance":"Pretty good. 1 person missing. ","teamSupporterOf":"Warriors / Bay area teams","vampireHighSchool":false,"forgetAMemory":"Nightmares","favoriteToyOrGame":"Memory the card game.","comfortFood":"Chocolate","snackPreference":"Savory","dreamDestination":"As for a dream idk but maybe the moon!","memorableTravel":"I almost got married in Guayaquil, Ecuador","campingAnyone?":"850","petPreference":"other","petPreference-Comment":"animal person","reincarnationAnimal":"A Lion or an Eagle.","religion":true,"DatingPreferenceRe:Persistence":"All the time","mystics?":"500"}]';
// '[{"_id":"1","vampireHighSchool":true},{"_id":"2","vampireHighSchool":false},{"_id":"3","vampireHighSchool":true}]';

const countKeys = (inputJson) => {
  // Initialize the _id counter
  let idCount = 0;
  //would you go to highSchool for the rest of your life
  let highSchoolForever = 0;
  let highSchoolForeverNo = 0;
  let majorityVote;
  // let vampireHighSchool = Boolean;
  // Attempt to parse JSON string to an array of objects
  let arrFromJson;
  try {
    arrFromJson = JSON.parse(inputJson);
  } catch (error) {
    console.error("Invalid JSON string:", error);
    return {
      idCount,
      highSchoolForever,
      highSchoolForeverNo,
      majorityVote: 'invalidJson'
    };
  };

  // Iterate through each object in the array
  for (let obj of arrFromJson) {
    if (obj.hasOwnProperty('_id')) {
      idCount++;
    }
    if (obj.hasOwnProperty('vampireHighSchool')) {
      if(obj.vampireHighSchool===true //is set to true:
      ) highSchoolForever++;
      else  highSchoolForeverNo++;
    }
  }
  //check which is higher
  majorityVote = highSchoolForever > highSchoolForeverNo ? 'highSchoolForever' : 'highSchoolForeverNo';
  return {idCount, highSchoolForever, highSchoolForeverNo, majorityVote};
};

// const keys = countKeys(inputJsonObj);
// console.log("Heres the data returned: ", keys);

module.exports = countKeys;