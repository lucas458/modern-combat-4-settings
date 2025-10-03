
Math.clamp = (value, min, max) => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
};


let carousel_page_index = 0;


function carousel_load(pageIndex = 0){
    carousel_page_index = pageIndex;
    document.getElementById("carousel-page-label").innerHTML = HELP_ITEMS[pageIndex].label;
    document.getElementById("carousel-page-text").innerHTML = HELP_ITEMS[pageIndex].content;
}


function carousel_page(id_element, is_forward){

    const element = document.getElementById(id_element);

    if ( element == null ){
        return;
    }

    carousel_page_index += is_forward ? 1 : -1;
    carousel_page_index = Math.clamp(carousel_page_index, 0, HELP_ITEMS.length - 1);
    carousel_load(carousel_page_index);
    
    const list_of_index = element.querySelectorAll('.carousel-index-list > div');

    for (let i = 0; i < list_of_index.length; i++){
        list_of_index[i].classList.toggle('carousel-active', carousel_page_index == i);
    }

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


onload = () => {
    carousel_load(0);
};