/*  打印工具类；无必要操作请勿修改； */
var PrintTool = {};
//唤起打印
PrintTool.toPrint = function(_viewer) {
	const body = document.querySelector('body');
	var bodyheight = body.style.height;
	const appContainer = document.querySelector('#app');
	if(!_viewer.$refs.copyprint) {
		let copyPrint = _viewer.$refs.print.cloneNode();
		copyPrint.setAttribute("ref","copyprint");
		copyPrint.setAttribute("id","copyprint");

		copyPrint.innerHTML = _viewer.$refs.print.innerHTML;
		copyPrint.style.overflowY = "hidden";
		_viewer.$refs["copyprint"] = copyPrint;

		///隐藏不需要打印的内容
		var noprintArray = copyPrint.querySelectorAll('.no_print');
		for(var i = 0;i < noprintArray.length;i++) {
			noprintArray[i].style.display = 'none';
		}
		body.append(copyPrint);
	}
	//打印前，隐藏原body内容
	_viewer.$refs.copyprint.style.display = 'block';
	appContainer.style.display = 'none';
	body.style.height = 'auto';
	window.print();
	//打印后，恢复页面
	body.style.height = bodyheight;
	appContainer.style.display = 'block';
	_viewer.$refs.copyprint.style.display = 'none';
};
//刷新打印页面
PrintTool.refreshPrint = function(_viewer) {
	_viewer.$refs.copyprint = null;
}

module.exports = { PrintTool };
