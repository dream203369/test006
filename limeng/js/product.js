// JavaScript Document

/*浏览同级分类动态显示*/
var bookSort=new Array("中国当代小说（13880）","中国近现代小...（640）","中国古典小说（1547）","四大名著（696）","港澳台小说（838）","外国小说（5119）","侦探/悬疑/推...（2519）","惊悚/恐怖（798）","魔幻（369）","科幻 （513）","武侠（574）","军事（726）","情感 （6700）","社会（4855）","都市（949）","乡土（99）","职场（176）","财经（292）","官场（438）","历史（1329）","影视小说（501）","作品集（2019）","世界名著（3273）");

function productList(){
	bookList=document.getElementById("product_catList_class");
	for(var i in bookSort){
		var bookTitle="<li> ·<a href='#' class='blue'>"+bookSort[i]+"</a></li>";
		bookList.innerHTML+=bookTitle;
		}
	}


window.onload=function(){
	productList();
	}

