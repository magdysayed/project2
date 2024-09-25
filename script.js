let backgroundrondom=true;
let backgroundInterval;


//store color in local storage
let mainColor=localStorage.getItem('color_option');
if(mainColor !==null){
    document.documentElement.style.setProperty('--maincolor',mainColor);

    document.querySelectorAll('.colorsList li').forEach(element=>{
        element.classList.remove('active');

        if(element.dataset.color===mainColor){
            element.classList.add('active')
        }
    });

   
}



// sttings background

let backgroundLocal = localStorage.getItem('Background-option');
if(backgroundLocal !== null){
    if(backgroundLocal == "true"){
        backgroundrondom=true;

    }else{
        backgroundrondom=false;
        clearInterval(backgroundInterval);

    }

    document.querySelectorAll('.Background span').forEach((element)=>{
        element.classList.remove('active')
    })

    if(backgroundLocal == "true"){
        document.querySelector(".Background .yes").classList.add("active");
    }else{
        document.querySelector(".Background .no").classList.add("active");
    }

}
const rondomBg=document.querySelectorAll(".Background span");
rondomBg.forEach(span =>{
    span.addEventListener('click', (e)=>{
        if(e.target.dataset.background==='yes'){

            backgroundrondom=true;

            localStorage.setItem('Background-option',true)
            rondomizeImg()
        }else{
            backgroundrondom=false;
            localStorage.setItem('Background-option',false)
            clearInterval(backgroundInterval);
            
        }
        e.target.parentElement.querySelectorAll('.active').forEach(element=>{
            element.classList.remove('active');
        });
        e.target.classList.add('active')
    });
})




//show sitting list
let landing =document.getElementById("landing");
document.getElementById('icon-container').onclick=()=>{
    document.getElementById('icon-container').classList.toggle('fa-spin');
    document.getElementById('testing-option').classList.toggle('open');
}

//select page color
const colorList=document.querySelectorAll(".colorsList li");

colorList.forEach(li =>{
    li.addEventListener('click', (e)=>{
        
        document.documentElement.style.setProperty('--maincolor',e.target.dataset.color);
        localStorage.setItem("color_option",e.target.dataset.color);

        e.target.parentElement.querySelectorAll('.active').forEach(element=>{
            element.classList.remove('active');
        });
        e.target.classList.add('active')
    });
})

//end select page color




//changing background image
let BImages=['1.jpg',]



function rondomizeImg(){

if(backgroundrondom===true){
    
    backgroundInterval=setInterval(() => {

            let rondomPic=Math.floor(Math.random()*BImages.length);
                landing.style.backgroundImage=`url('./images/${BImages[rondomPic]}')`;
            }, 1000);
}
}
rondomizeImg()

//data progress animation

let skillProgress=document.querySelectorAll('.skill-progress span');
let ourskills=document.querySelector('.skills')

window.onscroll= function(){
    
    let skillOffestTop=ourskills.offsetTop;
    
    let skillsOuterHeight=ourskills.offsetHeight;

    let windowHeight=this.innerHeight;
    console.log(skillsOuterHeight)
    let windowscrollTop=this.pageYOffset;
    

    if(windowscrollTop > (skillOffestTop +skillsOuterHeight - windowHeight-100)){
    
    
    skillProgress.forEach(element=>{
        element.style.transition='all .5s';
        element.style.width=element.getAttribute('data-progress');
})

    }
}

// create galary
let galary = document.querySelectorAll('.galary img')

galary.forEach(image=>{
    image.addEventListener('click' ,(element)=>{
        //create popup box
        let overlay=document.createElement('div');
        overlay.className='popup-overlay'
        document.body.appendChild(overlay);

        let popupBox=document.createElement('div')
        popupBox.className='popup-box';
        document.body.appendChild(popupBox);

        
        //image title
        if(element.alt !== null){
        let ImageTitle=document.createElement('h2');
        let ImageAlt=document.createTextNode(image.alt);
        ImageTitle.appendChild(ImageAlt);
        ImageTitle.style.textAlign='center'
        popupBox.appendChild(ImageTitle)
        }

        //close button
        let closespan=document.createElement('span');
        let closeBtn=document.createTextNode('X')
        closespan.appendChild(closeBtn);
        closespan.className='close-span'
        popupBox.appendChild(closespan)

        closespan.onclick=function(){
            popupBox.style.display='none';
            overlay.style.display='none';
        }
        
        //add image to popup box
        let popupImage=document.createElement('img');
        popupImage.src=image.src;
        popupImage.className='popup-image'
        popupBox.appendChild(popupImage);


    })
})
    



    let bullets=document.querySelectorAll('.bullet')

    let links=document.querySelectorAll('.pages a');

    

    function goTOsection(element){
        element.forEach((element)=>{
            element.addEventListener('click' , (e)=>{
                document.querySelector(element.getAttribute('data-section')).scrollIntoView({
                    behavior:"smooth"
                })
            })
        })
    }

goTOsection(bullets)
goTOsection(links)

