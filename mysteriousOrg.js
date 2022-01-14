// Returns a random DNA base
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum,dna)=>{
  return{
    specimenNum: specimenNum,
    dna: dna,

    mutate() {
      const randInd = Math.floor(Math.random() * this.dna.length);
      let generatedBase = returnRandBase();
      while (this.dna[randInd] === generatedBase) {
        generatedBase = returnRandBase();
      }
      this.dna[randInd] = generatedBase;
      return this.dna;
    },
    compare(pAqeuor){
      const simil = this.dna.reduce((sacc, cur, index, newArr) => {
        if (newArr[idx] === pAqueor.dna[index]) {
          return sacc + 1;
        } else {
          return sacc;
        }
      }, 0);
      const sharedDnaPercentage = (simil / this.dna.length) * 100;
      const percentageTo2Deci = sharedDnaPercentage.toFixed(2);
      console.log(`${this.specimanNum} and ${pAqueor.specimanNum} have ${percentageTo2Deci}% DNA in common.`);
    },

    willLikelySurvive(){
        let noOfCsOrGs = 0;
      this.dna.forEach(dna => {
        if (dna === 'C' || dna === 'G') {
          return noOfCsOrGs++
        }
      })
      console.log(noOfCsOrGs)
      const survivalPercent = (noOfCsOrGs/15) * 100;
      if (survivalPercent >= 60) {
        return true;
      } else return false;
     },
    }
  }

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen);