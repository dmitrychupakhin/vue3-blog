export default {
    mounted(el, binding) {
        var options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        var callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                binding.value()
            }
        };
        var observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name: 'intersection'
}