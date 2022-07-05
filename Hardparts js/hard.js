var workshop = {
  teacher: 'kyle',
  ask(question) {
    console.log(this.teacher,question)
  }
}
workshop.ask('what is binding')





/*for (var i = 1; i <= 3; i++){
  let j = i;
  setTimeout(function () {
    console.log(`j:${j}`)
  },j*1000)
}


/*function getStudentIds(studentId) {
  return studentRecords.find(function matchId(record) {
    return record.id == studentId;
  });
}

function printRecords(recordIds) {
  var records = recordIds.map(getStudentById);
  records.sort(function sortByNameAsc(record1, record2) {
    if (record1.name < record2.name) {
      return -1;
    } else if (record.name > record2.name) {
      return 1;
    } else {
      return 0;
    }
  });
  records.forEach(function printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? "paid" : "not paid"}`
    );
  });
}

function paidStudentsToEnroll() {
  var idsToEnroll = studentRecords.filter(function needsToEnroll(records) { return (records.paid && !currentEnrollment.includes(record.id)) });
  studentRecords.map(function getStudentId(record) {
    return record.id;
  })
  return [...currentEnrollment, ...idsToEnroll];
}

function remindUnpaid(recordIds) {
  var unpaidIds = recordIds.filter(function isUnpaid(studentId{
    var record = getStudentById(studentId)
     return !record.paid
  })
  printRecords(unpaidIds)
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/

/*
function setsMatch(arr1, arr2) {
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length == arr2.length
  ) {
    for (let v of arr1) {
      if (!arr2.includes(v)) return false;
    }
    return true;
  }
  return false;
}

function findAll(match, arr) {
  var ret = [];
  for (let v of arr) {
    if (Object.is(match, v)) {
      ret.push(v);
    }
    else if (match == null && v == null) {
      ret.push(v)
    }
    else if (typeof match == 'boolean' && typeof v == 'boolean')
      if (match == v) {
        ret.push(v);
      }
  
      else if (typeof match == 'string' && match.trim() != "" && typeof v == "number" && !Object.is(v, -0))
        if (match == v) {
          ret.push(v);
        }
        else if (typeof match == "number" && !Object.is(match, -0) && !Object.is(match, NaN) && !Object.is(match, Infinity) && !Object.is(match, -Infinity) && typeof v == 'string' && v.trim() != "") {
          if (match == v) {
            ret.push(v)
          }
        }
  }
  return ret;
}

var myObj = { a: 2 };

var values = [
  null,
  undefined,
  -0,
  0,
  13,
  42,
  NaN,
  -Infinity,
  Infinity,
  "",
  "0",
  "42",
  "42hello",
  "true",
  "NaN",
  true,
  false,
  myObj,
];

console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, "0"]) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, "42"]) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll("", values), [""]) === true);
console.log(setsMatch(findAll("0", values), [0, "0"]) === true);
console.log(setsMatch(findAll("42", values), [42, "42"]) === true);
console.log(setsMatch(findAll("42hello", values), ["42hello"]) === true);
console.log(setsMatch(findAll("true", values), ["true"]) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, "42hello"]) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(
  setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false
);
console.log(setsMatch(findAll("", values), ["", 0]) === false);
console.log(setsMatch(findAll("false", values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, "true"]) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

/*
if (!(5 > 3) || !(2 > 5)) {
  console.log("true");
} else {
  console.log("false");
}


excercise
function isValidName(name) {
  if (typeof name == "string" && name.trim().length >= 3) {
    return true;
  }
  return false;
}

function hoursAttended(attended, length) {
  if (typeof attended == "string" && attended.trim() != "") {
    attended = Number(attended);
  }
  if (typeof length == "string" && length.trim() != "") {
    length = Number(length);
  }
  if (
    typeof attended == "number" &&
    typeof length == "number" &&
    attended >= 0 &&
    length >= 0 &&
    Number.isInteger(attended) &&
    Number.isInteger(length) &&
    attended <= length
  ) {
    return true;
  }
  return false;
}

console.log(isValidName("Frank") === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("", 6) === false);
console.log(hoursAttended(6, "") === false);
console.log(hoursAttended("", "") === false);
console.log(hoursAttended("foo", 6) === false);
console.log(hoursAttended(6, "foo") === false);
console.log(hoursAttended("foo", "bar") === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, "6") === false);
console.log(hoursAttended("10", 6) === false);
console.log(hoursAttended("10", "6") === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, "10.1") === false);
console.log(hoursAttended("6.1", 10) === false);
console.log(hoursAttended("6.1", "10.1") === false);

/*function formatTrend(trendRate) {
    let direction =
        (trendRate < 0 || Object.is(trendRate, -0)) ? "down" : 'up'
    return`${direction} ${Math.abs(trendRate)}`
}
console.log(formatTrend(-3))
    
/*function formatTrend(trendRate) {
    let direction = 
    (trendRate < 0 || Object.is(trendRate, -0)) ? "up" : "down"
    return `${direction} ${Math.abs(trendRate)}`
}
console.log(formatTrend(3))*/

/*function formatTrend(trendRate) {
  let direction;
  if (trendRate < 0 || Object.is(trendRate, -0)) {
    direction = "up"
  } else {
    direction = "down"
  }
  return `${direction} ${Math.abs(trendRate)}`;
}

console.log(formatTrend(3));

/*function to predict if the stock is up or down
function formatTrend(trendRate) {
    var direction =
        (trendRate < 0 || Object.is(trendRate, -0)) ? "up" : "down"
    return`${direction} ${Math.abs(trendRate)}`
}
console.log(formatTrend(3))

/*Math.abs
function difference(a, b) {
    return Math.abs(b-a)
}
console.log(difference(5,3))

/*x ++ means
function plusplus(orig_x) {
    var orig_x_coerced = Number(orig_x)
    x = orig_x_coerced + 1
    return orig_x_coerced
}

let x = (5)
plusplus(x)
x */
