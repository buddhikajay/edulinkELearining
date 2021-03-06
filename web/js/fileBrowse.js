var DEFAULT_URL = ''; // added from Viewer.js
var VIDEO_FILES_PATH="https://whiteboard.siplo.lk/user_files/batch-12-Module-CS2036/";
$(function() {
    //$('#container').jstree({
    //    'core' : {
    //        'data' : {
    //            "url" : location.protocol+"//"+location.host+"/tree/",
    //            "data" : function (node) {
    //                return { "id" : node.id };
    //            }
    //        }
    //    }
    //});
    $('#container').jstree({
        'core' : {
            'data' : {
                "url" : "https://whiteboard.siplo.lk/tree/",
                "data" : function (node) {
                    return { "id" : node.id };
                }
            }
        }
    });
});

/* Select PDF file from file directory*/

$(function(){
    $('#container').on("changed.jstree", function (e, data) {
        //console.log(data.instance.get_selected(true)[0].text);
        //console.log(data.instance.get_node(data.selected[0]).li_attr.isLeaf);

        //if the selected node is a leaf node -> enable the open button
        var openFileButton = $('#openFileButton')
        if(data.instance.get_node(data.selected[0]).li_attr.isLeaf){
            openFileButton.prop('disabled', false);

            //following function is defined as a separate function to 'open pdf files' below

            //openFileButton.click(function(){
            //    console.log('openning ' + data.instance.get_selected(true)[0].text);
            //    //PDFViewerApplication is an object defined in viewer.js
            //    //PDFViewerApplication.open('/web/compressed.tracemonkey-pldi-09.pdf');
            //    $('#fileBrowserModal').modal('hide');
            //    PDFViewerApplication.open('/files/'+data.instance.get_selected(true)[0].text);
            //    socket.emit('pdf:load', room, uid, data.instance.get_selected(true)[0].text);
            //});

            DEFAULT_URL = data.instance.get_selected(true)[0].text;

        }
        else {
            $('#openFileButton').prop('disabled', true);
        }
    });
});

//show file browser moadal
$(function(){
    $('#browsFiles').on('click', function(){
        console.log('Can Browse Files');
        $('#fileBrowserModal').modal('show');
    });
});

//open pdf file
$(function(){
    $('#openFileButton').click(function(){
        console.log('openning ' + DEFAULT_URL);
        /*//PDFViewerApplication is an object defined in viewer.js
         //PDFViewerApplication.open('/web/compressed.tracemonkey-pldi-09.pdf');
         $('#fileBrowserModal').modal('hide');
         PDFViewerApplication.open('/files/'+DEFAULT_URL);
         var documentViewer = $('#documentViewer');
         if (documentViewer.css('visibility') == 'hidden') {
         documentViewer.css('visibility', 'visible');
         //dynamically assigning the background color and image as in viewer.css #230. Otherwise
         //this background color for body tag will make conflicts with whiteboard
         $('body').css('background-color', '#404040');
         $('#myCanvas').css('top','32px'); // pull down the canvas so that we can still use pdfjs control buttons while editing on top of pdf
         }
         IsPDFOn = true;
         console.log(DEFAULT_URL);
         socket.emit('pdf:load', room, uid, DEFAULT_URL);*/

        $('body').css('background-color', '#404040');
        showVideo(VIDEO_FILES_PATH+DEFAULT_URL);
        $('#fileBrowserModal').modal('hide');

    });
});