export default function carouselInit() {
    const gap = 1
    let width = 0

    const carousel = document.getElementById("communitiesCarousel"),
        content = document.getElementById("communitiesCarouselContent"),
        next = document.getElementById("carouselNextButton"),
        prev = document.getElementById("carouselPrevButton")

    if (next) {
        next.addEventListener("click", e => {
            carousel.scrollBy(width + gap, 0);
            if (carousel.scrollWidth !== 0) {
                prev.style.display = "flex";
            }
            if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "none";
            }
        })
    } else {
        const communityCarouselContent = document.getElementById("communitiesCarouselContent")

        if (communityCarouselContent) {
            communityCarouselContent.style.width = "max-content"
            communityCarouselContent.style.margin = "0"
        }
    }
    if (prev) {
        prev.addEventListener("click", e => {
            carousel.scrollBy(-(width + gap), 0);
            if (carousel.scrollLeft - width - gap <= 0) {
                prev.style.display = "none";
            }
            if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "flex";
            }
        })
    } else {
        const communityCarouselContent = document.getElementById("communitiesCarouselContent")

        if (communityCarouselContent) {
            communityCarouselContent.style.width = "max-content"
            communityCarouselContent.style.margin = "0"
        }
    }

    if (carousel) {
        width = carousel.offsetWidth;
        window.addEventListener("resize", e => (width = carousel.offsetWidth))
    }
}