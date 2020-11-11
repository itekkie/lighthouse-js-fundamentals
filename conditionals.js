// ex1.  IF
const raining = false
const cold = false
const temperature = -5

if (raining) {
  console.log("Don't forget your umbrella!")
}
if (cold) {
  console.log('Make sure you pick out a scarf!')
} else {
  console.log("Don't stay at home please")
}

// ex 2. ELSE IF
if (temperature < 0) {
  console.log('Make sure you pick out a scarf!')
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!")
} else {
  console.log('Short sleeves are fine.')
}

console.log("Now you're ready to go outside!")

// ex 3. Logical operators AND
const isCitizen = true
const age = 26

if (isCitizen && age > 18) {
  console.log('You are eligible to vote.')
}

// ex 4. OR
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…")
}

// ex 5. NOT
if (!raining) {
  console.log('Leave your umbrella at home!')
}
