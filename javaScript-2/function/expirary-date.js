const expiryDate = new Date('2021-11-12'); // Corrected to initialize expiryDate as a Date object
const monthsBeforeExpiry = 2;
expiryDate.setMonth(expiryDate.getMonth() - monthsBeforeExpiry);
const manufacturingDate = new Date(expiryDate); // Corrected to clone expiryDate

/* Please do not modify anything below this line */
console.log(`${manufacturingDate.getDate()}-${manufacturingDate.getMonth() + 1}-${manufacturingDate.getFullYear()}`);
