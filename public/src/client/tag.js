import * as topicList from 'topicList';
import * as infiniteScroll from 'infinitescroll';

export function init() {
	app.enterRoom('tags');

	topicList.init('tag', loadMoreTopics);

	function loadMoreTopics(after, direction, callback) {
		console.log('fail');
		infiniteScroll.loadMore('topics.loadMoreFromSet', {
			set: 'tag:' + ajaxify.data.tag + ':topics',
			after: after,
			direction: direction,
			count: config.topicsPerPage,
		}, callback);
	}
}
