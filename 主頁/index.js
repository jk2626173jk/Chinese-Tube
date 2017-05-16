var test_country="tai";
var tai_keywords_data=[
    {
      word:"飛機(Fēijī)" ,
      english: "aircraft , airplane ",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393019722958.wav"
    },
    {
      word:"那天(Nàtiān)" ,
      english: "that day  ",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939302119366.wav"
    },
    {
      word:"我(Wǒ)" ,
      english: "I , self ",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939302227694.wav"
    },
    {
      word:"在(Zài)" ,
      english: "in, at , on  ",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393023816915.wav"
    },
    {
      word:"客人(Kèrén)" ,
      english: "guest , passenger ",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393025012468.wav"
    },
    {
      word:"問(Wèn)" ,
      english: "ask , inquire" ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393026226697.wav"  
    },
    {
      word:"椅背(Yǐ bèi)" ,
      english: "seat back" ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939302766893.wav"
    },
    {
      word:"權利(Quánlì)" ,
      english: "right"  ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393029017506.wav"
    },
    {
      word:"先生(Xiānshēng)" ,
      english: "sir , mister  " ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393031111736.wav"
    },
    {
      word:"按鈕(Ànniǔ)" ,
      english: "button " ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393032422562.wav"
    },
     {
      word:"不好意思(bù hǎoyìsi) " ,
      english: "I’m sorry ",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939303391505.wav"
    },
    {
      word:"空姐(kōngjiě) " ,
      english: "flight attendant " ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393035431562.wav"  
    },
    {
      word:"心情(xīnqíng) " ,
      english: "feelings" ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393036619542.wav"
    },
    {
      word:"閱讀(yuèdú) " ,
      english: "reading "  ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393037925381.wav"
    }
    ];
var chi_keywords_data=[ 
    {
      word:"客人(Kèrén)" ,
      english: "guest , passenger ",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393040032752.wav"
    },
    {
      word:"飛機(Fēijī) " ,
      english: "aircraft , airplane , plane " ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393041213558.wav"  
    },
    {
      word:"不好意思(bù hǎoyìsi)" ,
      english: "I’m sorry" ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393042428.wav"
    },
    {
      word:"權利(Quánlì)" ,
      english: "right"  ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393043924991.wav"
    },
    {
      word:"馬上(mǎshàng) " ,
      english: "right now   " ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393045122628.wav"
    },
    {
      word:"按鈕(Ànniǔ)" ,
      english: "button " ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939304736382.wav"
    },
    {
      word:"電影院(diànyǐngyuàn) " ,
      english: "cinema  " ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393049031383.wav"
    },
    {
      word:"協助(xiézhù)" ,
      english: "help " ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393050332262.wav"
    },
    {
      word:"空姐(kōngjiě)" ,
      english: "flight attendant " ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939305227852.wav"
    },
    {
      word:"心情(xīnqíng) " ,
      english: "feelings " ,
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149393053625159.wav"
    }
    ];
var all_sentence=[
    {
      chinese:"那天我在飛機上",
      pinyin:"Nàtiān wǒ zài fēijī shàng",
      english:"That day I was on the plane",
      keywords:["飛機(Fēijī) aircraft , airplane , plane "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939226101088.wav",
      video: "https://www.youtube.com/embed/WmokF1c7DD8?rel=0&autoplay=1&star=6",
      t: 6
    },
    {
      chinese:"有一個客人問我",
      pinyin:"Yǒu yīgè kèrén wèn wǒ",
      english:"A passenger asked me",
      keywords:["客人(Kèrén) guest , passenger ","問(Wèn) ask ,    inquire"],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392271525796.wav",
      video: "https://www.youtube.com/embed/WmokF1c7DD8?rel=0&autoplay&star=7",
      t: 7
    },
    {
      chinese:"可以請他把椅背豎直嗎",
      pinyin:"Kěyǐ qǐng tā bǎ yǐ bèi shù zhí ma",
      english:"Can you ask him to return his seat back to the upright position",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939278517150.wav",
      video: "https://www.youtube.com/embed/WmokF1c7DD8?rel=0&autoplay&star=8",
      t: 8
    },
    {
      chinese:"這樣我很難坐",
      pinyin:"zhèyàng wǒ hěn nán zuò",
      english:"I feel uncomfortable",
      keywords:["這樣(zhèyàng) this  "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392276113660.wav",
      video: "https://www.youtube.com/embed/WmokF1c7DD8?rel=0&autoplay&star=11",
      t: 11
    },
    {
      chinese:"不好意思",
      pinyin:"bù hǎoyìsi",
      english:"I’m sorry",
      keywords:["不好意思(bù hǎoyìsi) I’m sorry"],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392282017297.wav",
      t: 12
    },
    {
      chinese:"椅背要往前往後",
      pinyin:"yǐ bèi yào wǎng qiánwǎng hòu",
      english:"To tilt the seat back and forth ",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392283211185.wav",
      t: 12
    },
    {
      chinese:"是客人的權利",
      pinyin:"shì kèrén de quánlì",
      english:"is the right of passengers",
      keywords:["權利(Quánlì) right "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392284412569.wav",
      t: 13
    },
    {
      chinese:"這樣真的很難坐",
      pinyin:"zhèyàng zhēn de hěn nán zuò",
      english:"I feel really uncomfortable",
      keywords:["這樣(zhèyàng) this  "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392353221603.wav",
      t: 14
    },
    {
      chinese:"(你)可以請他把椅背豎直嗎",
      pinyin:" (nǐ) kěyǐ qǐng tā bǎ yǐ bèi shù zhí ma",
      english:"Can you ask him to return his seat back to the upright position?",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939235474278.wav",
      t: 15
    },
    {
      chinese:"不好意思，你同樣的也…",
      pinyin:"bù hǎoyìsi, nǐ tóngyàng de yě…",
      english:"I’m sorry. But you also…",
      keywords:["不好意思(bù hǎoyìsi) I’m sorry"],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939235549799.wav",
      t: 17
    },
    {
      chinese:"你不覺得他這樣很沒有公德心嗎",
      pinyin:"nǐ bù juéde tā zhèyàng hěn méiyǒu gōngdé xīn ma ",
      english:"Don't you think he is selfish?",
      keywords:["公德心(gōngdé xīn) selfish "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392355990.wav",
      t: 18
    },
    {
      chinese:"（指）",
      pinyin:"(zhǐ)",
      english:"(Point to)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392356512754.wav",
      t: 20
    },
    {
      chinese:"他這樣很沒有公德心",
      pinyin:"tā zhèyàng hěn méiyǒu gōngdé xīn",
      english:"He is really selfish.",
      keywords:["公德心(gōngdé xīn) selfish "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392357316800.wav",
      t: 21
    },
    {
      chinese:"好⋯好",
      pinyin:"hǎo ⋯hǎo",
      english:"S…sure.",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392357914056.wav",
      t: 23
    },
    {
      chinese:"(你)可以請他把椅背豎直嗎",
      pinyin:" (nǐ) kěyǐ qǐng tā bǎ yǐ bèi shù zhí ma",
      english:"Can you ask him to return his seat back to the upright position?",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392358510684.wav",
      t: 23
    },
    {
      chinese:"我只好對前面客人說",
      pinyin:"wǒ zhǐhǎo duì qiánmiàn kèrén shuō",
      english:"So I told the passenger in the front",
      keywords:["客人(Kèrén) guest , passenger "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392359232414.wav",
      t: 25
    },
    {
      chinese:"先生可以往前一點",
      pinyin:"xiānshēng kěyǐ wǎng qián yīdiǎ",
      english:"Sir, could you please move forward?",
      keywords:["前(qián) forwar "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939235972694.wav",
      t: 26
    },
    {
      chinese:"哎呦",
      pinyin:"āi yōu",
      english:"Oops!",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392360218064.wav",
      t: 27
    },
    {
      chinese:"一點點就好",
      pinyin:"yīdiǎn diǎn jiù hǎo",
      english:"Just a little bit",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392361015521.wav",
      t: 28
    },
    {
      chinese:"一點點就好了",
      pinyin:"yīdiǎn diǎn jiù hǎole",
      english:"Just a little bit",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939236178078.wav",
      t: 29
    },
    {
      chinese:"（豎直）",
      pinyin:"(shù zhí)",
      english:"(Upright)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392362327813.wav",
      t: 29
    },
    {
      chinese:"（瞪）",
      pinyin:"(dèng)",
      english:"(Stare at him)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392362932026.wav",
      t: 30
    },
    {
      chinese:"有沒有公德心啊",
      pinyin:"yǒu méiyǒu gōngdé xīn a",
      english:"What an asshole!",
      keywords:["公德心(gōngdé xīn) selfish "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392363520462.wav",
      t: 31
    },
    {
      chinese:"（瞪）",
      pinyin:"Nèitiān wǒ zài fēijī shàngsss",
      english:"(dèng)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392364026780.wav",
      t: 32
    },
    {
      chinese:"（倒）",
      pinyin:"(dào)",
      english:"(Lean backwards)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392364512262.wav",
      t: 33
    },
    {
      chinese:"（躺）",
      pinyin:"(tǎng)",
      english:"(Lie down)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392365030180.wav",
      t: 35
    },
    {
      chinese:"所以你這樣就很有公德心",
      pinyin:"suǒyǐ nǐ zhèyàng jiù hěn yǒu gōngdé xīn",
      english:"So you are not an asshole?",
      keywords:["公德心(gōngdé xīn) selfish "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939236597901.wav",
      t: 36
    },
    {
      chinese:"還有一種客人",
      pinyin:"hái yǒu yīzhǒng kèrén",
      english:"There is also a kind of passengers",
      keywords:["客人(Kèrén) guest , passenger "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392366313650.wav",
      t: 41
    },
    {
      chinese:"先生",
      pinyin:"xiānshēng",
      english:"Sir",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392367322905.wav",
      t: 42
    },
    {
      chinese:"是",
      pinyin:"shì",
      english:"Yes?",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939236774964.wav",
      t: 42
    },
    {
      chinese:"（指）",
      pinyin:"(zhǐ)",
      english:"(Point to)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939236856798.wav",
      t: 43
    },
    {
      chinese:"（搖）",
      pinyin:"(yáo)",
      english:"(Shaking)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392368827621.wav",
      t: 45
    },
    {
      chinese:"不好意思",
      pinyin:"bù hǎoyìsi",
      english:"I’m sorry",
      keywords:["不好意思(bù hǎoyìsī) I’m sorry"],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939236946507.wav",
      t: 46
    },
    {
      chinese:"我馬上制止",
      pinyin:"wǒ mǎshàng zhìzhǐ",
      english:"I will stop him right now",
      keywords:["馬上(mǎshàng) right now "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939237005649.wav",
      t: 46
    },
    {
      chinese:"可不可以請他不要踢我的椅背",
      pinyin:"kěbù kěyǐ qǐng tā bùyào tī wǒ de yǐ bèi",
      english:"Can you ask him not to kick my seatback?",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392370514971.wav",
      t: 47
    },
    {
      chinese:"我馬上制止他",
      pinyin:"wǒ mǎshàng zhìzhǐ tā",
      english:"I will stop him right now",
      keywords:["馬上(mǎshàng) right now "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392371024070.wav",
      t:49
    },
    {
      chinese:"我今天是來搭飛機的",
      pinyin:"wǒ jīntiān shì lái dā fēijī de",
      english:"Today I am here to take the plane",
      keywords:["飛機(Fēijī) aircraft , airplane , plane "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392371422727.wav",
      t:50
    },
    {
      chinese:"不是來看什麼4D電影院的",
      pinyin:"bùshì lái kàn shénme 4D diànyǐngyuàn de",
      english:"not to see a 4D film",
      keywords:["電影院(diànyǐngyuàn) cinema "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392371925274.wav",
      t:51
    },
    {
      chinese:"我懂我懂",
      pinyin:"wǒ dǒng wǒ dǒng",
      english:"I understand",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392372320955.wav",
      t:52
    },
    {
      chinese:"他這樣子很沒有公德心",
      pinyin:"tā zhèyàng zi hěn méiyǒu gōngdé xīn",
      english:"He is really selfish",
      keywords:["公德心(gōngdé xīn) selfish "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392372632594.wav",
      t:53
    },
    {
      chinese:"我馬上制止他",
      pinyin:"wǒ mǎshàng zhìzhǐ tā",
      english:"I will stop him right now",
      keywords:["馬上(mǎshàng) right now "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392373030351.wav",
      t:55
    },
    {
      chinese:"先生請你不要",
      pinyin:"xiānshēng qǐng nǐ bùyào",
      english:"Sir, could you please not to ",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939237344001.wav",
      t:56
    },
    {
      chinese:"喔",
      pinyin:"ō",
      english:"Oops!",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939237374058.wav",
      t:57
    },
    {
      chinese:"不好意思 不好意思",
      pinyin:"Bù hǎoyìsi bù hǎoyìsi",
      english:"Sorry, sorry",
      keywords:["不好意思(bù hǎoyìsī) I’m sorry"],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392374116700.wav",
      t:57
    },
    {
      chinese:"有沒有公德心啊你",
      pinyin:"yǒu méiyǒu gōngdé xīn a nǐ",
      english:"What an asshole!",
      keywords:["公德心(gōngdé xīn) selfish "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392374524193.wav",
      t:58
    },
    {
      chinese:"（恨）",
      pinyin:"(hèn)",
      english:"(Hated)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392374931920.wav",
      t:59
    },
    {
      chinese:"（搖）",
      pinyin:"(yáo)",
      english:"(Shaking)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392375511251.wav",
      t:61
    },
    {
      chinese:"所以你這樣就最有公德心？",
      pinyin:"suǒyǐ nǐ zhèyàng jiù zuì yǒu gōngdé xīn?",
      english:"So you are not an asshole?",
      keywords:["公德心(gōngdé xīn) selfish "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939237678369.wav",
      t:63
    },
    {
      chinese:"然後請他們豎直椅背的時候",
      pinyin:"Ránhòu qǐng tāmen shù zhí yǐ bèi de shíhou",
      english:"And when we ask them to return their seat back to the upright position",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392377320221.wav",
      t:66
    },
    {
      chinese:"飛機要降落囉",
      pinyin:"fēijī yào jiàngluò luō",
      english:"The plane is landing",
      keywords:["飛機(Fēijī) aircraft , airplane , plane "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392378025458.wav",
      t:67
    },
    {
      chinese:"請豎直椅背",
      pinyin:"qǐng shù zhí yǐ bèi",
      english:"Please return your seat back to the upright position",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939237855033.wav",
      t:68
    },
    {
      chinese:"豎直椅背",
      pinyin:"shù zhí yǐ bèi",
      english:"Return your seat back to the upright position",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392378932247.wav",
      t:70
    },
    {
      chinese:"等我一下喔",
      pinyin:"děng wǒ yīxià ō",
      english:"Give me a second",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392379310269.wav",
      t:70
    },
    {
      chinese:"對不起 等我一下",
      pinyin:"duìbùqǐ děng wǒ yīxià",
      english:"Sorry, give me a second",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392379813703.wav",
      t:72
    },
    {
      chinese:"（找）",
      pinyin:"(zhǎo)",
      english:"(Finding)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392380618067.wav",
      t:73
    },
    {
      chinese:"需要協助嗎",
      pinyin:"xūyào xiézhù ma",
      english:"Do you need any help?",
      keywords:["協助(xiézhù) help "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939238181222.wav",
      t:74
    },
    {
      chinese:"我會我會",
      pinyin:"wǒ huì wǒ huì",
      english:"No, I can do it",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939238218634.wav",
      t:75
    },
    {
      chinese:"他竟然找不到按鈕",
      pinyin:"tā jìngrán zhǎo bù dào ànniǔ",
      english:"He actually cannot find the button",
      keywords:["按鈕(ànniǔ) button "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392382532661.wav",
      t:76
    },
    {
      chinese:"在你旁邊那裡",
      pinyin:"zài nǐ pángbiān nàlǐ",
      english:"It’s beside you",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939238307510.wav",
      t:77
    },
    {
      chinese:"那邊",
      pinyin:"nà biān",
      english:"There",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392383415384.wav",
      t:78
    },
    {
      chinese:"那是隔壁的閱讀燈",
      pinyin:"nà shì gébì de yuèdú dēng",
      english:"That’s the adjacent reading light",
      keywords:["閱讀(yuèdú) reading "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392383916299.wav",
      t:79
    },
    {
      chinese:"（找）",
      pinyin:"(zhǎo)",
      english:"(Finding)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392384316812.wav",
      t:80
    },
    {
      chinese:"那個是服務鈴",
      pinyin:"nàgè shì fúwù líng",
      english:"That's the call button",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939238501267.wav",
      t:81
    },
    {
      chinese:"那個還是服務鈴",
      pinyin:"nàgè háishì fúwù líng",
      english:"That's also the call button",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939238545562.wav",
      t:84
    },
    {
      chinese:"服務鈴",
      pinyin:"fúwù líng",
      english:"The call button",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939226101088.wav",
      t:85
    },
    {
      chinese:"阿我知道了",
      pinyin:"ā wǒ zhīdàole",
      english:"I get it",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392386224500.wav",
      t:85
    },
    {
      chinese:"（拉）",
      pinyin:"(lā)",
      english:"(Pull)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939238685461.wav",
      t:86
    },
    {
      chinese:"（用力拉）",
      pinyin:"(yònglì lā)",
      english:"(Pull hard)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392402821906.wav",
      t:87
    },
    {
      chinese:"先⋯先生",
      pinyin:"xiān ⋯xiānshēng",
      english:"S…Sir",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939240335010.wav",
      t:88
    },
    {
      chinese:"（超用力拉）",
      pinyin:"(chāo yònglì lā)",
      english:"(Pull very hard)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392403911751.wav",
      t:89
    },
    {
      chinese:"那邊有個圓形按鈕",
      pinyin:"nà biān yǒu gè yuán xíng ànniǔ",
      english:"There is a round button",
      keywords:["按鈕(ànniǔ) button "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/1493924779871.wav",
      t:90
    },
    {
      chinese:"（停）",
      pinyin:"(tíng)",
      english:"(Stop)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392478422842.wav",
      t:91
    },
    {
      chinese:"（圓形按鈕)",
      pinyin:"yuán xíng ànniǔ",
      english:"The round button",
      keywords:["按鈕(ànniǔ) button "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392478912572.wav",
      t:92
    },
    {
      chinese:"找到了啦",
      pinyin:"zhǎodàole la",
      english:"Found it",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392479324843.wav",
      t:93
    },
    {
      chinese:"不是30秒前，才放下椅背的嗎",
      pinyin:"bùshì 30 miǎo qián, cái fàngxià yǐ bèi de ma",
      english:"Didn't you adjust the seat 30 seconds ago?",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939247985005.wav",
      t:95
    },
    {
      chinese:"（鬆一口氣）",
      pinyin:"(sōng yī kǒuqì)",
      english:"(sigh of relief)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392480411484.wav",
      t:97
    },
    {
      chinese:"當然還有一種客人",
      pinyin:"dāngrán hái yǒu yīzhǒng kèrén",
      english:"There is also another kind of passengers",
      keywords:["客人(Kèrén) guest , passenger "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939259652924.wav",
      t:98
    },
    {
      chinese:"先生你好",
      pinyin:"xiānshēng nǐ hǎo",
      english:"Sir, hello",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392596915180.wav",
      t:99
    },
    {
      chinese:"飛機即將降落",
      pinyin:"fēijī jíjiāng jiàngluò",
      english:"The plane is landing",
      keywords:["飛機(Fēijī) aircraft , airplane , plane "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392597820175.wav",
      t:100
    },
    {
      chinese:"請您將椅背豎直好嗎",
      pinyin:"qǐng nín jiāng yǐ bèi shù zhí hǎo ma",
      english:"Please return your seat back to the upright position",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392599026077.wav",
      t:102
    },
    {
      chinese:"我不要啊",
      pinyin:"wǒ bùyào a",
      english:"I don't want to",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392702421028.wav",
      t:103
    },
    {
      chinese:"請您一定要將椅背豎直",
      pinyin:"qǐng nín yīdìng yào jiāng yǐ bèi shù zhí",
      english:"Please, you must straighten your seat",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939270299147.wav",
      t:104
    },
    {
      chinese:"我不要把椅背豎直",
      pinyin:"wǒ bùyào bǎ yǐ bèi shù zhí",
      english:"I don't want to straighten my seat",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392703314922.wav",
      t:106 
    },
    {
      chinese:"你必須要將椅背豎直",
      pinyin:"nǐ bìxū yào jiāng yǐ bèi shù zhí",
      english:"You must straighten your seat",
      keywords:["必須(bìxū) must "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392703910615.wav",
      t:108
    },
    {
      chinese:"我就是不要把椅背豎直",
      pinyin:"wǒ jiùshì bùyào bǎ yǐ bèi shù zhí",
      english:"I just don't want to straighten my seat",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392704427694.wav",
      t:110
    },
    {
      chinese:"怎麼樣",
      pinyin:"Nzěnme yàng",
      english:"What can you do?",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392704922693.wav",
      t:111
    },
    {
      chinese:"你就是要把椅背豎直",
      pinyin:"nǐ jiùshì yào bǎ yǐ bèi shù zhí",
      english:"You just have to straighten your seat",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939270531057.wav",
      t:111
    },
    {
      chinese:"怎麼樣",
      pinyin:"Zěnme yàng",
      english:"What do you want?",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392704922693.wav",
      t:113
    },
    {
      chinese:"我不要豎直椅背",
      pinyin:"wǒ bùyào shù zhí yǐ bèi",
      english:"I don't want to straighten my seat",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392706113955.wav",
      t:114
    },
    {
      chinese:"我不要豎直椅背",
      pinyin:"wǒ bùyào shù zhí yǐ bèi",
      english:"I don't want to straighten my seat",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392706113955.wav",
      t:114
    },
    {
      chinese:"你就是要豎",
      pinyin:"nǐ jiùshì yào shù",
      english:"You have to straighten your seat",
      keywords:["豎(shù) straighten "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392706826264.wav",
      t:115
    },
    {
      chinese:"你就是要豎",
      pinyin:"nǐ jiùshì yào shù",
      english:"You have to straighten your seat",
      keywords:["豎(shù) straighten "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392706826264.wav",
      t:115
    },
    {
      chinese:"你就是要豎",
      pinyin:"nǐ jiùshì yào shù",
      english:"You have to straighten your seat",
      keywords:["豎(shù) straighten "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392706826264.wav",
      t:115
    },
    {
      chinese:"豎豎豎",
      pinyin:"shù shù shù",
      english:"Straighten, straighten, straighten",
      keywords:["豎(shù) straighten "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392718212039.wav",
      t:116
    },
    {
      chinese:"我就是不要豎直",
      pinyin:"wǒ jiùshì bùyào shù zhí",
      english:"I just don't want to straighten my seat",
      keywords:["豎(shù) straighten "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392717620489.wav",
      t:117
    },
    {
      chinese:"豎豎豎",
      pinyin:"shù shù shù",
      english:"Straighten, straighten, straighten",
      keywords:["豎(shù) straighten "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392718212039.wav",
      t:118
    },
    {
      chinese:"先生",
      pinyin:"xiānshēng",
      english:"Sir.",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939271876860.wav",
      t:119
    },
    {
      chinese:"你豎",
      pinyin:"nǐ shù",
      english:"Straighten",
      keywords:["豎(shù) straighten "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392719023047.wav",
      t:119
    },
    {
      chinese:"阿",
      pinyin:"ā",
      english:"Arghhh!",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392719415911.wav",
      t:120
    },
    {
      chinese:"停",
      pinyin:"tíng",
      english:"Shut up!",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392720320267.wav",
      t:120
    },
    {
      chinese:"你們兩個這樣吵不膩嗎",
      pinyin:"nǐmen liǎng gè zhèyàng chǎo bù nì ma",
      english:"Enough is enough!",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392720831572.wav",
      t:122
    },
    {
      chinese:"每次都是你們兩個",
      pinyin:"měi cì dōu shì nǐmen liǎng gè",
      english:"It’s always you guys every time",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392721530176.wav",
      t:124
    },
    {
      chinese:"你有沒有想過別人的心情",
      pinyin:"nǐ yǒu méiyǒu xiǎngguò biérén de xīnqíng",
      english:"Have you ever thought about other people's feelings?",
      keywords:["心情(xīnqíng) feelings "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939272194987.wav",
      t:125
    },
    {
      chinese:"你不想別人心情 也要想我的心情",
      pinyin:"nǐ bùxiǎng biérén xīnqíng yě yào xiǎng wǒ de xīnqíng",
      english:"If you haven't, you have to think about my feelings",
      keywords:["心情(xīnqíng) feelings "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392909724731.wav",
      t:126
    },
    {
      chinese:"好啦好啦好啦",
      pinyin:"hǎo la hǎo la hǎo la",
      english:"Alright, alright",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392723325417.wav",
      t:128
    },
    {
      chinese:"我豎我豎我豎啦",
      pinyin:"wǒ shù wǒ shù wǒ shù la",
      english:"I will do it",
      keywords:["豎(shù) straighten "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392723831062.wav",
      t:129
    },
    {
      chinese:"乖",
      pinyin:"guāi",
      english:"That’s my boy",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392724113857.wav",
      t:130
    },
    {
      chinese:"就不要被我抓到有人椅背沒豎直",
      pinyin:"iù bùyào bèi wǒ zhuā dào yǒurén yǐ bèi méi shù zhí",
      english:"Don't let me catch if someone’s seatback is not in upright position ",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392914715109.wav",
      t:131
    },
    {
      chinese:"不是先生 我們要降落",
      pinyin:"bùshì xiānshēng wǒmen yào jiàngluò",
      english:"Excuse me, sir, we are landing now",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392725117639.wav",
      t:134
    },
    {
      chinese:"不要這樣子 先生",
      pinyin:"bùyào zhèyàng zi xiānshēng",
      english:"Please don't do that, sir",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392725817495.wav",
      t:135
    },
    {
      chinese:"（看）",
      pinyin:"(kàn)",
      english:"(Look at)",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392726114464.wav",
      t:136
    },
    {
      chinese:"齁",
      pinyin:"hōu",
      english:"Gotcha",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939272645270.wav",
      t:137
    },
    {
      chinese:"小姐 請你現在就把椅背豎直",
      pinyin:"xiǎojiě qǐng nǐ xiànzài jiù bǎ yǐ bèi shù zhí",
      english:"Miss,Please return your seat back to the upright positio",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/1493929217364.wav",
      t:139
    },
    {
      chinese:"我不要啊",
      pinyin:"wǒ bùyào a",
      english:"I don't want to",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939272762235.wav",
      t:141
    },
    {
      chinese:"現在就把椅背豎直",
      pinyin:"xiànzài jiù bǎ yǐ bèi shù zhí",
      english:"Straighten your seat right now",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392730111727.wav",
      t:142
    },
    {
      chinese:"不要",
      pinyin:"bùyào",
      english:"Nope",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392729031413.wav",
      t:143
    },
    {
      chinese:"小姐請你豎直椅背",
      pinyin:"xiǎojiě qǐng nǐ shù zhí yǐ bèi",
      english:"Miss, please return your seat back to the upright position",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392732224980.wav",
      t:143
    },
    {
      chinese:"趕快把椅背豎直",
      pinyin:"gǎnkuài bǎ yǐ bèi shù zhí",
      english:"Straighten your seat right now",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392731111011.wav",
      t:144
    },
    {
      chinese:"最後他竟然跟其他客人吵了起來",
      pinyin:"zuìhòu tā jìngrán gēn qítā kèrén chǎole qǐlái",
      english:"And he ended up quarreling with other passenger",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392731826994.wav",
      t:146
    },
    {
      chinese:"小姐請你把椅背豎直",
      pinyin:"xiǎojiě qǐng nǐ bǎ yǐ bèi shù zhí",
      english:"Miss, please return your seat back to the upright position",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392732224980.wav",
      t:147
    },
    {
      chinese:"為什麼抓我不抓他",
      pinyin:"wèishéme zhuā wǒ bù zhuā tā",
      english:"Why do you ask me but not her",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392732532205.wav",
      t:149
    },
    {
      chinese:"我是一個空姐",
      pinyin:"wǒ shì yīgè kōngjiě",
      english:"I am a flight attendant",
      keywords:["空姐(kōngjiě) flight attendant "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392733215138.wav",
      t:152
    },
    {
      chinese:"我忙著在飛機上豎直",
      pinyin:"wǒ mángzhe zài fēijī shàng shù zhí",
      english:"I’m busy returning those",
      keywords:["豎(shù) straighten "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/14939273369723.wav",
      t:154
    },
    {
      chinese:"被放斜的 被放倒的 被放下的 ",
      pinyin:"bèi fàng xié de bèi fàng dào de bèi fàngxià de",
      english:"tilted 被放倒的 被放下的",
      keywords:"",
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392932032442.wav",
      t:155
    },
    {
      chinese:"椅背 椅背 椅背",
      pinyin:"yǐ bèi yǐ bèi yǐ bèi",
      english:"seatback seatback seatback",
      keywords:["椅背(yǐ bèi) seat back "],
      audio: "http://tts.itri.org.tw/TTSservice/download/jk2626173jk/149392934214465.wav",
      t:157
    }
];

// $(".right").mouseleave(
// function(){
//     $(".trans").css("display","none");
//   }
// );
// setTimeout(function(){
//   $(".containertop").append("<div class='clock'><div class='title'>If you want to know more about the product, </div><div class='title'>please click the button.</div><br/><div class='button'>click </div><div v-on:click='clear()' class='delbtn'></div></div>");
// },60000);
// $(".containertop").click(function()
//     {
//     $(".clock").css("display","none");
// });
// setTimeout(function(){
//   $(".clock").css("display","none");
// },65000);
// // $(".delbtn").click(
// //   function(){
// //      $(".clock").css("display","none") ;
// //       });
var vm=new Vue(
{
  el: "#app1",
  data: {
    tai_keywords:tai_keywords_data,
    chi_keywords:chi_keywords_data,
    test_type:test_country,
    sentences:all_sentence,
    sen_id:"",    
    chinese_trans:"",
    english_trans:"",
    pinyin_trans:"",
    keywords_trans:[],
    tran:0,
    audion_trans:"",
    videoid: 0,
    video:0
    
  } ,
  methods:{
    tai: function(){
      this.test_type="tai";
      
    },
    chi: function(){
      this.test_type="chi";
    },
    trans: function(id){
      this.sen_id=id;
      this.tran=1;
      this.chinese_trans=all_sentence[id].chinese;
      this.english_trans=all_sentence[id].english;
      this.pinyin_trans=all_sentence[id].pinyin;
      this.keywords_trans=all_sentence[id].keywords;
      this.audion_trans=all_sentence[id].audio;
      $(".trans").css("display","inline-block");
      $(".right").mouseleave(
      function(){
          $(".trans").css("display","none");
          $(".sentence").css("opacity","1")
          $(".subsentence").css("opacity","1")
      });
      },
    recover: function(){
      this.tran=0;
      $(".trans").css("display","none");
      
    },
    audio: function(){
      button_audio=new Audio(this.audion_trans);
      button_audio.play();
    },
    audiochi: function(id){
      button_audio=new Audio(chi_keywords_data[id].audio);
      button_audio.play();
    },
    audiotai: function(id){
      button_audio=new Audio(tai_keywords_data[id].audio);
      button_audio.play();
    },
    play: function(id){
      this.videoid=all_sentence[id].t;
      this.video=1;
      
      // $('#video').attr("src","'https://www.youtube.com/embed/WmokF1c7DD8?real=0&autoplay=1&start='+videoid");  
      
      // $(".sentenceout").css("color","#1B9B83");
      // $(".subsentenceout").css("color","#1B9B83");
      
    }
  }
  
})