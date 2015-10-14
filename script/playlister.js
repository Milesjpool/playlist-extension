var trackRows = $(".release-track");

trackRows.each(function(){
	var trackId = this.getAttribute("data-trackid");
	var addToPlaylist = '<td class="track-add-to-playlist is-not-on-playlist">\
						<form action="/playlist/add" method="post" class="track-add-to-playlist">\
							<input type="hidden" name="trackId" value="' + trackId + '">\
							<button type="submit" title="Add To Playlist" class="add-button">+</button>\
						</form>\
					</td>';

	$(this).append(addToPlaylist)
});