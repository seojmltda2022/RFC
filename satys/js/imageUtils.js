imageUtils = {
	getElementPdfByTagName : function(tagName, fileName) {
		var element = document.getElementsByTagName(tagName);
		html2canvas(element[0], {
			useCORS : true,
			onrendered : function(canvas) {
				var dataUrl = canvas.toDataURL("image/png");
				dataUrl = dataUrl.substr(dataUrl.indexOf(',') + 1).toString();
				imageUtils.convert(dataUrl, fileName);
			}
		});
	},	
	 convert:function(data, name){
	    var doc = new jsPDF("p", "pt", "legal");
	    var imgData = 'data:image/png;base64,'+ data;
	    doc.addImage(imgData, 'PNG', -6, 0, 625, 1010);
	    doc.save(name + '.pdf');
	}
};
