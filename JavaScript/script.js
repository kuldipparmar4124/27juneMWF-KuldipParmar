let kuldipbtn = document.querySelector('button');
kuldipbtn.addEventListener('click', inputMsg);

function inputMsg(){
    // alert("kuldip parmar");
    let name = prompt('enter name of student');
    kuldipbtn.textContent = 'roll no. 1:' + name;
}