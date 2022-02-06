var folder = "assets/images/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                // $("body").append( "<img src='"+ folder + val +"'>" );
				console.log(val)
            } 
        });
    }
});


PATH = "assets/images/"
function buildHTML(fileName, location = "", path = PATH) {
	return `			
						        <span class="image main">
									<figure><img src="` + path + fileName + `" alt="">
								    <figcaption>` + location + `</figcaption></figure>
								</span>`;
}

var picture_files = {
	"GlenPark.jpg": "Glen Park, SF",
	"bus.JPG": "Walmart Parking Lot, Tennessee",
	"new/freeacid.jpg": "SF, CA",
	"new/minarets.JPG": "Minarets, CA",
	"new/pfeifferhorn_lake.jpg": "Utah",
	"new/winds.jpg": "Winds, WY",
	"new/crystal_crag.JPG": "Crystal Crag, CA",
	"new/pfeifferhorn.jpg": "Pfeifferhorn, Utah",
	"new/shasta.jpg": "Mt. Shasta, CA",
	"new/shasta_sunrise.jpg": "Shasta shadow sunrise",
	"new/thenub.jpg": "A cool spot, CA",
	"new/arbel_half_dome.jpg": "Half dome!!",
	"new/half_dome_p3.jpg": "Nerves",
	"eclipse.jpg": "Total Solar Eclipse, Borah Peak, ID - this was around 10AM. friend got the better shot so using theirs :) ",
	"knox.JPG": "SF, CA",
	"new_photos/sesh3_2017.jpg": "Yosemite, CA",
	"new_photos/mtdavidson2.jpg": "Mt. Dave, SF",
	"new_photos/matterhorn.jpg": "Matterhorn, CA",
	"views.JPG": "Grand Canyon",
	"new_photos/corneta_menu.jpg": "Old La Corneta Menu, SF",
	"new/lyell_arbel.jpg": "Mt. Lyell, CA",
	"new/shasta_evan.jpg": "Mt. Lyell, CA",
	"bow_lake.jpeg": "Bow Lake, Canada",
	"StrawberryMansion.jpg": "Strawberry Mansion Bridge, Philly",
	"strawberryMansion3.jpg": "Strawberry Mansion Bridge, Philly",
	"strawberryMansion2.jpg": "Strawberry Mansion Bridge, Philly",
	"campsite.JPG": "Yosemite, CA",
	"new_photos/girls_ip.png": "Yosemite, CA",
	"yosem_hd.jpeg": "Yosemite, CA",
	"moraine_lake.JPG": "Moraine Lake, Canada",
	"new_photos/utah_town.png": "Utah",
	"myRoom.JPG": "SF, CA",
	"MayLake.jpg": "May Lake, CA",
	"may3.JPG": "May Lake, CA",
	"yellowstone.JPG": "Yellowstone, WY",
	"Amoudi.jpg": "Amoudi Bay, Greece",
	"halfDome.JPG": "Yosemite, CA",
	"sutro.JPG": "SF, CA",
	"campsite2.JPG": "Yosemite, CA",
	"may2.JPG": "May Lake, CA",
	"el_cap.jpg": "Yosemite, CA",
	"half_dome_dark.jpg": "Yosemite, CA",
	"alienPlant.JPG": "Grand Canyon",
	"new/max_tahoe.jpg": "Tahoe",
	"halfDome2.jpg": "Yosemite, CA",
	"new_photos/waterfall_rainbow.png": "Yosemite, CA",
	"athens.jpg": "Athens, Greece",
	"beach.jpg": "Sani, Greece",
	"MtDave.jpg": "Mt. Dave, SF",
	"allGreen.jpg": "Yosemite, CA",
	"tree.jpg": "Poopenaut Valley, CA",
	"dude.jpg": "SF, CA",
	"new/surrey.jpg": "Geep.",
	"sprangBrake.jpg": "GW Natl. Forest, VA",
	"peaceValley2.jpg": "Peace Valley, PA",
	"fallsBridge.jpg": "Falls Bridge, Philly",
	"Tenaya.jpg": "Tenaya Canyon, CA",
	"smile.jpg": "Fairmount Park, Philly",
	"ryanWomen.jpg": "Outside Chicago, IL",
	"Santorini.JPG": "Santorini, Greece",
	"edinburgh.JPG": "Edinburgh, Scotland",
	"theRoad.JPG": "Clingman's Dome, TN",
	"morning.JPG": "Clingman's Dome, TN",
	"new_photos/cathedral_lakes.jpg": "Cathedral Lake, CA",
	"new_photos/washington2019.jpg": "Washington DC in 2019",
	"new_photos/gaylorlakes.jpg": "Gaylor Lakes, CA",
	"new_photos/herons_head.jpg": "Heron's Head, SF",
	// "new_photos/evening.jpg": "evening.jpg",
	// "new_photos/alpine_stream.jpg": "alpine_stream.jpg",
	"new_photos/ti_mf.jpg": "Oakland",
	// "new_photos/ip_emily.jpg": "ip_emily.jpg",
	"new_photos/sauni.jpg": "Sani, Greece",
	"new_photos/mayab7.jpg": "Camp Tawonga, CA",
	"new_photos/peytolake.jpg": "Peyto Lake, Canada",
	"new_photos/mammoth_hot_springs.jpg": "Mammoth Hot Springs, CA",
	// "new_photos/may_lake_flowers.jpg": "may_lake_flowers.jpg",
	"new_photos/philly_in_may.jpg": "Philly in May",
	"new_photos/smoke_coming_in.jpg": "Smoke Coming In",
	"new_photos/nevada_falls.jpg": "Nevada Falls, CA",
	"new_photos/mtdavidson.jpg": "Mt. Dave, SF",
	// "new_photos/nevada_road.jpg": "nevada_road.jpg",
	"ggb.JPG": "SF, CA",
	"hammock.JPG": "Russian River, CA",
	"johnChess.JPG": "Glen Park, SF",
};

var socalPhotos = [
	"earlydays.jpeg",
	"onehundo.jpeg",
	"panodesert.jpeg",
	"jacinto.JPG",
	"jacinto2.jpeg",
	"aguadulce1.jpeg",
	"pizzasubs2.JPG",
	"aquaduct.jpeg",
	"biggroup.jpeg",
	"tree.jpeg",
]

sierraImages = [
	// Sierra
	"quinn_pickup.JPG",
	"sunrisewhitneydescent.jpeg",
	"whitneygroup.jpeg",
	"whitneydescent2.jpeg",
	"whitneydescent3.jpeg",
	"whitneydescent.jpeg",
	"whitneythreeamigos.jpeg",
	"whitney_bag.JPG",
	"kearsarge.jpeg",
	"raequinnfish.jpeg",
	"raepoker.jpeg",
	"muirpass.jpeg",
	"river.jpeg",
	"thepass.jpeg",
	"thepass2.jpeg",
	"lake.jpeg",
	"morelake.jpeg",
	"onek.JPG",
	"evolution.jpeg",
	"postmuirpass.jpeg",
	"bestcampsite.jpeg",
	"quinninthewind.jpeg",
	"threeamigosyosem.jpeg",
	"quinn.jpeg",
	"friends.jpeg",
	"beauty.jpeg",
	"tahoe.jpeg",
	"trees.jpeg",
	"samjohn.jpeg",
]

norCalOregonPhotos = [
	"burnzone.jpeg",
	"jenny.jpeg",
	"oregontrail.jpeg",
	"detroitoregon.jpeg",
	"crater2.jpeg",
	"crater1.jpeg",
	"quinnthreesister.jpeg",
	"youmatter.jpeg",
	"youareloved.jpeg",
	"youareenough.jpeg",
]

washingtonPhotos = [
	"goatrocks.jpeg",
	"jack.jpeg",
	"samnjack.JPG",
	"jack_hitch.jpeg",
	"goats.jpeg",
	"beautiful.jpeg",
	"treesky.jpeg",
	"quinnjack.jpeg",
	"rainbowjack.jpeg",
	"theend.jpeg",
]

var pictureHTML = ``
for (var fileName in picture_files) {
	if (picture_files.hasOwnProperty(fileName)) {
		pictureHTML += buildHTML(fileName, picture_files[fileName]);
	}
}

var pct_folder = "new2022/PCT/"

var socalHTML = ``
var sierraHTML = ``
var norcalOregonHTML = ``
var washHTML = ``
socalPhotos.forEach(function(fileName) {
	socalHTML += buildHTML(pct_folder+fileName, "");
});
sierraImages.forEach(function(fileName) {
	sierraHTML += buildHTML(pct_folder+fileName, "");
});
norCalOregonPhotos.forEach(function(fileName) {
	norcalOregonHTML += buildHTML(pct_folder+fileName, "");
});
washingtonPhotos.forEach(function(fileName) {
	washHTML += buildHTML(pct_folder+fileName, "");
});


window.onload = function () {
	$("#other_photos").append(pictureHTML)
	$("#socal_photos").append(socalHTML)
	$("#sierra_photos").append(sierraHTML)
	$("#norcal_oregon_photos").append(norcalOregonHTML)
	$("#wash_photos").append(washHTML)
};
