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

$(`[data-index=1]`).focus();

$('.verify-input-field').keypress(function(e){
  let inputBoxIndex = $(e.target).attr('data-index');
  let inputBox = $(e.target);
  
  if(inputBox.val().length > 0) {
    e.preventDefault();
  }
})

$('.verify-input-field').keyup(function(e){
  
  checkInput();
  
  let inputBoxIndex = $(e.target).attr('data-index');
  let pressedKeyCode = e.keyCode | e.which;
  let nextInputBox = $(`[data-index=${Number(inputBoxIndex) + 1}]`);
  let prevInputBox = $(`[data-index=${Number(inputBoxIndex) - 1}]`);
  
  if(pressedKeyCode !== 8 && pressedKeyCode !== 37 && pressedKeyCode !== 9 && pressedKeyCode !== 16  && nextInputBox.val().length === 0 || pressedKeyCode === 39) {
    nextInputBox.focus();
  } else if(pressedKeyCode === 8 || pressedKeyCode === 37) {
    prevInputBox.focus();
  }
    
})

function checkInput() {
  let finalInput = '';
  for(i=1; i<=5; i++) {
    let thisInput = $(`[data-index=${i}]`).val();
    finalInput = finalInput + thisInput.toString();
  }
  
  if (finalInput === '23f34') {
    $('.verify-input-field').addClass('verified');
  } else {
    $('.verify-input-field').removeClass('verified');
  }
}



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

  $('input[name="birthday"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 2000,
    maxYear: parseInt(moment().format('YYYY'),10)
  });

});

