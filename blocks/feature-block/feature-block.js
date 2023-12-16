export default function decorate(block) {
    block.firstElementChild.classList.add('featured-block-wrapper');
    const cols = [...block.firstElementChild.children];
    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
        const picture = col.querySelector('picture');
        if (picture) {
          const picWrapper = picture.closest('div');
          if (picWrapper && picWrapper.children.length === 1) {
            picWrapper.classList.add('featured-block__image-wrapper');
            if(picWrapper.nextElementSibling) {
              picWrapper.nextElementSibling.classList.add('featured-block__text-wrapper');
            } else if(picWrapper.previousElementSibling) {
              picWrapper.previousElementSibling.classList.add('featured-block__text-wrapper');
            }
          }
        }
      });
    });
  }