/**
 * Smooth scroll utility function with custom easing
 * @param {string} targetId - The ID of the target element
 * @param {number} duration - Animation duration in milliseconds (default: 800)
 * @param {number} offset - Offset from the top in pixels (default: 80 for header)
 */
export const smoothScrollTo = (targetId, duration = 800, offset = 80) => {
  const element = document.getElementById(targetId);
  
  if (!element) {
    console.warn(`Element with ID "${targetId}" not found`);
    return;
  }

  const elementPosition = element.offsetTop;
  const offsetPosition = Math.max(0, elementPosition - offset); // Ensure no negative values
  const start = window.pageYOffset;
  const distance = offsetPosition - start;
  
  // If already at target position, no need to animate
  if (Math.abs(distance) < 5) {
    return;
  }
  
  let startTime = null;

  // Ease-in-out cubic function for smooth animation
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, start + (distance * ease));
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      // Ensure we end up exactly at the target position
      window.scrollTo(0, offsetPosition);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Create a smooth scroll click handler
 * @param {string} targetId - The ID of the target element
 * @param {number} duration - Animation duration in milliseconds
 */
export const createSmoothScrollHandler = (targetId, duration = 800) => {
  return (e) => {
    e.preventDefault();
    smoothScrollTo(targetId, duration);
  };
};
