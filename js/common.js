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

$('input[name="birthday"]').daterangepicker({
  singleDatePicker: true,
  showDropdowns: true,
  minYear: 2000,
  maxYear: parseInt(moment().format('YYYY'),10)
});

var body = $('body');

function goToNextInput(e) {
  var key = e.which,
    t = $(e.target),
    sib = t.next('input');

  if (key != 9 && (key < 48 || key > 57)) {
    e.preventDefault();
    return false;
  }

  if (key === 9) {
    return true;
  }

  if (!sib || !sib.length) {
    sib = body.find('input').eq(0);
  }
  sib.select().focus();
}

function onKeyDown(e) {
  var key = e.which;

  if (key === 9 || (key >= 48 && key <= 57)) {
    return true;
  }

  e.preventDefault();
  return false;
}

function onFocus(e) {
  $(e.target).select();
}

body.on('keyup', 'input', goToNextInput);
body.on('keydown', 'input', onKeyDown);
body.on('click', 'input', onFocus);

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