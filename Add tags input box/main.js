const ul = document.querySelector('ul'), //1
input = ul.querySelector('input'); //1

let tags = [];//3

const countNum = document.querySelector('.heading span');//7
let maxTags = 15;//7


function addTag(event){ //1
    //console.log(event); //1
    //console.log(event.target.value); //1

    if(event.key == 'Enter'){//2
        let tag = event.target.value.replace(/\s+/g, ' ');//2 removing unwanted spaces from the user tag
        console.log(tag);//2

        if(tag.length > 1 && !tags.includes(tag)){ //3 if tag length is greater than i and tag isn't exsit already
            //tag.split(',').forEach(tag => { //3 splitting each tag from comma(,)
                //tags.push(tag); //3 adding each tag inside array
                //console.log(tags); //3
            //});

            //createTag();//4

            if(tags.length < 10){ //6 if tags length is less than 10 then only add tag
                tag.split(',').forEach(tag => { //6 spliting each tag from comma,
                    tags.push(tag); //6 adding each inside array
                    console.log(tags); //6

                    createTag(); //6
                });
            }

        }
        event.target.value = ''; //3
    }
    /// console.log(event.target.value);//1
}
input.addEventListener('keyup', addTag); //1


function createTag(){ //4

    ul.querySelectorAll('li').forEach(li => li.remove()); //4.1 removing all li tags before adding so there will be no duplicate
    console.log(tags.slice().reverse());//4.1

    tags.slice().reverse().forEach(tag => { //4
        let liTag = `<li>${tag} <i class="fas fa-times" onclick="remove(this, '${tag}')"></i></li>`;//4
        ul.insertAdjacentHTML('afterbegin', liTag); //4 inserting or adding li inside ul tag
    });

    countTag();//7
}

// for remove the tags from input //5
function remove(element, tag){ //5
    //console.log(element, tag); //5
    let index = tags.indexOf(tag); //5
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)]; //5
    element.parentElement.remove(); //5
    console.log(tags); //5

    countTag();//7
}

function countTag(){ //7
    countNum.innerText = maxTags - tags.length; //7 subtracting max value with tags lenth
}

const removeBtn = document.querySelector('button'); //8
removeBtn.addEventListener('click', () => { //8
    tags.length = 0; //8 Making array empty
    ul.querySelectorAll('li').forEach(li => li.remove()); //8 removing all li tags
    countTag(); //8 for if we remove all tags the counNum will be start from 0
});