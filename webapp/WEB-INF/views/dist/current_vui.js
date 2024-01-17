$(document).ready(function () {
  console.log("ready to anyang");
  if (annyang) {
    var historyBack = function () {
      window.history.back();
    };
    var historyForward = function () {
      window.history.forward();
    };
    var homePage = function () {
      $(location).attr("href", "https://www.normalstory.com/");
    };
    var pagenavi_home = function () {
      $("#friendSendIcon").trigger("click");
    };
    var pagenavi_chat = function () {
      $("#pagenavi_chat").trigger("click");
    };
    var pagenavi_draw = function () {
      $("#pagenavi_draw").trigger("click");
    };
    var pagenavi_editor = function () {
      $("#pagenavi_editor").trigger("click");
    };
    var rec_off = function () {
      annyang.abort();
      console.log("end anyang");
      $(".icon").css({ color: "black" });
      type = "y";
    };

    var commands = {
      뒤: historyBack,
      앞: historyForward,
      홈페이지: homePage,
      홈: pagenavi_home,
      메신저: pagenavi_chat,
      그림판: pagenavi_draw,
      에디터: pagenavi_editor,
      "음성 끄기": rec_off,
    };
    annyang.debug();
    annyang.addCommands(commands);

    annyang.setLanguage("ko");

    var type = "y";
    $(".icon-microphone").click(function () {
      if (type == "y") {
        $(this).css({ color: "red" });
        annyang.start({ autoRestart: true, continuous: false });
        console.log("start anyang");
        type = "n";
      } else if (type == "n") {
        $(this).css({ color: "black" });
        annyang.abort();
        console.log("end anyang");
        type = "y";
      }
    });

    annyang.addCallback("resultMatch", function () {
      $(".facingContent").on("focus", function () {
        annyang.addCallback("result", function (parseResults) {
          $(".facingContent").text(parseResults[0]);
          $(".facingSendBtn").focus();
        });
      });
      $(".facingSendBtn").on("focus", function () {
        annyang.removeCallback("result");
      });
    });
  }
  if (!annyang) {
    console.log("Speech Recognition is not supported");
  }
});
