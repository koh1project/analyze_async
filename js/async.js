console.log(`async.js START`);
console.log(`result is ${result} from async.js`);

function asyncProcess(received_param){
  return new Promise(function( /*成功時の実行関数*/resolve, /*失敗時の実行関数*/ reject){
	               console.log(`asyncProcess START`);
	
                       if(received_param === 1){
                         resolve('Success');
                       }else{
                         reject('Fail');
                       }
                       console.log(`asyncProcess END`);
                     }
                    );
}

function callAsync(param){
  console.log(`callAsync START`);

  asyncProcess(param).then(
    //成功時：resolveが実行された時の関数
    function(received_resolve_response){
	         console.log(received_resolve_response);
	         console.log(`RESPONSE START`);
	         result =`Response is ${received_resolve_response}`; 
	         console.log(`RESPONSE END , ${result} ` );
    }, 
    function (received_reject_error){ 
	      console.log(received_reject_error);
	      console.log(`ERROR START`);
	      result =`Error is ${received_reject_error}`; 
	      console.log(`ERROR END , ${result}`);
    }
  );
  console.log(`callAsync END`);
}

