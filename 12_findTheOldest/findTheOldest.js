const findTheOldest = function(people) {
    for (person of people) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = 2022;
        }
    }
    const ordered = people.sort(function(personA, personB) {
        if ((personA.yearOfDeath - personA.yearOfBirth) > (personB.yearOfDeath - personB.yearOfBirth)){
            return -1;
        } else {
            return 1;
        }
    });
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
