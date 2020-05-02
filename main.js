console.log('siemanko!!!');
const name = 'Karol'
const surname = 'Mazan'
const age = '20'

console.log(`Nazywam się ${name} ${surname} i miło mi że tu zagladasz`)

const title = document.querySelector(`.title`)
console.log(title) 

if (age < 20)  {
console.log('Masz mniej niz 20 lat');
} else if ((age >= 20) && (age <=30))  {
console.log('Masz wiecej niz 20 lat ale mniej niz 30');
} else {
    console.log('jestes 31+')
}

switch (age) {
    case 20:
        console.log('masz rowno 20 lat');
    break;
    case 30:
        console.log('masz rowno 30 lat')
    break;
    default:
        console.log(`masz ${age} lat`)
    break;
}