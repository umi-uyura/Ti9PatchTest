//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});

  var button = Ti.UI.createButton({
    width: 200,
    height: 100,
    top: 100,
    title: Ti.version,
    backgroundImage: "/images/custom-slider-left.png",
    backgroundSelectedImage: "/images/custom-slider-right.png"
  });
  self.add(button);
	
	return self;
}

module.exports = FirstView;
