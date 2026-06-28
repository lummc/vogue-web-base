import { useEffect } from 'react';

const horizontalCarouselSelector = [
  '.vogue-choice__viewport',
  '.reels-section__track',
  '.editorial-carousel-section__grid',
  '.section-trend-carousel',
  '.section-video-carousel',
  '.section-article-carousel',
  '.article-favorite-carousel__track',
  '.article-recommendations__carousel',
  '.community-card-row',
  '.community-look-row',
].join(', ');

export function useHorizontalCarouselDrag() {
  useEffect(() => {
    let activeCarousel: HTMLElement | null = null;
    let startX = 0;
    let startScrollLeft = 0;
    let didDrag = false;
    let suppressClick = false;

    const finishDrag = () => {
      if (!activeCarousel) return;

      activeCarousel.classList.remove('is-dragging');
      suppressClick = didDrag;
      activeCarousel = null;
      window.setTimeout(() => {
        suppressClick = false;
      }, 0);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;

      const target = event.target;
      const carousel = target instanceof Element ? target.closest<HTMLElement>(horizontalCarouselSelector) : null;

      if (!carousel || carousel.scrollWidth <= carousel.clientWidth) return;

      activeCarousel = carousel;
      startX = event.clientX;
      startScrollLeft = carousel.scrollLeft;
      didDrag = false;
      carousel.classList.add('is-dragging');
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!activeCarousel) return;

      const distance = event.clientX - startX;
      if (Math.abs(distance) > 4) didDrag = true;
      if (!didDrag) return;

      event.preventDefault();
      activeCarousel.scrollLeft = startScrollLeft - distance;
    };

    const handleClick = (event: MouseEvent) => {
      if (!suppressClick) return;

      event.preventDefault();
      event.stopPropagation();
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointermove', handlePointerMove, { passive: false });
    document.addEventListener('pointerup', finishDrag);
    document.addEventListener('pointercancel', finishDrag);
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', finishDrag);
      document.removeEventListener('pointercancel', finishDrag);
      document.removeEventListener('click', handleClick, true);
    };
  }, []);
}
