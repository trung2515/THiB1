import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  data:any = [
    {
      "id": 1,
      "question": 'He has been very interested in doing research on ............. since he was at high school.',
      "answer": [
        "biology","biological","biologist","bjologically "
      ],
      "correctAnswer": "biology",
      "inBook":"Câu 1",
      "trick":""
    },
    {
      "id": 2,
      "question": 'Are you sure that boys are more ...................than girls?',
      "answer": [
        "act ","active","action","activity"
      ],
      "correctAnswer": "active",
      "inBook":"Câu 2",
      "trick":""
    },
    {
      "id": 3,
      "question": 'it iS generally believed that “Men make ....................... house and women make ........................ home',
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
      "question": "He is a...................boy. He is often kind and helpful to every classmate.",
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
      "question": "It is hard Work looking ....... three children all day",
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
      "question": "She is never willing .. any personal question.",
      "answer": [
        "answer","to answer","answering","answered"
      ],
      "correctAnswer": "to answer",
      "inBook":"Câu 64",
      "trick":""
    }
    ,{
      "id": 65,
      "question": "...a doctor, you have †o meet some certain Tequirements of the medical college.",
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
        "diversity","Contacts","barries","levels"
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
      "question": "Affected by the Western cultures, Vietnamese young people's attitudes....................... love and marriage have dramatically changed",
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
      "question": "The number of the participants in the survey..............250 students for Oxford University",
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
    // ,{
    //   "id": 94,
    //   "question": "the lights .................out because we ....................the electricity bill",
    //   "answer": [
    //     "have gone/ did not pay","will go/ did not paid","go/would not pay","went/ had not paid"
    //   ],
    //   "correctAnswer": "what marriage is",
    //   "inBook":"Câu 94",
    //   "trick":""
    // }
    ,{
      "id": 95,
      "question": "....................Tom Cruise's last movie? Yes, I.................... it three days ago,",
      "answer": [
        "Have you ever Seen/ saw","Did you ever see/ have Seen","had you ever seen/ would see","Willyou ever see/ saw"
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
      "correctAnswer": "in",
      "inBook":"Câu 114",
      "trick":""
    }
    ,{
      "id": 115,
      "question": "She is .............I expect",
      "answer": [
        "more prettier than","far prettier than","much more prettier than","a lot prettier"
      ],
      "correctAnswer": "ar prettier than",
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
      "question": "....................,peopleused to read more.",
      "answer": [
        "wenty years before","twenty years ago","For twenty years","since twenty years"
      ],
      "correctAnswer": "twenty years ago",
      "inBook":"Câu 118",
      "trick":""
    }
    ,{
      "id": 119,
      "question": "..............in Rome than he.........................",
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






  ]
      
    
    
    
  }

