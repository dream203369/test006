// JavaScript Document

/*���ͬ�����ද̬��ʾ*/
var bookSort=new Array("�й�����С˵��13880��","�й����ִ�С...��640��","�й��ŵ�С˵��1547��","�Ĵ�������696��","�۰�̨С˵��838��","���С˵��5119��","��̽/����/��...��2519��","���/�ֲ���798��","ħ�ã�369��","�ƻ� ��513��","������574��","���£�726��","��� ��6700��","��ᣨ4855��","���У�949��","������99��","ְ����176��","�ƾ���292��","�ٳ���438��","��ʷ��1329��","Ӱ��С˵��501��","��Ʒ����2019��","����������3273��");

function productList(){
	bookList=document.getElementById("product_catList_class");
	for(var i in bookSort){
		var bookTitle="<li> ��<a href='#' class='blue'>"+bookSort[i]+"</a></li>";
		bookList.innerHTML+=bookTitle;
		}
	}


window.onload=function(){
	productList();
	}

