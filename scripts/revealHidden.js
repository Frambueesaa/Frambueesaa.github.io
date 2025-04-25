const $hidden = document.querySelectorAll(".hidden")

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add("reveal")
            }else {
                entry.target.classList.remove("reveal")
            }
        })
    },
    {
        rootMargin: "0px",
    }
)

$hidden.forEach((hElement) => {
    revealObserver.observe(hElement)
})