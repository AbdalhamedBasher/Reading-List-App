const form=document.forms;
//searching for certain books
const searchForm=document.querySelector('#search-books');
searchBar=document.querySelector('#search-books input');
const titles=document.querySelectorAll('li .name');
searchBar.addEventListener('keyup',e=>{
    const value=e.target.value.toLowerCase();
    titles.forEach(title=>{
        if((title.textContent.toLowerCase()).indexOf(value)!=-1){
            title.parentElement.style.display='block';
        }else{
            title.parentElement.style.display='none';
        }
    })
})
const list=document.querySelector('ul');
list.addEventListener('click',e=>{
    if(e.target.className=='delete'){
        e.target.parentElement.remove();
        }
    })
// add elements
const addForm=document.querySelector('#add-book');
const addFormInput=document.querySelector('#add-book > input[type=text]');
const addButton=document.querySelector('#add-book button');
addButton.addEventListener('click',e=>{
    //creating elements
    e.preventDefault();
    const li=document.createElement('li');
    const bookName=document.createElement('span');
    const deleteButton=document.createElement('span');
    const value=addFormInput.value;
    //styling elements
    bookName.classList.add('name');
    deleteButton.classList.add('delete');
    bookName.textContent=value;
    deleteButton.textContent='delete';
    //appending the elements
    li.appendChild(bookName);
    li.appendChild(deleteButton);
    list.appendChild(li);
    localStorage.setItem("bookTitle",value);


})
const hideInput=document.querySelector('#hide');
hideInput.addEventListener('change',e=>{
    if(hideInput.checked){
        list.style.display='none';
    }
    else{
        list.style.display='block';
    }
})
if(localStorage.getItem("bookTitle")){
    const li=document.createElement('li');
    const bookName=document.createElement('span');
    const deleteButton=document.createElement('span');
    const value=localStorage.getItem("bookTitle");
    console.log(value);
    //styling elements
    bookName.classList.add('name');
    deleteButton.classList.add('delete');
    bookName.textContent=value;
    deleteButton.textContent='delete';
    //appending the elements
    li.appendChild(bookName);
    li.appendChild(deleteButton);
    list.appendChild(li);
}
