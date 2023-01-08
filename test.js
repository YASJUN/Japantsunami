function forEach2(int,callbackfn){
  var i = 0;
  var u;
  var re = [];
  for(i=0; i<int.length; i++){
      u = callbackfn(int[i],i);
      if(u!==void(0))re.push(u);
  }
  if(re.length == 0)return i;else return re;
}
var area;
var datetime;
var height;
var list;

function tsunamifn(){
	$.ajax({
	    type: "GET",
	    dataType: "html",
		url: "tsunami.html",
	    success: function(data){
	      var height = forEach2($(data).find('.tsunami-info-entries td.height'), function(c, i){
	          return $(c).text();
	      });
	      var list = [];
	      forEach2(area, function(c, i){
	          list.push({name: area[i],  height: height[i]});
	      });
	      tsunamiTexts = [];
	      if($(data).find('.tsunami-info-entries td.height').length){
	        list.forEach(function(c){
	          if(c.time=="---")tsunamiTexts.push("   津波情報 | "+c.name+" "+c.height+"　 "); else tsunamiTexts.push("   津波情報 | "+c.name+" "+c.height+"("+c.time+")　 ");
	        });
	        cancelled = false;
	      } else {
	        cancelled = true;
	      };
	      if(cancelled === true){
	      } else {
					var ms = "";
					   list.forEach(function(c,i){//定义循环
							mh = Number(c.height.replace(/[^0-9.]/g, ""));
								if(area[i]=="オホーツク海沿岸"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/01';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="北海道太平洋沿岸東部"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/02';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="北海道太平洋沿岸中部"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/03';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="北海道太平洋沿岸西部"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/04';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="北海道日本海沿岸北部"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/05';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="北海道日本海沿岸南部"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/06';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="陸奥湾"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/07';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="青森県日本海沿岸"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/08';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="青森県太平洋沿岸"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/09';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="岩手県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/10';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="宮城県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/11';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="福島県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/12';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="秋田県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/13';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="山形県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/14';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="茨城県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/15';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="千葉県九十九里・外房"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/16';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="千葉県内房"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/17';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="東京湾内湾"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/18';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="伊豆諸島"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/19';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="小笠原諸島"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/20';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="相模湾・三浦半島"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/21';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="静岡県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/22';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="愛知県外海"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/23';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="伊勢・三河湾"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/24';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="三重県南部"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/25';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="新潟県上中下越"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/26';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="佐渡"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/27';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="富山県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/28';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="石川県能登"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/29';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="石川県加賀"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/30';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="福井県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/31';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="京都府"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/32';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="兵庫県北部"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/33';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="兵庫県瀬戸内海沿岸"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/34';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="淡路島南部"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/35';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="大阪府"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/36';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="和歌山県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/37';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="鳥取県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/38';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="島根県出雲・石見"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/39';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="隠岐"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/40';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="岡山県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/41';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="広島県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/42';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="香川県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/43';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="愛媛県瀬戸内海沿岸"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/44';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="愛媛県宇和海沿岸"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/45';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="徳島県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/46';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								if(area[i]=="高知県"){
									ms+='<div class="line">'
									ms+='<img src="img/tsunami/47';
									ms+=(mh>0.2&mh<=1?"1":mh<=3?"2":mh>3?"3":"0");
									ms+='.png"></div>';
									document.getElementById("frist").insertAdjacentHTML("afterend",ms)
								}
								
	   });
			
	      }
	    }
	  });
}
tsunamifn()
setInterval(tsunamifn,6000)