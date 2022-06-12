'use strict'


document.addEventListener('DOMContentLoaded', function(e){

    const colorForm = document.querySelector('#color-form')
    
    const rectangle = document.querySelector('#rectangle')
    const boxGenerateForm = document.querySelector('#box_generate_form')

    function generateRandomColor(){
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);   
        return `#${randColor.toUpperCase()}`
    }

   
    console.log(color_set)
    function colorFilter(color,title,subtitle){
        this.color = color;
        this.title = title
        this.subtitle = subtitle
    }
    var color_set;
    colorForm.addEventListener('click',function(e){
        
        if(e.target.dataset.action == 'radio_button'){
            color_set=generateRandomColor()
            const radio = document.getElementById('color_radio')
            radio.style.accentColor= color_set
        }
    })

    boxGenerateForm.addEventListener('click',function(e){
        
        if(e.target.dataset.action == 'radio_button'){
            color_set=generateRandomColor()
            const radio = document.getElementById('radio_to_generate')
            radio.style.accentColor= color_set
        }
    })

    boxGenerateForm.addEventListener('submit',function(e){
        e.preventDefault()
        const container = document.querySelector('.container')
        const title=boxGenerateForm.querySelector('#title_to_generate')?boxGenerateForm.querySelector('#title_to_generate').value:''
        const subtitle=boxGenerateForm.querySelector('#subtitle_to_generate')?boxGenerateForm.querySelector('#subtitle_to_generate').value:''
        console.log(title,subtitle)

        const newBox = document.createElement('div')
        newBox.classList.add('box')
        newBox.classList.add(`show`)
        title? newBox.classList.add(title):
        subtitle? newBox.classList.add(subtitle):
        console.log(color_set)
        newBox.style.background = color_set
        newBox.innerHTML = `${title} ${subtitle}`
        container.appendChild(newBox)
        // container.innerHTML+=`
        // <div class='box ${color_set} ${title} ${subtitle} show'>
        //     ${title} ${subtitle}
        // </div>
        // `
    })

    colorForm.addEventListener('submit', function(e){
        e.preventDefault()
        console.log("form submitted")

        const title=colorForm.querySelector('#title').value
        const subtitle=colorForm.querySelector('#subtitle').value

        const obj = new colorFilter(color_set,title,subtitle);
        const list = document.getElementsByClassName('box')
        console.log(title)
        for(let i=0;i<list.length;i++){
            removeClassShow(list[i],"show")
            if (list[i].className.indexOf(color_set) > -1 && list[i].className.indexOf(title) > -1 
            &&  list[i].className.indexOf(subtitle) > -1) {
                addClassShow(list[i],"show")
            }
            // else if(list[i].className.indexOf(color_set) > -1 && list[i].className.indexOf(title) > -1 )
            // { addClassShow(list[i],'show') }
            // else if(list[i].className.indexOf(color_set) > -1){  addClassShow(list[i],'show') }
        }



    })

    function addClassShow(box, name){
        box.classList.add(name)
    }

    function removeClassShow(box, name){
        box.classList.remove(name)
        // let arr1= box.className.split(" ")
        // let arr2 =name.split(" ")

        // for(let i=0;i<arr2.length;i++){
        //     while(arr1.indexOf(arr2[i])>-1){
        //         arr1.splice(arr1.indexOf(arr2[i]),1)
        //     }
        // }

        // box.className = arr1.join(" ");

    }
})