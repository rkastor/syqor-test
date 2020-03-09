var inner = document.querySelector('.inner');

(function ajaxRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://54.39.188.42", false);
    xhr.send();

    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        let decode = atob(xhr.responseText);
        let newProductsObject = JSON.parse(decode);


        console.log(newProductsObject);

        newProductsObject.map((item, i) => {
            // console.log(item);

            let itemArr = Object.keys(item);

            let card = document.createElement('a');
                card.setAttribute('href', '#0');
                card.className = 'card';

            let cardWrap = document.createElement('div');
                cardWrap.className = `${card.className}__wrapper`;

            // console.log(itemArr);

            itemArr.forEach(elem => {
                // console.log(elem);
                
                var block;

                if (elem !== 'currency') {
                    block = document.createElement('div');
                    block.className = `${card.className}__${elem}`;
                } else {
                    return;
                }

                if (elem == 'image') {
                    let img = document.createElement('img');
                        img.className = `${card.className}__img`;
                        img.setAttribute('src', item[elem]);

                    block.appendChild(img);
                }

                // console.log(elem, typeof item[elem]);

                if (typeof item[elem] == 'object') {

                    if (elem == 'options') {
                        let label = document.createElement('p');
                            label.className = `${card.className}__${elem}-title`;
                            label.innerText = 'product options:';

                        block.appendChild(label);
                    }

                    // console.log(block);

                    var optBlock = document.createElement('div');
                    optBlock.className = `${card.className}__${elem}-container`;

                    block.appendChild(optBlock);

                    item[elem].forEach(arrays => {

                        for (let property in arrays) {

                            let newProp = property.replace('_', ' '); // forgot regex for this specific symbol :)
                            
                            let propSpan = document.createElement('span');
                                propSpan.innerText = newProp;

                            let optLabel = document.createElement('p');
                                optLabel.className = `${card.className}__${elem}-label`;
                                optLabel.innerHTML = `<span>${newProp}</span> : ${arrays[property]}`;

                            optBlock.appendChild(optLabel);
                        }

                        // console.log(optBlock);

                    })

                    // console.log(block);
                }
                if (elem == 'price') {
                    let price = parseFloat(item[elem]).toFixed(2);
                    block.innerHTML = `${price} ${item.currency}`;
                } 
                else if (typeof item[elem] == 'string' && elem !== 'image' && elem !== 'currency') {
                    if (elem == 'id') {
                        block.innerText = `#${item[elem]}`;
                    } else {
                        block.innerText = item[elem];
                    }
                }


                cardWrap.appendChild(block);
            });

            card.appendChild(cardWrap);

            inner.appendChild(card);

            setTimeout(() => {
                card.className = 'card card--loaded';
            }, i * 300);

            console.log(card);
        })
    }
})()