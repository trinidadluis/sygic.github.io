window.onload = function () {
    var apiKey = getApiKey();

    //initialization of sygic maps
    var map = L.map("map");
    map.setView([48.146864, 17.105868], 13);
    var sygicTileLayer = L.TileLayer.sygic(apiKey);
    L.layerGroup([sygicTileLayer]).addTo(map);

    var exampleInput = {
        coordinates: ["48.29444,17.50047", "48.2948,17.50143", "48.29651,17.50641", "48.29778,17.51044", "48.29824,17.51192", "48.29998,17.51851", "48.30058,17.52107", "48.30113,17.52365", "48.30165,17.52623", "48.30253,17.53132", "48.30324,17.53587", "48.3037,17.53847", "48.30477,17.54425", "48.30529,17.54675", "48.30617,17.55101", "48.30677,17.55376", "48.3073,17.55603", "48.30784,17.55828", "48.30852,17.56094", "48.30887,17.56225", "48.30979,17.56573", "48.3113,17.57103", "48.31143,17.57149", "48.3127,17.57562", "48.31372,17.57878", "48.31435,17.58068", "48.31528,17.58346", "48.31562,17.5844", "48.3176,17.58991", "48.31776,17.59036", "48.32052,17.5973", "48.32109,17.59866", "48.32129,17.5991", "48.32168,17.6", "48.32857,17.61457", "48.32865,17.61513", "48.33372,17.62408", "48.33482,17.62599", "48.3359,17.62788", "48.33703,17.62978", "48.33821,17.63167", "48.33921,17.63333", "48.34063,17.63566", "48.34155,17.63726", "48.34288,17.63961", "48.34402,17.64164", "48.34514,17.64361", "48.34621,17.64553", "48.34728,17.6476", "48.34834,17.6496", "48.34941,17.65161", "48.3504,17.65378", "48.35138,17.65588", "48.35219,17.65763", "48.35336,17.66058", "48.35499,17.66512", "48.35588,17.66778", "48.35672,17.67042", "48.35736,17.67251", "48.35828,17.67566", "48.35915,17.67878", "48.35976,17.68126", "48.36035,17.68379", "48.36081,17.6858", "48.36141,17.68836", "48.3621,17.6914", "48.36257,17.69344", "48.36332,17.69646", "48.3638,17.69845", "48.36442,17.7009", "48.36511,17.70339", "48.36594,17.70634", "48.36671,17.70876", "48.36739,17.71076", "48.36825,17.71316", "48.36917,17.7155", "48.37017,17.71781", "48.37127,17.72009", "48.37355,17.72432", "48.37379,17.72475", "48.37506,17.72678", "48.37625,17.72862", "48.37727,17.73007", "48.37887,17.7321", "48.38026,17.73376", "48.38167,17.73532", "48.38319,17.73687", "48.38475,17.73829", "48.38631,17.73965", "48.38794,17.74095", "48.39299,17.74421", "48.39469,17.74506", "48.39636,17.74581", "48.3977,17.74633", "48.39974,17.74702", "48.40143,17.74747", "48.40314,17.74781", "48.4048,17.74804", "48.40654,17.74825", "48.40824,17.74829", "48.40994,17.74824", "48.41164,17.74816", "48.41333,17.74799", "48.41504,17.74773", "48.41639,17.74745", "48.41842,17.74688", "48.4201,17.74631", "48.42175,17.74568", "48.4234,17.74501", "48.42505,17.74433", "48.42671,17.74365", "48.42838,17.74301", "48.43004,17.7424", "48.43172,17.74187", "48.4334,17.7413", "48.43508,17.74083", "48.43671,17.74035", "48.43834,17.73999", "48.44008,17.73969", "48.44176,17.73936", "48.44304,17.73919", "48.44499,17.73901", "48.44633,17.73895", "48.44799,17.73889", "48.44991,17.73888", "48.45144,17.73885", "48.45302,17.73895", "48.45463,17.73909", "48.45622,17.73931", "48.45752,17.73951", "48.45914,17.73974", "48.46106,17.74003", "48.46262,17.74037", "48.46418,17.74084", "48.46575,17.7413", "48.46694,17.7416", "48.4688,17.74222", "48.47033,17.74274", "48.47186,17.74333", "48.47337,17.74392", "48.47489,17.74459", "48.47644,17.74536", "48.478,17.74617", "48.47954,17.74701", "48.48108,17.7479", "48.4826,17.7488", "48.48382,17.74957", "48.48533,17.75057", "48.49003,17.75408", "48.49153,17.75533", "48.49306,17.75666", "48.49459,17.75803", "48.49613,17.75938", "48.49766,17.76074", "48.49923,17.76207", "48.50018,17.76284", "48.50241,17.76466", "48.504,17.76591", "48.50559,17.76711", "48.50717,17.76829", "48.50848,17.76927", "48.51049,17.77066", "48.51187,17.77157", "48.51396,17.77295", "48.51534,17.77384", "48.51742,17.77511", "48.51916,17.77614", "48.52092,17.77713", "48.52234,17.7779", "48.52445,17.77897", "48.52794,17.78065", "48.52968,17.78144", "48.5314,17.78221", "48.53307,17.7829", "48.53442,17.78344", "48.53646,17.7842", "48.53817,17.78481", "48.5399,17.78537", "48.5417,17.78593", "48.54341,17.78642", "48.54477,17.7868", "48.54678,17.78733", "48.54842,17.78768", "48.55005,17.78803", "48.5517,17.78842", "48.55332,17.78876", "48.55462,17.78898", "48.55658,17.78928", "48.55822,17.7895", "48.55982,17.78965", "48.56145,17.78981", "48.56308,17.78995", "48.56471,17.79005", "48.56637,17.79004", "48.56805,17.79005", "48.56974,17.7901", "48.57147,17.79009", "48.57314,17.78999", "48.57484,17.78989", "48.57652,17.78982", "48.5783,17.78988", "48.58007,17.7898", "48.58186,17.78973", "48.5836,17.78967", "48.58502,17.7897", "48.58782,17.7899", "48.58884,17.79005", "48.59056,17.79025", "48.59194,17.79042", "48.59403,17.79083", "48.59543,17.79117", "48.59749,17.79172", "48.59922,17.79222", "48.60093,17.79278", "48.60263,17.79343", "48.604,17.79399", "48.60602,17.79492", "48.60768,17.79575", "48.60934,17.79661", "48.61098,17.79752", "48.61259,17.79849", "48.61419,17.79957", "48.61583,17.80065", "48.61747,17.80175", "48.6191,17.80286", "48.62075,17.80391", "48.62209,17.80464", "48.62416,17.80567", "48.62594,17.80638", "48.62771,17.80704", "48.62948,17.80773", "48.63127,17.80851", "48.63299,17.80946", "48.63468,17.81057", "48.6363,17.81182", "48.63785,17.81319", "48.63932,17.81465", "48.64075,17.81621", "48.64211,17.81788", "48.64338,17.81976", "48.64459,17.82167", "48.64573,17.82364", "48.64676,17.8258", "48.64764,17.82807", "48.64829,17.83049", "48.6488,17.83305", "48.64907,17.83513", "48.64926,17.83826", "48.64927,17.84086", "48.64928,17.84339", "48.64943,17.84587", "48.64974,17.84834", "48.65016,17.85079", "48.65184,17.85627", "48.65238,17.85751", "48.65338,17.85945", "48.65449,17.86129", "48.65544,17.86265", "48.65694,17.86456", "48.65824,17.86604", "48.65957,17.86737", "48.66094,17.86857", "48.66237,17.86962", "48.66355,17.87037", "48.66539,17.87131", "48.66696,17.87197", "48.66857,17.87248", "48.67023,17.87285", "48.67187,17.87307", "48.67354,17.87309", "48.6752,17.87306", "48.67688,17.87299", "48.67853,17.87291", "48.67986,17.87287", "48.68187,17.87283", "48.68353,17.87276", "48.68584,17.87264", "48.68681,17.87258", "48.68847,17.87254", "48.69044,17.87245", "48.6918,17.87243", "48.69348,17.87237", "48.69516,17.87231", "48.69683,17.87226", "48.69852,17.87223", "48.70018,17.87211", "48.70187,17.87205", "48.70355,17.87197", "48.70523,17.87195", "48.70691,17.87203", "48.70855,17.87225", "48.71053,17.87275", "48.71216,17.87322", "48.7138,17.87362", "48.71514,17.87395", "48.71678,17.87426", "48.71838,17.87456", "48.7203,17.87465", "48.72193,17.8746", "48.72325,17.87439", "48.72559,17.87369", "48.72692,17.87304", "48.72819,17.8723", "48.72973,17.87117", "48.73146,17.86953", "48.73281,17.86796", "48.73406,17.86633", "48.7354,17.86479", "48.73684,17.8634", "48.73836,17.86225", "48.73992,17.86132", "48.7412,17.86075", "48.7435,17.86008", "48.7445,17.85991", "48.74617,17.85991", "48.74819,17.86016", "48.74983,17.86056", "48.75153,17.86112", "48.75323,17.86181", "48.75492,17.86259", "48.75625,17.8633", "48.75818,17.86447", "48.75973,17.86556", "48.76123,17.8667", "48.76236,17.86778", "48.76408,17.86945", "48.7652,17.87063", "48.7669,17.87244", "48.76837,17.87392", "48.76962,17.87503", "48.77163,17.87617", "48.77337,17.87679", "48.77513,17.87727", "48.77686,17.87778", "48.77853,17.87849", "48.78012,17.8793", "48.78163,17.88026", "48.78312,17.88135", "48.78452,17.88258", "48.78588,17.88388", "48.78719,17.88522", "48.7886,17.88649", "48.7901,17.88767", "48.79168,17.88855", "48.79332,17.88921", "48.79499,17.88987", "48.79663,17.89086", "48.79809,17.89218", "48.7991,17.89347", "48.80041,17.8955", "48.8013,17.89736", "48.80213,17.8995", "48.80314,17.90147", "48.80431,17.90321", "48.80567,17.90459", "48.80714,17.90562", "48.8087,17.9063", "48.81032,17.90658", "48.81199,17.90663", "48.81331,17.90667", "48.81535,17.90675", "48.817,17.90718", "48.81861,17.90787", "48.82008,17.90911", "48.8214,17.91062", "48.8226,17.91239", "48.82372,17.91425", "48.82486,17.91609", "48.82598,17.9179", "48.82715,17.91979", "48.82831,17.92166", "48.82946,17.92353", "48.83038,17.92504", "48.83179,17.92726", "48.83296,17.92914", "48.83412,17.931", "48.83525,17.93279", "48.83644,17.93456", "48.83771,17.93624", "48.83898,17.93787", "48.84028,17.93941", "48.84162,17.94092", "48.84299,17.94232", "48.84438,17.94363", "48.84609,17.94513", "48.84722,17.94613", "48.84868,17.94724", "48.85016,17.94832", "48.85163,17.94944", "48.85311,17.95052", "48.85426,17.95145", "48.85595,17.95292", "48.85731,17.95428", "48.85836,17.95542", "48.85988,17.9573", "48.86115,17.95892", "48.86241,17.96052", "48.86365,17.96211", "48.8649,17.96372", "48.86614,17.96532", "48.86739,17.96693", "48.86842,17.96814", "48.86996,17.96988", "48.87131,17.97124", "48.87268,17.97247", "48.87404,17.97372", "48.87535,17.97508", "48.87663,17.97649", "48.87791,17.97787", "48.87927,17.9791", "48.8804,17.97991", "48.88219,17.98089", "48.88372,17.98142", "48.88526,17.98167", "48.88685,17.98179", "48.88844,17.98173", "48.89009,17.98169", "48.89172,17.98182", "48.89333,17.98212", "48.89493,17.98264", "48.89651,17.98327", "48.89801,17.98421", "48.89948,17.98519", "48.90089,17.98642", "48.90221,17.98789", "48.90348,17.98944", "48.90463,17.9911", "48.90565,17.99284", "48.90665,17.99466", "48.90753,17.9966", "48.90833,17.99864", "48.90904,18.0008", "48.90964,18.00308", "48.91014,18.00541", "48.91053,18.00781", "48.91079,18.01023", "48.91096,18.01268", "48.91118,18.01513", "48.91149,18.01753", "48.91194,18.01992", "48.91241,18.02222", "48.91287,18.02456", "48.91334,18.02692", "48.9137,18.02934", "48.9138,18.03033", "48.91388,18.03428", "48.91367,18.03667", "48.91341,18.03905", "48.91326,18.04146", "48.9133,18.04385", "48.91343,18.04571", "48.91356,18.04831", "48.91357,18.05051", "48.91342,18.05267", "48.91331,18.05476", "48.91331,18.05639", "48.91355,18.05839", "48.91415,18.06067", "48.91486,18.06243", "48.91579,18.06398", "48.91686,18.0653", "48.91797,18.06648", "48.92002,18.06905", "48.92079,18.0707", "48.9215,18.07253", "48.92191,18.07366", "48.9228,18.07593", "48.92383,18.0781", "48.92489,18.07987", "48.92607,18.08154", "48.92681,18.08245", "48.92865,18.08435", "48.93,18.08555", "48.93138,18.08663", "48.93278,18.08769", "48.93417,18.08876", "48.93552,18.08987", "48.93685,18.09107", "48.93813,18.09239", "48.93937,18.09379", "48.94055,18.09526", "48.9417,18.09684", "48.94258,18.09818", "48.94467,18.10183", "48.94527,18.10297", "48.94687,18.10595", "48.94786,18.1078", "48.94885,18.10963", "48.94984,18.11149", "48.95083,18.11337", "48.95182,18.11527", "48.95284,18.11719", "48.95383,18.11904", "48.95479,18.12088", "48.95575,18.12269", "48.95664,18.12453", "48.95751,18.12637", "48.95836,18.12822", "48.95924,18.13012", "48.95998,18.13174", "48.96094,18.13377", "48.96205,18.13622", "48.96444,18.14142", "48.9648,18.14223", "48.96552,18.14386", "48.96653,18.14629", "48.96732,18.14838", "48.96804,18.15048", "48.96875,18.15261", "48.96943,18.15475", "48.97013,18.1569", "48.97089,18.15899", "48.97168,18.161", "48.97232,18.16255", "48.97326,18.16483", "48.97376,18.16598", "48.9749,18.16869", "48.97569,18.17062", "48.97633,18.17218", "48.97713,18.17406", "48.97791,18.17593", "48.97881,18.17809", "48.97953,18.17981", "48.9802,18.18147", "48.98081,18.18302", "48.98149,18.18467", "48.98185,18.18562", "48.98208,18.18647", "48.98239,18.18715", "48.98251,18.1875", "48.98253,18.18766", "48.98252,18.18765", "48.98252,18.18765", "48.98252,18.18765", "48.98252,18.18765", "48.98252,18.18765", "48.98252,18.18765", "48.98252,18.18765", "48.98252,18.18765", "48.98252,18.18765", "48.98252,18.18765", "48.98252,18.18765", "48.98253,18.18768", "48.98253,18.18767", "48.98253,18.18767", "48.98253,18.18767", "48.98253,18.18767", "48.98253,18.18767"],
        accuracies: [15, 15, 10, 10, 15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15, 15, 10, 10, 10, 10, 20, 20, 20, 15, 15, 10, 15, 15, 15, 15, 15, 15, 15, 10, 10, 10, 10, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15, 15, 10, 15, 15, 15, 15, 15, 15, 15, 15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15, 20, 15, 15, 15, 15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5, 10, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 10, 5, 5, 5, 10, 10, 10, 10, 5, 5, 5, 5, 10, 10, 10, 5, 10, 5, 5, 5, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 10, 5, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 15],
        speeds: [185, 86, 152, 222, 148, 147, 131, 101, 153, 154, 194, 101, 80, 97, 54, 125, 105, 119, 122, 108, 118, 73, 165, 124, 145, 144, 245, 108, 93, 156, 130, 101, 70, 211, 153, 140, 149, 207, 139, 131, 151, 149, 140, 128, 138, 144, 131, 138, 133, 136, 141, 141, 133, 161, 151, 176, 165, 171, 159, 161, 146, 141, 143, 159, 157, 139, 151, 143, 172, 152, 156, 135, 149, 154, 153, 145, 159, 157, 141, 150, 206, 136, 150, 189, 136, 145, 148, 144, 148, 144, 146, 143, 141, 128, 138, 142, 135, 137, 137, 133, 137, 135, 138, 137, 141, 139, 137, 137, 137, 153, 138, 137, 119, 138, 141, 134, 131, 134, 139, 123, 136, 137, 142, 134, 119, 121, 126, 132, 131, 53, 113, 125, 126, 124, 122, 115, 130, 122, 124, 123, 129, 134, 132, 130, 128, 131, 141, 130, 133, 141, 144, 143, 138, 143, 143, 138, 145, 149, 140, 146, 150, 135, 160, 152, 147, 145, 150, 153, 144, 150, 142, 144, 137, 134, 128, 138, 138, 151, 138, 137, 139, 130, 133, 130, 132, 132, 130, 137, 118, 129, 130, 128, 132, 135, 121, 142, 123, 150, 134, 165, 129, 141, 140, 139, 150, 136, 130, 140, 150, 144, 141, 138, 133, 140, 139, 149, 139, 139, 141, 131, 138, 144, 145, 144, 138, 142, 144, 146, 132, 146, 135, 154, 170, 147, 131, 171, 133, 141, 140, 141, 152, 148, 138, 133, 135, 137, 144, 141, 127, 128, 136, 131, 139, 124, 131, 132, 130, 138, 132, 133, 131, 125, 125, 137, 131, 118, 137, 130, 132, 133, 140, 133, 128, 124, 132, 129, 131, 128, 151, 138, 134, 132, 133, 131, 131, 132, 134, 132, 139, 137, 128, 144, 126, 135, 133, 137, 125, 142, 132, 135, 141, 148, 130, 143, 138, 133, 133, 143, 131, 136, 137, 135, 132, 136, 135, 129, 134, 141, 141, 161, 161, 139, 136, 133, 145, 131, 140, 143, 143, 152, 134, 147, 142, 141, 125, 132, 141, 131, 129, 127, 125, 131, 135, 136, 136, 143, 136, 131, 118, 110, 128, 129, 131, 132, 130, 122, 131, 132, 134, 145, 140, 138, 131, 145, 134, 133, 139, 104, 133, 134, 128, 137, 122, 135, 136, 132, 138, 144, 148, 128, 140, 130, 131, 132, 131, 130, 131, 133, 131, 129, 130, 128, 128, 130, 133, 130, 130, 130, 123, 149, 132, 137, 123, 125, 125, 129, 130, 126, 143, 119, 133, 119, 127, 138, 126, 124, 127, 129, 131, 133, 134, 115, 128, 131, 132, 136, 123, 127, 124, 124, 133, 150, 130, 120, 131, 112, 130, 127, 121, 124, 126, 127, 113, 130, 133, 131, 124, 120, 132, 123, 119, 114, 101, 106, 123, 109, 96, 103, 111, 110, 107, 108, 103, 79, 109, 93, 123, 120, 123, 119, 128, 132, 125, 127, 119, 124, 122, 123, 123, 131, 118, 119, 142, 101, 185, 155, 131, 130, 128, 125, 132, 130, 124, 120, 121, 130, 127, 116, 117, 137, 140, 124, 130, 129, 127, 126, 127, 122, 117, 125, 129, 148, 118, 137, 86, 119, 118, 122, 120, 117, 115, 110, 99, 95, 103, 79, 54, 43, 33, 15, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    };

    var colors = [
        "#009fff", // blue for no speeding (0%)
        "#fdff00", // yellow for 10% speeding
        "#ff7400", // orange for 20% speeding
        "#f00", // red for 30% speeding
        "#000" // black for more
    ];

    var createPolyline = function (line, color) {
        var polyline = L.Polyline.fromEncoded(line, {
            color: color,
            weight: 5,
            smoothFactor: 1
        });
        return polyline;
    }


    $.post("https://analytics.api.sygic.com/v0/api/speeding?key=" + apiKey, exampleInput).done(function (response) {
        var matchedRoute = createPolyline(response.route, "#bababa");

        var lines = [matchedRoute];

        //foreach speeding segment compute color and add polyline
        response.speeding_segments.forEach(function (segment) {
            var colorIndex = Math.round(segment.speeding % 1 * 10);
            var line = createPolyline(segment.route, colors[colorIndex > 4 ? 4 : colorIndex])
            lines.push(line);
        });

        map.addLayer(L.layerGroup(lines));
        var bounds = matchedRoute.getBounds();
        map.fitBounds(bounds);
    });
}