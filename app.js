information = {
    id: 248197325,
    name: 'Ayşegül',
    surname:'BİLTEKİN',
    adress: {
        sehir: 'Samsun',
        mahalle: 'Mevlana mah'
    },
    yas: 23,
    is: 'Frontend Developer',


    hobiler: ['Tiyatro', 'Bisiklet sürmek', 'Voleybol oynamak']
}

var btn3=document.querySelector("#btn3");
var kutu=document.querySelector("#kutu");


btn3.onclick=function(){
    
    var kirmizi=Math.floor(Math.random()*255);
    var yesil=Math.floor(Math.random()*255);
    var mavi=Math.floor(Math.random()*255);
    
    var renk=`rgb(${kirmizi} ,${yesil}, ${mavi})`;
    kutu.style.background=renk;
}

function showUser(value) {

    document.querySelector('.user-id').innerHTML += `
        id: ${information.id}
    `

    document.querySelector('.user-infos').innerHTML += `
       <span>Ad : ${information.name}</span> 
       <span>Soyad : ${information.surname}</span> 
       <span>Yaş : ${information.yas}</span> 
       <span>İş : ${information.is}</span> 

    `

    document.querySelector('.user-adress').innerHTML += `
        <span>Şehir: ${information.adress.sehir}</span>
        <span>Mahalle: ${information.adress.mahalle}</span>
    `
    
    let hobbies = document.querySelector('.hobbies')

    for (index in information.hobiler) {
        hobbies.innerHTML +=  
        //<span>Hobilerim:</span>
        //her index için terar veriyor bug var

        `
        

        <div>${information.hobiler[index]}</div>
        `
    }

    document.getElementById("btn").disabled = true;
}
function photoUser(value) {

    document.querySelector('.photo').innerHTML += `
        resim: ${information.photo}
    `


}