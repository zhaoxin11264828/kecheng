
// 模拟数据 
var contacts = [
	
	{id:1003,name:"cucy",phone:"123434545"},
	{id:1004,name:"vucy",phone:"123434545"},
	{id:1005,name:"wucy",phone:"123434545"},
	{id:1006,name:"aucy",phone:"123434545"},
	{id:1007,name:"bucy",phone:"123434545"},
	{id:1008,name:"luxi",phone:"123434545"},
	{id:1009,name:"siss",phone:"123434545"},
	{id:10011,name:"bucy",phone:"123434545"},
	{id:10012,name:"luxi",phone:"123434545"},
	{id:10013,name:"siss",phone:"123434545"},
	{id:10010,name:"body",phone:"123434545"}

];



// 转换成这样的对象   键 为组别  按组加载 
//  var contacts = {
// 	'k':[

// 		{id:1001,name:"lucy",phone:"123434545"},
// 		{id:1002,name:"sucy",phone:"123434545"} 

// 	]
// 	'l':[

// 		{id:1001,name:"lucy",phone:"123434545"},
// 		{id:1002,name:"sucy",phone:"123434545"} 

// 	]
// }
// 获取已有数据


// 遍历  转成对象 按组 加载

// 定义空对象
var dict = [];
 contacts.forEach(function(v){
 	var k = v.name[0].toUpperCase();
 	// 取name首字母  大写做键值
 	// 建立空数组  放入首字母相同的对象
 	if(!dict[k]){
 		dict[k] = [];
 	} 
 	dict[k].push(v)  
})
 console.log(dict)

// 变为正序的数组
// 添加 组别 在页面中显示 
var $findlist = document.querySelector(".findlist");
var $ul = $findlist.querySelector("ul");
var $contacts = document.querySelector(".contacts");
var zimu = Object.keys(dict).sort();//返回的是一个数组
     zimu.forEach(function(v){ 

     // 渲染右侧字母  	
     	var li = document.createElement("li");
     	li.innerHTML = '<a href="#'+v+'">'+v+'</a>';
        $ul.appendChild(li);
     //按组渲染数据 
        var dt = document.createElement("dt");
        dt.id=v;
        dt.classList.add("title")
        dt.innerHTML = '<h3>'+v+'</h3>';
        $contacts.appendChild(dt);

		dict[v].forEach(function(v){
        	
        	var dd = document.createElement("dd");
             dd.classList.add("xinxi")
             dd.setAttribute("data-id",v.id)
        	dd.innerHTML = '<ul><li>'+v.name+'</li><li>'+v.phone+'</li></ul>';
        	 $contacts.appendChild(dd);
        })
        

     })
   
   var li =  $ul.firstElementChild;
   console.log(li)
   $findlist.style.height = li.offsetHeight*zimu.length+"px";

   var $tips = document.querySelector(".tips");
   var $num = document.querySelector(".num");
   var $name = document.querySelector(".name");

// 打开弹出窗口
   $contacts.addEventListener("touchstart",function(e){
   			var el = e.target;
   			if(el.nodeName === 'DD' || el.nodeName === 'LI' || el.nodeName === 'Ul'){
   				$tips.style.display = 'block';
   				if(el.nodeName === 'DD'){
   					var ID = el.getAttribute("data-id");
   				}else if(el.nodeName === 'LI'){
   					var ID = el.parentElement.parentElement.getAttribute("data-id");
   				}else if(el.nodeName === 'Ul'){
   					var ID = el.parentElement.getAttribute("data-id");
   				}
            
   			}
   			console.log(ID)
   			var data = contacts.filter(function(v){
   			return v.id == ID;
   				
   			})
   			$name.innerHTML = data[0].name;
   			$num.innerHTML = data[0].phone;
   			$name.parentElement.setAttribute("data-id",ID)
   			console.log($name.parentElement)
   })


//关闭弹出窗口
    var $deleteel = document.querySelector(".delete");
   
    $tips.addEventListener("touchstart",function(e){
    	this.style.display = 'none';
    	
    })

     var $card1 = document.querySelector(".card1");
    


    //编辑状态
    var arr = [];
     forEach = arr.forEach;
     var timerId;
    var statetoggle = function(e){

    	var bianji = document.querySelectorAll(".bianji");
    	console.log(bianji )

    	if($card1.classList.contains("eidting")){
    		console.log(1)
    		forEach.call(bianji,function(v){
    			console.log(v)
    		console.log(v.firstElementChild)
    		var temp = v.firstElementChild.value;
    		v.innerHTML = temp;
    		$card1.classList.remove("eidting");
    	})
    		
    	}else{
    		console.log(2)
    		$card1.classList.add("eidting");
    		forEach.call(bianji,function(v){
    		console.log(v)
    		var temp = v.innerHTML;
    		v.innerHTML = '<input type="text" value="'+temp+'"/>';
    		$card1.onkeyup = function(e){
     			
                var el = e.target;
                
                var ul = el.parentElement.parentElement;
                var ID = ul.getAttribute("data-id");
               
                var key = el.parentElement.getAttribute("data-role");
                
                var value = el.value;

                clearTimeout(timerId);
                timerId=setTimeout(function(){
                	 render(ID,key,value)
                	},5000)
               

     		}
    	})
    	
    		
    	}
    	// contacts.push(data);
	    // localStorage.setItem("contacts",JSON.stringify(students));
    	
    }



   $card1.addEventListener("touchstart",function(e){
   	var el = e.target;
   	e.stopPropagation();
   	if(el.classList.contains("name") || el.classList.contains("num") || el.nodeName === 'INPUT'){
   	      statetoggle.call(el,e);
   	}else if(el.classList.contains("delete")){
   		 $tips.style.display = 'none';
   	}else if(el.classList.contains("submit")){
   		  // 可编辑  保存数据
   		  
   	}
    })


   var $add = document.querySelector(".add");
   $add.addEventListener("touchstart",function(e){
   		  $tips.style.display = 'block';
   		  statetoggle.call(this,e);
   })


   var render = function(id,key,value){
     	id=Number(id);
     	for(var i=0;i<contacts.length;i++){
     		if(contacts[i].xuehao==id){
     			contacts[i][key]=value;
     		}     		
     	}
     	localStorage.setItem("contacts",JSON.stringify(contacts));
     	// tips.innerHTML="保存成功！"
     }


