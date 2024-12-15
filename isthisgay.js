const gayWords = [
    "gay", // English, Spanish, French, Portuguese, Italian, Swedish, Norwegian, Danish, Indonesian, Tagalog, etc.
    "게이", // Korean
    "schwul", // German
    "同性恋", // Chinese (Simplified)
    "ゲイ", // Japanese
    "гей", // Russian, Ukrainian, Bulgarian
    "gej", // Serbian, Bosnian, Croatian
    "homoseksual", // Malay
    "γκέι", // Greek
    "géi", // Hungarian
    "gėjus", // Lithuanian
    "گے", // Urdu, Pashto
    "گی", // Dari
    "गे", // Hindi, Marathi, Nepali
    "gayu", // Albanian
    "shoga", // Zulu
    "gey", // Turkish, Azerbaijani
    "גיי", // Hebrew
    "gayu", // Georgian
    "同性愛者" // Chinese (Traditional)
];

export function isThisGay(text) {
    const lowerText = text.toLowerCase();
    return gayWords.some(gWord => lowerText.includes(gWord.toLowerCase()));
}
