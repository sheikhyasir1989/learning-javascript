// var table = 9;
// var length = 10 ;
// var i = 1;

// document.write("multiplication table:" + table);
// for (i=1; i<=length; i++)

// document.write("<br>" +i+" *"+table+"="+(i*table));


const number = parseInt(prompt('Enter an intiger:'));


for (let i = 1; i <= 10; i++){

    const result = i * number;


    console.log(`${number} * ${i}=${result}`);
}