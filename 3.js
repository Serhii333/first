function closest(node, testFunc) {
	var parent = node.parentNode

	// if(testFunc.arguments){
		if(testFunc(parent)){
				testFunc(parent)
		}else{
				closest(parent, testFunc)
		}
//}
	// }else{
	// 		if(testFunc()){
	// 			return node
	// 		}else{
	// 			return null;
	// 		}
	//
	// }

}



function closest(node, testFunc) {
	var parent = node.parentNode

	// if(testFunc.arguments){
	 if(testFunc(node)){
				//testFunc(node)
				return node;
		}
		else{
			if(!testFunc(node)){
				closest(parent, testFunc)

			}else{
					return null;
			}


		}
//}
	// }else{
	// 		if(testFunc()){
	// 			return node
	// 		}else{
	// 			return null;
	// 		}
	//
	// }

}
not done
