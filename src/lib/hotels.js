function dontIndent(str){
	return ('' + str).replace(/(\n)\s+/g, '$1');
}

const directions_to_budapest_apartments = [
	dontIndent
	`If arriving by metro or by train to Keleti Train Station (Keleti PU):
    From the International Train Station, called Keleti Pu., travel three stops by Metro II (the red line) to 'Deak Ter' Station, change to line to the Metro III (the blue line), travel three stops to 'Lehel Ter' Station, come up, walk 300 meters on 'Victor Hugo' street and you have arrived to Dunapark Cafe. There is the entrance of the house. 

    Alternatively, if you'd like a shorter way, you can reach the apartment by trolleybus. Just get on the trolleybus N.76 at the south side of the train station, get off from the trolleybus at 'Szent Istavan Park and you have arrived.

    We can meet at the entrance of the house or at Dunapark Cafe at the arrival time we agreed.
    Please note: You will need 1 ticket/person for travel by public transportation, the price of one ticket is 350 HUF (~1.5 EUR).`,
	dontIndent
	`If arriving by international bus to Nepliget Bus Station:
    This is a stop on Metro Line 3 (also called the Blue line or just M3) line. Travel to 'Lehel Ter' Station, come up, walk 300 meters on 'Victor Hugo' street and you will arrive at 'Dunapark Cafe'. This is the entrance of the house. We can meet at the entrance of the house or at Dunapark Cafe at the arrival time we agreed.

    Please note: You will need 1 ticket/person for travel by public transportation, the price of one ticket is 350 HUF (~1.5 EUR).`,
	dontIndent
	`If arriving by plane to Liszt Ferenc Airport (formerly known as Ferihegy Airport):
    From the airport, travel by public transport bus number 200E to 'Kobanya Kispest' - the terminal of Metro 3 (the blue metro line, also marked M3). Travel to 'Lehel Ter' Station, come up, walk 300 meters on 'Victor Hugo' street and you will have arrived at 'Dunapark Cafe'. This is the entrance of the house. We can meet at the entrance of the house or in the Dunapark Cafe at the arrival time we agreed.

    Please note: You will need 2 tickets/person for travel by public transportation, the price of one ticket is 350 HUF (~1.5 EUR). It takes about 90 minutes to get to the apartment in total from the airport.`,
	dontIndent
	`Another possibility (from the Airport) is our cheap partner taxi, which can pick you up at the airport (9900HUF or 25EUR/car for 1 - 4 persons). The driver will be waiting for you at the airport with a sign that has the name of the property, and he will bring you to the house. It takes about 45 minutes to get to the address. Please let us know if you need the taxi transfer, and in this case we will need some details about your flight.`,
	dontIndent
	`The third option is the airport minibus. You can order this service at the airport and they will also bring you to the building, but you have to wait a bit longer and you will travel with other passengers. The price is: 5400HUF/person for one way or 7500HUF/person for return.`
];



const getting_around_budapest_apartments = [
	"Trolley bus N:76, the bus stop is right outside the house.",
	"Bus N: 15. bus stop is at the third block.",
	"Metro III., Blue Line, the closest stop is at Lehel Ter, 6 minutes by walk.",
	"Tram 4, 6, 24 hours service, the closest stop at Margaret Bridge, 6 minutes by walk from the house.",
	"Tram N:2 the best route in the city by the Danube, stop at Margaret Bridge, 6 minutes by walk from the house."
];

export const hotels = [
	{
		slug: "budapest-apartments",
		name: "Budapest Apartments",
		location: "City Center, Budapest, Hungary",
		slogan: "Cozy Private Apartments in the Heart of Budapest",
		description_short: "A collection of homey, well-equipped and private apartments situated right in the heart of Budapest. These places are excellent accomodation for couples, honeymooners, friends, businessmen and even solo-travellers.",
		description: "A collection of homey, well-equipped private apartments situated right in the heart of Budapest. From stays right on the Danube near Margaret Island, to apartments right next to the bustling Vaci Utca street, there is something here for everyone. All apartments are fully furnished and equipped with modern amenities to ensure a comfortable stay. Whether you're here for business or leisure, these apartments provide a cozy and convenient home away from home in one of Europe's most vibrant cities.",
		rooms: [
			{ 
				slug: "terrace-apartment",
				name: "Private Apartment with Terrace",
				type: "Entire Apartment",
				address: "1137 Budapest, Pozsonyi út 38",
				guests: 3,
				bedrooms: 1,
				beds: 3,
				bathrooms: 1,
				description_short: "A private apartment located on the banks of the Danube near the Margaret Bridge in the city center, equipped with a sunny terrace offering a beautiful view of the park, the Danube, Margaret Island and the Buda hills.",
				description: dontIndent 
				`The apartment is located directly on the banks of the Danube, near the Margaret Bridge in the city center. This is a sunny, friendly, well-situated and well-equipped apartment in a very nice building, with a sunny terrace that has a nice view of the park, the Danube, the Margaret island and the Buda mountains. This is a real romantic nest in the greatest part of the city! Just imagine taking breakfast out on the terrace, taking a breath of fresh air, enjoying the great view, and really feeling perfectly happy here!
            
                The apartment has a large, comfortable, bright and elegant room, a huge terrace, a spacious bathroom with a bathtub and a small kitchen equipped with almost everything. The apartment has cable TV and fast WiFi is also available. Public transport is excellent, trolleybuses 76 and 75 stop in front of the house, which take you to Margaret Bridge, or in the opposite direction to Keleti Railway Station, Heroes' Square and the Népstadion. The nearest metro station is on Lehel Square, at the fourth block, and it is only a five-minute walk to Szent István Boulevard, where the most important tram and bus lines run.
                
                The apartment is located in one of the most popular urban areas of the city where you can walk undisturbed even at night. Security is also guaranteed by the fact that the gate of the house is always closed, and the door of the apartment is equipped with a security lock. Everything that is important, useful and interesting can be found in the area, whether for a shorter or longer stay. On the ground floor of the building is one of the most beautiful and most popular terrace cafes in Budapest, the Dunapark Café, and in the immediate vicinity there are grocery stores, dry cleaners, breakfast places, cafes, pubs, excellent and cheap Hungarian restaurants, clubs, general stores, a pharmacy, etc.`,
				getting_around: getting_around_budapest_apartments,
				arriving: directions_to_budapest_apartments,
				checkin: "2:00PM - 1:00AM",
				checkout: "11:00AM",
				cost: 120,
				amenities: ["Mountain view", "Park view", "River view", "Beach view", "Bathroom","Bathtub","Hair dryer","Cleaning products","Hot water","Bedroom and laundry","Free washer – In unit","Essentials","Towels, bed sheets, soap, and toilet paper","Hangers","Bed linens","Extra pillows and blankets","Room-darkening shades","Iron","Drying rack for clothing","Safe","Clothing storage: wardrobe","Entertainment","TV with standard cable","Books and reading material","Family","Crib","Pack n play/Travel crib - available upon request","Sheets provided","Heating and cooling","Portable fans","Central heating","Home safety","Smoke alarm","Carbon monoxide alarm","First aid kit","Internet and office","Wifi","Dedicated workspace","In a room with a door","Kitchen and dining","Kitchen","Space where guests can cook their own meals","Refrigerator","Microwave","Cooking basics","Pots and pans, oil, salt and pepper","Dishes and silverware","Bowls, chopsticks, plates, cups, etc.","Mini fridge", "Freezer", "Siemens stainless steel electric stove", "Hot water kettle", "Coffee maker", "Wine glasses", "Toaster", "Dining table", "Coffee", "Location features", "Waterfront", "Right next to a body of water", "Private entrance", "Separate street or building entrance", "Laundromat nearby", "Paid resort access", "Guests can use nearby resort facilities", "Outdoor", "Private patio or balcony", "Outdoor furniture", "Parking and facilities", "Free street parking", "Elevator","Paid parking off premises","Paid parking on premises", "Flexible Check-in and Check-out", "Services", "Luggage dropoff allowed", "Long term stays allowed", "Allow stay for 28 days or more", "Cleaning available during stay", "Host greets you"],
				rules: ["3 guests maximum", "No pets", "No parties or events", "No commercial photography", "No smoking", "On leaving, please close the patio door, turn off the lights, check that the stove is off, take the keys out of the door lock and put them on the kitchen counter, and pull in the front door when you check out from the apartment. Thank you!"]
			},
			{
				slug: "gentry-condo",
				name: "Gentry Private Condo",
				type: "Entire Apartment",
				address: "1137 Budapest, Pozsonyi út 38",
				guests: 3,
				bedrooms: 1,
				beds: 3,
				bathrooms: 1,
				description_short: "A gentry condo situated right on the banks of the Danube near the Margaret bridge, in a part of Budapest that was once home to nobility and the wealthy elite.",
				description: dontIndent
				`A long time ago, at the turn of the last century, in Hungary, the members of the noble and wealthy strata determined very precisely which part of the city they wanted to live in. The most successful businessmen, famous artists, performers, politicians and persons of noble rank could acquire property here, in the most popular part of the city, on the Danube bank in Pest. Now we offer you accommodation in such a building located in this exact neighborhood, and at the same time we offer you the feeling of what it was like to live in a status symbol apartment in Budapest. I admit, this is still the case today, the neighborhood is still the most popular part of Budapest, but apart from all of that, the most important aspect is the joy this location and this neighborhood offers to you.

                The apartment is located directly on the banks of the Danube, near the Margaret Bridge. This sunny, and friendly apartment is situated in a very nice building from 1903. From its sunny terrace the view of the Danube is really nice, and you can also see Margaret island and the Buda mountains. Just imagine eating breakfast out on the terrace, breathing a breath of fresh air and enjoying the great view, you can really feel perfectly happy!

                Please note, the daily price includes the private transport to and from the apartment. Please provide me the information with the time of arrival, location, and flight number as soon as you can so that I have time to organize it! Thank you!`,
				getting_around: getting_around_budapest_apartments,
				arriving: directions_to_budapest_apartments,
				checkin: "2:00PM - 1:00AM",
				checkout: "11:00AM",
				cost: 80,
				amenities: ["Bathroom","Bathtub","Hair dryer","Cleaning products","Hot water","Bedroom and laundry","Washer","Essentials","Towels, bed sheets, soap, and toilet paper","Hangers","Bed linens","Extra pillows and blankets","Room-darkening shades","Iron","Drying rack for clothing","Clothing storage","Entertainment","TV","Books and reading material","Family","Outdoor playground","An outdoor area equipped with play structures for children","Heating and cooling","Portable fans","Heating","Internet and office","Wifi","Kitchen and dining","Kitchen","Space where guests can cook their own meals","Refrigerator","Microwave","Cooking basics","Pots and pans, oil, salt and pepper","Dishes and silverware","Bowls, chopsticks, plates, cups, etc.","Mini fridge","Freezer","Stove","Hot water kettle","Coffee maker","Wine glasses","Toaster","Dining table","Coffee","Location features","Waterfront","Right next to a body of water","Laundromat nearby","Outdoor","Patio or balcony","Outdoor furniture","Parking and facilities","Elevator","Paid parking off premises","Paid parking on premises","Services","Long term stays allowed","Allow stay for 28 days or more","Cleaning available during stay","Host greets you"],
				rules: ["3 guests maximum", "No pets", "No parties or events", "No commercial photography", "No smoking", "On leaving, turn off the lights, throw away trash, gather towels, and return keys. Thank you!"]
			},
			{
				slug: "nest-apartment",
				name: "Lovely Private Nest Apartment",
				type: "Entire Apartment",
				address: "1052 Budapest, Deák Ferenc utca 21",
				guests: 3,
				bedrooms: 1,
				beds: 4,
				bathrooms: 1,
				description_short: "Nice apartment in the pedestrian area of Budapest, on Vaci Street! It is simply impossible to find an apartment for rent with a better location in Budapest. Affordable excellent accommodation for lovely couples, honeymooners, friends, businessmen and even for single adventurers.",
				description: dontIndent
				`Nice apartment in the pedestrian area of Budapest, on Vaci Street! It is simply impossible to find an apartment for rent with a better location in Budapest. Affordable excellent accommodation for lovely couples, honeymooners, friends, businessmen and even for single adventurers.

                I will never forget what gave me the courage a few years ago to compete with the glittering, five-star apartments and to start this business with my modest but charming little apartment. A French guest told me this. "Finally, an apartment with a soul, different from the thousands of other short-term rental apartments made to the same template all over the world, be it Europe or other continents, all the same, new, spotlessly clean, beautiful, practical in everything, of course Ikea dominates them, but unfortunately they are all soulless. Here we got what we were looking for."

                Yes, since then many people have confirmed to me that this was not just a one-time, random opinion - that there really are travelers who prioritize this over cold glamour. Of course, this also had to be due to the fact that the location of the apartment is indisputably one of the best in Budapest. Yes, the apartment is located in the heart of Budapest, on the pedestrian street called Deak Ferenc utca, alias Fashion Street, close to the famous and number one pedestrian street, the so-called Vaci utca.
                The apartment is only a stone's throw away from Budapest's most popular square, Vorosmarty Ter, and thus also from the famous Gerbeaud Cafe, where you can taste really delicious treats all year round. Every year from December, this square provides the perfect setting for the internationally popular Christmas Fair, where nothing else to do but eat, drink and buy trinkets. During the year, the area also hosts the equally popular Wine Tastings, Palinka Festivals and, more recently, Beer Festivals. The area is famous for the stores of the world-famous fashion companies found here, so it provides excellent shopping opportunities.

                The apartment is situated on the first floor of a quiet, renovated building what built in the 19th century. The apartment is well equipped, well designed and comfortable, and without a doubt, it is one of the best located apartments in Budapest! The furnishing of the apartment harmonizes with the atmosphere of the house, but at the same time it is youthfully dynamic thanks to the built-in exciting mezzanine. The high double bed creates the feeling of a safe corner and at the same time makes you want to snuggle up. The apartment is well equipped and provides a comfortable location for up to three or four people, but it is really recommended for couples.

                The location of this apartment is the greatest advantage, please check it on the city map. The public transport conditions are excellent, at Deak Ter there is the meeting point of the three Metro lines and on this square there are many stops of buses, trams and trolleybuses and 24 hour public transportation. Vaci utca means the center of Budapest, this is the main pedestrian area of Budapest. After a short walk you can reach the Danube river, the Chain Bridge, the famous passage, called Dunacorso, the world famous Cafes of Budapest, the best local restaurants and music clubs and also the Market Hall and the Thermal baths, so the cultural and gastronomic program options are unlimited in the area.

                If you want to spend money on quality clothes, you can choose from the most famous shops and boutiques. Are you looking for a cozy apartment for rent in the city center close to Vaci utca? If yes, this is the apartment you are looking for.`,
				getting_around: [
					dontIndent 
					`The apartment is located in the heart of the city, at the famous pedestrian street. There is simply everything!

                    This is the most prestigious area of Budapest, with high services in every sense. Near the building there is a non-stop supermarket, boutiques, travel agencies, Tourist information office, etc. are found. Walk just 50-100 meters and you have arrived at one of the most beautiful squares in Budapest, Vorosmarty Square, where you can taste and eat the best pastries and coffee specialties of the world-famous Gerbau Cafe, and take a pleasant walk up and down on the famous Váci Street. The Danube river and the Dunacorso promenade are also very close, it only takes a few minutes to get there from the apartment. You can also reach the Opera House with an easy walk. If you turn in the opposite direction, just a few hundred meters from the apartment you will reach the center of the "nightlife and music life", where there are many entertainment venues, such as music clubs, jazz cellars, pubs, bars, cafes and many, many good restaurants. This neighborhood is perhaps the most beautiful and exciting part of Budapest, and you can get confirmation of this from those who have already visited this city.`,
					"Metro lines, I., II., III., Metro, can all be found at Deak Ter.",
					"The stops for buses, trams, trolleybuses and night buses are also at Deak Ter."
				],
				arriving: [
					dontIndent
					`If arriving by metro or by train to Keleti Train Station (Keleti PU):
                From the International Train Station, called Keleti Pu., travel three stops by Metro II (the red line) to 'Deak Ter' Station, walk 50 meters and you have already arrived at the house.

                Please note: You will need 1 ticket/person for travel by public transportation, the price of one ticket is 350 HUF (~1.5 EUR).`,
					dontIndent
					`If arriving by international bus to Nepliget Bus Station:
                This is a stop on Metro 3 (also known as the Blue line or simply M3) line. Travel to the 'Deak Ter' station, walk 50 meters on 'Deak Ferenc' Street, next to the Hotel Ritz, and you have already arrived at the house.

                Please note: You will need 1 ticket/person for travel by public transportation, the price of one ticket is 350 HUF (~1.5 EUR).`,
					dontIndent
					`If arriving by plane to Liszt Ferenc Airport (formerly known as Ferihegy Airport):
                From the airport, travel by public transport bus number 200E to 'Kobanya Kispest' - the terminal of Metro 3 (the blue metro line, also marked M3). From there, travel to the 'Deak Ter' station, walk 50 meters on 'Deak Ferenc' street, next to the Hotel Ritz, and you have already arrived at the house.

                Please note: You will need 2 tickets/person for travel by public transportation, the price of one ticket is 350 HUF (~1.5 EUR). It takes about 90 minutes to get to the apartment in total from the airport.`,
					dontIndent
					`From the airport, you can also take the 100 E bus to the center, 'Deak Ter'. The price of the ticket is higher than the price of public transport tickets, but still affordable, about HUF 2,800/person.`,
					dontIndent
					`Another possibility (from the Airport) is our cheap partner taxi, which can pick you up at the airport (9900HUF or 25EUR/car for 1 - 4 persons). The driver will be waiting for you at the airport with a sign that has the name of the property, and he will bring you to the house. It takes about 45 minutes to get to the address. Please let us know if you need the taxi transfer, and in this case we will need some details about your flight.`,
					dontIndent
					`The third option is the airport minibus. You can order this service at the airport and they will also bring you to the building, but you have to wait a bit longer and you will travel with other passengers. The price is: 5400HUF/person for one way or 7500HUF/person for return.`
				],
				checkin: "1:00PM - 1:00AM",
				checkout: "11:00AM",
				cost: "80",
				amenities: ["Courtyard view","Bathroom","Bathtub","Hair dryer","Hot water","Bedroom and laundry","Essentials","Towels, bed sheets, soap, and toilet paper","Hangers","Bed linens","Extra pillows and blankets","Room-darkening shades","Iron","Drying rack for clothing","Clothing storage","Entertainment","TV with standard cable","Family","Window guards","Heating and cooling","Portable fans","Heating","Home safety","Carbon monoxide alarm","Internet and office","Wifi","Kitchen and dining","Kitchen","Space where guests can cook their own meals","Refrigerator","Microwave","Cooking basics","Pots and pans, oil, salt and pepper","Dishes and silverware","Bowls, chopsticks, plates, cups, etc.","Mini fridge","Freezer","Stove","Oven","Hot water kettle","Coffee maker","Wine glasses","Toaster","Baking sheet","Dining table","Coffee","Location features","Private entrance","Separate street or building entrance","Outdoor","Backyard","An open space on the property usually covered in grass","Parking and facilities","Elevator","Paid parking off premises","Paid parking on premises","Services","Pets allowed","Assistance animals are always allowed","Long term stays allowed","Allow stay for 28 days or more","Cleaning available during stay","Host greets you"],
				rules: ["3 guests maximum", "No pets", "No parties or events", "No commercial photography", "No smoking", "On the last day, when you check out of the apartment, please open the window at the end of the sofa bed, then leave the apartment, close the front door and throw the keys back into the apartment through the already open window and we will find the keys either on the sofa bed or on the parquet floor."]
			},
            {
				slug: "buda-castle-apartment",
				name: "Buda Castle Apartment",
				type: "Entire Apartment",
				address: "1011 Budapest, Iskola utca 34-36",
				guests: 2,
				bedrooms: 1,
				beds: 1,
				bathrooms: 1,
				description_short: "",
				description: dontIndent
				``,
				getting_around: [],
				arriving: [dontIndent
				`If arriving by metro or by train to Keleti Train Station (Keleti PU):

                Go to the main exit of the Keleti Train Station, look around the square and find the building which has a huge red sign on the roof: 'Canon'. Walk to that building along the left side of the square, and look for a pink 'MARIKA' sign just next to the K&H Bank. Under the 'AVON' sign there is a keypad, you have to ring bell 14, by simply typing 14.

                If for some reason you don't see the Canon sign, than look for a big hotel called 'Grand Hotel Hungaria'. If you face this building while the train station is behind you, the building where the hostel is located is at your left, just across, to the left from the hotel's edge. There you can see the 'MARIKA' sign, next to the K&H Bank. Just ring 14.`,
				dontIndent
				`If arriving by international bus to Nepliget Bus Station:

                This is a stop on the Metro 3 (also called Blue line or just M3) line. Go to the 'Deak Ferenc Ter' metro station (this is the meeting point of the three Metro lines we have in Budapest), switch to the Metro 2 line (M2 or Red Metro) and travel three stops to 'Keleti Pu' station. Pop up from the underground. From here just follow instructions from the previous point. (Find the building with the 'Canon' sign on the roof, walk there, look for 'MARIKA' sign and ring bell 14.)

                Please note: You will need 1 ticket/person, the price of a ticket is 350HUF.`,
				dontIndent
				`If arriving by plane to Liszt Ferenc Airport (formerly known as Ferihegy Airport):

                From the Airport travel by public transport bus number 200E to 'Kobanya Kispest' - the terminal of Metro 3 (Blue Metro line, also marked M3). Take this Metro line to 'Deak Ferenc Ter', (this is the meeting point of the three Metro lines we have in Budapest), switch to the Metro 2 line (M2 or Red Metro line) and travel three stops to 'Keleti Pu' station. Pop up from the underground. From here just follow instructions from the first point. (Find the building with the 'Canon' sign on the roof, walk there, look for 'MARIKA' sign and ring bell 14.)

                Please note: You will need 2 tickets/person for this travel. One ticket costs 350 HUF. Keep your validated tickets for possible controls! It takes about 90 minutes to get to the hostel.`,
				dontIndent
				`Another possibility (from the Airport) is our cheap partner taxi, which can pick you up at the airport (9900HUF or 25EUR/car for 1 - 4 persons). The driver will be waiting for you at the airport with a sign: Terrace Apartment and he will bring you to the house. It takes about 45 minutes to get to the address. Please let us know if you need the taxi transfer, and in this case we will need some details about your flight.`,
				dontIndent
				`The third option is the airport minibus. You can order this service at the airport and they will also bring you to the building, but you have to wait a bit longer and you will travel with other passengers. The price is: 5400HUF/person for one way or 7500HUF/person for return.`
				],
				checkin: "2:00PM - 2:00AM",
				checkout: "11:00AM",
				cost: 80,
				amenities: ["Washer", "Essentials", "Towels, bed sheets, soap, and toilet paper", "Entertainment", "TV with standard cable", "Heating and cooling", "Heating", "Home safety", "Fire extinguisher", "First aid kit", "Internet and office", "Wifi", "Kitchen and dining", "Kitchen", "Space where guests can cook their own meals", "Parking and facilities", "Elevator", "The home or building has an elevator that’s at least 52 inches deep and a doorway at least 32 inches wide", "Paid parking off premises"],
				rules: ["2 guests maximum", "No pets", "No parties or events", "No commercial photography", "No smoking"]}
		]
	},
	{
		slug: "balaton-stays",
		name: "Lake Balaton Farm Stays",
		location: "Balatonszemes, Hungary",
		slogan: "Private Apartments on the Shore of Lake Balaton",
		description_short: "Enjoy a collection of private apartments within a larger house located right on the shore of Lake Balaton, in the quiet village of Balatonszemes. This is a great location for a relaxing sunny holiday at the lake, with easy access to nearby villages and thermal baths.",
		description: "Enjoy a collection of private apartments within a larger house located right on the shore of Lake Balaton, in the quiet village of Balatonszemes. This is a great location for a relaxing sunny holiday at the lake, with easy access to nearby villages and thermal baths. From the port very often leave ships to the sights of the northern and southern coast of the lake. If you just want to relax, recharge yourself, engage in sports or fishing, you don't have to leave the village at all.",
		rooms: [
			{
				slug: "farm-stay",
				name: "Farm Stay in Holiday Apartment",
				type: "Private Unit Within House",
				address: "Ground floor, 8636 Balatonszemes, Berzsenyi Dániel utca 4",
				guests: 5,
				bedrooms: 2,
				beds: 8,
				bathrooms: 1,
				description_short: "Enjoy a private apartment within a house located right on the shore of Lake Balaton, in the quiet village of Balatonszemes. This is a great location for a relaxing sunny holiday at the lake, with easy access to nearby villages and thermal baths.",
				description: dontIndent
				`Great location, with great accommodation for a great holiday! Are you looking for a holiday apartment somewhere at Lake Balaton? Yes, this is the place, you wish!

                Sunshine, sunshine, sunshine, relax, sandy beach, green grass, gentle, cool waves in the lake, yes, all these come true if you come to Balatonszemes! Balatonszemes is a very good choice in many aspects to spend the holidays. It's central location gives you many possibilities to reach easily and quickly the other villages and thermal baths in the neighbourhood and the northern side aswell. From the port very often leave ships to the sights of the northern and southern coast of the lake. If you just want to relax, recharge yourself, engage in sports or fishing, you don't have to leave the village at all. The house on the pictures can be found on the shore of Lake Balaton, opposite the entrance of the free local beach. It's about 200-250 meters far from the port and the center of the village, where the shops and entertainment facilities can be found.

                There are four apartments in the house, each has two balconies and a view to the lake. All flats are separated. Only the garden is shared where the cars can be placed. Each apartment is fully furnished and well-equipped. In the kitchen you can find a coffee-machine, toaster, microwave-oven, electric stove, fridge and all the dishes and spices. The bathroom is equipped with tub and separated from the toilet. The living room and the 1-2 bedrooms give enough space for a comfortable accomodation of 1-5 persons. Satellite-TV is also available in each apartment. On the balcony facing to the south and to the north you can relax, take in the sun, dine, and in the evenings it's a perfect place for long talking beside the wine-glasses.`,
				getting_around: ["All points, shops, restaurants and harbor of Balatonszemes can be reached on foot in a few minutes. We provide parking for two cars in the garden."],
				arriving: [`If arriving by train: from the train station walk to Balaton Sailing Port (200 meters) and turn to the left to the City Beach. Our House is across of the main entrance of the beach. It takes 10 minutes by walk.`,
					`If arriving by bus: from the bus station (Budapest - Balatonstemes) you have to turn to the right to the Lake and walk 300 meters to the trainstation then walk 200 meters till the Balaton Sailing Port and turn to the left to the City Beach. Our House is in front of the main entrance of the beach.`,
					`If arriving by plane to Budapest Ferihegy Airport: you have to travel to the trainstation and follow the way by train to Balatonszemes (135 km). It takes 2 hours to get there, and from the train station you can get to the house by walk within 10 minutes.`,
					`If arriving by plane to Kaposjlaki Airport: you can use train or bus to get to Balatonszemes. It takes 1 hour to get there. From the train station or the bus station you can arrive to the house by walk within 10 minutes.`,
					`If arriving by plane to Budapest Airport: we can organise a cheap minibus or car transfer to the house at Balatonszemes.`],
				checkin: "2:00PM - 8:00PM",
				checkout: "10:00AM",
				cost: 45,
				amenities: ["Beach view", "Garden view", "Lake view", "Park view", "Bathroom", "Hair dryer", "Hot water", "Bedroom and laundry", "Essentials", "Towels, bed sheets, soap, and toilet paper", "Hangers", "Bed linens", "Extra pillows and blankets", "Room-darkening shades", "Iron", "Clothing storage", "Entertainment", "TV with standard cable", "Family", "Outdoor playground", "An outdoor area equipped with play structures for children", "Internet and office", "Wifi", "Kitchen and dining", "Kitchen", "Space where guests can cook their own meals", "Refrigerator", "Microwave", "Cooking basics", "Pots and pans, oil, salt and pepper", "Dishes and silverware", "Bowls, chopsticks, plates, cups, etc.", "Freezer", "Stove", "Oven", "Hot water kettle", "Coffee maker", "Wine glasses", "Toaster", "Dining table", "Location features", "Waterfront", "Right next to a body of water", "Beach access – Beachfront", "Guests can enjoy a nearby beach", "Outdoor", "Private patio or balcony", "Outdoor furniture", "Outdoor dining area", "Parking and facilities", "Free parking on premises", "Services", "Pets allowed", "Assistance animals are always allowed", "Self check-in", "Building staff", "Someone is available 24 hours a day to let guests in"],
				rules: ["5 guests maximum", "No pets", "No parties or events", "No commercial photography", "No smoking"]
			},
			{
				slug: "rental-unit",
				name: "Rental Unit in Holiday House",
				type: "Private Unit Within House",
				address: "First floor, 8636 Balatonszemes, Berzsenyi Dániel utca 4",
				guests: 6,
				bedrooms: 3,
				beds: 7,
				bathrooms: 1,
				description_short: "Enjoy a private apartment within a house located right on the shore of Lake Balaton, in the quiet village of Balatonszemes. This is a great location for a relaxing sunny holiday at the lake, with easy access to nearby villages and thermal baths.",
				description: dontIndent
				`Balatonszemes is a good choice in many aspects to spend the holidays. It's central location gives you many possibilities to reach easily and quickly the other villages and thermal baths in the neighbourhood and the northern side aswell. The house can be found on the shore of Lake Balaton, opposite the entrance of the local beach. It's about 200-250 meters far from the port and the center of the village, where the shops and entertainment facilities can be found. From the port very often leave ships to the sights of the northern and southern coast of the lake. If you just want to relax, recharge yourself, engage in sports or fishing, you don't have to leave the village at all. The house on the pictures can be found on the shore of Lake Balaton, opposite the entrance of the non-paying local beach. 

                There are two apartments in the house, each has two balconies and a view to the lake. The flats are separated. Only the garden is shared where the cars can be placed. Each apartment is fully furnished and well-equipped. In the kitchen you can find a coffee-machine, toaster, microwave-oven, electric stove, fridge and all the dishes and spices. The bathroom is equipped with tub and separated from the toilet. The living room and the 1-2 bedrooms give enough space for a comfortable accomodation of 1-6 persons. Satellite-TV is also available in each apartment. On the balcony facing to the south and to the north you can relax, take the sun, dine, and in the evenings it's a perfect place for long talking beside the wine-glasses.`,
				getting_around: ["All points, shops, restaurants and harbor of Balatonszemes can be reached on foot in a few minutes. We provide parking for two cars in the garden."],
				arriving: [
					`If arriving by train: from the train station walk to Balaton Sailing Port (200 meters) and turn to the left to the City Beach. Our House is across of the main entrance of the beach. It takes 10 minutes by walk.`,
					`If arriving by bus: from the bus station (Budapest - Balatonstemes) you have to turn to the right to the Lake and walk 300 meters to the trainstation then walk 200 meters till the Balaton Sailing Port and turn to the left to the City Beach. Our House is in front of the main entrance of the beach.`,
					`If arriving by plane to Budapest Ferihegy Airport: you have to travel to the trainstation and follow the way by train to Balatonszemes (135 km). It takes 2 hours to get there, and from the train station you can get to the house by walk within 10 minutes.`,
					`If arriving by plane to Kaposjlaki Airport: you can use train or bus to get to Balatonszemes. It takes 1 hour to get there. From the train station or the bus station you can arrive to the house by walk within 10 minutes.`,
					`If arriving by plane to Budapest Airport: we can organise a cheap minibus or car transfer to the house at Balatonszemes.`
				],
				checkin: "1:00PM - 8:00PM",
				checkout: "10:00AM",
				cost: 45,
				amenities: ["Beach view", "Lake view", "Park view", "Bathroom", "Bathtub", "Hair dryer", "Hot water", "Bedroom and laundry", "Essentials", "Towels, bed sheets, soap, and toilet paper", "Hangers", "Bed linens", "Cotton linens", "Room-darkening shades", "Iron", "Mosquito net", "Clothing storage: closet", "Entertainment", "TV", "Heating and cooling", "Ceiling fan", "Home safety", "Fire extinguisher", "Internet and office", "Wifi", "Kitchen and dining", "Kitchen", "Space where guests can cook their own meals", "Refrigerator", "Microwave", "Cooking basics", "Pots and pans, oil, salt and pepper", "Dishes and silverware", "Bowls, chopsticks, plates, cups, etc.", "Freezer", "Stove", "Oven", "Hot water kettle", "Coffee maker", "Wine glasses", "Toaster", "Baking sheet", "Dining table", "Coffee", "Location features", "Waterfront", "Right next to a body of water", "Lake access", "Guests can get to a lake using a path or dock", "Private entrance", "Separate street or building entrance", "Resort access", "Guests can use nearby resort facilities", "Outdoor", "Private patio or balcony", "Outdoor furniture", "Parking and facilities", "Free parking on premises", "Services", "Pets allowed", "Assistance animals are always allowed", "Long term stays allowed", "Allow stay for 28 days or more", "Host greets you"],
				rules: ["6 guests maximum", "No pets", "No parties or events", "No commercial photography", "No smoking"]
			}]
	},
	{
		slug: "locomotive-intercity",
		name: "Locomotive Intercity Hotel",
		location: "Keleti Pályaudvar, Budapest, Hungary",
		slogan: "Affordable Rooms Next to Keleti Pályaudvar",
		description_short: "A collection of rooms at a range of prices, located within a larger apartment building located right next to the Keleti Pályaudvar (Eastern Railway Station) in Budapest. This is a great location for travelers arriving or departing by train, with easy access to public transportation and the city center.",
		description: "A collection of rooms at a range of prices, located within a larger apartment building located right next to the Keleti Pályaudvar (Eastern Railway Station) in Budapest. We offer a range of accommodations to suit different budgets and preferences - ranging from private rooms to shared dormitories. Regardless of what you choose, this is a great location for travelers arriving or departing by train, with easy access to public transportation and the city center. Furthermore, we offer a variety of amenities to make your stay comfortable and enjoyable, including free Wi-Fi, a communal kitchen, and a cozy common area where you can relax and socialize with other guests.",
		rooms: [
			{
				slug: "private-room",
				name: "Private Room in Apartment",
				type: "Private Room within Shared Apartment",
				address: "1087 Budapest, Baross Tér 02",
				guests: 2,
				bedrooms: 1,
				beds: 1,
				bathrooms: "1 (shared)",
				description_short: "Enjoy a private room within a larger shared apartment located right next to Keleti Pályaudvar (Eastern Railway Station) in Budapest. This is a great location for travelers arriving or departing by train, with easy access to public transportation and the city center.",
				description: dontIndent
				`Our Hostel is located right downtown, very close to the International Train Station Budapest, called Keleti Pu. The very central location and the proximity to the underground stations and numerous tram and bus lines make our hostel for an ideal place for your crawls in the City.

                If you plan on coming or leaving by train, don't waste your time and energy to carry your heavy luggage cross the town! Within couple of minutes you arrive, get rid of your load and the City is yours immediately! It is an ideal place for your crawls in the City, surrounded by lots of pubs, restaurants, cafes, nightclubs, a post office and 24 hour grocery shops and all important things you might need during your stay in Budapest. Pubs, clubs, historical and cultural attractions as well, as the business and shopping centre of Budapest are within walking distance....

                Surprise yourself and your partner with something nice and special, enjoy your rest in our romantic four-poster beds! We offer you double or twin private rooms, all rooms with a really pleasant atmosphere. After a hard day or a hard night you can watch SAT-TV from the comfort of your bed as there is televison in every rooms. LOCOMOTIVE LIGHT HOSTEL WON'T DISAPPOINT YOU!

                There is an equipped kitchen in the Hostel, you can find there a stove, fridge, freezer, microwave oven, coffee machine, toaster, turmix machine, dishes, plates, etc..., drink coffee, tea and cacao, as much you like, for FREE! Other food and drinks you can buy downstairs in the nonstop supermarket. We provide you 24 hours FREE INTERNET access, FREE WiFi and PC. The common room is also well equipped and well decorated, helping to provide an easygoing atmosphere where you can make your stay fun and memorable. There is washing machine in the hostel.`,
				getting_around: ["Keleti Trainstation, International Trainstation", "Metro 2., Metro 4. terminal", "Buses, 7., 5., 20., 30., 78., night buses", "Tram, 24.", "Trolley Buses, 73., 75., 76.", "Parking garden is situated behind of the house, -8.-EUR/day, 24 hours open", "Free parking is possible in Arena Plaza Garage", "Parking on the street is also available, week days from 08:00 to 18:00 the fee is 350.-HUF/hour, during the weekend the parking is free of charge."],
				arriving: [dontIndent
				`If arriving by metro or by train to Keleti Train Station (Keleti PU):

                Go to the main exit of the Keleti Train Station, look around the square and find the building which has a huge red sign on the roof: 'Canon'. Walk to that building along the left side of the square, and look for a pink 'MARIKA' sign just next to the K&H Bank. Under the 'AVON' sign there is a keypad, you have to ring bell 14, by simply typing 14.

                If for some reason you don't see the Canon sign, than look for a big hotel called 'Grand Hotel Hungaria'. If you face this building while the train station is behind you, the building where the hostel is located is at your left, just across, to the left from the hotel's edge. There you can see the 'MARIKA' sign, next to the K&H Bank. Just ring 14.`,
				dontIndent
				`If arriving by international bus to Nepliget Bus Station:

                This is a stop on the Metro 3 (also called Blue line or just M3) line. Go to the 'Deak Ferenc Ter' metro station (this is the meeting point of the three Metro lines we have in Budapest), switch to the Metro 2 line (M2 or Red Metro) and travel three stops to 'Keleti Pu' station. Pop up from the underground. From here just follow instructions from the previous point. (Find the building with the 'Canon' sign on the roof, walk there, look for 'MARIKA' sign and ring bell 14.)

                Please note: You will need 1 ticket/person, the price of a ticket is 350HUF.`,
				dontIndent
				`If arriving by plane to Liszt Ferenc Airport (formerly known as Ferihegy Airport):

                From the Airport travel by public transport bus number 200E to 'Kobanya Kispest' - the terminal of Metro 3 (Blue Metro line, also marked M3). Take this Metro line to 'Deak Ferenc Ter', (this is the meeting point of the three Metro lines we have in Budapest), switch to the Metro 2 line (M2 or Red Metro line) and travel three stops to 'Keleti Pu' station. Pop up from the underground. From here just follow instructions from the first point. (Find the building with the 'Canon' sign on the roof, walk there, look for 'MARIKA' sign and ring bell 14.)

                Please note: You will need 2 tickets/person for this travel. One ticket costs 350 HUF. Keep your validated tickets for possible controls! It takes about 90 minutes to get to the hostel.`,
				dontIndent
				`Another possibility (from the Airport) is our cheap partner taxi, which can pick you up at the airport (9900HUF or 25EUR/car for 1 - 4 persons). The driver will be waiting for you at the airport with a sign: Terrace Apartment and he will bring you to the house. It takes about 45 minutes to get to the address. Please let us know if you need the taxi transfer, and in this case we will need some details about your flight.`,
				dontIndent
				`The third option is the airport minibus. You can order this service at the airport and they will also bring you to the building, but you have to wait a bit longer and you will travel with other passengers. The price is: 5400HUF/person for one way or 7500HUF/person for return.`
				],
				checkin: "2:00PM - 2:00AM",
				checkout: "11:00AM",
				cost: 60,
				amenities: ["Washer", "Essentials", "Towels, bed sheets, soap, and toilet paper", "Entertainment", "TV with standard cable", "Heating and cooling", "Heating", "Home safety", "Fire extinguisher", "First aid kit", "Internet and office", "Wifi", "Kitchen and dining", "Kitchen", "Space where guests can cook their own meals", "Parking and facilities", "Elevator", "The home or building has an elevator that’s at least 52 inches deep and a doorway at least 32 inches wide", "Paid parking off premises"],
				rules: ["2 guests maximum", "No pets", "No parties or events", "No commercial photography", "No smoking"]},
			{
				slug: "hostel-dorm-m",
				name: "Shared 6-Person Dormitory within Shared Apartment",
				type: "Shared Room within Shared Apartment",
				address: "1087 Budapest, Baross Tér 02",
				guests: 1,
				bedrooms: "1 (shared)",
				beds: 1,
				bathrooms: "1 (shared)",
				description_short: "Enjoy a shared dormitory within a larger shared apartment located right next to Keleti Pályaudvar (Eastern Railway Station) in Budapest. This is a great location for travelers on a budget who are arriving or departing by train, with easy access to public transportation and the city center.",
				description: dontIndent
				`Our Hostel is located directly in the city center, very close to the Eastern Railway Station. The very central location and the proximity of the train station, the Metros, the tram and bus lines make the hostel an ideal place for city tours. This is a quiet, friendly, small hostel, providing a comfortable location and privacy for our guests. The shared kitchen is well-equipped, the supermarket is on the ground floor, you can even shop in slippers at any time of the day at this central accommodation.

                If you plan on coming or leaving by train, don't waste your time and energy to carry your heavy luggage cross the town! Within couple of minutes you arrive, get rid of your load and the City is yours immediately! It is an ideal place for your crawls in the City, surrounded by lots of pubs, restaurants, cafes, nightclubs, a post office and 24 hour grocery shops and all important things you might need during your stay in Budapest. Pubs, clubs, historical and cultural attractions as well, as the business and shopping centre of Budapest are within walking distance....

                There is an equipped kitchen in the Hostel, you can find there a stove, fridge, freezer, microwave oven, coffee machine, toaster, turmix machine, dishes, plates, etc..., drink coffee, tea and cacao, as much you like, for FREE! Other food and drinks you can buy downstairs in the nonstop supermarket. We provide you 24 hours FREE INTERNET access, FREE WiFi and PC. The common room is also well equipped and well decorated, helping to provide an easygoing atmosphere where you can make your stay fun and memorable. There is washing machine in the hostel.`,
				getting_around: ["Keleti Trainstation, International Trainstation", "Metro 2., Metro 4. terminal", "Buses, 7., 5., 20., 30., 78., night buses", "Tram, 24.", "Trolley Buses, 73., 75., 76.", "Parking garden is situated behind of the house, -8.-EUR/day, 24 hours open", "Free parking is possible in Arena Plaza Garage", "Parking on the street is also available, week days from 08:00 to 18:00 the fee is 350.-HUF/hour, during the weekend the parking is free of charge."],
				arriving: [dontIndent
				`If arriving by metro or by train to Keleti Train Station (Keleti PU):

                Go to the main exit of the Keleti Train Station, look around the square and find the building which has a huge red sign on the roof: 'Canon'. Walk to that building along the left side of the square, and look for a pink 'MARIKA' sign just next to the K&H Bank. Under the 'AVON' sign there is a keypad, you have to ring bell 14, by simply typing 14.

                If for some reason you don't see the Canon sign, than look for a big hotel called 'Grand Hotel Hungaria'. If you face this building while the train station is behind you, the building where the hostel is located is at your left, just across, to the left from the hotel's edge. There you can see the 'MARIKA' sign, next to the K&H Bank. Just ring 14.`,
				dontIndent
				`If arriving by international bus to Nepliget Bus Station:

                This is a stop on the Metro 3 (also called Blue line or just M3) line. Go to the 'Deak Ferenc Ter' metro station (this is the meeting point of the three Metro lines we have in Budapest), switch to the Metro 2 line (M2 or Red Metro) and travel three stops to 'Keleti Pu' station. Pop up from the underground. From here just follow instructions from the previous point. (Find the building with the 'Canon' sign on the roof, walk there, look for 'MARIKA' sign and ring bell 14.)

                Please note: You will need 1 ticket/person, the price of a ticket is 350HUF.`,
				dontIndent
				`If arriving by plane to Liszt Ferenc Airport (formerly known as Ferihegy Airport):

                From the Airport travel by public transport bus number 200E to 'Kobanya Kispest' - the terminal of Metro 3 (Blue Metro line, also marked M3). Take this Metro line to 'Deak Ferenc Ter', (this is the meeting point of the three Metro lines we have in Budapest), switch to the Metro 2 line (M2 or Red Metro line) and travel three stops to 'Keleti Pu' station. Pop up from the underground. From here just follow instructions from the first point. (Find the building with the 'Canon' sign on the roof, walk there, look for 'MARIKA' sign and ring bell 14.)

                Please note: You will need 2 tickets/person for this travel. One ticket costs 350 HUF. Keep your validated tickets for possible controls! It takes about 90 minutes to get to the hostel.`,
				dontIndent
				`Another possibility (from the Airport) is our cheap partner taxi, which can pick you up at the airport (9900HUF or 25EUR/car for 1 - 4 persons). The driver will be waiting for you at the airport with a sign: Terrace Apartment and he will bring you to the house. It takes about 45 minutes to get to the address. Please let us know if you need the taxi transfer, and in this case we will need some details about your flight.`,
				dontIndent
				`The third option is the airport minibus. You can order this service at the airport and they will also bring you to the building, but you have to wait a bit longer and you will travel with other passengers. The price is: 5400HUF/person for one way or 7500HUF/person for return.`
				],
				checkin: "11:00AM - 2:00AM",
				checkout: "11:00AM",
				cost: 20,
				amenities: ["Washer", "Home safety", "Smoke alarm", "Carbon monoxide alarm", "Fire extinguisher", "First aid kit", "Internet and office", "Wifi", "Dedicated workspace", "Kitchen and dining", "Kitchen"],
				rules: ["1 guest maximum", "No pets", "No parties or events", "No commercial photography", "No smoking"]}
		]
	},
];
