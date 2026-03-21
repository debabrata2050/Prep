// Consolidated video data — single source of truth
// To add a new subject: just add a new key here + a thumbnail in assets/

const allVideoData = {
    english: {
        name: "English",
        instructor: "Parth Krishan Upadhyay",
        thumbnail: "assets/english.jpg",
        videos: [
            { id: "k5Pnp2pF17eWWuDoTEg", title: "SENTENCE BASIC", date: "01-07-2025" },
            { id: "k3SBLwuwPWoLh8DoTEe", title: "SENTENCE BASIC", date: "03-07-2025" },
            { id: "k6z2sTs077X2YjDoU9A", title: "SENTENCE BASIC", date: "04-07-2025" },
            { id: "k4Zy7J6IEv6Al5Dp6vO", title: "NOUN", date: "07-07-2025" },
            { id: "k2fNu2qL09KgTBDp7za", title: "NOUN", date: "08-07-2025" },
            { id: "kjlRIGkFMuwaAIDpsOY", title: "NOUN Exercise", date: "09-07-2025" },
            { id: "k4wjF4ypjy2j3PDp0ng", title: "PRONOUN", date: "10-07-2025" },
            { id: "k2PCX8CzNeHi1WDs3ji", title: "PRONOUN", date: "11-07-2025" },
            { id: "k3yKPINd2f94lDDs3r8", title: "VERB", date: "16-07-2025" },
            { id: "k6hzbVgJN9Y6n7Ds3se", title: "VERB Exercise", date: "17-07-2025" },
            { id: "k65XbxZZj2D6UBDAMEy", title: "ADJECTIVE", date: "19-07-2025" },
            { id: "kYYEXkr2g9ts8HDAMEw", title: "ADJECTIVE Exercise", date: "21-07-2025" },
            { id: "k3uTvW4QZm3TXrDAMGy", title: "ARTICLE", date: "22-07-2025" },
            { id: "k2oG4AVIqjkbQkDAMKA", title: "Article-2", date: "23-07-2025" },
            { id: "k1u08L9b15dywiDAMKC", title: "ADVERB Exercise", date: "24-07-2025" },
            { id: "k42Gg0I4iTCX4vDAMKE", title: "CONJUNCTION", date: "25-07-2025" },
            { id: "k3ta0C0qfmS1NiDAMNy", title: "CONJUNCTION Exercise", date: "28-07-2025" },
            { id: "k3lk4KrwIk34G0DAMNA", title: "PREPOSITION", date: "29-07-2025" },
            { id: "k4CiscYDCmd5YODAMPC", title: "Pronoun Exercise", date: "30-07-2025" },
            { id: "k4OLhOcVkgXM2UDAMRk", title: "TENSE", date: "01-08-2025" },
            { id: "k2px5QaEJ2NJEUDAN0i", title: "Q,R,E", date: "05-08-2025" },
            { id: "k7AOiGQzgVXJUlDAN0k", title: "Q,R,E", date: "06-08-2025" }
        ]
    },
    quant: {
        name: "Quant",
        instructor: "Rahul Meena",
        thumbnail: "assets/quant.jpg",
        videos: [
            { id: "k1EIt8WXE98CDtDpv04", title: "Quadratic Equation part 2", date: "07-07-2025" },
            { id: "k6Zp8W4hE4ML0ODpupM", title: "Quadratic Equation part 3", date: "08-07-2025" },
            { id: "k5seGHOGZ78YL7DptCW", title: "Percentage", date: "09-07-2025" },
            { id: "k39mzQyM91B3itDpugm", title: "Percentage", date: "10-07-2025" },
            { id: "k4h4BW5KxqPQxHDpP4m", title: "Ratio and Proportion", date: "11-07-2025" },
            { id: "kBEdTvSbyv24tBDqDT2", title: "Ratio & Proportion 2", date: "14-07-2025" },
            { id: "k2HZTJRMpaAiMMDr8ty", title: "Ratio & Proportion 3", date: "15-07-2025" },
            { id: "k40joSttqflcdQDs3R8", title: "Ratio & Proportion 4 and Partnership 1", date: "16-07-2025" },
            { id: "k1gx32svz5dreHDs3Oa", title: "Partnership 2", date: "17-07-2025" },
            { id: "k2hUHglpBvsdEuDAiMo", title: "Problem on Ages 1", date: "18-07-2025" },
            { id: "k4a54OgVhW21v6DAiQs", title: "Problem on Ages 2 & Mixture alligation 1", date: "21-07-2025" },
            { id: "k5GnXXH5bLgFLIDAiT0", title: "Mixture & Alligation 2", date: "22-07-2025" },
            { id: "k1LjBs0HMK8f3jDAj0S", title: "Mixture & Alligation 3", date: "23-07-2025" },
            { id: "k4PzBS5c6e8WJGDAj4g", title: "Mixture & Alligation 4 & Profit, loss and discount 1", date: "24-07-2025" },
            { id: "k7IDBEX2raeJjnDAj88", title: "Profit, loss and Discount 1", date: "25-07-2025" },
            { id: "k7vSotseqQuohsDAjjQ", title: "Profit, loss & Discount 3", date: "28-07-2025" },
            { id: "k22bIeNvgzuEbDDAjo2", title: "Simple & Compound Interest 1", date: "29-07-2025" },
            { id: "k65PRKgdwJ3w6rF8ViC", title: "Simple & Compound Interest 2", date: "30-07-2025" },
            { id: "k4QUGAGyXbyCP7F8ViA", title: "Simple & Compound Interest 3", date: "31-07-2025" },
        ]
    },
    reasoning: {
        name: "Reasoning",
        instructor: "Neelam Gahlot",
        thumbnail: "assets/reasoning.png",
        categories: [
            {
                name: "Coding-Decoding & Series",
                videos: [
                    { id: "k1Xjlk9jHIqmKwDotl0", title: "Coding-Decoding - 1", date: "30-06-2025" },
                    { id: "k3wMtc40iQxgCkDoSSM", title: "Coding-Decoding - 2", date: "03-07-2025" },
                    { id: "k71ffvpe4rkqOkDoSXW", title: "Coding-Decoding - 3", date: "04-07-2025" },
                    { id: "kSb4jfB2VpzPlbDoTda", title: "Coding-Decoding - 4", date: "07-07-2025" },
                    { id: "k2rMDkoXc2pcPoF8UI0", title: "Alphabet Test - 1", date: "21-07-2025" },
                    { id: "k2BqnGQDRnKo6VF8UQk", title: "Alphabet Test - 2", date: "22-07-2025" },
                    { id: "k4XrxCMNK96D4HF8UQm", title: "Alphanumeric Series - 1", date: "23-07-2025" },
                    { id: "k62uLlrMrWlhUkFfhZK", title: "Alphanumeric Series - 2", date: "24-07-2025" },
                    { id: "k4E2vYn9ou2WcDFfhZM", title: "Alphanumeric Series - 3", date: "25-07-2025" },
                    { id: "k3LPyO8iaBjOo9F8UAK", title: "Number Symbol Coding", date: "29-07-2025" }
                ]
            },
            {
                name: "Blood Relation & Inequalities",
                videos: [
                    { id: "k5ZhJLDcujKfuhDpOGQ", title: "Blood Relations - 1", date: "11-07-2025" },
                    { id: "kU1QJ5N6I38ANTDqE6C", title: "Blood Relations - 2", date: "14-07-2025" },
                    { id: "k6zGInD8xBmiFeDs2IA", title: "Coded Blood Relations", date: "15-07-2025" }
                ]
            },
            {
                name: "Inequalities",
                videos: [
                    { id: "k47aq2IiT1sCMiDs2Iw", title: "Inequalities - 1", date: "16-07-2025" },
                    { id: "k3qlnKYXph3ewgDs2Iy", title: "Inequalities - 2", date: "17-07-2025" },
                    { id: "k1oJswPhBijafkF5IQw", title: "Coded Inequalities", date: "18-07-2025" },
                    { id: "k2UYpMesUc8XeFFfkCC", title: "Practice Inequalities", date: "18-08-2025" }
                ]
            },
            {
                name: "Direction & Distance",
                videos: [
                    { id: "k3VzoppS4jAlZCDoTkS", title: "Direction & Distance - 1", date: "08-07-2025" },
                    { id: "k57Jp2Ic295aiPDoTqu", title: "Direction & Distance - 2", date: "09-07-2025" },
                    { id: "k6UXwNmLVDgaXgDpt6A", title: "Coded Directions - 1", date: "10-07-2025" },
                    { id: "k37WHxZ1OBY1ATFfiMe", title: "Coded Directions - 2", date: "26-07-2025" }
                ]
            }
        ]
    },
    it: {
        name: "IT",
        instructor: "Vivek Kumar Pandey",
        thumbnail: "assets/it.jpg",
        categories: [
            {
                name: "Orientation",
                videos: [
                    { id: "k3Iwr7HEPX1ceYF3xVy", title: "Orientation Class Videos", date: "05-09-2025" }
                ]
            },
            {
                name: "Database Management System",
                videos: [
                    { id: "k32UD2AJi6swA3F3xVw", title: "Database Management System - 1", date: "08-09-2025" },
                    { id: "k5ZHgBvVMW01vqF3yUy", title: "Database Management System - 2", date: "09-09-2025" },
                    { id: "kJDTBpBtmpa4BbF3zbg", title: "Database Management System - 3", date: "10-09-2025" },
                    { id: "k2rpLgRc0wxyu3F5H0k", title: "Database Management System - 4", date: "11-09-2025" },
                    { id: "k4UaHCDfeFALLKF5H4K", title: "Database Management System - 5", date: "12-09-2025" },
                    { id: "k4rGjAqkbqmlesF5I1Q", title: "Database Management System - 6", date: "15-09-2025" },
                    { id: "k1N1wcarHIHqfSF5I1O", title: "Database Management System - 7", date: "16-09-2025" },
                    { id: "k2013n9Q94NahMF5I1S", title: "Database Management System - 8", date: "17-09-2025" },
                    { id: "k6tNGmyuO94fbBF5IQu", title: "Database Management System - 9", date: "19-09-2025" }
                ]
            },
            {
                name: "Data Communication & Network",
                videos: [
                    { id: "k5AAjjObn39AT5Ffj0u", title: "Data Communication & Network - 1", date: "22-09-2025" },
                    { id: "k6Pu6UNpsKZqSmFfjda", title: "Data Communication & Network - 2", date: "23-09-2025" },
                    { id: "k7EoYF22tUIL0XFfjpG", title: "Data Communication & Network - 3", date: "24-09-2025" },
                    { id: "k32B23sjapA1bMFfjDy", title: "Data Communication & Network - 4", date: "25-09-2025" },
                    { id: "k7xXyMwbVWhanNFfjU0", title: "Internet & Network Security - 1", date: "26-09-2025" },
                    { id: "k3ptVAgBPRO2ozFfk88", title: "Internet & Network Security - 2", date: "29-09-2025" }
                ]
            }
        ]
    }
};

// Auto-generate subjects list for the home page
const subjects = Object.keys(allVideoData).map(key => ({
    name: allVideoData[key].name,
    thumbnail: allVideoData[key].thumbnail,
    link: `pages/subject.html?name=${key}`
}));
