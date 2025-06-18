interface Image {
  url: string;
  alt: string;
}

interface Refs {
  list: HTMLUListElement | null;
}

const refs: Refs = {
  list: document.querySelector<HTMLUListElement>(".gallery"),
};

const images: Image[] = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

function makeGalleryItem({ url, alt }: Image): HTMLLIElement {
  const liEl = document.createElement("li");
  liEl.classList.add("gallery__item");

  const imgEl = document.createElement("img");
  imgEl.src = url;
  imgEl.alt = alt;
  imgEl.width = 320;

  liEl.append(imgEl);
  console.log(liEl);

  return liEl;
}

function createGalleryItems(images: Image[]): HTMLLIElement[] {
  return images?.map(makeGalleryItem);
}

const galleryItems: HTMLLIElement[] = createGalleryItems(images);

refs.list?.append(...galleryItems);

/**
 * {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
 */
