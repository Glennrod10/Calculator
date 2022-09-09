(function(){
    let screen=document.querySelector('.calculator-screen');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-clear');
    let equal=document.querySelector('.btn-equal');

// getting it in screens
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value=e.target.dataset.num;
            screen.value+=value;
        })
    });

// equal to button
    equal.addEventListener('click',function(e){
        if (screen.value=== ''){
            screen.value= "";
        }
        else{
            var answer = eval(screen.value);
            screen.value=answer;
        }
    })

// clear button
    clear.addEventListener('click',function(e){
        screen.value="";
    })


})();

//dark mode

function dark(){
    let element=document.body;
    element.classList.toggle('darkmode')
}