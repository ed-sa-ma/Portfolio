import { spring } from 'svelte/motion';

function collapse(element, { reducedMotion }) {
	if (reducedMotion) return;

	let easedHeight = spring(0, { damping: 1 });
	let unsubscribe = easedHeight.subscribe((value) => {
		requestAnimationFrame(() => {
			element.parentElement.style.maxHeight = `${value}px`;
		});
	});

	let observer = new ResizeObserver(function handleResize([entry]) {
		easedHeight.set(entry.contentRect.height);
	});

	observer.observe(element);

	return () => {
		unsubscribe();
		observer.unobserve(element);
	};
}

export { collapse };
