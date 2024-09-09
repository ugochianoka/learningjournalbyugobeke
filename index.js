const sectOne = document.getElementById("sect-1")
const mainPost = document.getElementById("main-post")
const viewMoreBtn = document.getElementById("view-more-btn")
const postContent = document.getElementById("post-content")
const postHead = document.getElementById("post-head")
const mainPostImg = document.getElementById("main-post-img")

function post() {
    sectOne.classList.add("post-full")
    mainPost.classList.add("main-post")
    postContent.classList.remove('disabled')
    viewMoreBtn.classList.add("disabled")
    mainPost.classList.add("no-pb")
}

function about(){
    sectOne.classList.add("post-full")
    mainPost.classList.add("main-post")
    mainPost.style.padding = "0 2em"
    postContent.classList.remove('disabled')
    viewMoreBtn.classList.add("disabled")
    postHead.innerHTML = `
    <div class="about-head">
    <img src="image1.jpeg" class="me-img">
    <div class="about-content">
    <h2>Hi there! My name is Ugochi and welcome to my learning journal.</h2>
    <p class="post">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
    </div>
    </div>`
    
    mainPostImg.classList.add('disabled')
}
