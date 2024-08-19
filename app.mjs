export class ObjectProfile {
    constructor(name, type, image, status) {
        this.name = name;
        this.type = type;
        this.image = image;
        this.status = status;
        this.posts = [];
    }

    createPost(content, image) {
        this.posts.push({ content, image });
    }

    getPosts() {
        return this.posts;
    }
}

export const objects = [];

objects.push(new ObjectProfile( "Southern Bell","Analog Rotary Phone", "data:image/jpeg;base64,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", "I'm on one today... My attitude is already off the hook!"));
objects.push(new ObjectProfile( "Bernie Dooe","Toaster", "https://i.dailymail.co.uk/i/pix/2015/11/30/13/2EED7D0E00000578-3339397-image-m-2_1448890708374.jpg", "Good morning Y'all! Let's get this day started on the right foot! Carpe Burnem!"));
objects.push(new ObjectProfile( "Dell Commodore","Laptop", "https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Coding in dark mode again after hours. Man I have updates to eat. Give me a break for crying out loud"));
objects.push(new ObjectProfile( "Febrezey Brown","Scented Candle", "https://www.photos-public-domain.com/wp-content/uploads/2010/12/candle-with-tall-flame.jpg", "Singing: This little light of miiiiiine! I'm gonna let it shiiiiine!"));
objects.push(new ObjectProfile( "Ralph I'ron","Wrinkled Shirt", "https://thumbs.dreamstime.com/b/wrinkled-male-white-laundered-shirt-hanger-see-my-other-works-portfolio-31100234.jpg", "Just chilling, I won't be going to work today! #Winning!"));
objects.push(new ObjectProfile( "Tellie Vision"," TV", "https://imageio.forbes.com/blogs-images/startswithabang/files/2019/11/tvhouse.jpg?height=528&width=711&fit=bounds", "I always feel like somebody's watching me! And I have no privacy! It's tune out time."));




const registrationForm = document.getElementById('registration-form');
const homePage = document.getElementById('home-page');
const registrationPage = document.getElementById('registration-page');
const feed = document.getElementById('feed');
const searchBar = document.getElementById('search-bar');
const createPostSection = document.getElementById('create-post');
const searchInput = document.getElementById('searchInput');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const objectName = document.getElementById('objectName').value;
    const objectType = document.getElementById('objectType').value;
    const newObject = new ObjectProfile(objectName, objectType, "https://placeholder.com/150", "Just joined!");
    objects.push(newObject);
    registrationPage.classList.add('hidden');
    homePage.classList.remove('hidden');
    displayFeed();
});

document.getElementById('registration-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const objectName = document.getElementById('objectName').value;
    const objectType = document.getElementById('objectType').value;
    const objectImageFile = document.getElementById('objectImage').files[0];
    const postContent = document.getElementById('postContent').value;

    if (objectImageFile) {
        const objectImageURL = URL.createObjectURL(objectImageFile);
        
        const newObject = new ObjectProfile(objectName, objectType, objectImageURL, postContent);
        objects.push(newObject);

        
        document.getElementById('registration-form').reset();
        displayFeed();
        registrationPage.classList.add('hidden');
        homePage.classList.remove('hidden');
    } else {
        alert("Please upload an image.");
    }
});

document.getElementById('homeBtn').addEventListener('click', () => {
    searchBar.classList.add('hidden');
    createPostSection.classList.add('hidden');
    displayFeed();
});

document.getElementById('searchBtn').addEventListener('click', () => {
    searchBar.classList.remove('hidden');
    createPostSection.classList.add('hidden');
});

document.getElementById('createBtn').addEventListener('click', () => {
    createPostSection.classList.remove('hidden');
    searchBar.classList.add('hidden');
});

document.getElementById('submitPost').addEventListener('click', () => {
    const postContent = document.getElementById('postContent').value;
    const postImage = document.getElementById('postImage').files[0];
    const imageUrl = URL.createObjectURL(postImage);

    const currentObject = objects[objects.length - 1];
    currentObject.createPost(postContent, imageUrl);

    createPostSection.classList.add('hidden');
    displayFeed();
});

document.getElementById('searchSubmit').addEventListener('click', () => {
    const searchValue = searchInput.value.toLowerCase();
    displayFeed(searchValue);
});

function displayFeed(searchQuery = '') {
    feed.innerHTML = '';
    objects.forEach((object) => {
        if (object.name.toLowerCase().includes(searchQuery) || object.type.toLowerCase().includes(searchQuery)) {
            const feedItem = document.createElement('div');
            feedItem.classList.add('feed-item');
            feedItem.innerHTML = `
                <h3>${object.name} (${object.type})</h3>
                <img src="${object.image}" alt="${object.name}">
                <p>${object.status}</p>
            `;
            object.getPosts().forEach(post => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `
                    <img src="${post.image}" alt="Post image">
                    <p>${post.content}</p>
                `;
                feedItem.appendChild(postElement);
            });
            feed.appendChild(feedItem);
        }
    });
}

displayFeed();












    