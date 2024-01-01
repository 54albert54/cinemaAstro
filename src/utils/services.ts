let mover = 0

export const rightMove = (part: Element,limit:number) => {
 
  if (part != null) {
    if (mover < limit) {
      let count = 0;
      const timer = setInterval(() => {
        count += 10;
        mover += 10;
        part.scrollLeft = mover;
        
        if (count >= 500) {
          clearInterval(timer);
        }
      }, 15);
    }
  }
};
export const leftMove = (part: Element,limit:number) => {
  if (part != null) {
    if (mover > limit) {
      let count = 0;
      const timer = setInterval(() => {
        count += 10;
        mover -= 10;
        part.scrollLeft = mover;
        if (count >= 500) {
          clearInterval(timer);
        }
      }, 15);
    }
  }
};