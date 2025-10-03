
Math.clamp = (value, min, max) => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
};



function carousel_page(id_element, is_forward){

    let element = document.getElementById(id_element);

    if ( element == null ){
        return;
    }
    
    let list_of_index = element.querySelectorAll('.carousel-index-list > div');
    let list_pages = element.querySelectorAll('.carousel-content > div');
    let last_index = 0;

    for (let i = 0; i < list_of_index.length; i++){

        if ( list_of_index[i].classList.contains('carousel-active') ){
            last_index = i;
        }
        list_of_index[i].classList.remove('carousel-active');
        list_pages[i].style.display = 'none';
    }


    
    if ( is_forward ){

        if ( last_index < list_of_index.length-1 ){
            last_index++;
        }
    }
    else{

        if ( last_index > 0 ){
            last_index--;
        }

    }


    list_of_index[last_index].classList.add('carousel-active');
    list_pages[last_index].style.display = 'block';

}












function seekbarControl(element, increase){

    let value = element.parentElement.querySelector('.seekbar-fill').style.width;
    value  = value.slice(0, value.length-1) - 0;
    value += increase ? 10 : -10;
    value = Math.clamp(value, 0, 100);

    element.parentElement.querySelector('.seekbar-fill').style.width = value + '%';
}








function showListItem(element, list_id){

    document.querySelectorAll('.setting-type-wrapper').forEach((e)=>{
        e.classList.remove('option-selected');
    });

    element.classList.add('option-selected');
    document.getElementById('setting-label-text').innerText = element.innerText;

    document.querySelectorAll('.list-item').forEach((e)=>{
        const IS_SAME_ID = e.getAttribute('list-id') == list_id;
        e.style.display = IS_SAME_ID ? 'block' : 'none';
    });

}





function toggleModal(id, state){
    let element = document.getElementById(id);

    if ( element == null ){
        return;
    }
    
    element.style.display = state ? 'flex' : 'none';    

}



function modalInfo(value){
    let element = document.getElementById('modal-info');
    element.querySelector('.modal-content').innerHTML = value;
    toggleModal(element.id, true);
}

