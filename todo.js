//keypress,toggleClass,append,val,event.which,disabled(prop)
$(document).ready(function(){
    let inp=$("#newtask")
    let btnadd=$("#btnadd")
    let btnreset=$("#btnreset")
    let ulist=$("#ulist")
    let btnsort=$('#btnsort')
    let btncleanup=$('#btncleanup')
 //after clicking the button add
 inp.keypress((event)=>{
    if(event.which==13 && inp.val()!='')
    {
        crele();
        togglebtn((inp.val())!='');
    }
 })
 btnadd.click(()=>{ 
      crele();
      togglebtn((inp.val())!='')
 })

 function crele(){
    let listitem=$('<li>',{
        "class":"list-group-item",
        text:inp.val() 
     }) //for creating an element and context in it
     inp.val('')
     ulist.append(listitem);
     listitem.click(()=>{
      //console.log('clicked');
    listitem.toggleClass('done');
    togglebtn2(true)
       })
 }

 btnsort.click(()=>{
     let flag=$('.done')
    ulist.append(flag);
    togglebtn2(flag.length>=1);
 })

 btncleanup.click(()=>{
    let flag=$('.done');
    flag.remove();
    togglebtn2(false);  
 })
  
 btnreset.click(()=>{
      inp.val('') ;
      togglebtn((inp.val())!='')
   })

function togglebtn(isval){
      //console.log(e);
       if(!isval){
          btnadd.prop('disabled',true);
          btnreset.prop('disabled',true);   
         }
       else
       {
           btnadd.prop('disabled',false);
           btnreset.prop('disabled',false);
       }
   
   }
  
function togglebtn2(isval)
{
   if(!isval){
      btnsort.prop('disabled',true);
      btncleanup.prop('disabled',true);   
     }
   else
   {
       btnsort.prop('disabled',false);
       btncleanup.prop('disabled',false);
   }


}
   
   inp.on('input',()=>{
        togglebtn((inp.val())!='');
        let flag=$('.done');
        togglebtn2(flag.length>=1);
   })

});
    