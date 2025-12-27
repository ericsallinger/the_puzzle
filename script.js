(function() {

  const TILE_CONFIG = {
    "1":  { password: "pretzel", imgSrc: "img/1.jpeg",  message: "Oh hi Jaz! Welcome to The Puzzle :))" },
    "2":  { password: "-", imgSrc: "img/2.jpeg",  message: "Each piece is a piece of us" },
    "3":  { password: "knot", imgSrc: "img/3.jpeg", message: "Memories, moments, feelings, songs" },
    "4":  { password: ".", imgSrc: "img/4.jpeg",  message: "There's a lot of pieces. But that's just because there's a lot of ways we fit together" },
    "5":  { password: "love", imgSrc: "img/5.jpeg",  message: "We're like a big, beautiful, ever evolving pretzel knot!" },
    "6":  { password: "dessert", imgSrc: "img/6.jpeg",  message: "The past is just a series of circumstances that brought you to me" },
    "7":  { password: "eat", imgSrc: "img/7.jpeg",  message: "Hola hola camaroncito sin cola" },
    "8":  { password: "you", imgSrc: "img/8.jpeg",  message: "I love you" },
    "9":  { password: "make", imgSrc: "img/9.jpeg",  message: "Sitting in your cozy room at your parents watching a whole season of Fleabag" },
    "10":  { password: "my", imgSrc: "img/10.jpeg",  message: "I could be stuck desserted with you on literal Mars and still be happy"},
    "11":  { password: "marte", imgSrc: "img/11.jpeg",  message: "One of the classiest we've ever looked in a reflection" },
    "12":  { password: "remember", imgSrc: "img/12.jpeg",  message: "The graph of how many texts we sent each other in our first two years of dating. Holy heck!" },
    "13":  { password: "a", imgSrc: "img/13.jpeg",  message: "You make baseball fun" },
    "14":  { password: "cravings", imgSrc: "img/14.jpeg",  message: "The first of many big life moments we shared together" },
    "15":  { password: "day", imgSrc: "img/15.jpeg",  message: "'random question, what does PCS stand for? like the class you took' -- the first text that Jaz sent Eric (8/3/2018)" },
    "16":  { password: "kids", imgSrc: "img/16.jpeg",  message: "I'd watch 1000 sunrises with you as long as we get to nap after" },
    "17":  { password: "el", imgSrc: "img/17.jpeg",  message: "4 So Far's so far!" },
    "18":  { password: "puzzle", imgSrc: "img/18.jpeg",  message: "When we're 80 we'll have so many favorite spots together. An explored world" },
    "19":  { password: "this", imgSrc: "img/19.jpeg",  message: "I went out for lunch with my family and have now had a cup of eggnog -- me, probably eggnog drunk" },
    "20":  { password: "will", imgSrc: "img/20.jpeg",  message: "I can hear the giggling echos of you and Lina chasing squash balls around" },
    "21":  { password: "sure", imgSrc: "img/21.jpeg",  message: "Love is: The so many nights all I wanted to do was go sleep but I still would think of a fun original goodnight message" },
    "22":  { password: "luna", imgSrc: "img/22.jpeg",  message: "Hugging you swaying as we bask in being alone together in public" },
    "23":  { password: "moment", imgSrc: "img/23.jpeg",  message: "You got me my first ever bread!" },
    "24":  { password: "sol", imgSrc: "img/24.jpeg",  message: "Someday we will: spend a Christmas together!" },
    "25":  { password: "me", imgSrc: "img/25.jpeg",  message: "Bring back this haircut???" },
    "26":  { password: "say", imgSrc: "img/26.jpeg",  message: "Jaz and Eric hall of fame picture" },
    "27":  { password: "the", imgSrc: "img/27.jpeg",  message: "We used to: Be too shy to change in the same room as each other" },
    "28":  { password: "complete", imgSrc: "img/28.jpeg",  message: "2/25/2020 the first time we sent a casual goodnight text (so now a 5 year and 8 month streak?!)" },
    "29":  { password: "to", imgSrc: "img/29.jpeg",  message: "Honey I shrunk the Jaz!" },
    "30":  { password: "words", imgSrc: "img/30.jpeg",  message: "Would Jaz + Eric exist without this excursion??" },
    "31":  { password: "say", imgSrc: "img/31.jpeg",  message: "Love is: a pint of ice cream, ori, and not a single plan" },
    "32":  { password: "you", imgSrc: "img/32.jpeg",  message: "Jaz-TV is my favorite show" },
    "33":  { password: "to", imgSrc: "img/33.jpeg",  message: "I love make things, but when I make things for you it feels so meaningful" },
    "34":  { password: "us", imgSrc: "img/34.jpeg",  message: "I propose a tradition! Each Super Bowl Sunday we go out and enjoy being the only ones there" },
    "35":  { password: "always", imgSrc: "img/35.jpeg",  message: "Together we: make eachother stronger, pushing to do the things we know we need to do or say" },
    "36":  { password: "jaz", imgSrc: "img/36.jpeg",  message: "Our freckles are mirror images and when we kiss they're perfectly in line" },
    "37":  { password: "there", imgSrc: "img/37.jpeg",  message: "Imagine our lives together if we settle down in Denver, would we be a ski couple? Prob not but maybe" },
    "38":  { password: "now", imgSrc: "img/38.jpeg",  message: "I want you to be my sous chef for the rest of all time" },
    "39":  { password: "to", imgSrc: "img/39.jpeg",  message: "Someday we will: travel to a Spanish speaking country and stay in Spanish the entire time!!" },
    "40":  { password: "normal", imgSrc: "img/40.jpeg",  message: "Hall of fame Jaz+Eric moment number 347" },
    "41":  { password: "us", imgSrc: "img/41.jpeg",  message: "Love is: Meaningful moments shared with you, sharing family with you, being happy sad with you" },
    "42":  { password: "no", imgSrc: "img/42.jpeg",  message: "'What's that noise up the stairs babe, is it Christmas morning creaks' -Blood Bank (I love this line)" },
    "43":  { password: "life", imgSrc: "img/43.jpeg",  message: "Can you believe that our families both live thousands of miles away and yet we've still all met?!" },
    "44":  { password: "you", imgSrc: "img/44.jpeg",  message: "That trumpet went so hard" },
    "45":  { password: "you", imgSrc: "img/45.jpeg",  message: "Reason number 45 why I love you: We share friends so well" },
    "46":  { password: "we", imgSrc: "img/46.jpeg",  message: "This is your perfection in one photo. Beautiful, balanced, silly" },
    "47":  { password: "know", imgSrc: "img/47.jpeg",  message: "You turn each shiny surface into a chance for a new memory" },
    "48":  { password: "one", imgSrc: "img/48.jpeg",  message: "Charli!! I think is emblematic of how you've 'changed' me. Music taste, proximity to queer culture, general hip-ness" },
    "49":  { password: "a", imgSrc: "img/49.jpeg",  message: "Love is: a choco-banana on a hot daty in Belize" },
    "50":  { password: "want", imgSrc: "img/50.jpeg",  message: "A quarter of the puzzle is complete! Think about all the little memories revisted already, and how many more we've shared." },
    "51":  { password: "really", imgSrc: "img/51.jpeg",  message: "Close your eyes. We're gently swaying in a hammock. Books on our bellies, a light breeze from underneath" },
    "52":  { password: "simply", imgSrc: "img/52.jpeg",  message: "This improvisational grill session is brought to you by tin foil and yard sticks" },
    "53":  { password: "just", imgSrc: "img/53.jpeg",  message: "Someday we will: Spend another whole morning cuddled in the back of a van in a beautiful place" },
    "54":  { password: "friendship", imgSrc: "img/54.jpeg",  message: "My heart will forever flutter an extra second when I see your mascara come on" },
    "55":  { password: "and", imgSrc: "img/55.jpeg",  message: "You make me like wearing costumes" },
    "56":  { password: "hasta", imgSrc: "img/56.jpeg",  message: "A stain is a giggle not a tear when I'm with you (P.S. very fun haircut here)" },
    "57":  { password: "y", imgSrc: "img/57.jpeg",  message: "How can I steer my look to become Pedro Pascal by age 40?" },
    "58":  { password: "querer", imgSrc: "img/58.jpeg",  message: "Jaz and Eric life mission #627: finding the greatest frozen yoghurt on the planet" },
    "59":  { password: "charli)", imgSrc: "img/59.jpeg",  message: "A call that never ends somehow turned into a love that never ends" },
    "60":  { password: "aimlessly", imgSrc: "img/60.jpeg",  message: "I think this Hippo Campus album is one of the most 'Jaz and Eric' albums. Agreed?" },
    "61":  { password: "though", imgSrc: "img/61.jpeg",  message: "Someday we will: Eat lots of fresh fish from a market like this (with no bones!!!)" },
    "62":  { password: "text", imgSrc: "img/62.jpeg",  message: "I love you because you make an entire city feel like it it exists for just you and me" },
    "63":  { password: "could", imgSrc: "img/63.jpeg",  message: "A simple love of being in nature is one of our impossibly large facets of compatibility" },
    "64":  { password: "have", imgSrc: "img/64.jpeg",  message: "But we also love getting fuked up together from time to time" },
    "65":  { password: "been", imgSrc: "img/65.jpeg",  message: "I think being an adult means 'taking part' in society, aka going out on the town! I love little shows with you" },
    "66":  { password: "unsent", imgSrc: "img/66.jpeg",  message: "I'd wear the shortest of shorts to make you happy" },
    "67":  { password: "thoughtfulness", imgSrc: "img/67.jpeg",  message: "Cooking with family. Some of the best memories I have and can imagine" },
    "68":  { password: "time", imgSrc: "img/68.jpeg",  message: "Zoo lights is such a strong tradition we've already formed! I love the idea of little traditions that make our family ours" },
    "69":  { password: "a", imgSrc: "img/69.jpeg",  message: "Casa" },
    "70":  { password: "i", imgSrc: "img/70.jpeg",  message: "We haven't even entered our wedding-going era yet!" },
    "71":  { password: "only", imgSrc: "img/71.jpeg",  message: "Together we: have doubled the size of both our families" },
    "72":  { password: "if", imgSrc: "img/72.jpeg",  message: "What will our BBs look like? SO funky to imagine a combo Jaz + Eric little one " },
    "73":  { password: "you", imgSrc: "img/73.jpeg",  message: "Being under the stars with you... the universe feels whole" },
    "74":  { password: "make", imgSrc: "img/74.jpeg",  message: "Fair warning the standards for Eric Oompa Loompa are high" },
    "75":  { password: "te", imgSrc: "img/75.jpeg",  message: "I promise that if you stick with me, you'll never have to stick your arm into a bird" },
    "76":  { password: "a", imgSrc: "img/76.jpeg",  message: "I say we run back the sensory deprivation tank experience, this time no scary drip drop noises." },
    "77":  { password: "deep", imgSrc: "img/77.jpeg",  message: "The dreaded bridge of drama drama! All time silly Jaz + Eric experience" },
    "78":  { password: "four", imgSrc: "img/78.jpeg",  message: "Wherever there is a reflection. We will appear in it" },
    "79":  { password: "i", imgSrc: "img/79.jpeg",  message: "One of the truly most special pictures I could ever ask for :')" },
    "80":  { password: "to", imgSrc: "img/80.jpeg",  message: "I think silliness is something you have to cultivate. Age threatens it. You nourish it" },
    "81":  { password: "world", imgSrc: "img/81.jpeg",  message: "I remember leading up to this trip being so excited to get to know you. To me at that time, you were mysterious but pure." },
    "82":  { password: "without", imgSrc: "img/82.jpeg",  message: "Mysterious but pure" },
    "83":  { password: "baseline", imgSrc: "img/83.jpeg",  message: "You channel so many different versions of me. Like this soft boy look" },
    "84":  { password: "cleanses", imgSrc: "img/84.jpeg",  message: "I actually grew up on these steps in Tarragona. Maybe one day I can show you that special place" },
    "85":  { password: "vanity", imgSrc: "img/85.jpeg",  message: "The most beautiful, stressed, hurried, loving moment captured in this picture" },
    "86":  { password: "dog", imgSrc: "img/86.jpeg",  message: "How to kill a Jaz + Eric" },
    "87":  { password: "smiles", imgSrc: "img/87.jpeg",  message: "Even high up in the trees I feel safe with you" },
    "88":  { password: "our", imgSrc: "img/88.jpeg",  message: "I think of this moment when I tell people about you and what an amazing, powerful, unique, inspiring person you are" },
    "89":  { password: "sure", imgSrc: "img/89.jpeg",  message: "Someday we will: have our own little furballs causing a ruckus" },
    "90":  { password: "deplete", imgSrc: "img/90.jpeg",  message: "We make such a good duo of duos with other couples. We've double dated so many times now!" },
    "91":  { password: "then", imgSrc: "img/91.jpeg",  message: "Love is: spending too much time figuring out how to squish rice into a perfect rectangle with you" },
    "92":  { password: "(thanks", imgSrc: "img/92.jpeg",  message: "For the future kids' room! Let's bring this album back" },
    "93":  { password: "a", imgSrc: "img/93.jpeg",  message: "Jaz + Eric, mole edition & the birth of Harold" },
    "94":  { password: "raisins", imgSrc: "img/94.jpeg",  message: "I'm glad my silliness didn't scare you off" },
    "95":  { password: "we'll", imgSrc: "img/95.jpeg",  message: "STL was and is home to us. I wonder how many homes we'll have at the end of the line" },
    "96":  { password: "limit", imgSrc: "img/96.jpeg",  message: "No reflection can hide from us!" },
    "97":  { password: "lleguen", imgSrc: "img/97.jpeg",  message: "Clair and Tom - our guardian angels" },
    "98":  { password: "humanos", imgSrc: "img/98.jpeg",  message: "May there be many more seasons of Chaco tan that bless our toesies" },
    "99":  { password: "never", imgSrc: "img/99.jpeg",  message: "....I'm sorry" },
    "100": { password: "to", imgSrc: "img/100.jpeg", message: "Eeee we're halfway to completion! To celebrate I wanted to take us back to where it all began. A memory I cherish beyond words" },
    "101": { password: "and", imgSrc: "img/101.jpeg", message: "My made up masculinity that states men can't get henna. But you showed me they can! And it leads to gigles" },
    "102": { password: "from", imgSrc: "img/102.jpeg", message: "Or was this our first bread?? I don't know but either way you're at the heart of my pan love" },
    "103": { password: "with", imgSrc: "img/103.jpeg", message: "there are now at least 3 horizontal pics in this collage, not representative of our time spent horizontal" },
    "104": { password: "be", imgSrc: "img/104.jpeg", message: "I was so inexplicably excited to take you on my little special hike. I want to share all that is special with you" },
    "105": { password: "bliss", imgSrc: "img/105.jpeg", message: "You seem to enjoy wee Eric pics so here's moderately wee Eric, featuring moderately wee Ryan" },
    "106": { password: "safe", imgSrc: "img/106.jpeg", message: "Stop it bee you're getting me all hot and bothered!" },
    "107": { password: "dreary", imgSrc: "img/107.jpeg", message: "A creative and representative reflection pic of us in our facetime time" },
    "108": { password: "so", imgSrc: "img/108.jpeg", message: "I met an astronaut! I still can't believe what a cool spin my career took. Thank you for supporting me to shoot for the stars" },
    "109": { password: "watching", imgSrc: "img/109.jpeg", message: "Another wee object I want in our future home. I love thinking about how our homes will only get better and better" },
    "110": { password: "inside", imgSrc: "img/110.jpeg", message: "An immensely senti pic that would not exist without you showing me that Casio's are cool" },
    "111": { password: "my", imgSrc: "img/111.jpeg", message: "Love is: noticing a bed of flowers just a little bit more than I would have if you weren't with me" },
    "112": { password: "means", imgSrc: "img/112.jpeg", message: "How do we get these guys at our wedding?" },
    "113": { password: "us", imgSrc: "img/113.jpeg", message: "there are now at least 3 foot pics in this collage, not representative of our time spent talking about feet" },
    "114": { password: "eyes", imgSrc: "img/114.jpeg", message: "What's your dream wedding cake? Mine is one that's actually delicious, featuring your strawberry frosting" },
    "115": { password: "always", imgSrc: "img/115.jpeg", message: "I love you in the snow, I love you in the cold, I love you in the sled, I love you in the bed" },
    "116": { password: "flores", imgSrc: "img/116.jpeg", message: "We look so baby here! Fresh and chipper but definitely gassed from the Boulder altitude" },
    "117": { password: "como", imgSrc: "img/117.jpeg", message: "There are so many ways we've grown together, one is being so good at just having a good time with anyone we meet. We don't miss!" },
    "118": { password: "la", imgSrc: "img/118.jpeg", message: "This gift was a goated, such a shame it didn't really work" },
    "119": { password: "que", imgSrc: "img/119.jpeg", message: "Someday we will: go spend our weekends watching our kids' sports games. Let's hope they don't play hockey" },
    "120": { password: "voy", imgSrc: "img/120.jpeg", message: "This day was one of our first experiences being fake 'parents' for Lina, I remember thinkg it was so fun to have a little one" },
    "121": { password: "are", imgSrc: "img/121.jpeg", message: "We are outdoors-y + city-y + beach-y + pumpkin patch-y. I love it all with you" },
    "122": { password: "just", imgSrc: "img/122.jpeg", message: "Sliving for Soleil?" },
    "123": { password: "because", imgSrc: "img/123.jpeg", message: "Thinking of all the cakes we'll have together from now until we're raisins is both terrifying and heartwarming" },
    "124": { password: "i've", imgSrc: "img/124.jpeg", message: "I wonder what level of bougie we'll settle at when we have monies? Broadmore bougie??" },
    "125": { password: "been", imgSrc: "img/125.jpeg", message: "Jaz + Eric cosplaying as bats" },
    "126": { password: "four", imgSrc: "img/126.jpeg", message: "family, cooking, love. Probably what my heaven looks like" },
    "127": { password: "we", imgSrc: "img/127.jpeg", message: "This is the next stage of heaven tho" },
    "128": { password: "left", imgSrc: "img/128.jpeg", message: "Hell? Heaven? Purgatory" }, 
    "129": { password: "waiting", imgSrc: "img/129.jpeg", message: "We haven't even truly begun our wedding era! So many on the horizon" },
    "130": { password: "pieces", imgSrc: "img/130.jpeg", message: "Sorry this is so blurry, it's hard to capture something moving at the speed of sound" },
    "131": { password: "that", imgSrc: "img/131.jpeg", message: "That moment after first watching arrival where we just laid out our entire life-views is such a central moment to me" },
    "132": { password: "breath", imgSrc: "img/132.jpeg", message: "A desire I have for us: is to be more assertive! Like we did to get this great table" },
    "133": { password: "las", imgSrc: "img/133.jpeg", message: "Watch out Jaz there's a bear behind that tree!" },
    "134": { password: "quieren", imgSrc: "img/134.jpeg", message: "Someday we will: have a little doggy join us on our van trip" },
    "135": { password: "baja", imgSrc: "img/135.jpeg", message: "I love concerts because I get to kiss you in public with no reservations" },
    "136": { password: "to", imgSrc: "img/136.jpeg", message: "Why didn't you tell me the middle part looked like this!?!" },
    "137": { password: "you", imgSrc: "img/137.jpeg", message: "One of your biggest green flags is how babies love you. Who can argue with what a baby thinks" },
    "138": { password: "for", imgSrc: "img/138.jpeg", message: "You lift me up, so I can stand on mountains" },
    "139": { password: "will", imgSrc: "img/139.jpeg", message: "I love all the creative unique passtimes we come up with, like this co-designing a dream home in the Bourgoise" },
    "140": { password: "make", imgSrc: "img/140.jpeg", message: "I'd recognize those toesies anywhere" },
    "141": { password: "day", imgSrc: "img/141.jpeg", message: "This relationship is sponsored by Jeff. He's been there for so many friendships, so many memories, and many still to come" },
    "142": { password: "the", imgSrc: "img/142.jpeg", message: "I love the aesthetic of this shot. I think photography is the number 1 hobby that I am manifesting for you" },
    "143": { password: "cook", imgSrc: "img/143.jpeg", message: "Remember? Your chicken wing sauce was the most popular! Chef Jaz" },
    "144": { password: "laugh", imgSrc: "img/144.jpeg", message: "Presenting: A short little series on all the homes we've lived in. There's so many! Starting with here and now" },
    "145": { password: "yourself", imgSrc: "img/145.jpeg", message: "The cave - this was where we met Jeff and you came to accept me for my boys-ness (sadly I have no pic of Noor and Allie's)" },
    "146": { password: "next", imgSrc: "img/146.jpeg", message: "The home with Alyssa which became our Covid hideaway, sad I got booted tho" },
    "147": { password: "grandchildren", imgSrc: "img/147.jpeg", message: "My home with Mr. Adnan to me seems like the epitome of our long distance time" },
    "148": { password: "swing", imgSrc: "img/148.jpeg", message: "With your parentals! Where I was scared to invite myself to live for a month which now in retrospect seems so silly" },
    "149": { password: "that", imgSrc: "img/149.jpeg", message: "I think this home counts hehe" },
    "150": { password: "look", imgSrc: "img/150.jpeg", message: "And the wee basement where I now reside that was your even your home alone for a lil bit during Step!" },
    "151": { password: "will", imgSrc: "img/151.jpeg", message: "By now you (hopefully) already said yes! So you might be asking well if the proposal already happened, what's the point of the puzzle? More pictures?" },
    "152": { password: "join", imgSrc: "img/152.jpeg", message: "Bad News Jaz. I'm out of pictures. Turns out 150 pictures was it, that's all we got to show from 6 years of dating"},
    "153": { password: "nothing", imgSrc: "img/153.jpeg", message: "150 moments captures just a blur of everything we’ve experienced together, but this puzzle isn’t just about the past" },
    "154": { password: "then", imgSrc: "img/154.jpeg", message: " :) " },
    "155": { password: "shared", imgSrc: "img/155.jpeg", message: "This puzzle is also about the future. The story still unwritten that now we get to steer together. So let me take you on a tour of some versions of what our marriage could look like" },
    "156": { password: "together", imgSrc: "img/156.jpeg", message: "The Orange future: The one where we get a dog before kids and then decide it's fun being DINKs for a while" },
    "157": { password: "brought", imgSrc: "img/157.jpeg", message: "We stay in Chicago for years, finding out that the big city life suits us well" },
    "158": { password: "was", imgSrc: "img/158.jpeg", message: "We're both busy with work but we still find time to visit a new country every single year" },
    "159": { password: "slow", imgSrc: "img/159.jpeg", message: "India took a toll on my GI system. At age 38 it's not as resiliant as it once was. This would be more fun with kids anyways we agree" },
    "160": { password: "intertwining", imgSrc: "img/160.jpeg", message: "In our late 30s we finally transform into MILF/DILF as our fashion sense has developed off the charts from all these years with dispolable income" },
    "161": { password: "our", imgSrc: "img/161.jpeg", message: "The 3 kids grow in very separate directions, but we don't mind flying all around the country visiting them" },
    "162": { password: "us", imgSrc: "img/162.jpeg", message: "We eventually find that setting down roots and having the kids and friends come visit us is how we want to live out our days, on our porch with the swinging chair" },
    "163": { password: "my", imgSrc: "img/163.jpeg", message: "" },
    "164": { password: "candles", imgSrc: "img/164.jpeg", message: "" },
    "165": { password: "warmth", imgSrc: "img/165.jpeg", message: "" },
    "166": { password: "built", imgSrc: "img/166.jpeg", message: "" },
    "167": { password: "softness", imgSrc: "img/167.jpeg", message: "" },
    "168": { password: "eternity", imgSrc: "img/168.jpeg", message: "" },
    "169": { password: "clusters", imgSrc: "img/169.jpeg", message: "" },
    "170": { password: "cutlery", imgSrc: "img/170.jpeg", message: "" },
    "171": { password: "well", imgSrc: "img/171.jpeg", message: "" },
    "172": { password: "and", imgSrc: "img/172.jpeg", message: "" },
    "173": { password: "live", imgSrc: "img/173.jpeg", message: "" },
    "174": { password: "still", imgSrc: "img/174.jpeg", message: "" },
    "175": { password: "steps", imgSrc: "img/175.jpeg", message: "" },
    "176": { password: "silences", imgSrc: "img/176.jpeg", message: "" },
    "177": { password: "aligned", imgSrc: "img/177.jpeg", message: "" },
    "178": { password: "that", imgSrc: "img/178.jpeg", message: "" },
    "179": { password: "accept", imgSrc: "img/179.jpeg", message: "" },
    "180": { password: "you", imgSrc: "img/180.jpeg", message: "" },
    "181": { password: "all", imgSrc: "img/181.jpeg", message: "" },
    "182": { password: "in", imgSrc: "img/182.jpeg", message: "" },
    "183": { password: "wrapped", imgSrc: "img/183.jpeg", message: "" },
    "184": { password: "apart", imgSrc: "img/184.jpeg", message: "" },
    "185": { password: "on", imgSrc: "img/185.jpeg", message: "" },
    "186": { password: "shoelace", imgSrc: "img/186.jpeg", message: "" },
    "187": { password: "are", imgSrc: "img/187.jpeg", message: "" },
    "188": { password: "a", imgSrc: "img/188.jpeg", message: "" },
    "189": { password: "and", imgSrc: "img/189.jpeg", message: "" },
    "190": { password: "everything", imgSrc: "img/190.jpeg", message: "" },
    "191": { password: "face", imgSrc: "img/191.jpeg", message: "" },
    "192": { password: "was", imgSrc: "img/192.jpeg", message: "" },
    "193": { password: "our", imgSrc: "img/193.jpeg", message: "" },
    "194": { password: "a", imgSrc: "img/194.jpeg", message: "All these futures I imagine for us hold their own beauty, fear, hope, and apprehension" },
    "195": { password: "of", imgSrc: "img/195.jpeg", message: "But thinking hard about what our future together might look like still left me strangely peaceful" },
    "196": { password: "foundation", imgSrc: "img/196.jpeg", message: "Because I realized there's not a single future I can imagine where I am not glad I asked you the question" },
    "197": { password: "will", imgSrc: "img/197.jpeg", message: "Will" },
    "198": { password: "you", imgSrc: "img/198.jpeg", message: "You" },
    "199": { password: "marry", imgSrc: "img/199.jpeg", message: "Marry" },
    "200": { password: "me", imgSrc: "img/200.jpeg", message: "Me" },

  };

  const STORAGE_KEY = 'unlockedTiles';
  const TILE_SEQUENCE_CONFIG = {
    triggerTileId: '154',
    startId: 1,
    endId: 150,
    baseDurationMs: 1500,
    decayRate: 0.98,
    minDurationMs: 120,
    nextStartId: 155,
    nextEndId: 200
  };

  function loadUnlockedSet() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return new Set();
      const arr = JSON.parse(raw);
      return new Set(Array.isArray(arr) ? arr : []);
    } catch (_) { return new Set(); }
  }

  function saveUnlockedSet(set) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(set)));
    } catch (_) { /* ignore quota */ }
  }

  const unlocked = loadUnlockedSet();
  const dragState = { tile: null };
  let tilesContainer = null;
  let tileMetricsCache = null;
  let globalBypass = false;
  let tileScale = 1;
  let sequenceModalCache = null;
  let sequenceRunToken = 0;
  const modalTileCache = {};
  let nextTileCursor = TILE_SEQUENCE_CONFIG.nextStartId;

  function enableTileDragging(tileEl) {
    if (!tileEl || tileEl.dataset.dragReady === '1') return;
    tileEl.dataset.dragReady = '1';
    tileEl.setAttribute('draggable', 'true');
    tileEl.addEventListener('dragstart', handleTileDragStart);
    tileEl.addEventListener('dragend', handleTileDragEnd);
  }

  function handleTileDragStart(event) {
    const tile = event.currentTarget;
    if (event.target && event.target.closest && event.target.closest('input, textarea, button, form')) {
      event.preventDefault();
      return;
    }
    dragState.tile = tile;
    tile.classList.add('is-dragging');
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      try {
        event.dataTransfer.setData('text/plain', tile.id || 'tile');
      } catch (_) {
        /* Firefox may throw if dataTransfer is unset */
      }
    }
  }

  function handleTileDragEnd() {
    if (dragState.tile) {
      dragState.tile.classList.remove('is-dragging');
    }
    dragState.tile = null;
  }

  function handleContainerDragOver(event) {
    if (!dragState.tile || !tilesContainer) return;
    event.preventDefault();
    moveDraggedTile(event);
  }

  function handleContainerDrop(event) {
    if (!dragState.tile || !tilesContainer) return;
    event.preventDefault();
    moveDraggedTile(event);
    handleTileDragEnd();
  }

  function moveDraggedTile(event) {
    if (!dragState.tile || !tilesContainer) return;
    const hovered = event.target && event.target.closest ? event.target.closest('.tile') : null;
    const fromPoint = document.elementFromPoint
      ? document.elementFromPoint(event.clientX, event.clientY)
      : null;
    const viaPoint = fromPoint ? fromPoint.closest('.tile') : null;
    const target = (hovered && hovered !== tilesContainer ? hovered : null) || viaPoint;

    if (target && target !== dragState.tile && target.parentNode === tilesContainer) {
      const referenceNode = resolveDropReference(target, event.clientX, event.clientY);
      if (referenceNode !== dragState.tile) {
        tilesContainer.insertBefore(dragState.tile, referenceNode || null);
      }
      return;
    }

    if (!target) {
      const fallbackRef = getReferenceFromPoint(event.clientX, event.clientY);
      if (fallbackRef === dragState.tile) return;
      tilesContainer.insertBefore(dragState.tile, fallbackRef || null);
    }
  }

  function resolveDropReference(targetTile, clientX, clientY) {
    if (!targetTile) return null;
    const rect = targetTile.getBoundingClientRect();
    const dx = clientX - (rect.left + rect.width / 2);
    const dy = clientY - (rect.top + rect.height / 2);
    const preferHorizontal = Math.abs(dx) > Math.abs(dy);
    const insertAfter = preferHorizontal ? dx > 0 : dy > 0;
    return insertAfter ? targetTile.nextElementSibling : targetTile;
  }

  function getReferenceFromPoint(clientX, clientY) {
    if (!tilesContainer) return null;
    const children = tilesContainer.children;
    if (!children.length) return null;
    const rect = tilesContainer.getBoundingClientRect();
    const metrics = getTileMetrics();
    const localX = Math.max(0, clientX - rect.left);
    const localY = Math.max(0, clientY - rect.top);
    const col = Math.max(
      0,
      Math.min(Math.floor(localX / metrics.width), Math.max(0, metrics.columns - 1))
    );
    const totalRows = Math.ceil(children.length / metrics.columns);
    const row = Math.max(0, Math.min(Math.floor(localY / metrics.height), totalRows));
    const index = Math.min(row * metrics.columns + col, children.length);
    return children[index] || null;
  }

  function getTileMetrics() {
    if (tileMetricsCache) return tileMetricsCache;
    tileMetricsCache = computeTileMetrics();
    return tileMetricsCache;
  }

  function computeTileMetrics() {
    if (!tilesContainer) return { width: 1, height: 1, columns: 1 };
    const children = tilesContainer.children;
    if (!children.length) return { width: 1, height: 1, columns: 1 };
    const firstRect = children[0].getBoundingClientRect();
    const tileHeight = firstRect.height || 1;
    const firstTop = firstRect.top;
    const threshold = Math.max(1, tileHeight / 2);
    let columns = 0;
    for (const child of children) {
      const childRect = child.getBoundingClientRect();
      if (Math.abs(childRect.top - firstTop) <= threshold) {
        columns++;
      } else {
        break;
      }
    }
    return {
      width: firstRect.width || 1,
      height: tileHeight,
      columns: Math.max(1, columns)
    };
  }

  window.addEventListener('resize', () => {
    tileMetricsCache = null;
  });

  // Build DOM structure for a tile: .tile__inner with front/back + inline unlock overlay
  function scaffoldTile(tileEl) {
    if (!tileEl) return;
    if (tileEl.dataset.scaffolded === '1') return;
    tileEl.dataset.scaffolded = '1';

    const tileId = tileEl.dataset.tileId || tileEl.id;
    const cfg = TILE_CONFIG[tileId] || {};

    // Capture existing label (the number)
    const labelNode = tileEl.querySelector('.tile__label');
    const labelText = labelNode ? labelNode.textContent : (tileEl.textContent || tileId);

    // Create inner + faces
    const inner = document.createElement('div');
    inner.className = 'tile__inner';

    const locked = document.createElement('div');
    locked.className = 'tile__locked';
    if (labelNode) {
      locked.appendChild(labelNode);
    } else {
      const span = document.createElement('span');
      span.className = 'tile__label';
      span.textContent = labelText;
      locked.appendChild(span);
    }

    const front = document.createElement('div');
    front.className = 'tile__front';

    const back = document.createElement('div');
    back.className = 'tile__back';

    const img = document.createElement('img');
    img.className = 'tile__img';
    img.alt = labelText || id;
    img.src = cfg.imgSrc || 'img/placeholder.jpg';
    front.appendChild(img);

    const frontNum = document.createElement('div');
    frontNum.className = 'tile__frontNum';
    frontNum.textContent = tileId;
    front.appendChild(frontNum);

    const messageBack = document.createElement('div');
    messageBack.className = 'tile__message';
    messageBack.textContent = cfg.message || `Tile ${tileId}`;
    back.appendChild(messageBack);

    inner.appendChild(locked);
    inner.appendChild(back);
    inner.appendChild(front);
    tileEl.textContent = '';
    tileEl.appendChild(inner);

    // Inline unlock overlay (hidden until clicked)
    const overlay = document.createElement('div');
    overlay.className = 'tile__unlock';
    overlay.innerHTML = `
      <form autocomplete="off">
        <input
          type="password"
          name="unlock"
          autocomplete="new-password"
          autocapitalize="off"
          autocorrect="off"
          spellcheck="false"
          data-lpignore="true"
          data-1p-ignore="true"
          data-bwignore="true"
        />
      </form>
    `;
    tileEl.appendChild(overlay);

    overlay.addEventListener('click', (e) => e.stopPropagation());
    overlay.querySelector('form').addEventListener('click', (e) => e.stopPropagation());
    overlay.querySelector('input[name="unlock"]').addEventListener('click', (e) => e.stopPropagation());

    // If previously unlocked, flip immediately
    if (unlocked.has(tileId)) {
      tileEl.classList.add('is-unlocked');
      tileEl.classList.remove('is-locked');
      // prevent hover overlay on already-unlocked tiles
      overlay.style.display = 'none';
    }

    // Click behavior (use event, ignore overlay clicks)
    tileEl.addEventListener('click', (ev) => {
      // If click originated inside the unlock overlay, do nothing
      if (ev.target.closest('.tile__unlock')) return;

      if (tileEl.classList.contains('is-unlocked')) {
        if (tileId === TILE_SEQUENCE_CONFIG.triggerTileId && !tileEl.classList.contains('tile--modal')) {
          playTileSequence();
        }
        tileEl.classList.toggle('is-flipped');
        return;
      } else {
        // Locked: reveal inline prompt
        overlay.classList.add('is-visible');
        const input = overlay.querySelector('input[name="unlock"]');
        if (input) {
          input.value = '';
          input.focus();
        }
      }
    });

    // Submit handler for inline password
    const form = overlay.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[name="unlock"]');
      const val = (input?.value || '').trim();
      const expected = (typeof cfg.password === 'string') ? cfg.password : null;
      if (expected !== null && val === expected) {
        tileEl.classList.add('is-unlocked');
        tileEl.classList.remove('is-locked');
        overlay.classList.remove('is-visible');
        overlay.style.display = 'none';
        unlocked.add(tileId);
        saveUnlockedSet(unlocked);
        if (tileEl.dataset.wasLocked === '1') {
          delete tileEl.dataset.wasLocked;
          tileEl.removeAttribute('data-was-locked');
        }
        propagateUnlockToOriginal(tileId, tileEl);
        maybePlayTileSequence(tileId, tileEl);
      } else {
        if (expected === null) {
          // Tile not configured: provide feedback
          input.value = '';
          alert(`This tile ("${tileId}") is not yet configured with a password.`);
          overlay.classList.remove('is-visible');
          return;
        }
        // wrong password feedback
        form.style.animation = 'shake 180ms linear 0s 2';
        setTimeout(() => { form.style.animation = ''; }, 400);
        input?.select();
      }
    });

    enableTileDragging(tileEl);
  }

  // Lightweight modal for messages
  function getOrCreateModal() {
    let modal = document.getElementById('tile-modal');
    if (modal) return modal;
    modal = document.createElement('div');
    modal.id = 'tile-modal';
    modal.style.position = 'fixed';
    modal.style.inset = '0';
    modal.style.display = 'none';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.background = 'rgba(0,0,0,0.45)';
    modal.innerHTML = `
      <div style="max-width: 520px; background:#fff; padding:16px 18px; border-radius:8px; box-shadow:0 8px 24px rgba(0,0,0,0.35);">
        <div id="tile-modal-body" style="white-space:pre-wrap; line-height:1.3;"></div>
        <div style="margin-top:12px; text-align:right;">
          <button id="tile-modal-close" style="border:0; background:#222; color:#fff; padding:6px 10px; border-radius:4px; cursor:pointer;">Close</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
      if (e.target.id === 'tile-modal' || e.target.id === 'tile-modal-close') {
        modal.style.display = 'none';
      }
    });
    return modal;
  }

  function showMessage(text) {
    const modal = getOrCreateModal();
    const body = document.getElementById('tile-modal-body');
    body.textContent = text || '';
    modal.style.display = 'flex';
  }

  function propagateUnlockToOriginal(tileId, sourceEl) {
    if (!tileId) return;
    const original = document.getElementById(tileId);
    if (!original || original === sourceEl) return;
    if (!original.dataset.scaffolded) {
      scaffoldTile(original);
    }
    original.classList.add('is-unlocked');
    original.classList.remove('is-locked');
    const overlay = original.querySelector('.tile__unlock');
    if (overlay) {
      overlay.classList.remove('is-visible');
      overlay.style.display = 'none';
    }
  }

  function sequenceFrameDuration(index) {
    const ms = TILE_SEQUENCE_CONFIG.baseDurationMs * Math.pow(TILE_SEQUENCE_CONFIG.decayRate, index);
    return Math.max(TILE_SEQUENCE_CONFIG.minDurationMs, ms);
  }

  function buildSequenceFrames() {
    const frames = [];
    for (let i = TILE_SEQUENCE_CONFIG.startId; i <= TILE_SEQUENCE_CONFIG.endId; i++) {
      const id = String(i);
      const cfg = TILE_CONFIG[id];
      if (cfg && cfg.imgSrc) {
        frames.push({ id, src: cfg.imgSrc });
      }
    }
    return frames;
  }

  function hideSequenceModal() {
    sequenceRunToken += 1;
    if (sequenceModalCache?.overlay) {
      sequenceModalCache.overlay.style.display = 'none';
    }
  }

  function getOrCreateSequenceModal() {
    if (sequenceModalCache) return sequenceModalCache;
    const overlay = document.createElement('div');
    overlay.id = 'tile-sequence-modal';
    Object.assign(overlay.style, {
      position: 'fixed',
      inset: '0',
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0,0.65)',
      zIndex: '1200',
      padding: '16px'
    });

    const shell = document.createElement('div');
    Object.assign(shell.style, {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      padding: '16px',
      background: '#0f0f11',
      borderRadius: '14px',
      boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
      border: '1px solid rgba(255,255,255,0.08)'
    });

    const frame = document.createElement('div');
    Object.assign(frame.style, {
      width: 'min(90vw, 512.5px)',
      aspectRatio: '1 / 1',
      background: 'radial-gradient(circle at 30% 30%, rgba(15, 15, 17,1), rgba(15, 15, 17,1))',
      borderRadius: '12px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    });

    const contentHost = document.createElement('div');
    Object.assign(contentHost.style, {
      width: '85%',
      height: '85%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    });

    const img = document.createElement('img');
    img.alt = 'Tile sequence';
    Object.assign(img.style, {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    });

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.textContent = 'Close';
    Object.assign(closeBtn.style, {
      position: 'absolute',
      top: '10px',
      left: '10px',
      border: '0',
      background: 'rgba(255,255,255,0.08)',
      color: '#f3f3f3',
      padding: '8px 10px',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: '600',
      letterSpacing: '0.02em'
    });

    const controls = document.createElement('div');
    Object.assign(controls.style, {
      position: 'absolute',
      top: '10px',
      right: '10px',
      display: 'flex',
      gap: '8px'
    });

    const replayBtn = document.createElement('button');
    replayBtn.type = 'button';
    replayBtn.textContent = 'Replay';
    Object.assign(replayBtn.style, {
      border: '0',
      background: 'rgba(255,255,255,0.1)',
      color: '#fefefe',
      padding: '8px 10px',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: '600'
    });

    const nextTileBtn = document.createElement('button');
    nextTileBtn.type = 'button';
    nextTileBtn.textContent = 'Next Tile';
    Object.assign(nextTileBtn.style, {
      border: '0',
      background: '#f5a623',
      color: '#0f0f11',
      padding: '8px 10px',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: '700'
    });

    closeBtn.addEventListener('click', hideSequenceModal);
    replayBtn.addEventListener('click', () => {
      sequenceRunToken += 1;
      setSequenceContent(img);
      playTileSequence();
    });
    nextTileBtn.addEventListener('click', showNextTileInModal);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        hideSequenceModal();
      }
    });

    controls.appendChild(replayBtn);
    controls.appendChild(nextTileBtn);
    contentHost.appendChild(img);
    frame.appendChild(contentHost);
    shell.appendChild(controls);
    shell.appendChild(closeBtn);
    shell.appendChild(frame);
    overlay.appendChild(shell);
    document.body.appendChild(overlay);
    sequenceModalCache = { overlay, imgEl: img, contentHost };
    return sequenceModalCache;
  }

  function setSequenceContent(node) {
    const modal = getOrCreateSequenceModal();
    modal.contentHost.innerHTML = '';
    if (node) {
      modal.contentHost.appendChild(node);
    }
  }

  function getModalTile(tileId) {
    const idStr = String(tileId);
    if (modalTileCache[idStr]) return modalTileCache[idStr];
    const tile = document.createElement('div');
    tile.className = 'tile tile--modal';
    tile.dataset.tileId = idStr;
    tile.id = `modal-tile-${idStr}`;
    const label = document.createElement('span');
    label.className = 'tile__label';
    label.textContent = idStr;
    tile.appendChild(label);
    scaffoldTile(tile);
    tile.removeAttribute('draggable');
    tile.style.cursor = 'default';
    modalTileCache[idStr] = tile;
    return tile;
  }

  function getNextSequentialTileId() {
    const start = Number(TILE_SEQUENCE_CONFIG.nextStartId) || 1;
    const end = Number(TILE_SEQUENCE_CONFIG.nextEndId) || start;
    const max = Math.max(start, end);
    if (!Number.isInteger(nextTileCursor)) {
      nextTileCursor = start;
    }
    let candidate = Math.min(Math.max(nextTileCursor, start), max);
    while (candidate <= max && !TILE_CONFIG[String(candidate)]) {
      candidate += 1;
    }
    if (candidate > max) {
      candidate = max;
    }
    nextTileCursor = candidate >= max ? max + 1 : candidate + 1;
    return String(candidate);
  }

  function showNextTileInModal() {
    sequenceRunToken += 1;
    const modal = getOrCreateSequenceModal();
    modal.overlay.style.display = 'flex';
    const tileView = getModalTile(getNextSequentialTileId());
    setSequenceContent(tileView);
  }

  async function playTileSequence() {
    const frames = buildSequenceFrames();
    if (!frames.length) return;
    const modal = getOrCreateSequenceModal();
    setSequenceContent(modal.imgEl);
    modal.overlay.style.display = 'flex';
    sequenceRunToken += 1;
    const runId = sequenceRunToken;
    for (let i = 0; i < frames.length; i++) {
      if (runId !== sequenceRunToken) return;
      const frame = frames[i];
      modal.imgEl.src = frame.src;
      modal.imgEl.alt = `Tile ${frame.id}`;
      const delay = sequenceFrameDuration(i);
      await sleep(delay);
    }
  }

  function maybePlayTileSequence(tileId, tileEl) {
    if (tileId === TILE_SEQUENCE_CONFIG.triggerTileId && !(tileEl && tileEl.classList.contains('tile--modal'))) {
      playTileSequence();
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function flipAllToPictureSide() {
    document.querySelectorAll('.tile').forEach((tile) => {
      const overlay = tile.querySelector('.tile__unlock');
      overlay?.classList.remove('is-visible');
      if (tile.classList.contains('is-locked')) return;
      tile.classList.remove('is-flipped');
    });
  }

  function setTileScale(scale) {
    const clamped = Math.min(1.3, Math.max(0.01, Number(scale) || 1));
    tileScale = clamped;
    document.documentElement.style.setProperty('--tile-scale', clamped);
    const percentLabel = document.getElementById('tile-scale-value');
    if (percentLabel) {
      percentLabel.textContent = `${Math.round(clamped * 100)}%`;
    }
    const slider = document.getElementById('tile-scale');
    if (slider && slider !== document.activeElement) {
      slider.value = `${Math.round(clamped * 100)}`;
    }
    tileMetricsCache = null;
  }

  function handleScaleInput(event) {
    const percent = Number(event.target.value);
    const scale = (isNaN(percent) ? 100 : percent) / 100;
    setTileScale(scale);
  }

  function applyGlobalBypassState() {
    document.querySelectorAll('.tile').forEach((tile) => {
      const overlay = tile.querySelector('.tile__unlock');
      overlay?.classList.remove('is-visible');
      tile.classList.remove('is-flipped');
      if (globalBypass) {
        if (!tile.dataset.wasLocked && tile.classList.contains('is-locked')) {
          tile.dataset.wasLocked = '1';
        }
        tile.classList.remove('is-locked');
        tile.classList.add('is-unlocked');
      } else if (tile.dataset.wasLocked === '1') {
        if (unlocked.has(tile.id)) {
          delete tile.dataset.wasLocked;
          tile.removeAttribute('data-was-locked');
          return;
        }
        tile.classList.add('is-locked');
        tile.classList.remove('is-unlocked');
        delete tile.dataset.wasLocked;
        tile.removeAttribute('data-was-locked');
      }
    });
  }

  function updateBypassButton() {
    const tempBtn = document.getElementById('temp-unlock');
    if (!tempBtn) return;
    tempBtn.textContent = globalBypass ? 'Restore Locks' : 'Temporarily Unlock All';
    tempBtn.setAttribute('aria-pressed', globalBypass ? 'true' : 'false');
  }

  function setGlobalBypass(enabled) {
    globalBypass = !!enabled;
    applyGlobalBypassState();
    updateBypassButton();
  }

  function toggleGlobalBypass() {
    setGlobalBypass(!globalBypass);
  }

  function wireControls() {
    const showPicturesBtn = document.getElementById('show-pictures');
    if (showPicturesBtn) {
      showPicturesBtn.addEventListener('click', flipAllToPictureSide);
    }
    const tempUnlockBtn = document.getElementById('temp-unlock');
    if (tempUnlockBtn) {
      tempUnlockBtn.addEventListener('click', toggleGlobalBypass);
    }
    updateBypassButton();

    const scaleSlider = document.getElementById('tile-scale');
    if (scaleSlider) {
      scaleSlider.addEventListener('input', handleScaleInput);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    tilesContainer = document.getElementById('tiles');
    if (tilesContainer) {
      tilesContainer.addEventListener('dragover', handleContainerDragOver);
      tilesContainer.addEventListener('drop', handleContainerDrop);
      tileMetricsCache = null;
    }
    wireControls();
    const initialScale = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--tile-scale')
    );
    if (!Number.isNaN(initialScale)) {
      setTileScale(initialScale);
    } else {
      setTileScale(1);
    }
    document.querySelectorAll('.tile').forEach(scaffoldTile);
  });
})();
