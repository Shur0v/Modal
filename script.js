

// devs_form
// t


const devs_form = document.getElementById('devs_form');
const devsBox = document.getElementById('devsBox');

devs_form.addEventListener('submit', function(e){
    e.preventDefault();

    let naam = this.querySelector('input[name="Name"]').value;
    let skill = this.querySelectorAll('input[name="Skill"]:checked');
    let gender = this.querySelector('input[name="Gender"]:checked').value;
    let image = this.querySelector('input[name="Photo"]').value;

    let skill_arr = [];

    for (let i = 0; i < skill.length; i++) {
        skill_arr.push(skill[i].value);
    }


    let developers;
    if (dataGet('AllDevs')) {
        developers = dataGet('AllDevs');
    } else {
        developers = [];
    }

    // adding new data to developers Array
    developers.push({
        name    : naam,
        skill   : skill_arr,
        gender  : gender,
        image   : image,
    });

    dataSend('AllDevs', developers);

    instant();
    
});

instant();

function instant() {

    let dbDevs = dataGet('AllDevs');
    let carddesign = '';

    dbDevs.map(function (data) {

        let list_item = '';
        data.skill.map(function (list) {
            list_item += '<li>'+ list+'</li>';
        });

        carddesign += `                        
                        <div class="col-md-4 my-3">
                            <div class="card">
                                <img style="width: 100%; height: 280px; object-fit: cover;" src="${data.image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h3>${data.name}</h3> <br>
                                  <h5 class="Gender">Gender : ${data.gender}</h5> <br>
                                  <h6 class="card-title">Skill</h6>
                                  <ul>
                                      ${list_item}
                                  </ul>
                                </div>
                            </div>
                        </div>`;
    });

    devsBox.innerHTML = carddesign;

};












































// stop.addEventListener('click', function (){
//     clearInterval(counter);
// })

// reset.addEventListener('click', function (){
//     output.innerHTML = count;
//     clearInterval(count);
// })

























// devs.map( (data) => {
//     developers.innerHTML += `
//         <div class="card">
//             <div class="card-img">
//                 <img src="${data.Photo}" alt="Profile Picture">
//             </div>
            
//             <div class="desc">
//                 <h6 class="name">${data.Name}</h6>
//                 <h6 class="Skill">Full Stack ${data.Skill} Developer</h6>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, earum.</p>
//                 <h4>Location : ${data.Location}</h4>
//                 <h4>Sallery : ${data.Sallery}</h4>
//                 <h4 class="age">Age : ${data.Age}</h4>
//             </div>
//         </div>
//     `
// });













































// let math = prompt('Enter Your Math');
// let cal = eval(math);

// console.log(`Your calculation result: ${cal}`);








// const devs = [

//     {
//         Name    : 'Imran',
//         Age     : 19,
//         Skill   : 'php',
//         Sallery : 400,
//     },
//     {
//         Name    : 'Fahim',
//         Age     : 29,
//         Skill   : 'JS',
//         Sallery : 980,
//     },
//     {
//         Name    : 'Bodrul',
//         Age     : 28,
//         Skill   : 'WP',
//         Sallery : 350,
//     },
//     {
//         Name    : 'Siam',
//         Age     : 23,
//         Skill   : 'JS',
//         Sallery : 770,
//     },
//     {
//         Name    : 'Billal',
//         Age     : 24,
//         Skill   : 'WP',
//         Sallery : 650,
//     },
//     {
//         Name    : 'Sohel',
//         Age     : 30,
//         Skill   : 'php',
//         Sallery : 250,
//     },
//     {
//         Name    : 'Bayzid',
//         Age     : 50,
//         Skill   : 'WP',
//         Sallery : 300,
//     },
//     {
//         Name    : 'Akash',
//         Age     : 60,
//         Skill   : 'JS',
//         Sallery : 800,
//     }

// ]

// let total_sellery = 0;


// devs.map( (data) => {
//     console.log(`
//         Name    : ${data.Name}
//         Age     : ${data.Age}
//         Sallery : ${data.Sallery}
//         `);
//         total_sellery = total_sellery + data.Sallery;
// });

// console.log(`Total Sellery : ${total_sellery}`);



/**
 * COde WOrking 
 * with for loop
 * /



for (let i = 0; i < devs.length; i++) {

    if (devs[i].Age <= 30) {
        console.log(`
            Name    : ${devs[i].Name}
            Age     : ${devs[i].Age}
            Skill   : ${devs[i].Skill}
            Salery  : ${devs[i].Sallery}
            `);
            total_sellery = total_sellery + devs[i].Sallery;
    }
        
}

console.log(`Total sellery = ${total_sellery}`);















// ----------------------------------------------------------------
// let result = new Result();

// const infu = [
//     {
//         ID  : 200,
//         Roll: 1,
//         name: 'imran',
//         ban: 86,
//         eng: 66,
//         mat: 45
//     },
//     {
//         ID  : 202,
//         Roll: 2,
//         name: 'Rahik',
//         ban: 56,
//         eng: 67,
//         mat: 55
//     },
//     {
//         ID  : 204,
//         Roll: 3,
//         name: 'Montu',
//         ban: 66,
//         eng: 36,
//         mat: 25
//     },
//     {
//         ID  : 206,
//         Roll: 4,
//         name: 'towhid',
//         ban: 36,
//         eng: 96,
//         mat: 55
//     },
//     {
//         ID  : 208,
//         Roll: 5,
//         name: 'niloy',
//         ban: 46,
//         eng: 96,
//         mat: 65
//     },
//     {
//         ID  : 210,
//         Roll: 6,
//         name: 'foysal',
//         ban: 66,
//         eng: 46,
//         mat: 45
//     },
//     {
//         ID  : 212,
//         Roll: 7,
//         name: 'sajib',
//         ban: 34,
//         eng: 46,
//         mat: 76
//     }
// ]


// for (let i = 0; i < infu.length; i++) {
    
//     console.log(`
    
//         ID      : ${infu[i].ID}      
//         Roll    : ${infu[i].Roll}
//         Name    : ${infu[i].name}
//         ban     : ${infu[i].ban}   GPA : ${result.gpa(infu[i].ban)} CGPA  : ${result.cgpa(infu[i].ban)}
//         eng     : ${infu[i].eng}   GPA : ${result.gpa(infu[i].eng)} CGPA  : ${result.cgpa(infu[i].eng)}
//         mat     : ${infu[i].mat}   GPA : ${result.gpa(infu[i].mat)} CGPA  : ${result.cgpa(infu[i].mat)}

//     `);
    
// }


// infu.map(function (data) {

//     if (data.ID <= 208) {

//         console.log(`
//             ID      : ${data.ID}      
//             Roll    : ${data.Roll}
//             Name    : ${data.name}
            
//             ban     : ${data.ban}   GPA : ${result.gpa(data.ban)} CGPA  : ${result.cgpa(data.ban)}
//             eng     : ${data.eng}   GPA : ${result.gpa(data.eng)} CGPA  : ${result.cgpa(data.eng)}
//             mat     : ${data.mat}   GPA : ${result.gpa(data.mat)} CGPA  : ${result.cgpa(data.mat)}
//         `);
        
//     }


    
// });








// let data = [
//     ['imran', 'MERN', 300],
//     ['Rahik', 'Java', 400],
//     ['Montu', 'php', 250],
//     ['towhid', 'MERN', 330],
//     ['niloy', 'Java', 480],
//     ['foyal', 'php', 210],
//     ['sjib', 'MERN', 100],
//     ['raju', 'Java', 700],
//     ['iqbal', 'php', 290],
//     ['pakna', 'MERN', 310],
//     ['bayzid', 'Java', 120],
//     ['himu', 'php', 180],
//     ['hanto', 'MERN', 370],
//     ['saaid', 'Java', 310],
//     ['abdul', 'php', 290],
//     ['srabon', 'MERN', 330],
//     ['rony', 'Java', 170],
//     ['iddris', 'php', 160],
// ];


// code wsorking for array loop
// let count = 1;

// data.forEach((data) =>{
//     console.log( data[0] +' '+ count++ );
// })


// let count = 1;
// let sallery = 0;

// for (let i = 0; i < data.length; i++) {

// if (data[i][2] > 320 ) {
//     console.log('------------------');
//     data[i].forEach( data => console.log( data ))
//     console.log('------------------');
// }

// }











// let full = new Full();


// console.log(`

//     first number  = ${full.data3}
//     Second number = ${full.data4}
//     Third number  = ${full.data5}
//     ---------------------------------
//     Your addi. is = ${full.data3 + full.data4 + full.data5}`);



// console.log();







/**
 * loops
*/



// let line = 1;

// for(var i = 1; i <= 1000; i++){

//         if (i % 3 == 0 ) {
//             console.log(i + ' Javascript ' + line++);
//             // line++;
//             if (i % 7 == 0) {
//                 break;
//             }
//         }

// }












// class 1 & 2






// let data1, data2, data3;

// data1 = prompt('Enter your currency name: ');
// data3 = prompt('Enter amount: ');






/**
 * Both are
 * if else condition.
 * first one is,
 * shortcut version.
 */



// ( data1 == '' || data3 == '' ) ? alert('all fields are required') : console.log(`${data3} ${data1} = ${data3 * 124} Taka`);



// if ( data1 == '' || data3 == '' ) {

//     alert('all fields are required');
// }else {
//     console.log(`${data3} ${data1} = ${data3 * 124} Taka`);
// }
