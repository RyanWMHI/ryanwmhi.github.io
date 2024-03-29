
export function debounce(fn, delay = 600) {
  let prev = Date.now();
    return function() {
        const context = this, args = arguments;
        let now = Date.now();
        console.log(now, prev)
        if (now - prev >= delay) {
            fn.call(context, args);
            prev = now;
        }
    }
}