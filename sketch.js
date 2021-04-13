var score =0;


function preload(){
  ghost1Img = loadAnimation("ghost1.png")
  ghost2Img = loadAnimation("ghost2.png")
  ghost3Img = loadAnimation("ghost3.png")
  ghost4Img = loadAnimation("ghost4.png")

  blueghostImg = loadAnimation("blueghost.png")
  coinImg = loadAnimation("coin1.png")
  cupImg = loadAnimation("cup.png")

pacmanUp=loadAnimation("pacmanup.png","pacman.png")
pacmanDown=loadAnimation("pacmandown.png","pacman.png")
pacmanLeft=loadAnimation("pacmanleft.png","pacman.png")
pacmanRight=loadAnimation("pacmanright.png","pacman.png")
wallImg = loadAnimation("wall1.png")
wallImg1 = loadAnimation("wall2.png")
wallcornerImg = loadAnimation("wallcorner1.png")
wallcornerImg1 = loadAnimation("wallcorner.png")
}

function setup() {
  createCanvas(600,500);
 pacman= createSprite(20, 120);
pacman.addAnimation("right",pacmanRight)
pacman.addAnimation("left",pacmanLeft)
pacman.addAnimation("down",pacmanDown)
pacman.addAnimation("up",pacmanUp)

pacman.scale=0.2
wall1 = createSprite(190,17)
wall1.addAnimation("wall",wallImg)

wall2 = createSprite(95,60)
wall2.addAnimation("wall1",wallImg1)


wall3 = createSprite(505,60)
wall3.addAnimation("wall1",wallImg1)

wall4 = createSprite(280,17)
wall4.addAnimation("wall",wallImg)

wall5 = createSprite(370,17)
wall5.addAnimation("wall",wallImg)

wall6 = createSprite(460,17)
wall6.addAnimation("wall",wallImg)


wall7 = createSprite(140,17)
wall7.addAnimation("wall",wallImg)



wall8 = createSprite(550,105)
wall8.addAnimation("wall",wallImg)

wall9 = createSprite(550,140)
wall9.addAnimation("wall",wallImg)

wall10 = createSprite(130,80)
wall10.addAnimation("wall1",wallImg1)
wall10.scale=0.6

wall11 = createSprite(165,50)
wall11.addAnimation("wall1",wallImg)
wall11.scale=0.8

wall12 = createSprite(260,80)
wall12.addAnimation("wall1",wallImg1)
wall12.scale=0.6

wall13 = createSprite(300,50)
wall13.addAnimation("wall1",wallImg)
wall13.scale=0.9



wall14 = createSprite(340,80)
wall14.addAnimation("wall1",wallImg1)
wall14.scale=0.6

wall15 = createSprite(470,80)
wall15.addAnimation("wall1",wallImg1)
wall15.scale=0.6

wall6 = createSprite(435,50)
wall6.addAnimation("wall1",wallImg)
wall6.scale=0.8

wall17 = createSprite(50,105)
wall17.addAnimation("wall",wallImg)


wall18 = createSprite(50,140)
wall18.addAnimation("wall",wallImg)

wall19= createSprite(300,140)
wall19.addAnimation("wall",wallImg)


wall20 = createSprite(300,113)
wall20.addAnimation("wall",wallImg1)
wall20.scale=0.7


wall21= createSprite(403,145)
wall21.addAnimation("wall",wallImg1)
wall21.scale=1.3


wall22= createSprite(435,140)
wall22.addAnimation("wall",wallImg)
wall22.scale=0.8



wall23= createSprite(195,145)
wall23.addAnimation("wall",wallImg1)
wall23.scale=1.3


wall24= createSprite(165,140)
wall24.addAnimation("wall",wallImg)
wall24.scale=0.8


wall25= createSprite(93,190)
wall25.addAnimation("wall",wallImg1)
wall25.scale=1.1

wall26= createSprite(93,290)
wall26.addAnimation("wall",wallImg1)
wall26.scale=1.1

wall27 = createSprite(50,337)
wall27.addAnimation("wall",wallImg)

wall28= createSprite(507,190)
wall28.addAnimation("wall",wallImg1)
wall28.scale=1.1

wall29= createSprite(507,290)
wall29.addAnimation("wall",wallImg1)
wall29.scale=1.1

wall30 = createSprite(550,337)
wall30.addAnimation("wall",wallImg)

wall31 = createSprite(550,372)
wall31.addAnimation("wall",wallImg)

wall32 = createSprite(50,372)
wall32.addAnimation("wall",wallImg)




wall33= createSprite(140,275)
wall33.addAnimation("wall",wallImg1)
wall33.scale=1.4


wall34= createSprite(460,275)
wall34.addAnimation("wall",wallImg1)
wall34.scale=1.4


wall35 = createSprite(260,275)
wall35.addAnimation("wall1",wallImg1)
wall35.scale=0.9

wall36 = createSprite(300,235)
wall36.addAnimation("wall1",wallImg)
wall36.scale=0.9



wall37 = createSprite(340,275)
wall37.addAnimation("wall1",wallImg1)
wall37.scale=0.9


wall38 = createSprite(300,320)
wall38.addAnimation("wall",wallImg1)
wall38.scale=1.2


wall39 = createSprite(210,372)
wall39.addAnimation("wall",wallImg)
wall39.scale=1.2



wall40= createSprite(205,330)
wall40.addAnimation("wall",wallImg1)
wall40.scale=0.8



wall41 = createSprite(390,372)
wall41.addAnimation("wall",wallImg)
wall41.scale=1.2



wall42= createSprite(395,330)
wall42.addAnimation("wall",wallImg1)
wall42.scale=0.8

wall43= createSprite(95,390)
wall43.addAnimation("wall",wallImg1)
wall43.scale=0.5

wall44= createSprite(500,390)
wall44.addAnimation("wall",wallImg1)
wall44.scale=0.5

wall45 = createSprite(135,417)
wall45.addAnimation("wall",wallImg)
wall45.scale=0.9

wall46 = createSprite(220,417)
wall46.addAnimation("wall",wallImg)
wall46.scale=0.9

wall47 = createSprite(305,417)
wall47.addAnimation("wall",wallImg)
wall47.scale=0.9

wall48 = createSprite(390,417)
wall48.addAnimation("wall",wallImg)
wall48.scale=0.9

wall49 = createSprite(460,417)
wall49.addAnimation("wall",wallImg)
wall49.scale=0.9

// coins

// booster coin
coin1 = createSprite(115,40)
coin1.addAnimation("coin",coinImg)
coin1.scale=0.1

coin2 = createSprite(115,55)
coin2.addAnimation("coin",coinImg)
coin2.scale=0.05


coin3= createSprite(115,70)
coin3.addAnimation("coin",coinImg)
coin3.scale=0.05

coin4= createSprite(115,85)
coin4.addAnimation("coin",coinImg)
coin4.scale=0.05

coin5= createSprite(115,100)
coin5.addAnimation("coin",coinImg)
coin5.scale=0.05

coin6= createSprite(115,115)
coin6.addAnimation("coin",coinImg)
coin6.scale=0.05

coin7= createSprite(115,130)
coin7.addAnimation("coin",coinImg)
coin7.scale=0.05

coin8= createSprite(115,145)
coin8.addAnimation("coin",coinImg)
coin8.scale=0.05

coin9= createSprite(115,160)
coin9.addAnimation("coin",coinImg)
coin9.scale=0.05

coin10= createSprite(115,175)
coin10.addAnimation("coin",coinImg)
coin10.scale=0.05

coin11= createSprite(115,190)
coin11.addAnimation("coin",coinImg)
coin11.scale=0.05

coin12= createSprite(115,205)
coin12.addAnimation("coin",coinImg)
coin12.scale=0.05

coin13= createSprite(115,220)
coin13.addAnimation("coin",coinImg)
coin13.scale=0.05

coin14= createSprite(115,235)
coin14.addAnimation("coin",coinImg)
coin14.scale=0.05

coin15= createSprite(115,250)
coin15.addAnimation("coin",coinImg)
coin15.scale=0.05

coin16= createSprite(115,265)
coin16.addAnimation("coin",coinImg)
coin16.scale=0.05

coin17= createSprite(115,280)
coin17.addAnimation("coin",coinImg)
coin17.scale=0.05

coin18= createSprite(115,295)
coin18.addAnimation("coin",coinImg)
coin18.scale=0.05

coin19= createSprite(115,310)
coin19.addAnimation("coin",coinImg)
coin19.scale=0.05

coin20= createSprite(115,325)
coin20.addAnimation("coin",coinImg)
coin20.scale=0.05

coin21= createSprite(115,340)
coin21.addAnimation("coin",coinImg)
coin21.scale=0.05

coin22= createSprite(115,355)
coin22.addAnimation("coin",coinImg)
coin22.scale=0.05

coin23= createSprite(115,370)
coin23.addAnimation("coin",coinImg)
coin23.scale=0.05

coin24= createSprite(115,385)
coin24.addAnimation("coin",coinImg)
coin24.scale=0.05

coin25= createSprite(115,400)
coin25.addAnimation("coin",coinImg)
coin25.scale=0.05

//hello

coin26= createSprite(130,40)
coin26.addAnimation("coin",coinImg)
coin26.scale=0.05

coin27= createSprite(145,40)
coin27.addAnimation("coin",coinImg)
coin27.scale=0.05

coin28= createSprite(160,40)
coin28.addAnimation("coin",coinImg)
coin28.scale=0.05

coin29= createSprite(175,40)
coin29.addAnimation("coin",coinImg)
coin29.scale=0.05

coin30= createSprite(190,40)
coin30.addAnimation("coin",coinImg)
coin30.scale=0.05

coin31= createSprite(205,40)
coin31.addAnimation("coin",coinImg)
coin31.scale=0.05
//line 1 
coin32= createSprite(220,40)
coin32.addAnimation("coin",coinImg)
coin32.scale=0.05

coin33= createSprite(232,40)
coin33.addAnimation("coin",coinImg)
coin33.scale=0.05
// line 2
coin34= createSprite(245,40)
coin34.addAnimation("coin",coinImg)
coin34.scale=0.05

coin35= createSprite(265,40)
coin35.addAnimation("coin",coinImg)
coin35.scale=0.05

coin36= createSprite(280,40)
coin36.addAnimation("coin",coinImg)
coin36.scale=0.05

coin37= createSprite(295,40)
coin37.addAnimation("coin",coinImg)
coin37.scale=0.05

coin38= createSprite(310,40)
coin38.addAnimation("coin",coinImg)
coin38.scale=0.05

coin39= createSprite(325,40)
coin39.addAnimation("coin",coinImg)
coin39.scale=0.05

coin40= createSprite(340,40)
coin40.addAnimation("coin",coinImg)
coin40.scale=0.05
//line 3
coin41= createSprite(355,40)
coin41.addAnimation("coin",coinImg)
coin41.scale=0.05


coin01= createSprite(370,40)
coin01.addAnimation("coin",coinImg)
coin01.scale=0.05

//line 4
coin42= createSprite(385,40)
coin42.addAnimation("coin",coinImg)
coin42.scale=0.05

coin43= createSprite(400,40)
coin43.addAnimation("coin",coinImg)
coin43.scale=0.05

coin44= createSprite(415,40)
coin44.addAnimation("coin",coinImg)
coin44.scale=0.05

coin45= createSprite(430,40)
coin45.addAnimation("coin",coinImg)
coin45.scale=0.05

coin46= createSprite(445,40)
coin46.addAnimation("coin",coinImg)
coin46.scale=0.05

coin47= createSprite(460,40)
coin47.addAnimation("coin",coinImg)
coin47.scale=0.05

coin48= createSprite(475,40)
coin48.addAnimation("coin",coinImg)
coin48.scale=0.05

coin49= createSprite(487,40)
coin49.addAnimation("coin",coinImg)
coin49.scale=0.05
//hi!

coin50= createSprite(487,55)
coin50.addAnimation("coin",coinImg)
coin50.scale=0.05

coin51= createSprite(487,70)
coin51.addAnimation("coin",coinImg)
coin51.scale=0.05

coin52= createSprite(487,85)
coin52.addAnimation("coin",coinImg)
coin52.scale=0.05

coin53= createSprite(487,100)
coin53.addAnimation("coin",coinImg)
coin53.scale=0.05

coin54= createSprite(487,115)
coin54.addAnimation("coin",coinImg)
coin54.scale=0.05

coin55= createSprite(487,130)
coin55.addAnimation("coin",coinImg)
coin55.scale=0.05

coin56= createSprite(487,145)
coin56.addAnimation("coin",coinImg)
coin56.scale=0.05

coin57= createSprite(487,160)
coin57.addAnimation("coin",coinImg)
coin57.scale=0.05

coin58= createSprite(487,175)
coin58.addAnimation("coin",coinImg)
coin58.scale=0.05

coin59= createSprite(487,190)
coin59.addAnimation("coin",coinImg)
coin59.scale=0.05

coin60= createSprite(487,205)
coin60.addAnimation("coin",coinImg)
coin60.scale=0.05

coin61= createSprite(487,220)
coin61.addAnimation("coin",coinImg)
coin61.scale=0.05

coin62= createSprite(487,235)
coin62.addAnimation("coin",coinImg)
coin62.scale=0.05

coin63= createSprite(487,250)
coin63.addAnimation("coin",coinImg)
coin63.scale=0.05
// booster coin
coin64= createSprite(487,265)
coin64.addAnimation("coin",coinImg)
coin64.scale=0.1

coin65= createSprite(487,280)
coin65.addAnimation("coin",coinImg)
coin65.scale=0.05

coin66= createSprite(487,295)
coin66.addAnimation("coin",coinImg)
coin66.scale=0.05

coin67= createSprite(487,310)
coin67.addAnimation("coin",coinImg)
coin67.scale=0.05

coin68= createSprite(487,325)
coin68.addAnimation("coin",coinImg)
coin68.scale=0.05

coin69= createSprite(487,340)
coin69.addAnimation("coin",coinImg)
coin69.scale=0.05

coin70= createSprite(487,355)
coin70.addAnimation("coin",coinImg)
coin70.scale=0.05

coin71= createSprite(487,370)
coin71.addAnimation("coin",coinImg)
coin71.scale=0.05

coin72= createSprite(487,385)
coin72.addAnimation("coin",coinImg)
coin72.scale=0.05

coin73= createSprite(487,400)
coin73.addAnimation("coin",coinImg)
coin73.scale=0.05
//  :)

// booster coin
coin74= createSprite(130,400)
coin74.addAnimation("coin",coinImg)
coin74.scale=0.1

coin75= createSprite(145,400)
coin75.addAnimation("coin",coinImg)
coin75.scale=0.05

coin76= createSprite(160,400)
coin76.addAnimation("coin",coinImg)
coin76.scale=0.05

coin77= createSprite(175,400)
coin77.addAnimation("coin",coinImg)
coin77.scale=0.05

coin78= createSprite(190,400)
coin78.addAnimation("coin",coinImg)
coin78.scale=0.05

coin79= createSprite(205,400)
coin79.addAnimation("coin",coinImg)
coin79.scale=0.05

coin80= createSprite(220,400)
coin80.addAnimation("coin",coinImg)
coin80.scale=0.05

coin81= createSprite(235,400)
coin81.addAnimation("coin",coinImg)
coin81.scale=0.05

coin82= createSprite(250,400)
coin82.addAnimation("coin",coinImg)
coin82.scale=0.05

coin83= createSprite(265,400)
coin83.addAnimation("coin",coinImg)
coin83.scale=0.05

coin84= createSprite(280,400)
coin84.addAnimation("coin",coinImg)
coin84.scale=0.05


coin85= createSprite(295,400)
coin85.addAnimation("coin",coinImg)
coin85.scale=0.05

coin86= createSprite(310,400)
coin86.addAnimation("coin",coinImg)
coin86.scale=0.05

coin87= createSprite(325,400)
coin87.addAnimation("coin",coinImg)
coin87.scale=0.05

coin88= createSprite(340,400)
coin88.addAnimation("coin",coinImg)
coin88.scale=0.05

coin89= createSprite(355,400)
coin89.addAnimation("coin",coinImg)
coin89.scale=0.05

coin90= createSprite(370,400)
coin90.addAnimation("coin",coinImg)
coin90.scale=0.05

coin91= createSprite(385,400)
coin91.addAnimation("coin",coinImg)
coin91.scale=0.05

coin92= createSprite(400,400)
coin92.addAnimation("coin",coinImg)
coin92.scale=0.05

coin93= createSprite(415,400)
coin93.addAnimation("coin",coinImg)
coin93.scale=0.05

coin94= createSprite(430,400)
coin94.addAnimation("coin",coinImg)
coin94.scale=0.05

coin95= createSprite(445,400)
coin95.addAnimation("coin",coinImg)
coin95.scale=0.05

coin96= createSprite(460,400)
coin96.addAnimation("coin",coinImg)
coin96.scale=0.05

coin97= createSprite(475,400)
coin97.addAnimation("coin",coinImg)
coin97.scale=0.05
//line 1

coin98= createSprite(220,55)
coin98.addAnimation("coin",coinImg)
coin98.scale=0.05

coin99= createSprite(220,70)
coin99.addAnimation("coin",coinImg)
coin99.scale=0.05

coin100= createSprite(220,85)
coin100.addAnimation("coin",coinImg)
coin100.scale=0.05

coin101= createSprite(220,100)
coin101.addAnimation("coin",coinImg)
coin101.scale=0.05

coin102= createSprite(220,115)
coin102.addAnimation("coin",coinImg)
coin102.scale=0.05

coin103= createSprite(220,130)
coin103.addAnimation("coin",coinImg)
coin103.scale=0.05

coin104= createSprite(220,145)
coin104.addAnimation("coin",coinImg)
coin104.scale=0.05

coin105= createSprite(220,160)
coin105.addAnimation("coin",coinImg)
coin105.scale=0.05

coin106= createSprite(220,175)
coin106.addAnimation("coin",coinImg)
coin106.scale=0.05

coin107= createSprite(220,190)
coin107.addAnimation("coin",coinImg)
coin107.scale=0.05

coin108= createSprite(220,205)
coin108.addAnimation("coin",coinImg)
coin108.scale=0.05

coin109= createSprite(220,220)
coin109.addAnimation("coin",coinImg)
coin109.scale=0.05

coin110= createSprite(220,235)
coin110.addAnimation("coin",coinImg)
coin110.scale=0.05

coin111= createSprite(220,250)
coin111.addAnimation("coin",coinImg)
coin111.scale=0.05

coin112= createSprite(220,265)
coin112.addAnimation("coin",coinImg)
coin112.scale=0.05

coin113= createSprite(220,280)
coin113.addAnimation("coin",coinImg)
coin113.scale=0.05

coin114= createSprite(220,295)
coin114.addAnimation("coin",coinImg)
coin114.scale=0.05

coin115= createSprite(220,310)
coin115.addAnimation("coin",coinImg)
coin115.scale=0.05

coin116= createSprite(220,325)
coin116.addAnimation("coin",coinImg)
coin116.scale=0.05

coin117= createSprite(220,340)
coin117.addAnimation("coin",coinImg)
coin117.scale=0.05

coin118= createSprite(220,355)
coin118.addAnimation("coin",coinImg)
coin118.scale=0.05

// line 2
coin119= createSprite(245,55)
coin119.addAnimation("coin",coinImg)
coin119.scale=0.05

coin120= createSprite(245,70)
coin120.addAnimation("coin",coinImg)
coin120.scale=0.05

coin121= createSprite(245,85)
coin121.addAnimation("coin",coinImg)
coin121.scale=0.05

coin122= createSprite(245,100)
coin122.addAnimation("coin",coinImg)
coin122.scale=0.05

coin123= createSprite(245,115)
coin123.addAnimation("coin",coinImg)
coin123.scale=0.05

coin124= createSprite(245,130)
coin124.addAnimation("coin",coinImg)
coin124.scale=0.05

coin125= createSprite(245,145)
coin125.addAnimation("coin",coinImg)
coin125.scale=0.05

coin126= createSprite(245,160)
coin126.addAnimation("coin",coinImg)
coin126.scale=0.05

coin127= createSprite(245,175)
coin127.addAnimation("coin",coinImg)
coin127.scale=0.05

coin128= createSprite(245,190)
coin128.addAnimation("coin",coinImg)
coin128.scale=0.05

coin129= createSprite(245,205)
coin129.addAnimation("coin",coinImg)
coin129.scale=0.05

coin130= createSprite(245,220)
coin130.addAnimation("coin",coinImg)
coin130.scale=0.05

coin131= createSprite(245,235)
coin131.addAnimation("coin",coinImg)
coin131.scale=0.05

coin132= createSprite(245,250)
coin132.addAnimation("coin",coinImg)
coin132.scale=0.05

coin133= createSprite(245,265)
coin133.addAnimation("coin",coinImg)
coin133.scale=0.05

coin134= createSprite(245,280)
coin134.addAnimation("coin",coinImg)
coin134.scale=0.05

coin135= createSprite(245,295)
coin135.addAnimation("coin",coinImg)
coin135.scale=0.05

coin136= createSprite(245,310)
coin136.addAnimation("coin",coinImg)
coin136.scale=0.05

coin137= createSprite(245,325)
coin137.addAnimation("coin",coinImg)
coin137.scale=0.05

coin138= createSprite(245,340)
coin138.addAnimation("coin",coinImg)
coin138.scale=0.05

coin139= createSprite(245,355)
coin139.addAnimation("coin",coinImg)
coin139.scale=0.05

// line 3


coin140= createSprite(355,55)
coin140.addAnimation("coin",coinImg)
coin140.scale=0.05

coin141= createSprite(355,70)
coin141.addAnimation("coin",coinImg)
coin141.scale=0.05

coin142= createSprite(355,85)
coin142.addAnimation("coin",coinImg)
coin142.scale=0.05

coin143= createSprite(355,100)
coin143.addAnimation("coin",coinImg)
coin143.scale=0.05

coin144= createSprite(355,115)
coin144.addAnimation("coin",coinImg)
coin144.scale=0.05

coin145= createSprite(355,130)
coin145.addAnimation("coin",coinImg)
coin145.scale=0.05

coin146= createSprite(355,145)
coin146.addAnimation("coin",coinImg)
coin146.scale=0.05

coin147= createSprite(355,160)
coin147.addAnimation("coin",coinImg)
coin147.scale=0.05

coin148= createSprite(355,175)
coin148.addAnimation("coin",coinImg)
coin148.scale=0.05

coin149= createSprite(355,190)
coin149.addAnimation("coin",coinImg)
coin149.scale=0.05

coin150= createSprite(355,205)
coin150.addAnimation("coin",coinImg)
coin150.scale=0.05

coin151= createSprite(355,220)
coin151.addAnimation("coin",coinImg)
coin151.scale=0.05

coin152= createSprite(355,235)
coin152.addAnimation("coin",coinImg)
coin152.scale=0.05

coin153= createSprite(355,250)
coin153.addAnimation("coin",coinImg)
coin153.scale=0.05

coin154= createSprite(355,265)
coin154.addAnimation("coin",coinImg)
coin154.scale=0.05

coin155= createSprite(355,280)
coin155.addAnimation("coin",coinImg)
coin155.scale=0.05

coin156= createSprite(355,295)
coin156.addAnimation("coin",coinImg)
coin156.scale=0.05

coin157= createSprite(355,310)
coin157.addAnimation("coin",coinImg)
coin157.scale=0.05

coin158= createSprite(355,325)
coin158.addAnimation("coin",coinImg)
coin158.scale=0.05

coin159= createSprite(355,340)
coin159.addAnimation("coin",coinImg)
coin159.scale=0.05

coin160= createSprite(355,355)
coin160.addAnimation("coin",coinImg)
coin160.scale=0.05

// line 4

coin161= createSprite(385,55)
coin161.addAnimation("coin",coinImg)
coin161.scale=0.05

coin162= createSprite(385,70)
coin162.addAnimation("coin",coinImg)
coin162.scale=0.05

coin163= createSprite(385,85)
coin163.addAnimation("coin",coinImg)
coin163.scale=0.05

coin164= createSprite(385,100)
coin164.addAnimation("coin",coinImg)
coin164.scale=0.05

coin165= createSprite(385,115)
coin165.addAnimation("coin",coinImg)
coin165.scale=0.05

coin166= createSprite(385,130)
coin166.addAnimation("coin",coinImg)
coin166.scale=0.05

coin167= createSprite(385,145)
coin167.addAnimation("coin",coinImg)
coin167.scale=0.05

coin168= createSprite(385,160)
coin168.addAnimation("coin",coinImg)
coin168.scale=0.05

coin169= createSprite(385,175)
coin169.addAnimation("coin",coinImg)
coin169.scale=0.05

coin170= createSprite(385,190)
coin170.addAnimation("coin",coinImg)
coin170.scale=0.05

coin171= createSprite(385,205)
coin171.addAnimation("coin",coinImg)
coin171.scale=0.05

coin172= createSprite(385,220)
coin172.addAnimation("coin",coinImg)
coin172.scale=0.05

coin173= createSprite(385,235)
coin173.addAnimation("coin",coinImg)
coin173.scale=0.05

coin174= createSprite(385,250)
coin174.addAnimation("coin",coinImg)
coin174.scale=0.05

coin175= createSprite(385,265)
coin175.addAnimation("coin",coinImg)
coin175.scale=0.05

coin176= createSprite(385,280)
coin176.addAnimation("coin",coinImg)
coin176.scale=0.05

coin177= createSprite(385,295)
coin177.addAnimation("coin",coinImg)
coin177.scale=0.05

coin178= createSprite(385,310)
coin178.addAnimation("coin",coinImg)
coin178.scale=0.05

coin179= createSprite(385,325)
coin179.addAnimation("coin",coinImg)
coin179.scale=0.05

coin180= createSprite(385,340)
coin180.addAnimation("coin",coinImg)
coin180.scale=0.05

coin181= createSprite(385,355)
coin181.addAnimation("coin",coinImg)
coin181.scale=0.05

// part 1 (1)

coin182= createSprite(130,130)
coin182.addAnimation("coin",coinImg)
coin182.scale=0.05

coin02= createSprite(130,115)
coin02.addAnimation("coin",coinImg)
coin02.scale=0.05



coin183= createSprite(145,130)
coin183.addAnimation("coin",coinImg)
coin183.scale=0.05

coin184= createSprite(145,130)
coin184.addAnimation("coin",coinImg)
coin184.scale=0.05

coin185= createSprite(145,115)
coin185.addAnimation("coin",coinImg)
coin185.scale=0.05

coin186= createSprite(145,100)
coin186.addAnimation("coin",coinImg)
coin186.scale=0.05

coin187= createSprite(145,85)
coin187.addAnimation("coin",coinImg)
coin187.scale=0.05

coin188= createSprite(145,70)
coin188.addAnimation("coin",coinImg)
coin188.scale=0.05

// part 1 (2)


coin189= createSprite(160,130)
coin189.addAnimation("coin",coinImg)
coin189.scale=0.05

coin190= createSprite(160,115)
coin190.addAnimation("coin",coinImg)
coin190.scale=0.05

coin191= createSprite(160,100)
coin191.addAnimation("coin",coinImg)
coin191.scale=0.05

coin192= createSprite(160,85)
coin192.addAnimation("coin",coinImg)
coin192.scale=0.05

coin193= createSprite(160,70)
coin193.addAnimation("coin",coinImg)
coin193.scale=0.05


coin194= createSprite(175,62)
coin194.addAnimation("coin",coinImg)
coin194.scale=0.05

coin195= createSprite(175,72)
coin195.addAnimation("coin",coinImg)
coin195.scale=0.05

coin196= createSprite(190,62)
coin196.addAnimation("coin",coinImg)
coin196.scale=0.05

coin197= createSprite(190,72)
coin197.addAnimation("coin",coinImg)
coin197.scale=0.05

coin198= createSprite(205,62)
coin198.addAnimation("coin",coinImg)
coin198.scale=0.05

coin199= createSprite(205,70)
coin199.addAnimation("coin",coinImg)
coin199.scale=0.05

// part 2  (1)


coin200= createSprite(265,130)
coin200.addAnimation("coin",coinImg)
coin200.scale=0.05

coin201= createSprite(280,130)
coin201.addAnimation("coin",coinImg)
coin201.scale=0.05

coin202= createSprite(280,115)
coin202.addAnimation("coin",coinImg)
coin202.scale=0.05

coin203= createSprite(280,100)
coin203.addAnimation("coin",coinImg)
coin203.scale=0.05

coin204= createSprite(280,85)
coin204.addAnimation("coin",coinImg)
coin204.scale=0.05

coin205= createSprite(280,70)
coin205.addAnimation("coin",coinImg)
coin205.scale=0.05

coin206= createSprite(300,70)
coin206.addAnimation("coin",coinImg)
coin206.scale=0.05

coin207= createSprite(320,70)
coin207.addAnimation("coin",coinImg)
coin207.scale=0.05

coin208= createSprite(320,85)
coin208.addAnimation("coin",coinImg)
coin208.scale=0.05

coin209= createSprite(320,100)
coin209.addAnimation("coin",coinImg)
coin209.scale=0.05

coin210= createSprite(320,115)
coin210.addAnimation("coin",coinImg)
coin210.scale=0.05

coin211= createSprite(320,130)
coin211.addAnimation("coin",coinImg)
coin211.scale=0.05

coin212= createSprite(320,130)
coin212.addAnimation("coin",coinImg)
coin212.scale=0.05

coin213= createSprite(335,130)
coin213.addAnimation("coin",coinImg)
coin213.scale=0.05

// part 3 (1)

coin214= createSprite(400,70)
coin214.addAnimation("coin",coinImg)
coin214.scale=0.05

coin215= createSprite(400,62)
coin215.addAnimation("coin",coinImg)
coin215.scale=0.05

coin216= createSprite(415,70)
coin216.addAnimation("coin",coinImg)
coin216.scale=0.05

coin217= createSprite(415,62)
coin217.addAnimation("coin",coinImg)
coin217.scale=0.05

coin218= createSprite(430,70)
coin218.addAnimation("coin",coinImg)
coin218.scale=0.05

coin219= createSprite(430,62)
coin219.addAnimation("coin",coinImg)
coin219.scale=0.05
// booster coin
coin220= createSprite(445,70)
coin220.addAnimation("coin",coinImg)
coin220.scale=0.05

coin221= createSprite(460,70)
coin221.addAnimation("coin",coinImg)
coin221.scale=0.1

coin222= createSprite(445,85)
coin222.addAnimation("coin",coinImg)
coin222.scale=0.05

coin223= createSprite(460,85)
coin223.addAnimation("coin",coinImg)
coin223.scale=0.05

coin224= createSprite(445,100)
coin224.addAnimation("coin",coinImg)
coin224.scale=0.05

coin225= createSprite(460,100)
coin225.addAnimation("coin",coinImg)
coin225.scale=0.05

coin226= createSprite(445,115)
coin226.addAnimation("coin",coinImg)
coin226.scale=0.05

coin227= createSprite(460,115)
coin227.addAnimation("coin",coinImg)
coin227.scale=0.05

coin228= createSprite(445,130)
coin228.addAnimation("coin",coinImg)
coin228.scale=0.05

coin229= createSprite(460,130)
coin229.addAnimation("coin",coinImg)
coin229.scale=0.05

coin230= createSprite(470,130)
coin230.addAnimation("coin",coinImg)
coin230.scale=0.05

coin231= createSprite(470,115)
coin231.addAnimation("coin",coinImg)
coin231.scale=0.05

// part 4 (1)
coin232= createSprite(160,160)
coin232.addAnimation("coin",coinImg)
coin232.scale=0.05

coin233= createSprite(175,160)
coin233.addAnimation("coin",coinImg)
coin233.scale=0.05

coin234= createSprite(160,175)
coin234.addAnimation("coin",coinImg)
coin234.scale=0.05

coin235= createSprite(175,175)
coin235.addAnimation("coin",coinImg)
coin235.scale=0.05

coin236= createSprite(160,190)
coin236.addAnimation("coin",coinImg)
coin236.scale=0.05

coin237= createSprite(175,190)
coin237.addAnimation("coin",coinImg)
coin237.scale=0.05

coin238= createSprite(160,205)
coin238.addAnimation("coin",coinImg)
coin238.scale=0.05

coin239= createSprite(175,205)
coin239.addAnimation("coin",coinImg)
coin239.scale=0.05

coin240= createSprite(160,220)
coin240.addAnimation("coin",coinImg)
coin240.scale=0.05

coin241= createSprite(175,220)
coin241.addAnimation("coin",coinImg)
coin241.scale=0.05

coin242= createSprite(160,235)
coin242.addAnimation("coin",coinImg)
coin242.scale=0.05

coin243= createSprite(175,235)
coin243.addAnimation("coin",coinImg)
coin243.scale=0.05

coin244= createSprite(160,250)
coin244.addAnimation("coin",coinImg)
coin244.scale=0.05

coin245= createSprite(175,250)
coin245.addAnimation("coin",coinImg)
coin245.scale=0.05

coin246= createSprite(160,265)
coin246.addAnimation("coin",coinImg)
coin246.scale=0.05

coin247= createSprite(175,265)
coin247.addAnimation("coin",coinImg)
coin247.scale=0.05

coin248= createSprite(160,280)
coin248.addAnimation("coin",coinImg)
coin248.scale=0.05

coin249= createSprite(175,280)
coin249.addAnimation("coin",coinImg)
coin249.scale=0.05

coin250= createSprite(160,295)
coin250.addAnimation("coin",coinImg)
coin250.scale=0.05

coin251= createSprite(175,295)
coin251.addAnimation("coin",coinImg)
coin251.scale=0.05


coin252= createSprite(160,310)
coin252.addAnimation("coin",coinImg)
coin252.scale=0.05

coin253= createSprite(175,310)
coin253.addAnimation("coin",coinImg)
coin253.scale=0.05

coin254= createSprite(160,325)
coin254.addAnimation("coin",coinImg)
coin254.scale=0.05

coin255= createSprite(175,325)
coin255.addAnimation("coin",coinImg)
coin255.scale=0.05

coin256= createSprite(160,340)
coin256.addAnimation("coin",coinImg)
coin256.scale=0.05

coin257= createSprite(175,340)
coin257.addAnimation("coin",coinImg)
coin257.scale=0.05


coin258= createSprite(160,355)
coin258.addAnimation("coin",coinImg)
coin258.scale=0.05

coin259= createSprite(175,355)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

// part 4 (2)

coin259= createSprite(415,355)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,355)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,355)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,355)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,355)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,340)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,325)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,310)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,295)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,280)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,265)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,250)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,235)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,220)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(415,205)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05


coin259= createSprite(415,190)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05


coin259= createSprite(415,175)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05


coin259= createSprite(415,160)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(445,190)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05


coin259= createSprite(445,175)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05


coin259= createSprite(445,160)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05


coin259= createSprite(460,190)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05


coin259= createSprite(460,175)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05


coin259= createSprite(460,160)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05
// :)

coin259= createSprite(265,160)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(265,175)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(265,190)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(265,205)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(265,220)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05
// 
coin259= createSprite(280,220)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(280,160)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(280,175)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(280,190)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(280,205)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05
//
coin259= createSprite(295,220)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(295,160)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(295,175)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(295,190)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(295,205)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05
//
coin259= createSprite(310,220)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(310,160)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(310,175)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(310,190)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(310,205)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05
//
coin259= createSprite(325,220)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(325,160)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(325,175)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(325,190)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(325,205)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05
// part 5(1)
coin259= createSprite(320,260)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(320,280)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(320,300)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(320,320)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(320,340)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(320,360)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(320,380)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

//part 5 (2)


coin259= createSprite(280,260)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(280,280)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(280,300)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(280,320)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(280,340)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(280,360)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05

coin259= createSprite(280,380)
coin259.addAnimation("coin",coinImg)
coin259.scale=0.05
//part 5 (3)




























































































}

function draw() {
  background("black");  
pacmanControl()

  drawSprites();
}


function pacmanControl(){
  if (keyWentDown( UP_ARROW)){
    pacman.changeAnimation("up")
    pacman.velocityY=-3;
    pacman.velocityX=0;
  }
  if (keyWentDown( DOWN_ARROW)){
    pacman.changeAnimation("down")
    pacman.velocityY=3;
    pacman.velocityX=0;
  }
  if (keyWentDown( RIGHT_ARROW)){
    pacman.changeAnimation("right")
    pacman.velocityY=0;
    pacman.velocityX=3;
  }
  if (keyWentDown( LEFT_ARROW)){
    pacman.changeAnimation("left")
    pacman.velocityY=0;
    pacman.velocityX=-3;
  }
}




