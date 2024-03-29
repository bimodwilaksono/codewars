// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
  const dnaSplit = dna.split("");
  const dnaPair = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return dnaSplit.map((el) => [dnaPair[el]]).join("");
}



console.log(DNAStrand('ATTGC'));