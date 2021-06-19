<script>
	import Review from '$lib/review.svelte';
	import { getContext } from 'svelte';
	import SectionLayout from './section-layout.svelte';

	let data = getContext('content');
	let { reviews } = $data;
</script>

<SectionLayout
	title={reviews.title}
	description={reviews.description}
	note={reviews.note}
	button={{ text: reviews['button_text'], link: '#contact' }}
>
	{#if reviews.items.length}
		<div class="reviews-list">
			{#each reviews.items as review (review.review)}
				<div>
					<Review
						name={review['reviewer']}
						role={review['reviewer_role']}
						review={review['review']}
						linkedin={review['reviewer_linkedin']}
					/>
				</div>
			{/each}
		</div>
	{/if}
</SectionLayout>

<style>
	.reviews-list > * + * {
		margin-top: 1em;
	}
</style>
