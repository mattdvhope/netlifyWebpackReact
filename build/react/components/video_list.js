import React from 'react';
import VideoListItem from './video_list_item';

// using 'props' in a class-based component requires 'this.props'
// using 'props' in a functional component is only 'props'

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video} />
		);
	});

	return (
		<ul className="col-lg-8 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;