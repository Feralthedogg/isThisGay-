const gayWords = [
    "gay", "hii kɛ hii", "abagaala ebisiyaga", "gai", "gay rehegua", "同性戀", "ગે", "ομοφυλόφιλος",
    "homoseksuelli", "mosodoma", "isitabane", "homo", "समलिङ्गी", "homofil", "همجنسگرا",
    "homoseksuel", "समलैंगिक", "schwul", "mulombwana", "cɛɲɔgɔnɲini", "ގޭ އެވެ", "moc",
    "ເກ", "gejs", "гей", "gay a ni", "ng'ama chwo", "homosexuell", "umusambanyi", "abaryamana bahuje ibitsina",
    "gėjus", "समलिंगी", "takatāpui", "геј", "pelaka", "സ്വവർഗ്ഗാനുരാഗി", "ڬاي", "gay;", "omosesswali",
    "ижил хүйстэн", "bian nin bla nna nga be fa fite nzra nun", "ہم جنس پرست", "gayi", "ဂေး",
    "đồng tính nam", "umulumendo", "সমকামী", "homofiila", "heñvelreizh", "bakla", "homosexuel",
    "समलैङ्गिकः", "sọmọl", "ၵေႇ", "гаи", "bayot", "omoseksyel", "هاوڕەگەزباز", "khaniis", "ngochani",
    "shoga", "gèidh", "homosexuales", "gej", "هم جنس پرست", "සමලිංගික", "مثلي الجنس", "գեյ",
    "গে", "gay sat jaqiwa", "hommi", "masisi", "aerach", "gey", "gay, ɔbarima ne ɔbea nna",
    "lacoo ma maro laco", "salaf xagole", "homoseksual", "ግብረ ሰዶማዊ", "Агеи", "gei", "geja",
    "gayibɔ", "saalqunnamtii saala walfakkaataa raawwatu", "ସମଲିଙ୍ගୀ", "onibaje", "hoyw",
    "ھەمجىنىسلار", "ߜ߭ߊߦߌ", "nwoke nwere mmasị nwoke", "פריילעך", "ゲイ", "გეი", "同性恋",
    "omushaija omushaija", "Gay", "ಸಲಿಂಗಕಾಮಿ", "समलिंगी अशें म्हण्टात", "ខ្ទើយ", "Argaz",
    "ⴰⵔⴳⴰⵣ", "ஓரின சேர்க்கையாளர்", "เกย์", "omoseksuál", "స్వలింగ సంపర్కుడు", "ge", "geý",
    "ŵasepuka", "eşcinsel", "ግብረሰዶማዊ", "ཕོ་མོ་འདྲ་མཉམ།", "همجنسباز", "ਗੇ", "samkyndur",
    "همجنس گرا", "homossexual", "sunnu-nyɔnu-nyɔnu", "wesoły", "gaynaako", "omosessuâl",
    "tagane", "kāne kāne", "ɗan luwaɗi", "게이", "meleg", "समलैंगिक के बा", "homosexuël", "הומו",
    "gay pipul dɛn"
];

export function isThisGay(text) {
    const lowerText = text.toLowerCase();
    return gayWords.some(gWord => lowerText.includes(gWord.toLowerCase()));
}
