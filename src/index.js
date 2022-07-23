module.exports = function toReadable (number) {
   let f = number.toString()
   let g = f.length;
   f.split('')
  const ones = ["zero","one","two","three","four","five","six","seven","eight","nine"]
  const ones2 = [" ","one","two","three","four","five","six","seven","eight","nine"]
  const tens = ["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
  const tens2 = ["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
  const hundreds = ["one hundred","two hundred","three hundred","four hundred","five hundred","six hundred","seven hundred","eight hundred","nine hundred"]
  if (f[g-1]==0 && f[g-2]!=0 && g>2){
     return hundreds [f[g-3]-1]+" " +tens[f[g-2]-1]
  }
  else if (f[g-2]==0 && f[g-1]!=0){
  return  hundreds [f[g-3]-1]+" "+ ones2[f[g-1]]
  }
  else if (f[g-2]==0 && f[g-1]==0){
    return  hundreds [f[g-3]-1]
    }
    else if (g>1 && g<=2 && f[g-1]==0){
        return  tens [f[g-2]-1]
        }
        else if(f[g-2]==1 && g<=2){
            return  tens2[f[g-1]-1]
          }
  else if(f[g-2]==1){
    return hundreds [f[g-3]-1]+" " +tens2[f[g-1]-1]
  }
  else{
  return  g>2? hundreds [f[g-3]-1]+" " +tens[f[g-2]-1] +" "+ ones2[f[g-1]] :g>1 && g<=2? tens[f[g-2]-1] +" "+ ones2[f[g-1]]: ones[f[g-1]] }
   
}
