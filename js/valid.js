function validateSignup() {
      
         if( document.signUp.ID.value == "" ) {
            alert( "Please provide your ID!" );
            document.signUp.ID.focus() ;
            return false;
         }
         if( document.signUp.fname.value == "" ) {
            alert( "Please provide your first name!" );
            document.signUp.fname.focus() ;
            return false;
         }
          if( document.signUp.lname.value == "" ) {
            alert( "Please provide your last name!" );
            document.signUp.lname.focus() ;
            return false;
         }
         if( document.signUp.password.value == "" ||  document.signUp.password.value.length <= 5 ) {   
            alert( "Please provide a password longer than 5" );
            document.signUp.password.focus() ;
            return false;
         }
      
         
      }
    
function validLogin(){

         if( document.adminLogin.ID.value == "" ) {
            alert( "Please provide your ID!" );
            document.loginEmp.ID.focus() ;
            return false;
         }
         if( document.adminLogin.password.value == "" ||  document.adminLogin.password.value.length <= 5 ) {   
            alert( "Please provide a password longer than 5" );
            document.adminLogin.password.focus() ;
            return false;
         }  
          
}
function validAdd(){

      if( document.add.name.value == "" ) {
            alert( "Please enter product name" );
            document.add.name.focus() ;
            return false;
         }
         
         if( document.add.pic.value == "" ) {
            alert( "Please upload an image" );
            document.add.pic.focus() ;
            return false;
         }

if( isNaN(document.add.price.value) ) {
            alert( "Price must be a number" );
            document.add.price.focus() ;
            return false;
         }


          
       
}
