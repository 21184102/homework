var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result
function preload(){
  song = loadSound("1116.mp3");
}

  function setup() {
  createCanvas(windowWidth, windowHeight);
  //按鈕一
  music_btn = createButton("撥放音樂")
  music_btn.position(10,10) //X、Y位置在(10,10)的地方畫一個方框
  music_btn.size(350, 100);//寬高 (350,100)
  music_btn.style('background-color', 'black');//改變按鈕的背景顏色
  music_btn.style('font-size', '44px');//按鈕字的大小
  music_btn.style('color', 'white');//按鈕字的顏色
  music_btn.mousePressed(music_btn_pressed)
  
   //按鈕二
   mouse_btn = createButton("暫停")
   mouse_btn.position(370,10)
   mouse_btn.size(350, 100);
   mouse_btn.style('background-color', '#f3c4fb');
   mouse_btn.style('font-size', '44px');
   mouse_btn.style('color', 'white');
   mouse_btn.mousePressed(mouse_btn_pressed)

   //語音辨識
  Speech_btn = createButton("語音辨識(跳舞/不要跳)")
  Speech_btn.position(740,10)
  Speech_btn.size(350, 100);
  Speech_btn.style('background-color', 'black');
  Speech_btn.style('font-size', '32px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePressed(Speech_btn_pressed)

  }


function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  mosueIsplay = false
  amp=new p5.Amplitude() 
  music_btn.style('background-color','#f3c4fb')
  mouse_btn.style('background-color','black')
  Speech_btn.style('background-color','black') 

}
function mouse_btn_pressed(){
  song.pause()
  mosueIsplay = true
  songIsplay = false
  music_btn.style('background-color','black')
  mouse_btn.style('background-color','#f3c4fb')
  Speech_btn.style('background-color','black') 

}
function Speech_btn_pressed(){
  music_btn.style('background-color','black')
  mouse_btn.style('background-color','black')
  Speech_btn.style('background-color','#f3c4fb') 
  myRec.onResult = showResult;
  myRec.start();  
  


}

function showResult()
	{
		if(myRec.resultValue==true) {
            //顯示辨識文字
          push()
            translate(0,0)
            background(192, 255, 192);
            fill(255,0,0)
            textStyle("italic")
            text(myRec.resultString,1200,10);
            text(myRec.resultString,0, height/2);
          pop()
        //=======================
          result = myRec.resultString
          if(myRec.resultString==="跳舞")
          {
            music_btn_pressed()
          }
          if(myRec.resultString==="不要跳")
          {
            song.pause()
            mosueIsplay = true
            songIsplay = false
            }
		}
	}


function draw() {
  background("#fbc4ab");
  textSize(30)
  text("X:"+mouseX+"Y:"+mouseY,100,100)
  
  push()
  textSize(50)
  fill(255,0,0)  
  text(result,1100,100);   
  pop()
 
{
push()
  translate(width/2,height/2)
  
  fill(255)
  ellipse(0,0,200)//頭
  fill(255)
  ellipse(-40,-30,50)
  ellipse(+40,-30,50)//左右眼眶

  ellipse(+100+mouseX/500,+55,40)//尾巴

  fill(255,0,0)
  ellipse(-40+mouseX/200,-30,30)
  ellipse(+40+mouseX/200,-30,30)//左右眼珠

  fill(255)
  ellipse(-60,-125+mouseY/100,35,100)
  ellipse(+60,-125+mouseY/100,35,100)//左右耳

  fill("#FFECF5")
  ellipse(-60,-107+mouseY/100,30,60)
  ellipse(+60,-107+mouseY/100,30,60)//左右耳

  fill(255)
  noStroke()
  ellipse(-42+mouseX/200,-32,15)
  ellipse(+42+mouseX/200,-32,15)

  ellipse(-50+mouseX/200,-25,10)
  ellipse(+50+mouseX/200,-25,10)//左右眼白

  
  fill("#FFB5B5")
  ellipse(-60,-10,25,15)
  ellipse(+60,-10,25,15)//腮紅

pop()  
}

{
push()
  translate(width/3,height/3)
  fill("#FF8000")
  ellipse(-20,+150,50,90)
  fill("#009100")

  ellipse(-30,+100,20,30)
  ellipse(-10,+100,20,30)
  ellipse(-20,+100,20,30)

pop()

}


}