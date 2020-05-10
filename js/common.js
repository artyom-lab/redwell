$(document).ready(function() {

	$("#sandwich-1").on("click", function(){
		$(this).toggleClass("active");
		$("body").toggleClass("menubar-1");
		window.dispatchEvent(new Event('resize'));
	});

	$(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

  Waves.attach('.wave', ['waves-light']);
	Waves.attach('.wave2', ['waves-dark']);
	Waves.init();

});


var s3Uploader = new qq.FineUploader({
  // debug: true,
  element: document.getElementById('fine-uploader-s3'),
  template: 'qq-template-s3',
  // request: {
  //     endpoint: "https://upload.fineuploader.com",
  //     accessKey: "AKIAJB6BSMFWTAXC5M2Q"
  // },
  // signature: {
  //     endpoint: "https://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php"
  // },
  // uploadSuccess: {
  //     endpoint: "https://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php?success",
  //     params: {
  //         isBrowserPreviewCapable: qq.supportedFeatures.imagePreviews
  //     }
  // },
  // iframeSupport: {
  //     localBlankPagePath: "/server/success.html"
  // },
  // cors: {
  //     expected: true
  // },
  // chunking: {
  //     enabled: true
  // },
  // resume: {
  //     enabled: true
  // },
  // deleteFile: {
  //     enabled: true,
  //     method: "POST",
  //     endpoint: "https://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php"
  // },
  // validation: {
  //     itemLimit: 5,
  //     sizeLimit: 15000000
  // },
  // thumbnails: {
  //     placeholders: {
  //         notAvailablePath: "libs/fine-uploader/placeholders/not_available-generic.png",
  //         waitingPath: "libs/fine-uploader/placeholders/waiting-generic.png"
  //     }
  // },
  // callbacks: {
  //     onComplete: function(id, name, response) {
  //         var previewLink = qq(this.getItemByFileId(id)).getByClass('preview-link')[0];

  //         if (response.success) {
  //             previewLink.setAttribute("href", response.tempLink)
  //         }
  //     }
  // }
});