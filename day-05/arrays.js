const products = ["Pen", "Notebook", "Ruler", "Eraser", "Marker"];

// 1. Add a new product
products.push("Stapler");

// 2. Remove the first item
products.shift();

// 3. Check if "Ruler" exists
const hasRuler = products.includes("Ruler");

// 4. Find index of "Marker"
const markerIndex = products.indexOf("Marker");

// 5. Create a new array with uppercase names
const upperProducts = products.map((item) => item.toUpperCase());

// 6. Filter products containing "o"
const filtered = products.filter((item) => item.includes("o"));

console.log("Products:", products);
console.log("Has Ruler:", hasRuler);
console.log("Marker Index:", markerIndex);
console.log("Uppercase:", upperProducts);
console.log("Filtered:", filtered);
