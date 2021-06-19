import { spring } from 'svelte/motion';

function collapse(element) {
	let eased_height = spring(0);
	let unsubscribe = eased_height.subscribe((value) => {
		element.parentElement.style.maxHeight = `${value}px`;
	});

	let observer = new ResizeObserver(function handleResize([entry]) {
		eased_height.set(entry.contentRect.height);
	});

	observer.observe(element);

	return () => {
		unsubscribe();
		observer.unobserve(element);
	};
}

export { collapse };
