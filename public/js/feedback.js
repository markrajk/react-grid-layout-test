//READ MORE
function checkForReadMore() {
    setTimeout(() => {

        let commentItems = document.querySelectorAll(".feedback-main-item");

        commentItems.forEach((e) => {
            let commentText = e.querySelector(".feedback-main-item-text");
            let textHeigh = commentText.clientHeight;
            console.log(commentText)
            console.log('Text height', textHeigh)
            console.log('Comment Text Scroll Height', commentText.scrollHeight)

            if (0 > textHeigh - commentText.scrollHeight) {
                let readMore = e.querySelector(".read-more");
                let close = e.parentElement.querySelector(".close");
                readMore.style.display = "block";

                readMore.addEventListener("focus", function () {
                    this.parentElement.classList.add("open");
                    this.style.opacity = "0";
                    this.parentElement.classList.remove("trunc");
                    console.log('IN');
                    masonryLayout();
                });

                readMore.addEventListener("blur", function () {
                    this.parentElement.classList.remove("open");
                    this.style.opacity = "1";
                    this.parentElement.classList.add("trunc");
                    console.log('OUT');
                    masonryLayout();
                });
            }
        });
    }, 500)
}
