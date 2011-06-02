var apiUrl = "http://go.infinise.com/api/2.5/";


/*	GOOGLE
	----------------------------------------------------- */

eng.google = {
	pageTitle: "Google",
	logo: "google.png",
	places: {
		'Web'    : ["http://www.google.co.uk/search?q=%query%&hl=en",		apiUrl+"?eng=google&timestamp=%time%&q=%query%"],
		'Images' : ["http://images.google.co.uk/images?q=%query%&hl=en",	apiUrl+"?eng=google&timestamp=%time%&q=%query%"],
		'Maps'   : ["http://maps.google.co.uk/maps?q=%query%",			false]
	}
};


/*	WIKIPEDIA
	----------------------------------------------------- */
	
eng.wikipedia = {
	pageTitle: "Wikipedia",
	logo: "wikipedia.png",
	places: {
		'Go to Article' : ["http://%lang%.wikipedia.org/wiki/Special:Search?search=%query%&go=Go",				apiUrl+"?eng=wikipedia&timestamp=%time%&q=%query%&hl=%lang%"],
		'Search'        : ["http://%lang%.wikipedia.org/wiki/Special:Search?search=%query%&fulltext=Search",	apiUrl+"?eng=wikipedia&timestamp=%time%&q=%query%&hl=%lang%"],
	},
	languages: {
		'EN': 'en',
		'DE': 'de',
		'FR': 'fr'
	}
};

/*	THE PIRATE BAY
	----------------------------------------------------- */
	
eng.piratebay = {
	pageTitle: "The Pirate Bay",
	logo: "tpb.png",
	places: {
		'All' : ["http://thepiratebay.org/search/%query%",	false],
		'Audio' : ["http://thepiratebay.org/search/%query%/0/99/100",	false],
		'Video' : ["http://thepiratebay.org/search/%query%/0/99/200",	false],
		'Applications' : ["http://thepiratebay.org/search/%query%/0/99/300",	false],
		'Games' : ["http://thepiratebay.org/search/%query%/0/99/400",	false],
		//'Porn' : ["http://thepiratebay.org/search/%query%/0/99/500",	false],
		'Other' : ["http://thepiratebay.org/search/%query%/0/99/600",	false],
	},
};
//


/*	YOUTUBE
	----------------------------------------------------- */

eng.youtube = {
	pageTitle: "YouTube",
	logo: "youtube.png",
	places: {
		'Videos' : ["http://www.youtube.com/results?search_query=%query%", apiUrl+"?eng=youtube&timestamp=%time%&q=%query%"]
	},
};
