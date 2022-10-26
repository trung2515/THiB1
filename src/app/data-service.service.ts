import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  data:any = [
    {
      "id": 1,
      "question": 'He has been very interested in doing research on .................................. since he was at high school.',
      "answer": [
        "biology","biological","biologist","bjologically "
      ],
      "correctAnswer": "biology",
      "inBook":"Câu 1",
      "trick":""
    },
    {
      "id": 2,
      "question": 'Are you sure that boys are more .....................................than girls?',
      "answer": [
        "act ","active","action","activity"
      ],
      "correctAnswer": "active",
      "inBook":"Câu 2",
      "trick":""
    },
    {
      "id": 3,
      "question": 'it is generally believed that “Men make ................................ house and women make ................................ home',
      "answer": [
        "no article/ no article","a/an","the/ the","an/ the"
      ],
      "correctAnswer": "no article/ no article",
      "inBook":"Câu 3",
      "trick":""
    },
    {
      "id": 4,
      "question": 'Most doctors and nurses have to work on a .......................... once or twice a week at the hospital.',
      "answer": [
        "solution","night shift","household chores","special dishes"
      ],
      "correctAnswer": "night shift",
      "inBook":"Câu 4",
      "trick":""
    }
    ,{
      "id": 5,
      "question": 'We enjoy............................ time together in the evening when the family members gather in the living room After a day of working hard',
      "answer": [
        "spending","caring","taking","doing"
      ],
      "correctAnswer": "spending",
      "inBook":"Câu 5",
      "trick":" enjoy + V + ing"
    }
    ,{
      "id": 6,
      "question": "It is parents' duty and responsibility to.................... hands to take care of their chỉldren and give them a happy home",
      "answer": [
        "shake","hold","join","take"
      ],
      "correctAnswer": "join",
      "inBook":"Câu 6",
      "trick":" jion hands = kết hợp chặt chẽ"
    }
    ,{
      "id": 7,
      "question": "He is a..............................boy. He is often kind and helpful to every classmate.",
      "answer": [
        "frank","lovely","obedient","caring"
      ],
      "correctAnswer": "caring",
      "inBook":"Câu 7",
      "trick":" caring = Chu đáo"
    }
    ,{
      "id": 8,
      "question": "Doctors are supposed to ........................... responsibility for human life",
      "answer": [
        "do","take","rush","join"
      ],
      "correctAnswer": "take",
      "inBook":"Câu 8",
      "trick":" take responsibility  = chiệu trách nhiệm"
    }
    ,{
      "id": 9,
      "question": "........................ sure that you follow the instructions carefully.",
      "answer": [
        "Believe","Try","do","make"
      ],
      "correctAnswer": "make",
      "inBook":"Câu 9",
      "trick":""
    }
    ,{
      "id": 10,
      "question": "Sometimes Mr. Pike has to work very late...................... night to do some important experiments.",
      "answer": [
        "in","at","for","on"
      ],
      "correctAnswer": "at",
      "inBook":"Câu 10",
      "trick":""
    }
    ,{
      "id": 11,
      "question": "Peter was.................... a hurry to go so he did not stop to greet me.",
      "answer": [
        "in","on","with","over"
      ],
      "correctAnswer": "in",
      "inBook":"Câu 11",
      "trick":"in a hunry = đang vội"
    }
    ,{
      "id": 12,
      "question": "it......................... it is parents' responsibility to take good care of their children.",
      "answer": [
        "commonly says that","commonly to be said that","is commonly said that","is commonly saying"
      ],
      "correctAnswer": "is commonly said that",
      "inBook":"Câu 12",
      "trick":"is commonly said that = người ta thường nói rằng"
    }
    ,{
      "id": 13,
      "question": "Most children enjoy.........................with their parents and siblings",
      "answer": [
        "play","to play","playing","played"
      ],
      "correctAnswer": "playing",
      "inBook":"Câu 13",
      "trick":"enjoy + V + ing"
    }
    ,{
      "id": 14,
      "question": "He studies.......................... his two brothers.",
      "answer": [
        "much better than","more better than","more good than","very better than"
      ],
      "correctAnswer": "much better than",
      "inBook":"Câu 14",
      "trick":""
    }
    ,{
      "id": 15,
      "question": "......................... the eldest child, he works hard to help his parents support the family.",
      "answer": [
        "be","is","to be","being"
      ],
      "correctAnswer": "being",
      "inBook":"Câu 15",
      "trick":""
    }
    ,{
      "id": 16,
      "question": "They............................ for 3 hours when the storm suddenly broke.",
      "answer": [
        "had been running","have been running","are running","will be running"
      ],
      "correctAnswer": "had been running",
      "inBook":"Câu 16",
      "trick":""
    }
    ,{
      "id": 17,
      "question": "No matter what happens next, I........................help you",
      "answer": [
        "am","have","will","would"
      ],
      "correctAnswer": "will",
      "inBook":"Câu 17",
      "trick":""
    }
    ,{
      "id": 18,
      "question": "I.......................... come to the conclusion that nowadays nobody cares about anything",
      "answer": [
        "will","had","do","have"
      ],
      "correctAnswer": "have",
      "inBook":"Câu 18",
      "trick":"nowadays = cho tới ngày nay"
    }
    ,{
      "id": 19,
      "question": "I assumed you ......................... paying for the repairs until the end of last year",
      "answer": [
        "have been","was been","are being","had been"
      ],
      "correctAnswer": "had been",
      "inBook":"Câu 19",
      "trick":"until the end of last year = cho tới cuối năm ngoái"
    }
    ,{
      "id": 20,
      "question": ".........................get tired ofanswering the same questions every day?",
      "answer": [
        "Have you ever"," Had you ever","Do you ever","Are you ever"
      ],
      "correctAnswer": "Do you ever",
      "inBook":"Câu 20",
      "trick":"every day chia thì hiện tại đơn"
    }
    ,{
      "id": 21,
      "question": "She ....................... working on that manuscript for 2 years now",
      "answer": [
        "will be","has been","had been","is"
      ],
      "correctAnswer": "has been",
      "inBook":"Câu 21",
      "trick":"2 years now = 2 năm nay"
    }
    ,{
      "id": 22,
      "question": "I.................... there once a long time ago and I ...................... back since",
      "answer": [
        "went/ have not been","go/ am not","have gone/was","was going/had not been"
      ],
      "correctAnswer": "went/ have not been",
      "inBook":"Câu 22",
      "trick":"...ago...since"
    }
    ,{
      "id": 23,
      "question": "She.......................... trying to pass her driving test but fails every time.",
      "answer": [
        "kept","is keeping","had kept","keeps"
      ],
      "correctAnswer": "keeps",
      "inBook":"Câu 23",
      "trick":"every time"
    }
    ,{
      "id": 24,
      "question": " ....................... complete silence now while I try this experiment.",
      "answer": [
        "am wanting","want","did want","have wanted"
      ],
      "correctAnswer": "want",
      "inBook":"Câu 24",
      "trick":""
    }

    ,{
      "id": 25,
      "question": " The students...................... by Mrs. Monty. However, this week they......................... by Mr.Tanzer.",
      "answer": [
        "are usually taught/ are being taught","usually teach/ are teaching","have usually been taught/ have been teaching","were usually teaching/ are teaching"
      ],
      "correctAnswer": "are usually taught/ are being taught",
      "inBook":"Câu 25",
      "trick":""
    }
    ,{
      "id": 26,
      "question": "You are old enough to take.........................for what you have done",
      "answer": [
        "responsible","responsibility","responsibly","irresponsible"
      ],
      "correctAnswer": "responsibility",
      "inBook":"Câu 26",
      "trick":"take + responsibility for hoặc be + responsible + for"
    }
    ,{
      "id": 27,
      "question": "These quick and easy.............................. can be effective in the short term, but they have a cost",
      "answer": [
        "solve","solvable","solutions","solvability"
      ],
      "correctAnswer": "solutions",
      "inBook":"Câu 27",
      "trick":""
    }
    ,{
      "id": 28,
      "question": "John is........................... only child in his Ramily, so his parents love him a lot",
      "answer": [
        "a","an","the","no article"
      ],
      "correctAnswer": "the",
      "inBook":"Câu 28",
      "trick":""
    }
    ,{
      "id": 29,
      "question": "According to the boss, John is the most............................of executive secretary",
      "answer": [
        "supportive","caring","suitable","comfortable"
      ],
      "correctAnswer": "suitable",
      "inBook":"Câu 29",
      "trick":""
    }
    ,{
      "id": 30,
      "question": "She got up late and RUSH to the bus stop.",
      "answer": [
        "came into","went leisurely","went quickly","dropped by"
      ],
      "correctAnswer": "went quickly",
      "inBook":"Câu 30",
      "trick":""
    }
    ,{
      "id": 31,
      "question": "Billy, come and GIVE ME A HAND with cooking",
      "answer": [
        "help","prepared","be busy","attempt"
      ],
      "correctAnswer": "help",
      "inBook":"Câu 31",
      "trick":" give me a hand = giúp 1 tay"
    }
    ,{
      "id": 32,
      "question": "Whenever problems COME UP, we discuss them frankly and find solitions quickly",
      "answer": [
        "happen","encounter","arrive","clean"
      ],
      "correctAnswer": "happen",
      "inBook":"Câu 32",
      "trick":""
    }
    ,{
      "id": 33,
      "question": "What are the........................ of that country? - I think Ít is some kinds of cheese and sauces.",
      "answer": [
        "drinks","beverages","grains","special dishes"
      ],
      "correctAnswer": "special dishes",
      "inBook":"Câu 33",
      "trick":""
    }
    ,{
      "id": 34,
      "question": "Peter tried his best and passed the driving test at the first...................... ",
      "answer": [
        "try","attempt","doing","aim"
      ],
      "correctAnswer": "attempt",
      "inBook":"Câu 34",
      "trick":"firt attempt = thử lần đầu"
    }
    ,{
      "id": 35,
      "question": "where is jimmy? - he is........................work. he is busy......................his monthly report ",
      "answer": [
        "on/ for","in/ about","to/ through","at/ with"
      ],
      "correctAnswer": "at/ with",
      "inBook":"Câu 35",
      "trick":"busy + with"
    }
    ,{
      "id": 36,
      "question": "With greatly increased woridoads, everyone is ....................... pressure now. ",
      "answer": [
        "under","above","upon","out of"
      ],
      "correctAnswer": "under",
      "inBook":"Câu 36",
      "trick":""
    }
    ,{
      "id": 37,
      "question": "We are not allowed..........................jeans at schools",
      "answer": [
        "wear","to wear","wearing","worn"
      ],
      "correctAnswer": "to wear",
      "inBook":"Câu 37",
      "trick":""
    }
    ,{
      "id": 38,
      "question": "Sometimes I do not feed like......................to my sibling about my troubles.",
      "answer": [
        "talk","to talk","talking","talked"
      ],
      "correctAnswer": "talking",
      "inBook":"Câu 38",
      "trick":""
    }
    ,{
      "id": 39,
      "question": "The worker was ............................. his boss expected, so he was offered a raise.",
      "answer": [
        "more hard-working","as hard-working than","more hard-working than","more hard-working as"
      ],
      "correctAnswer": "more hard-working than",
      "inBook":"Câu 39",
      "trick":""
    }
    ,{
      "id": 40,
      "question": "John....................... a respectful and obedient student",
      "answer": [
        "said to be","is said","is said being","is said to be"
      ],
      "correctAnswer": "is said to be",
      "inBook":"Câu 40",
      "trick":""
    }
    ,{
      "id": 41,
      "question": "I love.................. flms but I seldom find time to go to the cinema.",
      "answer": [
        "see","saw","seen","seeing"
      ],
      "correctAnswer": "seeing",
      "inBook":"Câu 41",
      "trick":""
    }
    ,{
      "id": 42,
      "question": "In the last hundred years, traveling ....................... much easier and more comfortable.",
      "answer": [
        "becomes","has become","became","will become"
      ],
      "correctAnswer": "has become",
      "inBook":"Câu 42",
      "trick":""
    }
    ,{
      "id": 43,
      "question": "In the nineteenth century,it ......................two or three months to cross Norrth America by covered wagon.",
      "answer": [
        "took","had taken","has taken","was taking"
      ],
      "correctAnswer": "took",
      "inBook":"Câu 43",
      "trick":""
    }
    ,{
      "id": 44,
      "question": "In the past, the trip.................. very rough and dangerous, but things ..................... a great deal in the last hundred and fifty years",
      "answer": [
        "was/ have changed","is/ change","had been/ will change","has been/ changed"
      ],
      "correctAnswer": "was/ have changed",
      "inBook":"Câu 44",
      "trick":""
    }
    ,{
      "id": 45,
      "question": " Now you.................... from New York to Los Angeles in a matter of hours",
      "answer": [
        "are flying","would fly","will fly","can fly"
      ],
      "correctAnswer": "can fly",
      "inBook":"Câu 45",
      "trick":""
    }
    ,{
      "id": 46,
      "question": " When Carol................. last night,I..................... my favorite show on television.",
      "answer": [
        "was calling/ watched","called/ have watched","called/ was watching","had called/ watched"
      ],
      "correctAnswer": "called/ was watching",
      "inBook":"Câu 46",
      "trick":""
    }
    ,{
      "id": 47,
      "question": "By this time next summer, you.................your studies.",
      "answer": [
        "completes","will complete","are completing","will have completed"
      ],
      "correctAnswer": "will have completed",
      "inBook":"Câu 47",
      "trick":""
    }
    ,{
      "id": 48,
      "question": " Right now, Jim .......................  the newspaper, and Kathy..................... dinner.",
      "answer": [
        "reads/ has cooked","is reading/ is cooking","has read/ was cooking","read/ will be cooking"
      ],
      "correctAnswer": "is reading/ is cooking",
      "inBook":"Câu 48",
      "trick":""
    }
    ,{
      "id": 49,
      "question": "Last night at this time, they.......................the same thing. She........................... and he ..................the newspaper.",
      "answer": [
        "are doing/ is cooking/ is reading.","were doing/ was cooking/ was reading","was doing/ has cooked/ is reading,","had done/ was cooking/ read"
      ],
      "correctAnswer": "were doing/ was cooking/ was reading",
      "inBook":"Câu 49",
      "trick":""
    }
    ,{
      "id": 50,
      "question": "When I...................... home last night, I........................that Jane........................... a beautiful candlelight dinner.",
      "answer": [
        "had arrived/ discovered/ prepared","was arriving/ had discovered/ was preparing","have arrived/ was discovering/ had prepared","arrived/ descovered/ was preparing"
      ],
      "correctAnswer": "arrived/ descovered/ was preparing",
      "inBook":"Câu 50",
      "trick":""
    }
    ,{
      "id": 51,
      "question": "He was looking at his parents..........................waiting for recommendations.",
      "answer": [
        "obey","obedience","obedient","obedienty"
      ],
      "correctAnswer": "obedienty",
      "inBook":"Câu 51",
      "trick":""
    }
    ,{
      "id": 52,
      "question": "The interview with parents showed that the vast majority were......................... Of teachers.",
      "answer": [
        "support","supportive","supporter","supporting"
      ],
      "correctAnswer": "supportive",
      "inBook":"Câu 52",
      "trick":""
    }
    ,{
      "id": 53,
      "question": "Billy has been serious ,and he was taken to ............. hospital yesterday.",
      "answer": [
        "a","an","the","no article"
      ],
      "correctAnswer": "no article",
      "inBook":"Câu 53",
      "trick":""
    }
    ,{
      "id": 54,
      "question": "My husband and I both go out to work so she share the.............................",
      "answer": [
        "happiness","household chores","responsibility","employment"
      ],
      "correctAnswer": "household chores",
      "inBook":"Câu 54",
      "trick":""
    }
    ,{
      "id": 55,
      "question": "you should not burn ................................. You had better dig a hole and bury it",
      "answer": [
        "dishes","lab","garbage","shift"
      ],  
      "correctAnswer": "garbage",
      "inBook":"Câu 55",
      "trick":""
    }
    ,{
      "id": 56,
      "question": "He was very respectful at home and ........................... to his parents",
      "answer": [
        "responsible","caring","obedient","lovely"
      ],
      "correctAnswer": "obedient",
      "inBook":"Câu 56",
      "trick":""
    }
    ,{
      "id": 57,
      "question": "One of vietnamese traditions is a belief in ............................ families and in preserving their cultures",
      "answer": [
        "wealthy","secure","safe","close-knit"
      ],
      "correctAnswer": "close-knit",
      "inBook":"Câu 57",
      "trick":""
    }
    ,{
      "id": 58,
      "question": "He was ................................ when I had those problems and said whatever I did he would stand by me",
      "answer": [
        "supportive","exciting","busy","dull"
      ],
      "correctAnswer": "supportive",
      "inBook":"Câu 58",
      "trick":""
    }
    ,{
      "id": 59,
      "question": "He was determined to give family  a secure and solid ..............................",
      "answer": [
        "base","floor","basement","ground"
      ],
      "correctAnswer": "base",
      "inBook":"Câu 59",
      "trick":""
    }
    ,{
      "id": 60,
      "question": "It is hard Work looking .......................... three children all day",
      "answer": [
        "after","up","to","through"
      ],
      "correctAnswer": "after",
      "inBook":"Câu 60",
      "trick":""
    }
    ,{
      "id": 61,
      "question": "When my mother is busy preparing dinner, my father often gives a hand ..................................tidying the living room",
      "answer": [
        "on","with","for","about"
      ],
      "correctAnswer": "with",
      "inBook":"Câu 61",
      "trick":"gives a hand  + with"
    }
    ,{
      "id": 62,
      "question": "I put your keys in the drawer................................. they Cannot get lost",
      "answer": [
        "because","let alone","instead of","so that"
      ],
      "correctAnswer": "so that",
      "inBook":"Câu 62",
      "trick":""
    }
    ,{
      "id": 63,
      "question": "alex is busy ............................ for his exams",
      "answer": [
        "to study","studied","studying","studies"
      ],
      "correctAnswer": "studied",
      "inBook":"Câu 63",
      "trick":""
    }
    ,{
      "id": 64,
      "question": "She is never willing ................................... any personal question.",
      "answer": [
        "answer","to answer","answering","answered"
      ],
      "correctAnswer": "to answer",
      "inBook":"Câu 64",
      "trick":""
    }
    ,{
      "id": 65,
      "question": ".........................a doctor, you have †o meet some certain Tequirements of the medical college.",
      "answer": [
        "To become","Become","Becoming","Become"
      ],
      "correctAnswer": "To become",
      "inBook":"Câu 65",
      "trick":""
    }
    ,{
      "id": 66,
      "question": "Sam................................. to change a light bulb when he............................ and ............................",
      "answer": [
        "Was trying/ Slipped/ fell","tried/ was sleeping / falling","had been trying/ slipped was falling","has tried / slips / falls"
      ],
      "correctAnswer": "Was trying/ Slipped/ fell",
      "inBook":"Câu 66",
      "trick":""
    }
    ,{
      "id": 67,
      "question": "Every day I ............................... up at 6 o'clock, .......................... breakfast at 7 o'clock and ............................... for work at 8 o'clock",
      "answer": [
        "get/ eat/ leave","have got/ eating / leaving","got/ ate/ left","will get/ have eaten/ left"
      ],
      "correctAnswer": "get/ eat/ leave",
      "inBook":"Câu 67",
      "trick":""
    }
    ,{
      "id": 68,
      "question": "Yesterday, I ............................ for work late because I ............................. to set my alarm",
      "answer": [
        "had left/ forgot","was leaving/ was forgetting","left/ had forgot","had been leaving/ would forget"
      ],
      "correctAnswer": "left/ had forgot",
      "inBook":"Câu 68",
      "trick":""
    }
    ,{
      "id": 69,
      "question": "By the time we.......................... to the train station, Susan.........................for us for more than two hours",
      "answer": [
        "win get/ has been waiting"," got/ was waiting ","got/ had been waiting","get/ will wait"
      ],
      "correctAnswer": "got/ had been waiting",
      "inBook":"Câu 69",
      "trick":""
    }
    ,{
      "id": 70,
      "question": "I........................... for this company for more than thirtty years, and I intend to stay here until I...................next year",
      "answer": [
        "am working/ will retire"," am going to work/ am retiring ","work/ am going to retire","have been working/ retire"
      ],
      "correctAnswer": "have been working/ retire",
      "inBook":"Câu 70",
      "trick":""
    }
    ,{
      "id": 71,
      "question": "My mother is always the first......................... up and the last ..................to bed",
      "answer": [
        "getting/ going","to get/ going","getting/ to go","to get/ to go"
      ],
      "correctAnswer": "to get/ to go",
      "inBook":"Câu 71",
      "trick":""
    }
    ,{
      "id": 72,
      "question": "I....................... you last night after dinner, but you.........................there. Where .............................you?",
      "answer": [
        "was calling/ are not/ are","called/ were not/ were","had called/ had not been/ were","called/ have not been/ are"
      ],
      "correctAnswer": "called/ were not/ were",
      "inBook":"Câu 72",
      "trick":""
    }
    ,{
      "id": 73,
      "question": "The Titanic........................the Atlantic when it......................... an iceberg",
      "answer": [
        "was crossing/ struck","had crossed/ was striking","crossed/ had struck","is crossing/ strikes"
      ],
      "correctAnswer": "is crossing/ strikes",
      "inBook":"Câu 73",
      "trick":""
    }
    ,{
      "id": 74,
      "question": " ............................. to come over for dinner tonight?",
      "answer": [
        "Do you want","Are you wanting","have you wanted","will you want"
      ],
      "correctAnswer": "Do you want",
      "inBook":"Câu 74",
      "trick":""
    }
    ,{
      "id": 75,
      "question": " what ............................. at this time tomorrOw?",
      "answer": [
        "will you do","will you be doing","will you have done","will you have been doing"
      ],
      "correctAnswer": "will you be doing",
      "inBook":"Câu 75",
      "trick":""
    }
    ,{
      "id": 76,
      "question": " London is home to people of many..................cultures?",
      "answer": [
        "diverse","diversity","diversify","diversification"
      ],
      "correctAnswer": "diverse",
      "inBook":"Câu 76",
      "trick":""
    }
    ,{
      "id": 77,
      "question": "John cannot make a.....................to get married to Mary or stay single until he can afford a house and a Car.",
      "answer": [
        "decide","decision","decisive","decisively"
      ],
      "correctAnswer": "decision",
      "inBook":"Câu 77",
      "trick":""
    }
    ,{
      "id": 78,
      "question": "My mother used to be a woman of great........................... but now she gets old and looks pale.",
      "answer": [
        "beauty","beautiful","beautifully","beautify"
      ],
      "correctAnswer": "beauty",
      "inBook":"Câu 78",
      "trick":""
    }
    ,{
      "id": 79,
      "question": "My father phoned me to say that he would come ................. home late.",
      "answer": [
        "a","an","the","no article"
      ],
      "correctAnswer": "no article",
      "inBook":"Câu 79",
      "trick":""
    }
    ,{
      "id": 80,
      "question": "At last they divorced after ten years of................. marriage.",
      "answer": [
        "a","an","the","no article"
      ],
      "correctAnswer": "no article",
      "inBook":"Câu 80",
      "trick":""
    }
    ,{
      "id": 81,
      "question": "A curriculum that ignores ethnic tensions, racial antagonism, cultural....................and religious differences is not relevant",
      "answer": [
        "diversity","contacts","barries","levels"
      ],
      "correctAnswer": "diversity",
      "inBook":"Câu 81",
      "trick":""
    }
    ,{
      "id": 82,
      "question": "Some researchers have just.................A survey of young poeple's points of view on contractual marriage",
      "answer": [
        "sent","directed","managed","conducted"
      ],
      "correctAnswer": "conducted",
      "inBook":"Câu 82",
      "trick":""
    }
    ,{
      "id": 83,
      "question": "It is not easy to ....................our beauty when we get older and older.",
      "answer": [
        "develop","maintain","gain","collect"
      ],
      "correctAnswer": "maintain",
      "inBook":"Câu 83",
      "trick":""
    }
    ,{
      "id": 84,
      "question": "Many young people have objected to...................marriage, which decided by the parents of the bride and groom",
      "answer": [
        "agreed","shared","contractual","sacrificed"
      ],
      "correctAnswer": "contractual",
      "inBook":"Câu 84",
      "trick":""
    }
    ,{
      "id": 85,
      "question": "All parents are.................. to at least try to behave in ways that will give their own children an important protection.",
      "answer": [
        "decided","supposed","followed","rejected"
      ],
      "correctAnswer": "supposed",
      "inBook":"Câu 85",
      "trick":""
    }
    ,{
      "id": 86,
      "question": "It is thought that traditional marriage....................are important basis of limiting divorce rates.",
      "answer": [
        "appearances","records","responses","values"
      ],
      "correctAnswer": "values",
      "inBook":"Câu 86",
      "trick":""
    }
    ,{
      "id": 87,
      "question": "Affected by the Western cultures, Vietnamese young people's attitudes........................... love and marriage have dramatically changed",
      "answer": [
        "for","with","through","towards"
      ],
      "correctAnswer": "towards",
      "inBook":"Câu 87",
      "trick":""
    }
    ,{
      "id": 88,
      "question": "Sometimes she does not agree......................... her husband about child's rearing but they soon fnd the solutions",
      "answer": [
        "for","on","with","of"
      ],
      "correctAnswer": "with",
      "inBook":"Câu 88",
      "trick":""
    }
    ,{
      "id": 89,
      "question": "The young are .......................more concerned with physical  attractiveness than elderly people",
      "answer": [
        "much","as","many","as much as"
      ],
      "correctAnswer": "much",
      "inBook":"Câu 89",
      "trick":""
    }
    ,{
      "id": 90,
      "question": "lt will take MORE OR LESS a month to prepare for  the wedding",
      "answer": [
        "approximately","generally","fankly","simply"
      ],
      "correctAnswer": "approximately",
      "inBook":"Câu 90",
      "trick":""
    }
    ,{
      "id": 91,
      "question": "The number of the participants in the survey....................................250 students for Oxford University",
      "answer": [
        "are","was","were","have been"
      ],
      "correctAnswer": "was",
      "inBook":"Câu 91",
      "trick":""
    }
    ,{
      "id": 92,
      "question": "the grass was yellow becasue it ....................... all summer",
      "answer": [
        "does not rain","has not rained","had not rained","would not rained"
      ],
      "correctAnswer": "had not rained",
      "inBook":"Câu 92",
      "trick":""
    }
    ,{
      "id": 93,
      "question": "many people even wonder these days........................",
      "answer": [
        "what marriage is","what is marriage","what marriage","what was marriage"
      ],
      "correctAnswer": "what marriage is",
      "inBook":"Câu 93",
      "trick":""
    }
    //  ,{
    //    "id": 94,
    //    "question": "the lights .................out because we ....................the electricity bill",
    //    "answer": [
    //      "have gone/ did not pay","will go/ did not paid","go/would not pay","went/ had not paid"
    //    ],
    //    "correctAnswer": "what marriage is",
    //    "inBook":"Câu 94",
    //    "trick":""
    //  }
    ,{
      "id": 95,
      "question": "....................Tom Cruise's last movie? Yes, I.................... it three days ago,",
      "answer": [
        "Have you ever Seen/ saw","Did you ever see/ have Seen","had you ever seen/ would see","Will you ever see/ saw"
      ],
      "correctAnswer": "Have you ever Seen/ saw",
      "inBook":"Câu 95",
      "trick":""
    }
    ,{
      "id": 96,
      "question": "In the past, people................to the beach more often",
      "answer": [
        "Have gone","used to go","were going","had gone"
      ],
      "correctAnswer": "used to go",
      "inBook":"Câu 96",
      "trick":"used to + V"
    }
    ,{
      "id": 97,
      "question": "Soon, people .......................... most of the time at home.",
      "answer": [
        "will work","are working","have working","work"
      ],
      "correctAnswer": "will work",
      "inBook":"Câu 97",
      "trick":""
    }
    ,{
      "id": 98,
      "question": "I ..................a terrible accident while I .........................on the beach",
      "answer": [
        "seen/ am walking","saw / was walking","was seeing/ walked"," have seen/were walking"
      ],
      "correctAnswer": "saw / was walking",
      "inBook":"Câu 98",
      "trick":"Qúa khứ + while + quá khứ tiếp diễn"
    }
    ,{
      "id": 99,
      "question": "after all,she...................him since her childhood",
      "answer": [
        "knows","knew","was knowing","had knows"
      ],
      "correctAnswer": "had knows",
      "inBook":"Câu 99",
      "trick":""
    }
    ,{
      "id": 100,
      "question": "We...................... touch since we ............ school three years ago.",
      "answer": [
        "lost/ have left","have lost/ leave","have lost/ left","were losing/ had left"
      ],
      "correctAnswer": "have lost/ left",
      "inBook":"Câu 100",
      "trick":""
    }
    ,{
      "id": 101,
      "question": "Although they are twins with almost similarities in appearance,they are seldom in...........................",
      "answer": [
        "agree ","agreeable","agreement","agreeably"
      ],
      "correctAnswer": "agreement",
      "inBook":"Câu 101",
      "trick":""
    }
    ,{
      "id": 102,
      "question": "The more .................. and positive you look, the better you will feel",
      "answer": [
        "confide","confident","confidently","confidence"
      ],
      "correctAnswer": "confident",
      "inBook":"Câu 102",
      "trick":""
    }
    ,{
      "id": 103,
      "question": "My parents will have celebrated 30 years of....................... by next week.",
      "answer": [
        "marry ","married","marriageable","marriage"
      ],
      "correctAnswer": "marriage",
      "inBook":"Câu 103",
      "trick":""
    }
    ,{
      "id": 104,
      "question": "Mr. Pike held his wife's hands and talked urgently to her ina low voice, but there didn't seem to be any RESPONSE.",
      "answer": [
        "feeling","emotion","reply","effect"
      ],
      "correctAnswer": "reply",
      "inBook":"Câu 104",
      "trick":""
    }
    ,{
      "id": 105,
      "question": "Family is the place where............. children is not only tolerated but welcomed and encoureged ",
      "answer": [
        "taking","having","giving","showing"
      ],
      "correctAnswer": "having",
      "inBook":"Câu 105",
      "trick":""
    }
    ,{
      "id": 106,
      "question": "Socially, the married .................... is thought to be the basic unit of society.",
      "answer": [
        "couple","pair ","twins","double"
      ],
      "correctAnswer": "couple",
      "inBook":"Câu 106",
      "trick":""
    }
    ,{
      "id": 107,
      "question": "Professor Berg was very interested in the DIVERSITY of cultures all over the world.",
      "answer": [
        "variety ","changes","conservation","number"
      ],
      "correctAnswer": "variety ",
      "inBook":"Câu 107",
      "trick":""
    }
    ,{
      "id": 108,
      "question": "You are not.. ............ to say anything unless you wish to do  so",
      "answer": [
        "obliged","willing","equal","attracted"
      ],
      "correctAnswer": "obliged",
      "inBook":"Câu 108",
      "trick":""
    }
    ,{
      "id": 109,
      "question": "A woman can never have a happy married life without.......................... her husband. ",
      "answer": [
        "demanding","agreeing","trusting","determined"
      ],
      "correctAnswer": "trusting",
      "inBook":"Câu 109",
      "trick":""
    }
    ,{
      "id": 110,
      "question": "..................large number of India men agreed that it was unwise to confide in their wives.",
      "answer": [
        "a","an","the","no article"
      ],
      "correctAnswer": "a",
      "inBook":"Câu 110",
      "trick":""
    }
    ,{
      "id": 111,
      "question": "Not all men are concerned with........................... physical attractiveness of their girlfriends and wives.",
      "answer": [
        "a","an","the","no article"
      ],
      "correctAnswer": "no article",
      "inBook":"Câu 111",
      "trick":""
    }
    ,{
      "id": 112,
      "question": "My mother is the only one that I can absoltely confide..........................",
      "answer": [
        "in","for","with","up"
      ],
      "correctAnswer": "in",
      "inBook":"Câu 112",
      "trick":""
    }
    ,{
      "id": 113,
      "question": "After they have been ....................... love for 2 years,they decide to get narried",
      "answer": [
        "for","with","on","in"
      ],
      "correctAnswer": "in",
      "inBook":"Câu 113",
      "trick":""
    }
    ,{
      "id": 114,
      "question": "In some cases, Mary is thought not to be.................... her sister",
      "answer": [
        "as much intelligent than","so intelligentthan","inteligent more than","as intelligent as"
      ],
      "correctAnswer": "as intelligent as",
      "inBook":"Câu 114",
      "trick":""
    }
    ,{
      "id": 115,
      "question": "She is .............I expect",
      "answer": [
        "more prettier than","far prettier than","much more prettier than","a lot prettier"
      ],
      "correctAnswer": "far prettier than",
      "inBook":"Câu 115",
      "trick":""
    }
    ,{
      "id": 116,
      "question": "There were about 100 attendees at the wedding, and ... .......... half of them were the bride's and groom's relatives",
      "answer": [
        "less","not less than","no less than","nor less than"
      ],
      "correctAnswer": "no less than",
      "inBook":"Câu 116",
      "trick":""
    }
    ,{
      "id": 117,
      "question": "The bride looked ..............on her wedding than she does as usual.",
      "answer": [
        "nicer and more attractive","more nicer and more attractive","more nice and more attractive","more attractive and nicer"
      ],
      "correctAnswer": "nicer and more attractive",
      "inBook":"Câu 117",
      "trick":""
    }
    ,{
      "id": 118,
      "question": "...........................,people used to read more.",
      "answer": [
        "wenty years before","twenty years ago","For twenty years","since twenty years"
      ],
      "correctAnswer": "twenty years ago",
      "inBook":"Câu 118",
      "trick":""
    }
    ,{
      "id": 119,
      "question": "........................in Rome than he.........................",
      "answer": [
        "No sooner he had arrived/ was being kidnapped","No sooner had he arrived/ was kidnapped","Had he no sooner arrived/ kidnapped","No sooner was he arriving/ had been kidnapped"
      ],
      "correctAnswer": "No sooner had he arrived/ was kidnapped",
      "inBook":"Câu 119",
      "trick":""
    }
    ,{
      "id": 120,
      "question": ".................... John usually watch TV at the weekend?",
      "answer": [
        "Will","Is ","Does","has"
      ],
      "correctAnswer": "Does",
      "inBook":"Câu 120",
      "trick":""
    }
    ,{
      "id": 121,
      "question": "I............................there once a long time ago and..................... back since.",
      "answer": [
        "was/ have not been","had been/ was not","would be/had not been","have been/ will not be"
      ],
      "correctAnswer": "was/ have not been",
      "inBook":"Câu 121",
      "trick":""
    }
    ,{
      "id": 122,
      "question": "We had to................................. the picnic because a hurricane waS just released on the radio.",
      "answer": [
        "call of","see about","put aside","do without"
      ],
      "correctAnswer": "call of",
      "inBook":"Câu 122",
      "trick":""
    }
    ,{
      "id": 123,
      "question": "As many as ten-million children ....................... . ... with the virus by the end of this decade.",
      "answer": [
        "have been infected","will be effecting","had been infected","will have been infected"
      ],
      "correctAnswer": "will have been infected",
      "inBook":"Câu 123",
      "trick":""
    }
    ,{
      "id": 124,
      "question": " What......................when the fire alarm ....................off",
      "answer": [
        "are you doing/ will go","were you doing/ went","had been infected","will you do/ are going"
      ],
      "correctAnswer": "were you doing/ went",
      "inBook":"Câu 124",
      "trick":""
    }
    ,{
      "id": 125,
      "question": "  .................... you send this wedding card to peter,please?",
      "answer": [
        "Will","Are","Did","Had"
      ],
      "correctAnswer": "Will",
      "inBook":"Câu 125",
      "trick":""
    }
    ,{
      "id": 126,
      "question": "When Peter ..........................I................................  him to your new books.",
      "answer": [
        "will arrive/ take","arrives/ will take","has arrived/ am taking","had arrived/ had taken"
      ],
      "correctAnswer": "arrives/ will take",
      "inBook":"Câu 126",
      "trick":""
    }
    ,{
      "id": 127,
      "question": "She is a kind of woman who does not care much of work but generally ............ only with colleagues for meals, movies or late nights at a club",
      "answer": [
        "supposes","socializes","attends","discusses"
      ],
      "correctAnswer": "socializes",
      "inBook":"Câu 127",
      "trick":""
    }
    ,{
      "id": 128,
      "question": "I didn't think his comments  were very APPROPRIATE at the time.",
      "answer": [
        "correct ","right","exact","suitable"
      ],
      "correctAnswer": "suitable",
      "inBook":"Câu 128",
      "trick":""
    }
    ,{
      "id": 129,
      "question": "You should...............more attention to what your teacher explains.",
      "answer": [
        "make ","get","set","pay"
      ],
      "correctAnswer": "pay",
      "inBook":"Câu 129",
      "trick":""
    }
    ,{
      "id": 130,
      "question": "Body language is a potent form of.................... communication.",
      "answer": [
        "verbal","no-verbal","tongue","oral"
      ],
      "correctAnswer": "no-verbal",
      "inBook":"Câu 130",
      "trick":""
    }
    ,{
      "id": 131,
      "question": "Our teacher often said, “Who knows the answer?......................... your hand.",
      "answer": [
        "Rise","Lift","Raise","Heighten"
      ],
      "correctAnswer": "Raise",
      "inBook":"Câu 131",
      "trick":""
    }
    ,{
      "id": 132,
      "question": "This is the INSTANCE  where big, obvious non-verbal signals are appropriate.",
      "answer": [
        "situation","attention","place ","matter "
      ],
      "correctAnswer": "situation",
      "inBook":"Câu 132",
      "trick":""
    }
    ,{
      "id": 133,
      "question": "They started as.......................... gatherings but they have become increasingly formalized in the last few years.",
      "answer": [
        "informal","informally ","informalize  ","informality  "
      ],
      "correctAnswer": "informal",
      "inBook":"Câu 133",
      "trick":""
    }
    ,{
      "id": 134,
      "question": "Children who are isolated and lonely seem to have poor language and ...............................",
      "answer": [
        "communicate ","communication","communicative","communicator"
      ],
      "correctAnswer": "communication",
      "inBook":"Câu 134",
      "trick":""
    }
    ,{
      "id": 135,
      "question": "The lecturer explained the problem very clearly and is always ........................ in response to question",
      "answer": [
        "attention ","attentive","attentively","attentiveness"
      ],
      "correctAnswer": "attentive",
      "inBook":"Câu 135",
      "trick":""
    }
    ,{
      "id": 136,
      "question": "Pay more attention .................... Picture and you can find out who is robber.",
      "answer": [
        "to","for","at","on"
      ],
      "correctAnswer": "to",
      "inBook":"Câu 136",
      "trick":""
    }
    ,{
      "id": 137,
      "question": "She looked............. me, smiling happily and confidently.",
      "answer": [
        "on","over","forward","at"
      ],
      "correctAnswer": "at",
      "inBook":"Câu 137",
      "trick":""
    }
    ,{
      "id": 138,
      "question": "What an attractive hair style you have got, Mary?  ...........................................",
      "answer": [
        "Thank you very much. I am afraid.","You are telling a lie","Thank you for your compliment","I don't like your saying"
      ],
      "correctAnswer": "Thank you for your compliment",
      "inBook":"Câu 138",
      "trick":""
    }
    ,{
      "id": 139,
      "question": "in..................,most social situations, ..................informality is appreciated",
      "answer": [
        "ø/ø","the/an","a/the","the/a"
      ],
      "correctAnswer": "ø/ø",
      "inBook":"Câu 139",
      "trick":""
    }
    ,{
      "id": 140,
      "question": "What.................... beautiful dress you are wearing! - Thank you. That is...................nice compliment.",
      "answer": [
        "a/a","the/ø","ø/ø","the/the"
      ],
      "correctAnswer": "a/a",
      "inBook":"Câu 140",
      "trick":""
    }
    
    ,{
      "id": 141,
      "question": ".................... you wanted to ask your teacher a question during his lecture, what would you do?",
      "answer": [
        "As","As if","Even of","Suppose"
      ],
      "correctAnswer": "Suppose",
      "inBook":"Câu 141",
      "trick":""
    }
    ,{
      "id": 142,
      "question": " John asked me ............ in English.",
      "answer": [
        "what does this word mean","what that word means","what did this word mean","what that word meant"
      ],
      "correctAnswer": "what that word meant",
      "inBook":"Câu 142",
      "trick":""
    }
    ,{
      "id": 143,
      "question": "The mother told her son ......................... so impolitely.",
      "answer": [
        "not behave","not to behave","not behaving","did not behave"
      ],
      "correctAnswer": "not to behave",
      "inBook":"Câu 143",
      "trick":""
    }
    ,{
      "id": 144,
      "question": "She said she ........................ collect it for me after work.",
      "answer": [
        "would","did","must","had"
      ],
      "correctAnswer": "would",
      "inBook":"Câu 144",
      "trick":""
    }
    ,{
      "id": 145,
      "question": "She said I......................... an angel.",
      "answer": [
        "am","was","were","have been"
      ],
      "correctAnswer": "was",
      "inBook":"Câu 145",
      "trick":""
    }
    ,{
      "id": 146,
      "question": "I told him ..................... the word to Jane somehow that I........................... to reach her during the early hours",
      "answer": [
        "passing/ will try","he will pass/tried ","to pass/ would be trying","he passed/have tried"
      ],
      "correctAnswer": "to pass/ would be trying",
      "inBook":"Câu 146",
      "trick":""
    }
    ,{
      "id": 147,
      "question": "Laura said she had worked on the assignment since ........................",
      "answer": [
        "yesterday ","two days ago","the day before","the next day"
      ],
      "correctAnswer": "the day before",
      "inBook":"Câu 147",
      "trick":""
    }
    ,{
      "id": 148,
      "question": "John asked me .............. interested  in m any kind of sports.",
      "answer": [
        "if I were ","if were I","if  was I","if I was"
      ],
      "correctAnswer": "if I was",
      "inBook":"Câu 148",
      "trick":""
    }
    ,{
      "id": 149,
      "question": "I.......................you everything I am doing, and you have to do the same.",
      "answer": [
        "will tell","would tell","told","was telling"
      ],
      "correctAnswer": "will tell",
      "inBook":"Câu 149",
      "trick":""
    }
    ,{
      "id": 150,
      "question": "John asked me ............ that film the night before.",
      "answer": [
        "that I saw","had I seen","if I had seen","if had I seen"
      ],
      "correctAnswer": "if I had seen",
      "inBook":"Câu 150",
      "trick":""
    }
    ,{
      "id": 151,
      "question": "A new........................ satellite has just been launched into the earth's orbit to take some necessary hotographs.",
      "answer": [
        "communicate","communication","communicative","communicatively"
      ],
      "correctAnswer": "communication",
      "inBook":"Câu 151",
      "trick":""
    }
    ,{
      "id": 152,
      "question": "It is of great................................ to show your interest and politeness when you are having a job interview.",
      "answer": [
        "importance","important","importantly","unimportant"
      ],
      "correctAnswer": "importance",
      "inBook":"Câu 152",
      "trick":""
    }
    ,{
      "id": 153,
      "question": " Facial............................ show one's feelings when he is communicating.",
      "answer": [
        "expressions","expresses","expressive","expressively"
      ],
      "correctAnswer": "expressions",
      "inBook":"Câu 153",
      "trick":""
    }
    ,{
      "id": 154,
      "question": " Expressing ................... confidence is important to those who want to succeed in....................... Job interview",
      "answer": [
        "a/the","the/ø","a/a","ø/a"
      ],
      "correctAnswer": "ø/a",
      "inBook":"Câu 154",
      "trick":""
    }
    ,{
      "id": 155,
      "question": " ...................... nonverbal communication is different from culture to culture.",
      "answer": [
        "A","An","the","ø"
      ],
      "correctAnswer": "ø",
      "inBook":"Câu 155",
      "trick":""
    }
    ,{
      "id": 156,
      "question": " Some people get married not simply because they are ............ love.",
      "answer": [
        "for","with","in","on"
      ],
      "correctAnswer": "in",
      "inBook":"Câu 156",
      "trick":""
    }
    ,{
      "id": 157,
      "question": "Education is very necessary........................... leading a good life.",
      "answer": [
        "on","in","for","with"
      ],
      "correctAnswer": "in",
      "inBook":"Câu 157",
      "trick":"necessary + for/to"
    }
    ,{
      "id": 158,
      "question": "She never looks .................anyone  who she is  talking..................she seems to be lack....................condifence",
      "answer": [
        "at/ to/ of","for/ with/ in","up/for/ with","on/about/for"
      ],
      "correctAnswer": "at/ to/ of",
      "inBook":"Câu 158",
      "trick":"talking + to || be lack + of "
    }
    ,{
      "id": 159,
      "question": "He came to ............ for what had happened h had clearly been in the wrong",
      "answer": [
        "apologize","compliment","promise","serve"
      ],
      "correctAnswer": "apologize",
      "inBook":"Câu 159",
      "trick":""
    }
    ,{
      "id": 160,
      "question": "He had never experienced such  DISCOURTESY toward the president as it occurred at the annual meeting in may",
      "answer": [
        "politeness","rudeness","encouragement","measurement"
      ],
      "correctAnswer": "rudeness",
      "inBook":"Câu 160",
      "trick":""
    }

    ,{
      "id": 161,
      "question": "John looked up at Jane and tried a smile of love, of.................., of gratitude.",
      "answer": [
        "dislike","unreliability","trust","anger"
      ],
      "correctAnswer": "trust",
      "inBook":"Câu 161",
      "trick":""
    }
    ,{
      "id": 162,
      "question": "body language inclues our....................................facial expressions, and gestures.",
      "answer": [
        "posture","mature","picture","body"
      ],
      "correctAnswer": "posture",
      "inBook":"Câu 162",
      "trick":""
    }
    ,{
      "id": 163,
      "question": "Parents INTERPRET facial and vocal expressions as indicators of how a baby is feeling.",
      "answer": [
        "translate","understand","read","comprehend"
      ],
      "correctAnswer": "understand",
      "inBook":"Câu 163",
      "trick":""
    }
    ,{
      "id": 164,
      "question": "Later a wine reception will be followed by a concert before guests tuck into A BANQUET ",
      "answer": [
        "an enormous breakfast","a formal conference","an informal party","a formal party"
      ],
      "correctAnswer": "a formal party",
      "inBook":"Câu 164",
      "trick":""
    }
    ,{
      "id": 165,
      "question": " He asked us not to make so much noise .................... he was working.",
      "answer": [
        "and that if","and","and that","and added that"
      ],
      "correctAnswer": "and added that",
      "inBook":"Câu 165",
      "trick":""
    }
    ,{
      "id": 166,
      "question": "She told him.................",
      "answer": [
        "patient","to be patient","was patient","that being patient"
      ],
      "correctAnswer": "to be patient",
      "inBook":"Câu 166",
      "trick":"told + .... + to ...."
    }
    ,{
      "id": 167,
      "question": "Daniel asked me if I thought..................",
      "answer": [
        "t will rain today","it will rain that day","it would rain today","it would rain that day"
      ],
      "correctAnswer": "it would rain that day",
      "inBook":"Câu 167",
      "trick":""
    }
    ,{
      "id": 168,
      "question": "Barbara asked me..................the homework that week",
      "answer": [
        "that she must do","if she has to do","if she had to do","if did she have to do"
      ],
      "correctAnswer": "if she had to do",
      "inBook":"Câu 168",
      "trick":""
    }
    ,{
      "id": 169,
      "question": "robert wanted to know if i was leaving the ..................................friday",
      "answer": [
        "following","ago","previous","before"
      ],
      "correctAnswer": "following",
      "inBook":"Câu 169",
      "trick":""
    }
    ,{
      "id": 170,
      "question": "Jenifer sked me .........................the week before",
      "answer": [
        "where had I gone","where I had gone","where did I gone","I had gone where"
      ],
      "correctAnswer": "where I had gone",
      "inBook":"Câu 170",
      "trick":""
    }
    ,{
      "id": 171,
      "question": "I............................ to the shops, but .I ................................. anything because I............................ my wallet.",
      "answer": [
        "go/ cannot buy/ will lose ","was going/ did not buy/ have lost","am going/ am not buying/ will lose","went/ could not buy/ had lost"
      ],
      "correctAnswer": "went/ could not buy/ had lost",
      "inBook":"Câu 171",
      "trick":""
    }
    ,{
      "id": 172,
      "question": "I .....................well recently.I................to see my doctor yesterday. He said that I.............. somerest.",
      "answer": [
        "do not sleep/ went/ would need","have not slept/ went/ needed"," did not sleep/ go/ will need","had not slept/ went/ had needed"
      ],
      "correctAnswer": "have not slept/ went/ needed",
      "inBook":"Câu 172",
      "trick":""
    }
    ,{
      "id": 173,
      "question": "They..................... him for weeks",
      "answer": [
        "do not see","did not see","have not seen","will not have seen"
      ],
      "correctAnswer": "have not seen",
      "inBook":"Câu 173",
      "trick":""
    }
     ,{
       "id": 174,
       "question": " Everyday Mary................. on the computer, but today she..................... a typewriter because there is n power.",
       "answer": [
         "types/ is using","is typing/ uses","has typed/ will use","types/ has used"
       ],
       "correctAnswer": "types/ is using",
       "inBook":"Câu 174",
       "trick":""
     }
     ,{
       "id": 175,
       "question": " She said that she hadn't visited the UK ...................",
       "answer": [
         "before","then","now","ago"
       ],
       "correctAnswer": "before",
       "inBook":"Câu 175",
       "trick":""
     }
     ,{
       "id": 176,
       "question": " He was so .................... that he could not even say a word.",
       "answer": [
         "nerve","nerves","nervous","nervously"
       ],
       "correctAnswer": "nervous",
       "inBook":"Câu 176",
       "trick":""
     }
     ,{
       "id": 177,
       "question": " I am really............. in the way he talks, but the way he behaves.",
       "answer": [
         "interest","interested","interesting","interestingly"
       ],
       "correctAnswer": "interested",
       "inBook":"Câu 177",
       "trick":""
     }
     ,{
       "id": 178,
       "question": "His attitude made me really...................",
       "answer": [
         "anger","angers ","angry","angrily"
       ],
       "correctAnswer": "angry",
       "inBook":"Câu 178",
       "trick":""
     }
     ,{
       "id": 179,
       "question": "We can communicate not only through ..................words but also through ...................body language",
       "answer": [
         "ø/ø","the/the ","ø/the","the/ø"
       ],
       "correctAnswer": "ø/ø",
       "inBook":"Câu 179",
       "trick":""
     }
     ,{
       "id": 180,
       "question": " He has not kept in touch with us for........... long time",
       "answer": [
         "a","an ","the","ø"
       ],
       "correctAnswer": "a",
       "inBook":"Câu 180",
       "trick":""
     }
     ,{
       "id": 181,
       "question": "He got angry ................................ me when I said that he was wrong",
       "answer": [
         "on","upon","with","for"
       ],
       "correctAnswer": "with",
       "inBook":"Câu 181",
       "trick":""
     }
     ,{
       "id": 182,
       "question": "A smile is a sign.............................. friendliness and interest.",
       "answer": [
         "on","about","of","from"
       ],
       "correctAnswer": "of",
       "inBook":"Câu 182",
       "trick":""
     }
     ,{
       "id": 183,
       "question": "Peter is very busy ................................ his new house.",
       "answer": [
         "over ","with","for","on "
       ],
       "correctAnswer": "with",
       "inBook":"Câu 183",
       "trick":""
     }
     ,{
       "id": 184,
       "question": "The meaning from touch is dependent ........................... the context, the relationship between Communicators, and the manner of touch.",
       "answer": [
         "in ","upon","with ","from "
       ],
       "correctAnswer": "upon",
       "inBook":"Câu 184",
       "trick":""
     }
     ,{
       "id": 185,
       "question": " When communicating, nonverbal messages can .......................... with verbal messages in some ways.",
       "answer": [
         "act","interact","mix ","go "
       ],
       "correctAnswer": "interact",
       "inBook":"Câu 185",
       "trick":""
     }
     ,{
       "id": 186,
       "question": " .................................can be defined as communication include handshakes, holding hands, kissing, back slapping, a pat on the shoulders, and brushing an arm.",
       "answer": [
         "Touches","Eye contact ","Facial expressions ","Wink "
       ],
       "correctAnswer": "Touches",
       "inBook":"Câu 186",
       "trick":""
     }
     ,{
       "id": 187,
       "question": "  A gesture is a non-vocal bodily............................ intended to express meaning.",
       "answer": [
         "action","glance","contact","movement"
       ],
       "correctAnswer": "movement",
       "inBook":"Câu 187",
       "trick":""
     }
     ,{
       "id": 188,
       "question": "Children can be a little.......................... and they like to see quick results.",
       "answer": [
         "shy","slow","impatient","polite "
       ],
       "correctAnswer": "impatient",
       "inBook":"Câu 188",
       "trick":""
     }
     ,{
       "id": 189,
       "question": "They do their work with such cheerfulness,............................ and unselfish dedication.",
       "answer": [
         "friendliness","laziness ","politeness","shyness "
       ],
       "correctAnswer": "friendliness",
       "inBook":"Câu 189",
       "trick":""
     }
     ,{
       "id": 190,
       "question": "An important source of dissatisfaction was a ............................of challenge",
       "answer": [
         "lack","measurement ","sight","contact "
       ],
       "correctAnswer": "lack",
       "inBook":"Câu 190",
       "trick":""
     }
    ,{
      "id": 191,
      "question": " When I................. up this morning, my roommate ....................... already ",
      "answer": [
        "am waking/leaves","wake/has left","woke/had left","was waking/left "
      ],
      "correctAnswer": "woke/had left",
      "inBook":"Câu 191",
      "trick":""
    }
    ,{
      "id": 192,
      "question": " Someone............. at the door. I................... ït  ",
      "answer": [
        "is knocking/will answer","knocked/would answer","knocks/have answered","would knock/was answering"
      ],
      "correctAnswer": "is knocking/will answer",
      "inBook":"Câu 192",
      "trick":""
    }
    ,{
      "id": 193,
      "question": "in five minutes, they ............for three hours on the phone",
      "answer": [
        "are talking","have talked","will talk","will have been talking"
      ],
      "correctAnswer": "will have been talking",
      "inBook":"Câu 193",
      "trick":""
    }
    ,{
      "id": 194,
      "question": "These workers............................on strie to ask for higher salary at presen",
      "answer": [
        "are going","was going","have gone","had gone"
      ],
      "correctAnswer": "are going",
      "inBook":"Câu 194",
      "trick":""
    }
    ,{
      "id": 195,
      "question": "............................him very much. He is so brilliant",
      "answer": [
        "like","am liking","have liked","was liking"
      ],
      "correctAnswer": "like",
      "inBook":"Câu 195",
      "trick":""
    }
    ,{
      "id": 196,
      "question": "John said that his brother.............................. at home then",
      "answer": [
        "is","was","were","has been"
      ],
      "correctAnswer": "was",
      "inBook":"Câu 196",
      "trick":""
    }
    ,{
      "id": 197,
      "question": " Max told me ........................... abook in the evening",
      "answer": [
        "if he often reads","he has often read","that he often read","he was reading"
      ],
      "correctAnswer": "that he often read",
      "inBook":"Câu 197",
      "trick":""
    }
    ,{
      "id": 198,
      "question": " Mary told me.................................home at that moment,she............................her parents with the farm work.",
      "answer": [
        "that if she was/ had helped","if she were/ will have helped","that if she had been/ would have helped","that she had been/ would have helped"
      ],
      "correctAnswer": "that if she had been/ would have helped",
      "inBook":"Câu 198",
      "trick":""
    }
    ,{
      "id": 199,
      "question": " Tim asked Sarah........................English so far",
      "answer": [
        "she had been learning how long ","how long was she learning","how long she has been learning","how long she had been learning"
      ],
      "correctAnswer": "how long she had been learning",
      "inBook":"Câu 199",
      "trick":""
    }
    ,{
      "id": 200,
      "question": "Tom said that he had been to England ..................",
      "answer": [
        "ten years before","the years ago","the following ten years","the next ten years"
      ],
      "correctAnswer": "ten years before",
      "inBook":"Câu 200",
      "trick":""
    }






  ]
      
    
    
    
  }

