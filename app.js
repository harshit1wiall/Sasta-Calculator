const button=document.querySelectorAll('button');
const screen=document.getElementById('input');


for(let btn of button)
{
    btn.addEventListener('click',(e)=>{
        const buttonText=e.target.innerText;
        

        if(buttonText==='X')
        {
            screen.value+='*';
        }
       else if(buttonText==='-')
        {
            screen.value+='-';
        }
        else if(buttonText==='/')
        {
            screen.value+='/';
        }
        else if(buttonText==='C')
        {
            screen.value='';
        }
        else if(buttonText==='.')
        {
            screen.value+='.';
        }
        else if(buttonText==='+/-')
        {

            screen.value=-screen.value;
        }
        else if(buttonText==='=')
        {
            try {
                screen.value=eval(screen.value);
            } catch (error) {
                console.log(error);
            screen.value="Invalid Operation";      
            }
        }
        else
        screen.value+=buttonText;

    });
};