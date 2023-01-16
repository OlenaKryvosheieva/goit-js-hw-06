const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listImagesEl = document.querySelector('.gallery');

const makeListOfItems = images => {
  return images.map(image => {
    return `<li><img src = ${image.url} alt = ${image.alt} class = "gallery-img"></li>`;
  })
  .join(" ");
};

const arrayOfItems = makeListOfItems(images);

listImagesEl.insertAdjacentHTML('afterbegin', arrayOfItems);

listImagesEl.style.display = 'flex';
listImagesEl.style.gap = '10px';
listImagesEl.style.listStyle = 'none';

const itemsEl = document.querySelectorAll('.gallery-img');

itemsEl.forEach(item => {
  return item.style.width = '100%';  
});
