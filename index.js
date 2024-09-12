const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

function renderPosts(posts) {
    for (let i = 0; 0 < posts.length; i++) {
        `
        <section class="post">
            <div class="post-header">
                <img src="${posts.avatar}" alt="" class="avatar">
                <div class="user-details">
                    <h1 class="user-name">${posts.name}</h1>
                    <h2 class="user-loc">${posts.location}</h2>
                </div>
            </div>
            <div class="post-body">
                <img src="${posts.post}" alt="Self-portrait of van Gogh on a wavy blue background."
                    class="post-img">
            </div>
            <div class="post-footer">
                <div class="post-interactions">
                    <a href="#"><img src="./images/icon-heart.png" alt="black outline of a heart." class="icons"></a>
                    <a href="#"><img src="./images/icon-comment.png" alt="black outline of a speech bubble."
                            class="icons"></a>
                    <a href="#"><img src="./images/icon-dm.png" alt="black outline of a paper airplane."
                            class="icons"></a>
                </div>

                <div>
                    <p class="total-likes bold-text">${posts.likes} likes</p>
                    <p class="caption"><span class="bold-text">${posts.username}</span> ${posts.comment}</p>
                </div>

            </div>
        </section>
        `;
    }
};

